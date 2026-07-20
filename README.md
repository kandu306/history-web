# Lịch Sử Việt Nam — Khoá học phân tích nhân vật

Website tĩnh phân tích các nhân vật lịch sử Việt Nam theo hệ thống **3 Gốc / 3 Độc**.
Build bằng **Eleventy (11ty)**, deploy tự động lên GitHub Pages qua GitHub Actions.

## Chạy local

```bash
npm install
npm run serve   # dev server: http://localhost:8080 (tự rebuild khi sửa file)
npm run build   # build ra _site/
```

## Cấu trúc dự án

```
history-web/
├── src/                        # ← NGUỒN — sửa nội dung Ở ĐÂY
│   ├── _layouts/page.njk       # layout chung (head + nav + footer wrapper)
│   ├── _includes/nav.njk       # sticky nav + mobile menu dùng chung
│   ├── _data/eras.json         # data timeline triều đại (chips trang chủ)
│   ├── index.njk               # trang chủ (render từ eras.json + collections)
│   ├── nhan-vat/*.html         # 84 trang nhân vật (front matter + nội dung)
│   ├── bai-hoc/*.html          # 36 trang bài học
│   ├── ban-do.html             # bản đồ khái niệm (standalone)
│   ├── so-do-trieu-dinh.html   # sơ đồ vua–quan (standalone)
│   ├── ban-do-data.js, so-do-data.js
│   └── shared/                 # styles.css, scripts.js, favicon.svg
├── scripts/                    # script migration/verify (tham khảo, đã chạy xong)
├── .eleventy.js                # config Eleventy (giữ URL .html như cũ)
├── .github/workflows/deploy.yml # build + deploy Pages tự động khi push main
└── _site/                      # output build (gitignore)
```

## Thêm nhân vật / bài học mới

1. Tạo `src/nhan-vat/<ten>.html` (hoặc `src/bai-hoc/`) — xem mẫu `src/nhan-vat/ly-nhan-tong.html`:
   front matter (`title`, `description`, `breadcrumb`) + phần nội dung từ `<main>` đến hết `<footer>`.
2. Thêm 1 dòng vào `src/_data/eras.json` (đúng era, đúng thứ tự thời gian) → trang chủ tự cập nhật chip + số liệu thống kê.
3. Cập nhật `so-do-data.js` / `ban-do-data.js` nếu cần.
4. Commit + push `main` → GitHub Actions tự build và deploy.

## Hệ thống đánh giá: 3 Gốc / 3 Độc

| Gốc | Độc |
|-----|-----|
| Trí tuệ (★1–5) | Tham lam (★1–5) |
| Đạo đức (★1–5) | Sân giận (★1–5) |
| Nghị lực (★1–5) | Si mê (★1–5) |

## Design System

- **Fonts**: Be Vietnam Pro + Noto Serif (Google Fonts)
- **Màu**: nền kem `#faf9f7` · đỏ sậm `#9b1c1c` · ink `#1c1917` · text phụ `#78716c`
- **Styling**: Tailwind CDN + `src/shared/styles.css`
- Quy tắc chi tiết: `.rules/history-web-rules.md`
