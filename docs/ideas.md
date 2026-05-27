# Ý tưởng & Kế hoạch nội dung

## Tổng quan dự án

Website **"Lịch sử Việt Nam"** — Phân tích nhân vật theo hệ thống **3 Gốc / 3 Độc**:
- Mỗi nhân vật = 1 bài viết sâu (trong `nhan-vat/`)
- Đánh giá khách quan, dựa trên tư liệu lịch sử
- Bài học thực tiễn cho người đọc hiện đại
- Song song: Bài học lịch sử theo chuỗi sự kiện (trong `bai-hoc/`)

---

## 📐 Design Concept

### Hai loại trang:

| Loại | Thư mục | Design | Shared styles |
|------|---------|--------|---------------|
| **Nhân vật** | `nhan-vat/` | Nav + Hero + Stats Grid + 3 Gốc/3 Độc Cards + Share CTA | ✅ `../shared/styles.css` + `../shared/scripts.js` |
| **Bài học** | `bai-hoc/` | Nav + Hero + Article (dạng longform) + Liên kết | ✅ `../shared/styles.css` + `../shared/scripts.js` |

**Nguyên tắc bất biến:**
- Mọi file mới **phải dùng** `shared/styles.css` và `shared/scripts.js`
- Font: Be Vietnam Pro + Noto Serif (Google Fonts)
- Màu chủ: `#9b1c1c` (đỏ sậm), `#1c1917` (đen), `#faf9f7` (kem)
- **Không dùng design khác** (Chronicle Mode / báo cổ chỉ là thử nghiệm)

---

## 🗺️ Map nội dung hiện tại

### Bài học lịch sử (`bai-hoc/`) — 7 bài ✅

| # | File | Tiêu đề | Thời kỳ | Status |
|---|------|---------|---------|--------|
| 1 | `nha-nuoc-van-lang.html` | Nhà Nước Văn Lang | TK 7–6 TCN | ✅ Done |
| 2 | `nha-nuoc-au-lac.html` | Nhà Nước Âu Lạc | 257–179 TCN | ✅ Done |
| 3 | `1000-nam-bac-thuoc.html` | 1.000 Năm Bắc Thuộc | 111 TCN–938 SCN | ✅ Done |
| 4 | `ngo-quyen.html` | Ngô Quyền 938 | 938 SCN | ✅ Done |
| 5 | `loan-12-su-quan.html` | Loạn 12 Sứ Quân | 944–968 SCN | ✅ Done |
| 6 | `dinh-le.html` | Đinh – Lê | 968–1009 SCN | ✅ Done |
| 7 | `nha-tien-le.html` | Nhà Tiền Lê | 979–981 SCN | ✅ Done |
| — | `nha-ly-chap1.html` | Nhà Lý — Lập Quốc (Chap 1) | 1009–1054 SCN | 🔲 Chưa làm |
| — | `nha-ly-chap2.html` | Nhà Lý — Củng Cố & Mở Rộng (Chap 2) | 1054–1075 SCN | 🔧 Draft — chưa hoàn thiện |
| — | `nha-ly-chap3.html` | Nhà Lý — Kháng Chiến Chống Tống (Chap 3) | 1075–1077 SCN | 🔧 Draft — chưa hoàn thiện |
| — | `nha-ly-tong-quan.html` | Nhà Lý — Tổng Quan (bài tổng) | 1009–1225 SCN | 🔲 Chưa làm |

### Nhân vật (`nhan-vat/`) — 14 nhân vật ✅

| # | File | Nhân vật | Thời kỳ | Status |
|---|------|---------|---------|--------|
| 1 | `hai-ba-trung.html` | Hai Bà Trưng | 40–43 SCN | ✅ Done |
| 2 | `phung-hung.html` | Phùng Hưng | ~791 SCN | ✅ Done |
| 3 | `khuc-thua-du.html` | Khúc Thừa Dụ | 905–907 SCN | ✅ Done |
| 4 | `duong-dinh-nghe.html` | Dương Đình Nghệ | 931–937 SCN | ✅ Done |
| 5 | `ngo-quyen.html` | Ngô Quyền | 938 SCN | ✅ Done |
| 6 | `dinh-bo-linh.html` | Đinh Bộ Lĩnh | 968–979 SCN | ✅ Done |
| 7 | `duong-van-nga.html` | Dương Vân Nga | 979–980 SCN | ✅ Done |
| 8 | `le-hoan.html` | Lê Hoàn | 980–1005 SCN | ✅ Done |
| 9 | `thien-su-van-hanh.html` | Thiền Sư Vạn Hạnh | Cuối TK X | ✅ Done |
| 10 | `le-long-dinh.html` | Lê Long Đĩnh | 1005–1009 SCN | ✅ Done |
| 11 | `ly-cong-uan.html` | Lý Công Uẩn | 1009–1028 SCN | ✅ Done |
| 12 | `ly-thanh-tong.html` | Lý Thánh Tông | 1054–1072 SCN | ✅ Done |
| 13 | `hoang-hau-y-lan.html` | Hoàng Hậu Ỷ Lan | 1044–1117 SCN | ✅ Done |
| 14 | `quach-quy.html` | Quách Quỳ (Nhà Tống) | 1076 SCN | ✅ Done |
| — | — | Trần Hưng Đạo | 1228–1300 | 🔲 Sắp ra mắt |
| — | — | Nguyễn Trãi | 1380–1442 | 🔲 Sắp ra mắt |

---

## 📋 Workflow khi thêm nội dung mới

### Thêm nhân vật mới:
1. Tạo file `nhan-vat/[ten-file].html` theo template `ly-cong-uan.html`
2. Cập nhật `index.html` → thêm card vào section "Nhân vật", tăng bộ đếm
3. Cập nhật `.brain/brain.json`
4. Cập nhật `docs/ideas.md`
5. `git add` → `git commit` → `git push`

### Thêm bài học mới:
1. Tạo file `bai-hoc/[ten-file].html` theo template `nha-tien-le.html`
2. Cập nhật `index.html` → thêm card vào section "Bài học", tăng bộ đếm
3. Cập nhật `.brain/brain.json`
4. Cập nhật `docs/ideas.md`
5. `git add` → `git commit` → `git push`

### ⚠️ Nguyên tắc "Chỉ push khi hoàn thiện"
- Không push file draft/chưa xong lên git
- Nếu anh gửi file mới → kiểm tra design trước khi copy vào dự án
- Nếu file dùng design khác → rewrite theo concept chuẩn rồi mới push

---

## 💡 Ý tưởng mở rộng (tương lai)

- [ ] Trang timeline lịch sử tương tác
- [ ] Hệ thống so sánh nhân vật (radar chart)
- [ ] Quiz kiểm tra kiến thức
- [ ] Filter theo thời kỳ / đặc điểm
- [ ] `ban-do.html` — Bản đồ khái niệm kết nối nhân vật

---

## 🎨 Ghi chú thiết kế

- Phong cách: cổ điển nhưng hiện đại, serious nhưng accessible
- Màu đỏ sậm `#9b1c1c` gợi máu, chiến tranh, lịch sử
- Font serif cho tên nhân vật + quotes — gợi cảm giác cổ thư
- Không dùng Chronicle Mode / báo cổ cho các trang nhân vật và bài học
