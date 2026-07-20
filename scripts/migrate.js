/**
 * Migration một lần: chuyển các trang HTML tĩnh (nhan-vat/, bai-hoc/) sang
 * nguồn Eleventy trong src/ — trích head + nav vào layout, giữ nguyên phần thân.
 *
 * Nguyên tắc: cắt content bằng string slicing (giữ nguyên byte gốc), chỉ dùng
 * cheerio để ĐỌC metadata. File nào lệch pattern → ghi vào migrate-report.txt,
 * không đoán mò.
 *
 * Chạy: node scripts/migrate.js
 */
const fs = require("fs");
const path = require("path");
const { load } = require("cheerio");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "src");
const DIRS = ["nhan-vat", "bai-hoc"];

const DEFAULT_BODY_CLASS = "font-sans antialiased text-[#1c1917]";
const NAV_LABELS = {
  "nhan-vat": "3 Gốc / 3 Độc",
  "bai-hoc": "Bài học lịch sử",
};

const report = [];
const stats = { ok: 0, customNav: 0, flagged: 0 };

// Các phần tử <head> được coi là "chrome chuẩn" (đã nằm trong layout)
function isKnownHeadElement($, el) {
  const $el = $(el);
  const tag = el.tagName && el.tagName.toLowerCase();
  if (tag === "meta") {
    const name = ($el.attr("name") || "").toLowerCase();
    const prop = ($el.attr("property") || "").toLowerCase();
    const charset = $el.attr("charset");
    return (
      !!charset ||
      name === "viewport" ||
      name === "description" ||
      prop.startsWith("og:")
    );
  }
  if (tag === "title") return true;
  if (tag === "link") {
    const relAttr = ($el.attr("rel") || "").toLowerCase();
    return ["icon", "preconnect", "stylesheet"].includes(relAttr);
  }
  if (tag === "script") {
    const srcAttr = $el.attr("src") || "";
    return (
      srcAttr.includes("cdn.tailwindcss.com") ||
      srcAttr.includes("shared/scripts.js")
    );
  }
  return false; // <style> xử lý riêng, còn lại là lạ → flag
}

function yamlValue(s) {
  return JSON.stringify(s); // JSON string là YAML hợp lệ, an toàn với mọi ký tự
}

function normalizeWs(s) {
  return s.replace(/\s+/g, " ").trim();
}

