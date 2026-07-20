/**
 * Trích xuất dữ liệu timeline triều đại từ index.html gốc → src/_data/eras.json
 * Chạy 1 lần: node scripts/extract-index-data.js
 *
 * Mỗi era: phần trình bày đặc thù (marker, header, class card) giữ dạng HTML
 * fragment; danh sách chip (bài học / sự kiện / nhân vật) thành data thuần —
 * thêm nội dung mới chỉ cần thêm 1 dòng vào JSON.
 */
const fs = require("fs");
const path = require("path");
const { load } = require("cheerio");

const ROOT = path.join(__dirname, "..");
let raw = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1);

const $ = load(raw);
const eras = [];

$("#trieu-dai .space-y-5 > div.relative.flex").each((_, eraEl) => {
  const $era = $(eraEl);
  const era = {
    id: $era.attr("id") || "",
    markerHtml: $.html($era.children().first()).trim(),
  };

  const $body = $era.children().eq(1); // .flex-1
  const $years = $body.children().first();
  era.yearsClass = $years.attr("class") || "";
  era.years = $years.text().trim();

  const $card = $body.children().eq(1);
  era.cardClass = $card.attr("class") || "";
  era.cardStyle = $card.attr("style") || "";

  // Header = block đầu tiên trong card (era tag + tagline + tên triều đại)
  const $header = $card.children().first();
  era.headerHtml = $.html($header).trim();

  // Divider ngay sau header (Lý/Trần có)
  const $second = $card.children().eq(1);
  era.dividerAfterHeader =
    $second.is("div") &&
    ($second.attr("class") || "").includes("border-t") &&
    $second.children().length === 0 &&
    !$second.text().trim();

  // Các group chip: div có label uppercase + .flex-wrap chứa <a>
  era.groups = [];
  era.characters = [];
  $card.children("div").each((_, groupEl) => {
    const $g = $(groupEl);
    const $label = $g.children("div").first();
    const $wrap = $g.children("div.flex.flex-wrap");
    if (!$label.length || !$wrap.length || !$wrap.find("a").length) return;

    const labelClass = $label.attr("class") || "";
    if (!labelClass.includes("uppercase")) return;

    const items = [];
    $wrap.children("a").each((_, a) => {
      items.push({
        href: $(a).attr("href"),
        text: $(a).text().trim(),
        class: $(a).attr("class") || "",
      });
    });

    const label = $label.text().trim();
    if (label.includes("Nhân vật")) {
      era.characters = items.map(({ href, text }) => ({ href, text }));
      era.characterLabel = label;
      era.characterLabelClass = labelClass;
      era.characterChipClass = items[0].class;
    } else {
      // chipClass đồng nhất trong group → lưu 1 lần
      era.groups.push({
        label,
        labelClass,
        chipClass: items[0].class,
        items: items.map(({ href, text }) => ({ href, text })),
      });
    }
  });

  // Tool buttons: border class của block cuối
  const $tool = $card.children("div").last();
  era.toolClass = $tool.attr("class") || "";

  eras.push(era);
});

const outPath = path.join(ROOT, "src", "_data", "eras.json");
fs.writeFileSync(outPath, JSON.stringify(eras, null, 2) + "\n", "utf8");
console.log(
  `Đã ghi ${eras.length} era → src/_data/eras.json`,
  eras.map((e) => `${e.id}(${e.characters.length} nv, ${e.groups.reduce((n, g) => n + g.items.length, 0)} bh)`).join(", ")
);
