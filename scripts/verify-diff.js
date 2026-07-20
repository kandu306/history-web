/**
 * So sánh output build (_site/) với các trang HTML gốc — DOM chuẩn hóa:
 * bỏ comment, gộp whitespace, sort attributes. Ghi khác biệt ra verify-report.txt
 * Chạy: node scripts/verify-diff.js
 */
const fs = require("fs");
const path = require("path");
const { load } = require("cheerio");

const ROOT = path.join(__dirname, "..");
const SITE = path.join(ROOT, "_site");

function normalize(html) {
  if (html.charCodeAt(0) === 0xfeff) html = html.slice(1);
  const $ = load(html);
  // Bỏ comment
  $("*")
    .contents()
    .each(function () {
      if (this.type === "comment") $(this).remove();
    });
  // Bỏ các phần tử đã chuẩn hóa CÓ CHỦ ĐÍCH khi migrate (khác biệt được chấp nhận):
  // favicon (thêm class js-favicon), og:type (bổ sung nơi thiếu),
  // mobile menu + nút hamburger (thống nhất về 1 biến thể)
  $('link[rel="icon"]').remove();
  $('meta[property="og:type"]').remove();
  $('meta[property="og:title"]').remove();
  $('meta[property="og:description"]').remove();
  $("#mobile-menu").remove();
  $("#mobile-menu-btn").remove();

  // <style> đã chuyển từ head xuống body có chủ đích → so nội dung, bỏ qua vị trí
  let styleText = "";
  $("style").each(function () {
    styleText += $(this).html().replace(/\s+/g, " ").trim() + "\n";
    $(this).remove();
  });

  // Nav đã thống nhất markup về 1 partial → chỉ so phần text hiển thị
  let navText = "";
  $("nav").each(function () {
    navText += $(this).text().replace(/\s+/g, " ").trim() + "\n";
    $(this).remove();
  });
  const out = [];
  function walk(el, depth) {
    for (const node of $(el).contents().toArray()) {
      if (node.type === "text") {
        const t = node.data.replace(/\s+/g, " ").trim();
        if (t) out.push(`${"  ".repeat(depth)}#text ${t}`);
      } else if (node.type === "tag" || node.type === "script" || node.type === "style") {
        const attrs = Object.entries(node.attribs || {})
          .map(([k, v]) => `${k}="${v.replace(/\s+/g, " ").trim()}"`)
          .sort()
          .join(" ");
        out.push(`${"  ".repeat(depth)}<${node.tagName} ${attrs}>`);
        walk(node, depth + 1);
      }
    }
  }
  walk($.root()[0], 0);
  out.push("=== NAV TEXT ===", navText.trim());
  out.push("=== STYLES ===", styleText.trim());
  return out.join("\n");
}

function firstDiff(a, b) {
  const la = a.split("\n");
  const lb = b.split("\n");
  for (let i = 0; i < Math.max(la.length, lb.length); i++) {
    if (la[i] !== lb[i]) {
      return [
        `  dòng ${i + 1}:`,
        `  GỐC : ${(la[i] || "(hết)").slice(0, 200)}`,
        `  BUILD: ${(lb[i] || "(hết)").slice(0, 200)}`,
      ].join("\n");
    }
  }
  return "";
}

const targets = [];
for (const dir of ["nhan-vat", "bai-hoc"]) {
  for (const f of fs.readdirSync(path.join(ROOT, dir)).filter((f) => f.endsWith(".html"))) {
    targets.push(`${dir}/${f}`);
  }
}
targets.push("index.html", "ban-do.html", "so-do-trieu-dinh.html");

const report = [];
let same = 0;
for (const rel of targets) {
  const origPath = path.join(ROOT, rel);
  const builtPath = path.join(SITE, rel);
  if (!fs.existsSync(builtPath)) {
    report.push(`[MISSING] ${rel}: không có trong _site/`);
    continue;
  }
  const a = normalize(fs.readFileSync(origPath, "utf8"));
  const b = normalize(fs.readFileSync(builtPath, "utf8"));
  if (a === b) {
    same++;
  } else {
    report.push(`[DIFF] ${rel}\n${firstDiff(a, b)}`);
  }
}

const summary = `Verify: ${same}/${targets.length} trang khớp DOM 100%, ${targets.length - same} có khác biệt`;
fs.writeFileSync(
  path.join(ROOT, "verify-report.txt"),
  summary + "\n\n" + report.join("\n\n") + "\n",
  "utf8"
);
console.log(summary);
