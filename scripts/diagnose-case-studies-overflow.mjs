import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const outputDir = "artifacts/case-studies-overflow-diagnostic";
await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 320, height: 800 } });

try {
  await page.goto("https://signal-archive.vercel.app/case-studies", {
    waitUntil: "networkidle",
    timeout: 60_000,
  });

  const diagnostic = await page.evaluate(() => {
    const viewportWidth = window.innerWidth;
    const visible = (element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
    };
    const describe = (element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return {
        tag: element.tagName.toLowerCase(),
        id: element.id,
        className: typeof element.className === "string" ? element.className : "",
        text: (element.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 160),
        rect: {
          left: Number(rect.left.toFixed(2)),
          right: Number(rect.right.toFixed(2)),
          width: Number(rect.width.toFixed(2)),
          top: Number(rect.top.toFixed(2)),
        },
        scrollWidth: element.scrollWidth,
        clientWidth: element.clientWidth,
        overflowX: style.overflowX,
        position: style.position,
        contain: style.contain,
      };
    };

    const outsideViewport = [];
    const intrinsicOverflow = [];

    for (const element of document.querySelectorAll("body *")) {
      if (!(element instanceof HTMLElement) || !visible(element)) continue;
      const rect = element.getBoundingClientRect();
      if (rect.left < -0.5 || rect.right > viewportWidth + 0.5) outsideViewport.push(describe(element));
      if (element.scrollWidth > element.clientWidth + 0.5) intrinsicOverflow.push(describe(element));
    }

    return {
      viewportWidth,
      documentElement: describe(document.documentElement),
      body: describe(document.body),
      outsideViewport,
      intrinsicOverflow,
    };
  });

  await page.screenshot({
    path: `${outputDir}/case-studies-320.png`,
    fullPage: true,
  });
  await writeFile(`${outputDir}/diagnostic.json`, `${JSON.stringify(diagnostic, null, 2)}\n`);
  console.log(JSON.stringify(diagnostic, null, 2));
} finally {
  await browser.close();
}
