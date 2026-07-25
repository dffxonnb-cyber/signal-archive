import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE_URL = process.env.BASE_URL ?? "https://signal-archive.vercel.app";
const OUTPUT_DIR = process.env.AUDIT_OUTPUT_DIR ?? "artifacts/production-layout-audit";
const REQUIRED_MARKER = process.env.REQUIRED_MARKER ?? "Redveil V2";
const MAX_ROUTES = Number(process.env.MAX_ROUTES ?? 80);

const viewports = [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "reported-1162", width: 1162, height: 760 },
  { name: "tablet-1024", width: 1024, height: 768 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "mobile-320", width: 320, height: 800 },
];

const screenshotViewportNames = new Set(["reported-1162", "mobile-390"]);

function routeSlug(route) {
  if (route === "/") return "home";
  return route
    .replace(/^\//, "")
    .replace(/\/$/, "")
    .replace(/[^a-zA-Z0-9가-힣_-]+/g, "-")
    .replace(/-+/g, "-") || "page";
}

async function waitForProduction(page) {
  const attempts = 32;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const response = await page.goto(`${BASE_URL}/`, {
      waitUntil: "domcontentloaded",
      timeout: 60_000,
    });
    const body = await page.locator("body").innerText().catch(() => "");
    if (response?.ok() && body.includes(REQUIRED_MARKER)) {
      console.log(`Production marker found on attempt ${attempt}: ${REQUIRED_MARKER}`);
      return;
    }
    console.log(`Waiting for production marker (${attempt}/${attempts})...`);
    await page.waitForTimeout(15_000);
  }
  throw new Error(`Production did not expose required marker: ${REQUIRED_MARKER}`);
}

async function discoverRoutes(page) {
  const origin = new URL(BASE_URL).origin;
  const queue = ["/"];
  const visited = new Set();

  while (queue.length > 0 && visited.size < MAX_ROUTES) {
    const route = queue.shift();
    if (!route || visited.has(route)) continue;

    await page.goto(`${BASE_URL}${route}`, {
      waitUntil: "domcontentloaded",
      timeout: 60_000,
    });
    await page.waitForTimeout(250);
    visited.add(route);

    const links = await page.locator("a[href]").evaluateAll((anchors) =>
      anchors.map((anchor) => anchor.getAttribute("href")).filter(Boolean),
    );

    for (const href of links) {
      let url;
      try {
        url = new URL(href, BASE_URL);
      } catch {
        continue;
      }
      if (url.origin !== origin) continue;
      if (url.pathname.startsWith("/_next/")) continue;
      const normalized = url.pathname.length > 1 ? url.pathname.replace(/\/$/, "") : "/";
      if (!visited.has(normalized) && !queue.includes(normalized)) queue.push(normalized);
    }
  }

  return [...visited].sort();
}

