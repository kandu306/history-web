/**
 * Sinh src/index.njk từ index.html gốc (chạy 1 lần):
 * - Head → front matter (dùng layout page.njk)
 * - Nav riêng của trang chủ giữ nguyên (customNav)
 * - Vùng timeline triều đại → vòng lặp Nunjucks đọc từ _data/eras.json
 * - Số liệu thống kê hero → đếm từ collections
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
let raw = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1);

// ── Body content ──
const bodyOpen = raw.match(/<body[^>]*>/);
const bodyStart = bodyOpen.index + bodyOpen[0].length;
const bodyEnd = raw.lastIndexOf("</body>");
let content = raw.slice(bodyStart, bodyEnd);
content = content.replace(/\s*<div id="progress-bar"><\/div>/, "");

// ── Tìm vùng inner của <div class="space-y-5"> bằng đếm độ sâu div ──
const anchor = '<div class="space-y-5">';
const openIdx = content.indexOf(anchor);
if (openIdx === -1) throw new Error("Không tìm thấy div space-y-5");
const innerStart = openIdx + anchor.length;

const tagRe = /<div[\s>]|<\/div>/g;
tagRe.lastIndex = innerStart;
let depth = 1;
let innerEnd = -1;
let m;
while ((m = tagRe.exec(content))) {
  depth += m[0] === "</div>" ? -1 : 1;
  if (depth === 0) {
    innerEnd = m.index;
    break;
  }
}
if (innerEnd === -1) throw new Error("Không tìm thấy thẻ đóng space-y-5");

const eraLoop = `
{%- for era in eras %}

          <div class="relative flex gap-5 md:gap-7" id="{{ era.id }}">
            {{ era.markerHtml | safe | indent(12) }}
            <div class="flex-1 min-w-0 pb-1">
              <div class="{{ era.yearsClass }}">{{ era.years }}</div>
              <div class="{{ era.cardClass }}"{% if era.cardStyle %} style="{{ era.cardStyle }}"{% endif %}>
                {{ era.headerHtml | safe | indent(16) }}
                {%- if era.dividerAfterHeader %}
                <div class="border-t border-[#f0eeec] my-4"></div>
                {%- endif %}
                {%- for group in era.groups %}
                <div class="mb-5">
                  <div class="{{ group.labelClass }}">{{ group.label }}</div>
                  <div class="flex flex-wrap gap-2">
                    {%- for item in group.items %}
                    <a href="{{ item.href }}" class="{{ group.chipClass }}">{{ item.text }}</a>
                    {%- endfor %}
                  </div>
                </div>
                {%- endfor %}
                {%- if era.characters and era.characters.length %}
                <div class="mb-5">
                  <div class="{{ era.characterLabelClass }}">{{ era.characterLabel }}</div>
                  <div class="flex flex-wrap gap-2">
                    {%- for c in era.characters %}
                    <a href="{{ c.href }}" class="{{ era.characterChipClass }}">{{ c.text }}</a>
                    {%- endfor %}
                  </div>
                </div>
                {%- endif %}
                <div class="{{ era.toolClass }}">
                  <a href="ban-do.html"           class="era-tool-btn">🗺 Bản đồ khái niệm →</a>
                  <a href="so-do-trieu-dinh.html" class="era-tool-btn">👑 Sơ đồ Vua – Quan →</a>
                </div>
              </div>
            </div>
          </div>
{%- endfor %}
`;

content = content.slice(0, innerStart) + eraLoop + content.slice(innerEnd);

// ── Số liệu hero: đếm động từ collections ──
content = content.replace(
  /(<div class="font-serif text-3xl font-bold text-\[#faf9f7\]">)\d+(<\/div>\s*<div class="text-sm text-\[#78716c\] mt-1">Nhân vật<\/div>)/,
  "$1{{ collections.nhanVat | length }}$2"
);
content = content.replace(
  /(<div class="font-serif text-3xl font-bold text-\[#faf9f7\]">)\d+(<\/div>\s*<div class="text-sm text-\[#78716c\] mt-1">Bài học<\/div>)/,
  "$1{{ collections.baiHoc | length }}$2"
);

// ── Front matter từ head ──
const title = raw.match(/<title>([\s\S]*?)<\/title>/)[1].trim();
const desc = raw.match(/<meta name="description" content="([^"]*)"/)[1];

const fm = `---
layout: page.njk
title: ${JSON.stringify(title)}
description: ${JSON.stringify(desc)}
ogType: "website"
customNav: true
bodyClass: "font-sans antialiased"
rel: ""
---
`;

fs.writeFileSync(path.join(ROOT, "src", "index.njk"), fm + content.trimStart(), "utf8");
console.log("Đã sinh src/index.njk");
