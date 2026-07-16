import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const errors = [];
const passes = [];

function read(relativePath) {
  const absolutePath = path.join(ROOT, relativePath);
  if (!fs.existsSync(absolutePath)) {
    errors.push(`Missing required file: ${relativePath}`);
    return "";
  }
  return fs.readFileSync(absolutePath, "utf8");
}

function pass(message) {
  passes.push(message);
}

function fail(message) {
  errors.push(message);
}

function requireText(file, text, label = text) {
  const content = read(file);
  if (!content.includes(text)) {
    fail(`${file}: missing ${label}`);
    return;
  }
  pass(`${file}: ${label}`);
}

function requireTextInsensitive(file, text, label = text) {
  const content = read(file).toLowerCase();
  if (!content.includes(text.toLowerCase())) {
    fail(`${file}: missing ${label}`);
    return;
  }
  pass(`${file}: ${label}`);
}

function requireAny(file, options, label) {
  const content = read(file).toLowerCase();
  if (!options.some((option) => content.includes(option.toLowerCase()))) {
    fail(`${file}: missing ${label}; expected one of ${options.map((item) => JSON.stringify(item)).join(", ")}`);
    return;
  }
  pass(`${file}: ${label}`);
}

function forbidText(files, patterns) {
  for (const file of files) {
    const content = read(file).toLowerCase();
    for (const pattern of patterns) {
      if (content.includes(pattern.toLowerCase())) {
        fail(`${file}: stale phrase remains: ${JSON.stringify(pattern)}`);
      }
    }
  }
}

function walk(directory) {
  const absoluteDirectory = path.join(ROOT, directory);
  if (!fs.existsSync(absoluteDirectory)) return [];

  return fs.readdirSync(absoluteDirectory, { withFileTypes: true }).flatMap((entry) => {
    const relativePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(relativePath);
    return [relativePath.replaceAll(path.sep, "/")];
  });
}

function stripAnchorAndQuery(target) {
  return target.split("#", 1)[0].split("?", 1)[0];
}

function checkCanonicalAlias() {
  const tsconfig = JSON.parse(read("tsconfig.json"));
  const mapping = tsconfig?.compilerOptions?.paths?.["@/content/projects"];
  const expected = "./content/projects-hiring.ts";

  if (!Array.isArray(mapping) || mapping.length !== 1 || mapping[0] !== expected) {
    fail(`tsconfig.json: @/content/projects must resolve exactly to ${expected}`);
    return;
  }
  pass("tsconfig canonical project alias");
}

function checkOverrideChain() {
  const chain = [
    ["content/projects-hiring.ts", "./projects-decisionops"],
    ["content/projects-decisionops.ts", "./projects-current"],
    ["content/projects-current.ts", "./projects-public"],
    ["content/projects-public.ts", "./projects-v2"],
    ["content/projects-v2.ts", "./projects"],
  ];

  for (const [file, source] of chain) {
    const content = read(file);
    const escapedSource = source.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const importPattern = new RegExp(`from\\s+["']${escapedSource}["']`);
    if (!importPattern.test(content)) {
      fail(`${file}: canonical override chain must import ${source}`);
      continue;
    }
    pass(`${file}: imports ${source}`);
  }
}