async function inspectLayout(page) {
  return page.evaluate(() => {
    const tolerance = 1.5;
    const issues = [];
    const intentionalScrollSelector =
      ".site-nav, .filter-quick-chips, [data-horizontal-scroll='true']";
    const cardSelector =
      "article, [class*='card'], [class*='panel'], [class*='module'], [class*='item'], [class*='step']";
    const textSelector =
      "h1, h2, h3, h4, h5, h6, p, span, strong, em, dt, dd, li, a, button, label, blockquote";

    const isVisible = (element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return (
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        Number(style.opacity) !== 0 &&
        rect.width > 0 &&
        rect.height > 0
      );
    };

    const descriptor = (element) => ({
      tag: element.tagName.toLowerCase(),
      className: typeof element.className === "string" ? element.className : "",
      text: (element.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 180),
    });

    const documentOverflow = Math.max(
      document.documentElement.scrollWidth,
      document.body.scrollWidth,
    ) - window.innerWidth;

    if (documentOverflow > tolerance) {
      issues.push({
        kind: "document-horizontal-overflow",
        overflowPx: Number(documentOverflow.toFixed(2)),
        viewportWidth: window.innerWidth,
      });
    }

    for (const element of document.querySelectorAll(textSelector)) {
      if (!(element instanceof HTMLElement) || !isVisible(element)) continue;
      if (!(element.textContent ?? "").trim()) continue;
      if (element.closest(intentionalScrollSelector)) continue;
      if (element.getAttribute("aria-hidden") === "true") continue;

      const style = getComputedStyle(element);
      if (style.position === "absolute" && element.getAttribute("aria-hidden") === "true") continue;

      const container = element.parentElement?.closest(cardSelector);
      if (!(container instanceof HTMLElement) || container === element || !isVisible(container)) continue;
      if (container.closest(intentionalScrollSelector)) continue;

      const containerStyle = getComputedStyle(container);
      if (["auto", "scroll"].includes(containerStyle.overflowX)) continue;

      const containerRect = container.getBoundingClientRect();
      const range = document.createRange();
      range.selectNodeContents(element);
      const lineRects = [...range.getClientRects()].filter((rect) => rect.width > 0 && rect.height > 0);
      const offendingLine = lineRects.find(
        (rect) =>
          rect.left < containerRect.left - tolerance ||
          rect.right > containerRect.right + tolerance,
      );

      if (offendingLine) {
        issues.push({
          kind: "text-crosses-card-boundary",
          ...descriptor(element),
          container: descriptor(container),
          amountLeft: Number(Math.max(0, containerRect.left - offendingLine.left).toFixed(2)),
          amountRight: Number(Math.max(0, offendingLine.right - containerRect.right).toFixed(2)),
        });
      }

      const horizontalOverflow = element.scrollWidth - element.clientWidth;
      if (
        horizontalOverflow > tolerance &&
        style.textOverflow !== "ellipsis" &&
        !["auto", "scroll"].includes(style.overflowX)
      ) {
        issues.push({
          kind: "text-element-horizontal-overflow",
          ...descriptor(element),
          overflowPx: Number(horizontalOverflow.toFixed(2)),
        });
      }

      const verticalOverflow = element.scrollHeight - element.clientHeight;
      if (
        verticalOverflow > tolerance &&
        ["hidden", "clip"].includes(style.overflowY) &&
        style.textOverflow !== "ellipsis"
      ) {
        issues.push({
          kind: "clipped-text",
          ...descriptor(element),
          overflowPx: Number(verticalOverflow.toFixed(2)),
        });
      }
    }

    for (const parent of document.querySelectorAll("main *")) {
      if (!(parent instanceof HTMLElement) || !isVisible(parent)) continue;
      const candidates = [...parent.children].filter(
        (child) =>
          child instanceof HTMLElement &&
          isVisible(child) &&
          child.matches("article, [class*='card']"),
      );
      if (candidates.length < 2 || candidates.length > 12) continue;

      for (let leftIndex = 0; leftIndex < candidates.length; leftIndex += 1) {
        for (let rightIndex = leftIndex + 1; rightIndex < candidates.length; rightIndex += 1) {
          const left = candidates[leftIndex];
          const right = candidates[rightIndex];
          const leftRect = left.getBoundingClientRect();
          const rightRect = right.getBoundingClientRect();
          const overlapWidth = Math.min(leftRect.right, rightRect.right) - Math.max(leftRect.left, rightRect.left);
          const overlapHeight = Math.min(leftRect.bottom, rightRect.bottom) - Math.max(leftRect.top, rightRect.top);

          if (overlapWidth > tolerance && overlapHeight > tolerance) {
            issues.push({
              kind: "sibling-card-overlap",
              left: descriptor(left),
              right: descriptor(right),
              overlapWidth: Number(overlapWidth.toFixed(2)),
              overlapHeight: Number(overlapHeight.toFixed(2)),
            });
          }
        }
      }
    }

    const deduplicated = [];
    const keys = new Set();
    for (const issue of issues) {
      const key = JSON.stringify(issue);
      if (!keys.has(key)) {
        keys.add(key);
        deduplicated.push(issue);
      }
    }

    return {
      title: document.title,
      bodyWidth: document.body.scrollWidth,
      documentWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
      issues: deduplicated,
    };
  });
}

await mkdir(path.join(OUTPUT_DIR, "screenshots"), { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

try {
  await waitForProduction(page);
  await page.setViewportSize({ width: 1162, height: 760 });
  const routes = await discoverRoutes(page);
  console.log(`Discovered ${routes.length} routes.`);

  const report = {
    baseUrl: BASE_URL,
    requiredMarker: REQUIRED_MARKER,
    generatedAt: new Date().toISOString(),
    routes,
    viewports,
    results: [],
  };

  for (const route of routes) {
    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      const response = await page.goto(`${BASE_URL}${route}`, {
        waitUntil: "networkidle",
        timeout: 60_000,
      });
      await page.waitForTimeout(200);

      const inspection = await inspectLayout(page);
      const result = {
        route,
        viewport: viewport.name,
        width: viewport.width,
        status: response?.status() ?? null,
        ...inspection,
      };
      report.results.push(result);

      const shouldScreenshot = screenshotViewportNames.has(viewport.name) || inspection.issues.length > 0;
      if (shouldScreenshot) {
        const filename = `${routeSlug(route)}--${viewport.name}.jpg`;
        await page.screenshot({
          path: path.join(OUTPUT_DIR, "screenshots", filename),
          fullPage: true,
          type: "jpeg",
          quality: 58,
        });
      }

      console.log(`${route} @ ${viewport.name}: ${inspection.issues.length} issue(s)`);
    }
  }

  const issueResults = report.results.filter((result) => result.issues.length > 0);
  report.summary = {
    routeCount: routes.length,
    viewportCount: viewports.length,
    pageViewportChecks: report.results.length,
    failingChecks: issueResults.length,
    totalIssues: issueResults.reduce((sum, result) => sum + result.issues.length, 0),
  };

  await writeFile(
    path.join(OUTPUT_DIR, "report.json"),
    `${JSON.stringify(report, null, 2)}\n`,
    "utf8",
  );

  console.log(JSON.stringify(report.summary, null, 2));
  if (report.summary.totalIssues > 0) process.exitCode = 1;
} finally {
  await browser.close();
}
