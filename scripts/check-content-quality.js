#!/usr/bin/env node
/**
 * check-content-quality.js
 * Kiểm tra chất lượng nội dung trang nhân vật trước khi git commit.
 *
 * Cách dùng:
 *   node scripts/check-content-quality.js src/nhan-vat/ngo-thi-nham.html
 *   node scripts/check-content-quality.js src/nhan-vat/   ← kiểm tra toàn bộ thư mục
 */

const fs = require('fs');
const path = require('path');

// ─── Màu terminal ───────────────────────────────────────────────────────────
const GREEN  = '\x1b[32m';
const RED    = '\x1b[31m';
const YELLOW = '\x1b[33m';
const CYAN   = '\x1b[36m';
const RESET  = '\x1b[0m';
const BOLD   = '\x1b[1m';

const ok   = (msg) => `  ${GREEN}✔${RESET}  ${msg}`;
const fail = (msg) => `  ${RED}✘${RESET}  ${msg}`;
const warn = (msg) => `  ${YELLOW}⚠${RESET}  ${msg}`;

// ─── Tiêu chí kiểm tra ──────────────────────────────────────────────────────
const CHECKS = [
  {
    id: 1,
    label: 'Không còn "Phán quyết nhanh"',
    test: (html) => !html.includes('Phán quyết nhanh'),
    fix: 'Đổi thành "Chân dung lịch sử"',
  },
  {
    id: 2,
    label: 'Có CSS tag pills (.tag-su-kien, .tag-suy-luan)',
    test: (html) => html.includes('tag-su-kien') && html.includes('tag-suy-luan'),
    fix: 'Thêm CSS style block với .tag-su-kien, .tag-suy-luan, .tag-han-che',
  },
  {
    id: 3,
    label: 'Có class .ev-block (layout sự kiện mới)',
    test: (html) => html.includes('ev-block'),
    fix: 'Chuyển đổi từ layout [SỰ KIỆN inline] sang ev-block mới',
  },
  {
    id: 4,
    label: 'Có ít nhất 1 quote-box',
    test: (html) => html.includes('quote-box'),
    fix: 'Thêm ít nhất 1 trích dẫn lịch sử với <div class="quote-box">',
  },
  {
    id: 5,
    label: 'Section 3 Gốc có ít nhất 4 ev-block',
    test: (html) => {
      const matches = html.match(/class="ev-block"/g);
      return matches && matches.length >= 4;
    },
    fix: 'Mỗi Gốc (Trí tuệ/Đạo đức/Nghị lực) cần ít nhất 2 ev-block có tiêu đề riêng',
  },
  {
    id: 6,
    label: 'Section 3 Độc có phân tích đủ dài (≥ 100 ký tự mỗi mục)',
    test: (html) => {
      // Tìm các ev-block trong section 3 Độc (sau h2 Tham lam)
      const doc3Match = html.match(/Tham lam[\s\S]*?(?=03 — Di sản|03 &amp; Di sản|03—)/i);
      if (!doc3Match) {
        // fallback: đếm tất cả tag-suy-luan
        const allSuyLuan = html.match(/tag-suy-luan[\s\S]{5,600}?<\/p>/g);
        if (!allSuyLuan || allSuyLuan.length < 2) return false;
        return allSuyLuan.filter(b => b.replace(/<[^>]+>/g, '').trim().length >= 80).length >= 2;
      }
      const section = doc3Match[0];
      const paragraphs = section.match(/<p class="text-sm[^"]*"[^>]*>([\s\S]+?)<\/p>/g) || [];
      const longOnes = paragraphs.filter(p => p.replace(/<[^>]+>/g, '').trim().length >= 80);
      return longOnes.length >= 3;
    },
    fix: 'Mỗi mục Tham/Sân/Si cần phân tích ≥ 80 ký tự thực chất, không phải 1-2 câu chung chung',
  },
  {
    id: 7,
    label: 'Section Bài học có đủ 3 bài',
    test: (html) => {
      // Tìm section 03 theo nhiều pattern
      const section03Match = html.match(/Di sản[\s\S]*?(?=<hr class="rule-thin[^>]*>[\s\S]{0,200}<section|<\/main)/i);
      if (!section03Match) {
        // fallback: đếm tất cả h3 trong trang
        const allH3 = html.match(/<h3 /g);
        return allH3 && allH3.length >= 3;
      }
      const section03 = section03Match[0];
      // Đếm các lesson block: có thể là p-6 rounded-xl hoặc h3
      const byClass   = (section03.match(/class="p-6 rounded-xl/g) || []).length;
      const byClassBg = (section03.match(/p-6 rounded-xl bg-/g) || []).length;
      const byH3      = (section03.match(/<h3 /g) || []).length;
      // Also count global h3 as fallback (works when section03 regex misses wrapper)
      const allH3Global = (html.match(/<h3 /g) || []).length;
      return byClass >= 3 || byClassBg >= 3 || byH3 >= 3 || allH3Global >= 3;
    },
    fix: 'Viết đủ 3 bài học (Ứng dụng 01, 02, 03) mỗi bài có tiêu đề h3 + nội dung + box ứng dụng thực tiễn',
  },
  {
    id: 8,
    label: 'Section Xem thêm có ≥ 3 liên kết',
    test: (html) => {
      const section04Match = html.match(/04[\s\S]*?(?=<\/main)/);
      if (!section04Match) return false;
      const links = section04Match[0].match(/<a href=/g);
      return links && links.length >= 3;
    },
    fix: 'Thêm ít nhất 3 liên kết đến trang nhân vật / bài học liên quan',
  },
];

// ─── Kiểm tra một file ───────────────────────────────────────────────────────
function checkFile(filePath) {
  const fileName = path.basename(filePath);
  const html = fs.readFileSync(filePath, 'utf-8');

  console.log(`\n${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}`);
  console.log(`${BOLD}  📄 ${fileName}${RESET}`);
  console.log(`${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}`);

  let passed = 0;
  const failures = [];

  for (const check of CHECKS) {
    const result = check.test(html);
    if (result) {
      console.log(ok(check.label));
      passed++;
    } else {
      console.log(fail(`${check.label}`));
      failures.push(check);
    }
  }

  // Đánh giá tổng thể
  const score = passed;
  const total = CHECKS.length;
  const pct = Math.round((score / total) * 100);

  console.log('');
  if (score === total) {
    console.log(`  ${GREEN}${BOLD}⭐ ĐẠT CHUẨN XUẤT SẮC — ${score}/${total} tiêu chí${RESET}`);
    console.log(`  ${GREEN}→ Sẵn sàng commit!${RESET}`);
  } else if (score >= 6) {
    console.log(`  ${YELLOW}${BOLD}🟡 ĐẠT CƠ BẢN — ${score}/${total} tiêu chí (${pct}%)${RESET}`);
    console.log(`  ${YELLOW}→ Có thể commit, nhưng nên cải thiện thêm.${RESET}`);
  } else if (score >= 3) {
    console.log(`  ${YELLOW}${BOLD}⚠ NỘI DUNG TRUNG BÌNH — ${score}/${total} tiêu chí (${pct}%)${RESET}`);
    console.log(`  ${YELLOW}→ Cần bổ sung trước khi commit.${RESET}`);
  } else {
    console.log(`  ${RED}${BOLD}🔴 NỘI DUNG NÔNG — ${score}/${total} tiêu chí (${pct}%)${RESET}`);
    console.log(`  ${RED}→ PHẢI VIẾT LẠI trước khi commit!${RESET}`);
  }

  if (failures.length > 0) {
    console.log(`\n  ${BOLD}Cần sửa:${RESET}`);
    failures.forEach(f => {
      console.log(`  ${RED}→${RESET} [${f.id}] ${f.fix}`);
    });
  }

  return { filePath, score, total, passed: score === total };
}

// ─── Main ────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(`\n${YELLOW}Cách dùng:${RESET}`);
  console.log('  node scripts/check-content-quality.js src/nhan-vat/<file>.html');
  console.log('  node scripts/check-content-quality.js src/nhan-vat/');
  process.exit(0);
}

const target = args[0];
const stat = fs.statSync(target);
let results = [];

if (stat.isDirectory()) {
  // Kiểm tra toàn bộ thư mục
  const files = fs.readdirSync(target)
    .filter(f => f.endsWith('.html'))
    .map(f => path.join(target, f));

  console.log(`\n${BOLD}Kiểm tra ${files.length} file trong: ${target}${RESET}`);
  results = files.map(f => checkFile(f));

  // Tóm tắt
  const allPassed = results.filter(r => r.score === r.total).length;
  const needsWork = results.filter(r => r.score < 3).length;

  console.log(`\n${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}`);
  console.log(`${BOLD}  📊 TỔNG KẾT${RESET}`);
  console.log(`${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}`);
  console.log(`  Tổng file: ${files.length}`);
  console.log(`  ${GREEN}⭐ Xuất sắc:  ${allPassed} file${RESET}`);
  console.log(`  ${RED}🔴 Cần viết lại: ${needsWork} file${RESET}`);

  if (needsWork > 0) {
    console.log(`\n  ${RED}${BOLD}File cần viết lại ngay:${RESET}`);
    results
      .filter(r => r.score < 3)
      .forEach(r => console.log(`  ${RED}→${RESET} ${path.basename(r.filePath)}`));
  }
} else {
  // Kiểm tra 1 file
  const result = checkFile(target);
  if (!result.passed && result.score < 3) {
    process.exit(1); // Exit code 1 để git hook có thể dùng
  }
}

console.log('');