function checkRepresentativeContracts() {
  const redveilFile = "content/projects-v2.ts";
  const shelterFile = "content/projects-current.ts";
  const decisionOpsFile = "content/projects-decisionops.ts";

  requireText(
    redveilFile,
    "https://dffxonnb-cyber.github.io/Seoul-Storefront-Redveil/v2/",
    "official Redveil V2 URL",
  );
  requireText(redveilFile, "Playwright Chromium E2E", "Redveil browser verification evidence");

  for (const eventType of [
    "NEW",
    "DEADLINE_CHANGED",
    "STATUS_CHANGED",
    "BECAME_URGENT",
    "NOT_OBSERVED",
    "DISAPPEARED",
    "RETURNED",
  ]) {
    requireText(shelterFile, eventType, `Shelter event ${eventType}`);
  }
  requireText(shelterFile, "Daily 06:20 KST", "Shelter daily collection schedule");
  requireText(shelterFile, "#changes", "Shelter changes route");
  requireText(shelterFile, "#briefing", "Shelter briefing route");
  requireText(shelterFile, "D-Day~D-3", "Shelter deadline window");

  for (const scenario of [
    "strong_positive",
    "guardrail_risk",
    "refund_risk",
    "session_activity_risk",
    "weak_evidence",
    "neutral",
    "quality_failure",
  ]) {
    requireText(decisionOpsFile, scenario, `DecisionOps scenario ${scenario}`);
  }
  requireText(decisionOpsFile, "3 Guardrails", "DecisionOps guardrail count");
  requireText(decisionOpsFile, "7 Scenarios", "DecisionOps scenario count");
  requireTextInsensitive(decisionOpsFile, "D7 revisit", "DecisionOps D7 guardrail");
  requireTextInsensitive(decisionOpsFile, "refund rate", "DecisionOps refund guardrail");
  requireTextInsensitive(decisionOpsFile, "session activity", "DecisionOps session guardrail");

  requireText("content/project-public-status.ts", '"shelter-signal"', "Shelter public status");
  requireText("content/project-public-status.ts", '"decisionops-lab"', "DecisionOps public status");
  requireText("content/project-public-status.ts", "3 guardrails · 7 scenarios", "DecisionOps current scope");

  requireAny("README.md", ["3 guardrails", "3개 guardrail"], "README DecisionOps guardrail count");
  requireAny("README.md", ["7 scenarios", "7개 scenario"], "README DecisionOps scenario count");
  requireAny("VERIFY.md", ["three guardrails", "3 guardrails", "3개 guardrail"], "VERIFY DecisionOps guardrail count");
  requireAny("VERIFY.md", ["seven scenarios", "7 scenarios", "7개 scenario"], "VERIFY DecisionOps scenario count");
  requireAny("VERIFY.md", ["seven change-event types", "seven change events", "7 change-event types"], "VERIFY Shelter event count");
}