function migrateFile(dir, fileName) {
  const filePath = path.join(ROOT, dir, fileName);
  let raw = fs.readFileSync(filePath, "utf8");
  if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1); // strip BOM

  const relPath = `${dir}/${fileName}`;
  const $ = load(raw);

  // ── Metadata từ <head> ──
  const title = ($("head title").first().text() || "").trim();
  const description = $('head meta[name="description"]').attr("content") || "";
  const ogType = $('head meta[property="og:type"]').attr("content") || "";
  const ogTitle = $('head meta[property="og:title"]').attr("content") || "";
  const ogDescription =
    $('head meta[property="og:description"]').attr("content") || "";

  if (!title || !description) {
    report.push(`[FLAG] ${relPath}: thiếu <title> hoặc meta description`);
    stats.flagged++;
    return;
  }

  // ── Kiểm tra head không có phần tử lạ (ngoài <style>) ──
  const strangeHead = [];
  $("head")
    .children()
    .each((_, el) => {
      const tag = el.tagName && el.tagName.toLowerCase();
      if (tag === "style") return;
      if (!isKnownHeadElement($, el)) {
        strangeHead.push($.html(el).slice(0, 120));
      }
    });
  if (strangeHead.length > 0) {
    report.push(
      `[FLAG] ${relPath}: head có phần tử lạ, xử lý tay:\n    ${strangeHead.join("\n    ")}`
    );
    stats.flagged++;
    return;
  }

  // ── <style> trong head → chuyển xuống đầu content ──
  let styleBlocks = "";
  $("head style").each((_, el) => {
    styleBlocks += `<style>${$(el).html()}</style>\n\n`;
  });

  // ── body class ──
  const bodyClass = ($("body").attr("class") || "").trim();

  // ── Cắt content bằng string slicing ──
  const bodyOpenMatch = raw.match(/<body[^>]*>/);
  const bodyCloseIdx = raw.lastIndexOf("</body>");
  if (!bodyOpenMatch || bodyCloseIdx === -1) {
    report.push(`[FLAG] ${relPath}: không tìm thấy thẻ <body>...</body>`);
    stats.flagged++;
    return;
  }
  const bodyStart = bodyOpenMatch.index + bodyOpenMatch[0].length;
  let content = raw.slice(bodyStart, bodyCloseIdx);

  // Bỏ progress-bar (layout đã có)
  content = content.replace(
    /<div id="progress-bar"><\/div>\s*/,
    ""
  );
  // Bỏ comment "Reading Progress" mồ côi nếu có
  content = content.replace(/<!--\s*Reading Progress\s*-->\s*/, "");

  // ── Nav: chuẩn hay custom? ──
  let breadcrumb = "";
  let customNav = false;
  const navCount = (content.match(/<nav[\s>]/g) || []).length;
  const navMatch = content.match(/<!--\s*Sticky Nav\s*-->\s*/);
  const navStart = content.search(/<nav[\s>]/);
  const navEndIdx = content.indexOf("</nav>");

  const $nav = $("body nav").first();
  const isStandardNav =
    $nav.length > 0 &&
    normalizeWs($nav.attr("class") || "").includes("sticky top-0 z-50") &&
    $nav.find("div.max-w-4xl").length === 1;

  // Breadcrumb chỉ đọc được ở nav chuẩn (◈ › Lịch sử Việt Nam › [tên])
  if (isStandardNav) {
    breadcrumb = $nav
      .find("div.max-w-4xl > div")
      .first()
      .children("span")
      .last()
      .text()
      .trim();
  }

  if (navCount === 1 && isStandardNav && breadcrumb && navStart !== -1 && navEndIdx !== -1) {
    const label = normalizeWs(
      $nav.find("div.max-w-4xl > span").first().text() || ""
    );
    // Breadcrumb 3 cấp: có link trung gian (vd "Nhà Hậu Lê", "Chương 3")
    let breadcrumbParent = null;
    const $crumbLinks = $nav
      .find("div.max-w-4xl > div")
      .first()
      .children("a")
      .slice(1); // bỏ anchor ◈ đầu tiên
    if ($crumbLinks.length === 1) {
      breadcrumbParent = {
        href: $crumbLinks.attr("href"),
        text: $crumbLinks.text().trim(),
      };
    } else if ($crumbLinks.length > 1) {
      report.push(
        `[FLAG] ${relPath}: breadcrumb có ${$crumbLinks.length} link trung gian — chưa hỗ trợ`
      );
      stats.flagged++;
      return;
    }
    if (label && label !== NAV_LABELS[dir]) {
      report.push(
        `[NOTE] ${relPath}: nhãn nav "${label}" khác mặc định "${NAV_LABELS[dir]}" — giữ qua front matter`
      );
    }
    // Cắt bỏ nav (kèm comment Sticky Nav nếu đứng ngay trước)
    const cutFrom =
      navMatch && navMatch.index + navMatch[0].length >= navStart - 2
        ? navMatch.index
        : navStart;
    content =
      content.slice(0, cutFrom) + content.slice(navEndIdx + "</nav>".length);
    stats.ok++;

    var frontExtra = "";
    if (label && label !== NAV_LABELS[dir]) {
      frontExtra += `navLabel: ${yamlValue(label)}\n`;
    }
    if (breadcrumbParent) {
      frontExtra += `breadcrumbParent: ${JSON.stringify(breadcrumbParent)}\n`;
    }
  } else {
    // Nav phi chuẩn (hoặc không có nav) → giữ nguyên trong content
    customNav = true;
    stats.customNav++;
    report.push(
      `[CUSTOM-NAV] ${relPath}: nav phi chuẩn (navCount=${navCount}) — giữ nguyên trong content`
    );
    var frontExtra = "";
  }

  content = styleBlocks + content.replace(/^\s*\n/, "");

  // ── Front matter ──
  let fm = "---\n";
  fm += `title: ${yamlValue(title)}\n`;
  fm += `description: ${yamlValue(description)}\n`;
  if (ogType && ogType !== "article") fm += `ogType: ${yamlValue(ogType)}\n`;
  if (ogTitle && ogTitle !== title) fm += `ogTitle: ${yamlValue(ogTitle)}\n`;
  if (ogDescription && ogDescription !== description)
    fm += `ogDescription: ${yamlValue(ogDescription)}\n`;
  if (!customNav) fm += `breadcrumb: ${yamlValue(breadcrumb)}\n`;
  if (customNav) fm += `customNav: true\n`;
  if (bodyClass && bodyClass !== DEFAULT_BODY_CLASS)
    fm += `bodyClass: ${yamlValue(bodyClass)}\n`;
  fm += frontExtra;
  fm += "---\n";

  const outPath = path.join(SRC, dir, fileName);
  fs.writeFileSync(outPath, fm + content.trimEnd() + "\n", "utf8");
}

for (const dir of DIRS) {
  fs.mkdirSync(path.join(SRC, dir), { recursive: true });
  const files = fs
    .readdirSync(path.join(ROOT, dir))
    .filter((f) => f.endsWith(".html"))
    .sort();
  for (const f of files) {
    try {
      migrateFile(dir, f);
    } catch (e) {
      report.push(`[ERROR] ${dir}/${f}: ${e.message}`);
      stats.flagged++;
    }
  }
}

const summary = `Migration xong: ${stats.ok} chuẩn, ${stats.customNav} custom-nav, ${stats.flagged} flagged (bỏ qua, xử lý tay)`;
fs.writeFileSync(
  path.join(ROOT, "migrate-report.txt"),
  summary + "\n\n" + report.join("\n") + "\n",
  "utf8"
);
console.log(summary);
console.log("Chi tiết: migrate-report.txt");
