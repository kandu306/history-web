/**
 * Quét mọi href/src nội bộ trong _site/ và kiểm tra file đích tồn tại.
 * Chạy: node scripts/check-links.js
 */
const fs = require("fs");
const path = require("path");
const { load } = require("cheerio");

const SITE = path.join(__dirname, "..", "_site");
const broken = [];
let checked = 0;

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".html")) checkFile(p);
  }
}

function checkFile(filePath) {
  const $ = load(fs.readFileSync(filePath, "utf8"));
  const refs = [];
  $("a[href]").each((_, el) => refs.push($(el).attr("href")));
  $("link[href]").each((_, el) => refs.push($(el).attr("href")));
  $("script[src]").each((_, el) => refs.push($(el).attr("src")));
  $("img[src]").each((_, el) => refs.push($(el).attr("src")));

  for (const ref of refs) {
    if (!ref || /^(https?:|mailto:|javascript:|#|data:)/.test(ref)) continue;
    const clean = ref.split("#")[0].split("?")[0];
    if (!clean) continue;
    const target = clean.startsWith("/")
      ? path.join(SITE, clean)
      : path.resolve(path.dirname(filePath), clean);
    checked++;
    if (!fs.existsSync(target)) {
      broken.push(`${path.relative(SITE, filePath)} → ${ref}`);
    }
  }
}

walk(SITE);
console.log(`Đã kiểm tra ${checked} link nội bộ, ${broken.length} link gãy`);
for (const b of broken) console.log("  [GÃY] " + b);
process.exit(broken.length ? 1 : 0);
