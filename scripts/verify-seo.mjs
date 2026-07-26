import { readFile } from "node:fs/promises";

const siteUrl = "https://elliotpadfield.github.io/mirage-landing";
const [html, robots, sitemap, manifestSource] = await Promise.all([
  readFile(new URL("../out/index.html", import.meta.url), "utf8"),
  readFile(new URL("../out/robots.txt", import.meta.url), "utf8"),
  readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8"),
  readFile(new URL("../out/manifest.webmanifest", import.meta.url), "utf8"),
]);

const checks = [];

function check(name, condition) {
  checks.push({ name, passed: Boolean(condition) });
}

const jsonLdMatch = html.match(
  /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
);
const schema = jsonLdMatch ? JSON.parse(jsonLdMatch[1]) : null;
const schemaTypes =
  schema?.["@graph"]?.map((entry) => entry["@type"]).filter(Boolean) ?? [];

check(
  "search-targeted title",
  html.includes(
    "<title>Free iPhone GPS Location Changer for Mac | Mirage App</title>",
  ),
);
check(
  "self-referencing canonical",
  html.includes(`<link rel="canonical" href="${siteUrl}/"`),
);
check(
  "index and follow directives",
  html.includes('<meta name="robots" content="index, follow"'),
);
check(
  "Open Graph URL",
  html.includes(`<meta property="og:url" content="${siteUrl}/"`),
);
check(
  "Open Graph image",
  html.includes(
    `<meta property="og:image" content="${siteUrl}/product/mirage-malibu.jpg"`,
  ),
);
check(
  "large Twitter card",
  html.includes('<meta name="twitter:card" content="summary_large_image"'),
);
check("one H1", (html.match(/<h1/g) ?? []).length === 1);
check("five visible FAQs", (html.match(/<details/g) ?? []).length === 5);
check("valid JSON-LD", schema !== null);
check(
  "SoftwareApplication schema",
  schemaTypes.includes("SoftwareApplication"),
);
check("FAQPage schema", schemaTypes.includes("FAQPage"));
check(
  "crawlable robots file",
  robots.includes("User-Agent: *") &&
    robots.includes("Allow: /") &&
    robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`),
);
check("canonical sitemap entry", sitemap.includes(`<loc>${siteUrl}/</loc>`));
check(
  "valid web manifest",
  JSON.parse(manifestSource).start_url === "/mirage-landing/",
);
check("server-rendered page", !html.includes("ClientPageRoot"));

const failures = checks.filter((result) => !result.passed);

for (const result of checks) {
  console.log(`${result.passed ? "PASS" : "FAIL"} ${result.name}`);
}

if (failures.length > 0) {
  process.exitCode = 1;
} else {
  console.log(`\n${checks.length} SEO checks passed.`);
}