function checkBaseProjectSlugs() {
  const content = read("content/projects.ts");
  const slugs = [...content.matchAll(/\bslug:\s*["']([^"']+)["']/g)].map((match) => match[1]);
  const unique = new Set(slugs);

  if (slugs.length === 0) {
    fail("content/projects.ts: no project slugs found");
    return;
  }
  if (slugs.length !== unique.size) {
    const duplicates = [...unique].filter((slug) => slugs.filter((item) => item === slug).length > 1);
    fail(`content/projects.ts: duplicate project slugs: ${duplicates.join(", ")}`);
  } else {
    pass(`content/projects.ts: ${slugs.length} unique project slugs`);
  }

  for (const slug of [
    "seoul-storefront-redveil",
    "shelter-signal",
    "decisionops-lab",
    "lh-traffic-safety-analysis",
  ]) {
    if (!unique.has(slug)) {
      fail(`content/projects.ts: missing representative project slug ${slug}`);
    } else {
      pass(`representative slug ${slug}`);
    }
  }

  const routeFiles = [...walk("app"), ...walk("components")].filter((file) => /\.(?:ts|tsx)$/.test(file));
  for (const file of routeFiles) {
    const text = read(file);
    for (const match of text.matchAll(/["']\/projects\/([a-z0-9-]+)["']/g)) {
      if (!unique.has(match[1])) {
        fail(`${file}: project route references unknown slug ${match[1]}`);
      }
    }
  }
}

function getReplacedLegacyAssets() {
  const publicOverride = read("content/projects-public.ts");
  return new Set(
    [...publicOverride.matchAll(/const\s+LEGACY_[A-Z0-9_]+\s*=\s*["'](\/[^"']+)["']/g)].map(
      (match) => match[1],
    ),
  );
}

function checkPublicAssets() {
  const contentFiles = walk("content").filter((file) => /\.tsx?$/.test(file));
  const replacedLegacyAssets = getReplacedLegacyAssets();
  const missing = new Set();
  let checked = 0;

  for (const file of contentFiles) {
    const text = read(file);
    for (const match of text.matchAll(/\bsrc:\s*["'`](\/(?!\/)[^"'`]+)["'`]/g)) {
      const originalPath = match[1];
      if (replacedLegacyAssets.has(originalPath)) continue;

      const publicPath = stripAnchorAndQuery(originalPath.slice(1));
      const relativeAsset = `public/${publicPath}`;
      checked += 1;
      if (!fs.existsSync(path.join(ROOT, relativeAsset))) {
        missing.add(`${file} -> /${publicPath}`);
      }
    }
  }

  if (missing.size > 0) {
    for (const item of missing) fail(`Missing public asset: ${item}`);
    return;
  }
  pass(`${checked} effective public content asset references exist`);
}

function checkMarkdownLinks() {
  const markdownFiles = ["README.md", "VERIFY.md", ...walk("docs").filter((file) => file.endsWith(".md"))];
  let checked = 0;

  for (const file of markdownFiles) {
    const text = read(file);
    for (const match of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
      const rawTarget = match[1].trim().replace(/^<|>$/g, "");
      if (
        rawTarget === "" ||
        rawTarget.startsWith("#") ||
        rawTarget.startsWith("/") ||
        /^[a-z][a-z\d+.-]*:/i.test(rawTarget)
      ) {
        continue;
      }

      const target = stripAnchorAndQuery(rawTarget.split(/\s+["']/u, 1)[0]);
      if (!target) continue;
      checked += 1;
      const resolved = path.resolve(ROOT, path.dirname(file), target);
      if (!fs.existsSync(resolved)) {
        fail(`${file}: broken relative markdown link ${rawTarget}`);
      }
    }
  }

  pass(`${checked} relative markdown links checked`);
}

function checkExternalUrlSyntax() {
  const sourceFiles = [
    "README.md",
    "VERIFY.md",
    "docs/reviewer-path.md",
    "content/projects-v2.ts",
    "content/projects-current.ts",
    "content/projects-decisionops.ts",
    "content/profile.ts",
  ];
  const urls = new Set();

  for (const file of sourceFiles) {
    const text = read(file);
    for (const match of text.matchAll(/https:\/\/[^\s"'`)<>]+/g)) {
      urls.add(match[0].replace(/[.,;:]$/, ""));
    }
  }

  for (const value of urls) {
    try {
      const parsed = new URL(value);
      if (parsed.protocol !== "https:") fail(`Non-HTTPS public URL: ${value}`);
    } catch {
      fail(`Invalid public URL syntax: ${value}`);
    }
  }
  pass(`${urls.size} public URL strings parsed`);
}

function checkStalePhrases() {
  const hiringFacingFiles = [
    "README.md",
    "VERIFY.md",
    "docs/reviewer-path.md",
    "app/projects/page.tsx",
    "content/projects-current.ts",
    "content/projects-decisionops.ts",
    "content/project-public-status.ts",
    "content/proof-points.ts",
  ];

  forbidText(hiringFacingFiles, [
    "5 scenario matrix",
    "5 scenarios",
    "v2 n8n/mailpit dry-run",
    "v2 branch separately",
    "d7-only",
    "browser interaction checks optional",
  ]);
}

const groups = {
  structure: [checkCanonicalAlias, checkOverrideChain],
  representative: [checkRepresentativeContracts],
  routes: [checkBaseProjectSlugs],
  assets: [checkPublicAssets],
  docs: [checkMarkdownLinks, checkExternalUrlSyntax],
  stale: [checkStalePhrases],
};

const requestedGroups = process.argv.slice(2);
const selectedGroups = requestedGroups.length > 0 ? requestedGroups : Object.keys(groups);

for (const group of selectedGroups) {
  const checks = groups[group];
  if (!checks) {
    fail(`Unknown content-check group: ${group}`);
    continue;
  }
  for (const check of checks) check();
}

for (const message of passes) console.log(`PASS ${message}`);

if (errors.length > 0) {
  console.error(`\nContent consistency check failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`\nContent consistency check passed for: ${selectedGroups.join(", ")}.`);
