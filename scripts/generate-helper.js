const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "src");

function makeCharacterPage(data) {
  const { title, description, breadcrumb, eraLine, name, subtitle, infoLine1, infoLine2, verdict, goc, doc, lessons, links } = data;

  const gocHtml = goc.map(g => `
      <div class="flex gap-4 items-start py-3 border-b border-[#e7e5e4] last:border-0">
        <div class="w-24 flex-shrink-0">
          <div class="text-xs font-semibold text-[#1c1917]">${g.label}</div>
          <div class="text-[#b45309] text-sm mt-0.5">${g.stars}</div>
        </div>
        <p class="text-sm text-[#57534e] leading-relaxed">${g.desc}</p>
      </div>`).join("\n");

  const docHtml = doc.map(d => `
      <div class="flex gap-4 items-start py-3 border-b border-[#e7e5e4] last:border-0">
        <div class="w-24 flex-shrink-0">
          <div class="text-xs font-semibold text-[#1c1917]">${d.label}</div>
          <div class="text-[#b45309] text-sm mt-0.5">${d.stars}</div>
        </div>
        <p class="text-sm text-[#57534e] leading-relaxed">${d.desc}</p>
      </div>`).join("\n");

  const lessonHtml = lessons.map((l, idx) => `
      <div class="p-5 rounded-xl bg-[#faf9f7] border border-[#e7e5e4]">
        <h3 class="font-semibold text-[#1c1917] mb-2">${idx + 1}. ${l.title}</h3>
        <p class="text-sm text-[#57534e] leading-relaxed">${l.desc}</p>
      </div>`).join("\n");

  const linkHtml = links.map(lk => `
      <a href="${lk.url}" class="px-3 py-1.5 bg-[#faf9f7] border border-[#e7e5e4] rounded-lg text-sm font-medium text-[#1c1917] hover:border-[#9b1c1c] transition-colors">${lk.text}</a>`).join("\n");

  return `---
title: ${JSON.stringify(title)}
description: ${JSON.stringify(description)}
breadcrumb: ${JSON.stringify(breadcrumb)}
---
<style>
  .rule-thin { border: none; border-top: 1px solid #e7e5e4; }
</style>

<main>
  <!-- HERO -->
  <header class="max-w-4xl mx-auto px-6 pt-16 pb-12">
    <div class="relative overflow-hidden">
      <svg class="hero-ornament" viewBox="0 0 200 200" fill="currentColor" style="color:#9b1c1c;"><path d="M100 0 L173 50 L173 150 L100 200 L27 150 L27 50 Z"/></svg>

      <div class="flex flex-wrap items-center gap-3 mb-7">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-[#fef2f2] text-[#9b1c1c] rounded-full border border-[#9b1c1c]/20">Phân tích nhân vật</span>
        <span class="text-sm text-[#78716c] font-medium">${eraLine}</span>
      </div>

      <h1 class="font-serif font-bold text-[#1c1917] leading-tight mb-4" style="font-size: clamp(2.75rem, 6vw, 4rem);">${name}</h1>

      <p class="font-serif text-xl text-[#78716c] italic leading-snug mb-8 max-w-xl"><em class="text-[#9b1c1c] not-italic font-semibold">${subtitle}</em></p>

      <div class="flex flex-wrap items-center gap-5 text-sm text-[#57534e] border-t border-[#e7e5e4] py-4 mb-6">
        <div class="flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-[#a8a29e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
          <span>${infoLine1}</span>
        </div>
        <div class="flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-[#a8a29e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          <span>${infoLine2}</span>
        </div>
      </div>

      <div class="rounded-2xl bg-[#1c1917] text-[#faf9f7] p-6 mb-2">
        <div class="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#a8a29e] mb-3">Phán quyết nhanh</div>
        <p class="font-serif text-lg leading-relaxed">${verdict}</p>
      </div>
    </div>
  </header>

  <hr class="rule-thin max-w-4xl mx-auto">

  <!-- 3 GỐC -->
  <section class="max-w-4xl mx-auto px-6 py-12 fade-in">
    <div class="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#9b1c1c] mb-3">01 — Phân tích 3 Gốc</div>
    <h2 class="font-serif text-3xl font-bold text-[#1c1917] mb-6">Trí tuệ · Đạo đức · Nghị lực</h2>
    <div class="rounded-xl border border-[#e7e5e4] bg-[#faf9f7] p-5">
${gocHtml}
    </div>
  </section>

  <hr class="rule-thin max-w-4xl mx-auto">

  <!-- 3 ĐỘC -->
  <section class="max-w-4xl mx-auto px-6 py-12 fade-in">
    <div class="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#9b1c1c] mb-3">02 — Phân tích 3 Độc</div>
    <h2 class="font-serif text-3xl font-bold text-[#1c1917] mb-6">Tham lam · Sân giận · Si mê</h2>
    <div class="rounded-xl border border-[#e7e5e4] bg-[#faf9f7] p-5">
${docHtml}
    </div>
  </section>

  <hr class="rule-thin max-w-4xl mx-auto">

  <!-- BÀI HỌC RÚT RA -->
  <section class="max-w-4xl mx-auto px-6 py-12 fade-in">
    <div class="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#9b1c1c] mb-3">03 — Di sản & Bài học</div>
    <h2 class="font-serif text-3xl font-bold text-[#1c1917] mb-6">Bài học lịch sử cốt lõi</h2>
    <div class="space-y-4 text-[#57534e] leading-relaxed">
${lessonHtml}
    </div>
  </section>

  <hr class="rule-thin max-w-4xl mx-auto">

  <!-- LIÊN KẾT -->
  <section class="max-w-4xl mx-auto px-6 py-12 fade-in">
    <div class="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#9b1c1c] mb-3">04 — Xem thêm</div>
    <div class="flex flex-wrap gap-3">
${linkHtml}
    </div>
  </section>
</main>
`;
}

module.exports = { makeCharacterPage };
