# 📋 HISTORY-WEB PROJECT RULES

> Các quy tắc BẮT BUỘC khi làm việc với project `D:\01. Projects\history-web`
> **Từ 2026-07: project đã chuyển sang Eleventy (11ty).** Nguồn nằm trong `src/`, KHÔNG sửa `_site/` (output build).

---

## 🎨 QUY TẮC 1: DESIGN SYSTEM — LUÔN DÙNG ĐÚNG KHUNG

Khi nhận bất kỳ file nội dung nào từ user (nhân vật, bài học, ...) để đưa vào project:

### ✅ PHẢI làm:
- **Chỉ lấy nội dung (text)** từ file gốc của user
- **KHÔNG lấy CSS, font, layout** từ file gốc
- **Rebuild theo template chuẩn**: file mới trong `src/nhan-vat/` hoặc `src/bai-hoc/` chỉ gồm
  **front matter + nội dung từ `<main>` đến hết `<footer>`** — head/nav do layout `page.njk` tự sinh.

### Front matter chuẩn:
```yaml
---
title: "Tên trang | Phân tích 3 Gốc / 3 Độc"
description: "Mô tả SEO..."
breadcrumb: "Tên hiển thị trên nav"
# tuỳ chọn:
# breadcrumbParent: {"href": "nha-hau-le-tong-quan.html", "text": "Nhà Hậu Lê"}
# navLabel: "nhãn phải của nav (mặc định: 3 Gốc / 3 Độc | Bài học lịch sử)"
# ogTitle / ogDescription: nếu khác title/description
---
```

### Design System chuẩn:
```
Fonts     : Be Vietnam Pro + Noto Serif (layout tự load)
Colors    : cream #faf9f7 | đỏ #9b1c1c | ink #1c1917
Layout    : (nav tự sinh) → hero header → TL;DR dark card →
            sections với cards → timeline → liên kết → share CTA → footer
<style>   : style riêng của trang đặt NGAY ĐẦU nội dung (trong body)
```

### Template tham chiếu (source of truth):
- **Nhân vật**: `src/nhan-vat/ly-nhan-tong.html`
- **Bài học**: `src/bai-hoc/nha-ly-chap4.html`

### ❌ DẤU HIỆU SAI cần check ngay:
- File mới có `<!DOCTYPE>`, `<head>`, `<nav>` riêng → SAI (layout đã lo)
- File dùng `Playfair Display` / `IBM Plex Serif` / tailwind.config inline → SAI
- Sửa file trong `_site/` → SAI (bị ghi đè khi build)

---

## 📦 QUY TẮC 2: THÊM TRANG MỚI — CHECKLIST

#### Khi thêm NHÂN VẬT mới:
```
□ src/nhan-vat/<ten>.html       ← file chính (front matter + nội dung)
□ src/_data/eras.json           ← thêm 1 dòng vào era đúng, ĐÚNG THỨ TỰ THỜI GIAN
                                   → trang chủ TỰ cập nhật chip + số liệu
□ src/so-do-data.js             ← thêm node vào sơ đồ (nếu cần)
□ src/ban-do-data.js            ← thêm điểm vào bản đồ (nếu cần)
```

#### Khi thêm BÀI HỌC mới:
```
□ src/bai-hoc/<ten>.html        ← file chính
□ src/_data/eras.json           ← thêm chip vào groups của era tương ứng
```

### Trước khi commit:
```
npm run build && node scripts/check-links.js   # 0 link gãy mới được commit
```

### Format commit message chuẩn:
```
feat: add [tên nhân vật/bài học]

- src/nhan-vat/<ten>.html: [mô tả ngắn]
- src/_data/eras.json: add chip to era X
```

Push `main` → GitHub Actions tự build + deploy Pages. KHÔNG cần commit `_site/`.

---

## 📅 QUY TẮC 3: THỨ TỰ THỜI GIAN trong eras.json

Chip trong `src/_data/eras.json` phải chèn đúng vị trí theo năm hoạt động chính
(trang chủ render đúng thứ tự mảng). Sai vị trí = sai timeline trên trang chủ.

---

## ⚠️ Trang ngoại lệ (không qua layout):
- `src/nhan-vat/to-hien-thanh.html` — `layout: false`, còn dùng design cũ (nợ kỹ thuật, chờ restyle)
- `src/ban-do.html`, `src/so-do-trieu-dinh.html` — trang standalone giữ nguyên trạng

---

*Cập nhật: 2026-07-20 | Lý do: migrate sang Eleventy — head/nav dùng chung qua layout, index data-driven*
