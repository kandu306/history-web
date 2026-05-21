# Lịch Sử Việt Nam — Khoá học phân tích nhân vật

Website tĩnh phân tích các nhân vật lịch sử Việt Nam theo hệ thống **3 Gốc / 3 Độc**.

## Status: 🚧 Planning → 🏗️ Building

## Cấu trúc dự án

```
history-web/
├── .brain/
│   └── brain.json          # Project context
├── docs/
│   └── ideas.md            # Ghi ý tưởng
├── nhân-vật/               # Mỗi file = 1 nhân vật
│   └── duong-van-nga.html  # ✅ Nhân vật 12 (mẫu)
├── index.html              # Trang danh sách nhân vật
├── shared/
│   ├── style.css           # CSS dùng chung
│   └── script.js           # JS dùng chung
└── README.md
```

## Hệ thống đánh giá: 3 Gốc / 3 Độc

| Gốc | Độc |
|-----|-----|
| Trí tuệ (★1–5) | Tham lam (★1–5) |
| Đạo đức (★1–5) | Sân giận (★1–5) |
| Nghị lực (★1–5) | Si mê (★1–5) |

## Tech Stack

- **HTML5** — Cấu trúc semantic
- **Tailwind CSS** (CDN) — Styling
- **Vanilla JS** — Reading progress, fade-in
- **Google Fonts** — Be Vietnam Pro + Noto Serif

## Màu sắc chủ đạo

| Vai trò | Màu |
|---------|-----|
| Accent chính | `#9b1c1c` (đỏ sậm) |
| Nền | `#faf9f7` (kem trắng) |
| Text chính | `#1c1917` |
| Text phụ | `#78716c` |

## Next Steps

1. Gõ `/code` để bắt đầu tạo trang index + copy nhân vật mẫu
2. Gõ `/plan` nếu muốn lên kế hoạch thêm nhân vật
3. Gõ `/design` để thiết kế thêm components
