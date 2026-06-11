# Ý tưởng & Kế hoạch nội dung
> Cập nhật lần cuối: 2026-06-11

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
- **Thứ tự thời gian**: Mọi danh sách nhân vật trong index, ban-do, so-do phải theo đúng thứ tự thời gian

---

## 🗺️ Map nội dung hiện tại

### Bài học lịch sử (`bai-hoc/`) — 21 bài ✅

| # | File | Tiêu đề | Thời kỳ | Status |
|---|------|---------|---------|--------|
| 1 | `nha-nuoc-van-lang.html` | Nhà Nước Văn Lang | TK 7–6 TCN | ✅ Done |
| 2 | `nha-nuoc-au-lac.html` | Nhà Nước Âu Lạc | 257–179 TCN | ✅ Done |
| 3 | `1000-nam-bac-thuoc.html` | 1.000 Năm Bắc Thuộc | 111 TCN–938 SCN | ✅ Done |
| 4 | `ngo-quyen.html` | Ngô Quyền 938 | 938 SCN | ✅ Done |
| 5 | `loan-12-su-quan.html` | Loạn 12 Sứ Quân | 944–968 SCN | ✅ Done |
| 6 | `dinh-le.html` | Đinh – Lê | 968–1009 SCN | ✅ Done |
| 7 | `nha-tien-le.html` | Nhà Tiền Lê | 979–1009 SCN | ✅ Done |
| 8 | `nha-ly-total.html` | Nhà Lý — Tổng Quan | 1009–1225 SCN | ✅ Done |
| 9 | `nha-ly-chap1.html` | Nhà Lý — Khai Quốc & Dời Đô | 1009–1054 SCN | ✅ Done |
| 10 | `nha-ly-chap2.html` | Nhà Lý — Củng Cố & Mở Rộng | 1054–1075 SCN | ✅ Done |
| 11 | `nha-ly-chap3.html` | Nhà Lý — Kháng Chiến Chống Tống | 1075–1077 SCN | ✅ Done |
| 12 | `nha-ly-chap4.html` | Nhà Lý — Xây Dựng Văn Hóa & Thể Chế | 1077–1175 SCN | ✅ Done |
| 13 | `nha-ly-chap5.html` | Nhà Lý — Suy Tàn & Chuyển Giao | 1175–1225 SCN | ✅ Done |
| 14 | `nha-tran-chap2.html` | Nhà Trần — 3 Lần Kháng Mông-Nguyên | 1258–1288 | ✅ Done |
| 15 | `nha-tran-chap3.html` | Nhà Trần — Thịnh Trị & Văn Hoá | 1288–1341 | ✅ Done |
| 16 | `tran-nhan-tong-yen-tu.html` | Sự kiện 1299: Trần Nhân Tông lên Yên Tử | 1299 SCN | ✅ Done |
| 17 | `du-ngoan-phuong-nam.html` | Sự kiện 1301: Du Ngoạn Phương Nam | 1301–1306 SCN | ✅ Done |
| 18 | `cuop-dau-huyen-tran.html` | Sự kiện 1307: Vụ Cướp Dâu Huyền Trân | 1307 SCN | ✅ Done |
| 19 | `doan-nhu-hai-du-hang.html` | Sự kiện 1312: Đoàn Nhữ Hài Dụ Hàng Chiêm | 1312 SCN | ✅ Done |
| 20 | `vu-an-tran-quoc-chan.html` | Sự kiện 1328: Vụ Án Trần Quốc Chẩn | 1328 SCN | ✅ Done |

### Nhân vật (`nhan-vat/`) — 30 nhân vật ✅

#### Thời kỳ Bắc Thuộc & Đấu Tranh Giành Độc Lập (40–937 SCN)

| # | File | Nhân vật | Thời kỳ | Status |
|---|------|---------|---------|--------|
| 1 | `hai-ba-trung.html` | Hai Bà Trưng | 40–43 SCN | ✅ Done |
| 2 | `phung-hung.html` | Phùng Hưng | ~791–802 SCN | ✅ Done |
| 3 | `khuc-thua-du.html` | Khúc Thừa Dụ | 905–907 SCN | ✅ Done |
| 4 | `duong-dinh-nghe.html` | Dương Đình Nghệ | 931–937 SCN | ✅ Done |

#### Ngô Vương → Đinh → Tiền Lê (938–1009 SCN)

| # | File | Nhân vật | Thời kỳ | Status |
|---|------|---------|---------|--------|
| 5 | `ngo-quyen.html` | Ngô Quyền | 938–944 SCN | ✅ Done |
| 6 | `dinh-bo-linh.html` | Đinh Bộ Lĩnh | 968–979 SCN | ✅ Done |
| 7 | `duong-van-nga.html` | Dương Vân Nga | 979–980 SCN | ✅ Done |
| 8 | `le-hoan.html` | Lê Hoàn | 980–1005 SCN | ✅ Done |
| 9 | `le-long-dinh.html` | Lê Long Đĩnh | 1005–1009 SCN | ✅ Done |

#### Nhà Lý — Khai Quốc (1009–1054 SCN)

| # | File | Nhân vật | Thời kỳ | Status |
|---|------|---------|---------|--------|
| 10 | `thien-su-van-hanh.html` | Thiền Sư Vạn Hạnh | ~938–1018 SCN | ✅ Done |
| 11 | `ly-cong-uan.html` | Lý Công Uẩn (Lý Thái Tổ) | 1009–1028 SCN | ✅ Done |
| 12 | `dao-cam-moc.html` | Đào Cam Mộc | 1009 SCN | ✅ Done |
| 13 | `luu-co.html` | Lưu Cơ | ~980–1016 SCN | ✅ Done |
| 14 | `nguyen-dao-thanh.html` | Nguyễn Đạo Thanh | 1009–1022 SCN | ✅ Done |
| 15 | `ly-thai-tong.html` | Lý Thái Tông | 1028–1054 SCN | ✅ Done |
| — | — | **Lê Phụng Hiểu** | 1028 SCN | 🔲 Anh sẽ thêm — quan thần Lý Thái Tông |

#### Nhà Lý — Thịnh Trị (1054–1175 SCN)

| # | File | Nhân vật | Thời kỳ | Status |
|---|------|---------|---------|--------|
| 16 | `ly-thanh-tong.html` | Lý Thánh Tông | 1054–1072 SCN | ✅ Done |
| 17 | `hoang-hau-y-lan.html` | Hoàng Hậu Ỷ Lan | 1044–1117 SCN | ✅ Done |
| 18 | `ly-nhan-tong.html` | Lý Nhân Tông | 1072–1127 SCN | ✅ Done |
| 19 | `le-van-thinh.html` | Lê Văn Thịnh | 1075–1084 SCN | ✅ Done |
| 20 | `ly-thuong-kiet.html` | Lý Thường Kiệt | 1019–1105 SCN | ✅ Done |
| 21 | `ly-than-tong.html` | Lý Thần Tông | 1128–1138 SCN | ✅ Done |
| 22 | `nguyen-minh-khong.html` | Nguyễn Minh Không | ~1066–1141 SCN | ✅ Done |
| 23 | `ly-anh-tong.html` | Lý Anh Tông | 1138–1175 SCN | ✅ Done |
| 24 | `to-hien-thanh.html` | Tô Hiến Thành | ?–1179 SCN | ✅ Done |

#### Nhà Lý — Suy Tàn (1175–1225 SCN)

| # | File | Nhân vật | Thời kỳ | Status |
|---|------|---------|---------|--------|
| 25 | `ly-cao-tong.html` | Lý Cao Tông | 1175–1210 SCN | ✅ Done |
| 26 | `ly-hue-tong.html` | Lý Huệ Tông | 1210–1226 SCN | ✅ Done |

#### Đối lập / Ngoại xâm

| # | File | Nhân vật | Thời kỳ | Status |
|---|------|---------|---------|--------|
| 27 | `quach-quy.html` | Quách Quỳ (Nhà Tống) | 1075–1077 SCN | ✅ Done |

### Trang công cụ

| File | Chức năng | Status |
|------|-----------|--------|
| `index.html` | Trang chủ — Timeline Triều Đại | ✅ Done |
| `ban-do.html` | Bản đồ khái niệm tương tác | ✅ Done |
| `so-do-trieu-dinh.html` | Sơ đồ Vua → Quan | ✅ Done |

---

## 📋 Workflow khi thêm nội dung mới

### Thêm nhân vật mới:
1. Tạo file `nhan-vat/[ten-file].html` theo template `ly-cong-uan.html`
2. Cập nhật `index.html` → thêm chip vào section triều đại đúng, tăng bộ đếm
3. Cập nhật `ban-do.html` → thêm vào `figures[]` với role đúng
4. Cập nhật `so-do-trieu-dinh.html` → thêm official-card dưới vua tương ứng, cập nhật stats
5. Cập nhật `docs/ideas.md`
6. `git add` → `git commit` → `git push`

### Thêm bài học mới:
1. Tạo file `bai-hoc/[ten-file].html` theo template `nha-tien-le.html`
2. Cập nhật `index.html` → thêm chip bài học vào era tương ứng
3. Cập nhật `ban-do.html` → thêm vào `lessons[]` của node tương ứng
4. Cập nhật `docs/ideas.md`
5. `git add` → `git commit` → `git push`

### ⚠️ Nguyên tắc "Chỉ push khi hoàn thiện"
- Không push file draft/chưa xong lên git
- Nếu anh gửi file mới → kiểm tra design trước khi copy vào dự án
- Nếu file dùng design khác → rewrite theo concept chuẩn rồi mới push
- **Thứ tự thời gian**: Danh sách nhân vật luôn phải theo thứ tự thời gian

---

## 🔜 Nội dung tiếp theo

### Ưu tiên cao:
- [ ] **Lê Phụng Hiểu** — Anh sẽ cung cấp tài liệu (quan thần Lý Thái Tông)
- [ ] **Nhà Trần** — Cần mở khóa era mới trên index.html

### Nhà Trần (dự kiến):
| Nhân vật | Vai trò | Status |
|----------|---------|--------|
| Trần Thủ Độ | Kingmaker kết thúc Nhà Lý | 🔲 Sắp ra mắt |
| Trần Hưng Đạo | Đại nguyên soái 3 lần chống Mông | 🔲 Sắp ra mắt |
| Trần Nhân Tông | Vua — Phật hoàng | 🔲 Sắp ra mắt |
| Trần Quốc Toản | Thiếu niên anh hùng | 🔲 Sắp ra mắt |

---

## 💡 Ý tưởng mở rộng (tương lai)

- [ ] So sánh nhân vật — radar chart 3 Gốc / 3 Độc
- [ ] Quiz kiểm tra kiến thức sau mỗi bài học
- [ ] Filter nhân vật theo điểm Trí tuệ / Đạo đức / Nghị lực
- [ ] Trang timeline lịch sử tương tác (full visual)

---

## 🎨 Ghi chú thiết kế

- Phong cách: cổ điển nhưng hiện đại, serious nhưng accessible
- Màu đỏ sậm `#9b1c1c` gợi máu, chiến tranh, lịch sử
- Font serif cho tên nhân vật + quotes — gợi cảm giác cổ thư
- Không dùng Chronicle Mode / báo cổ cho các trang nhân vật và bài học
- Lý Huệ Tông và nhân vật bi kịch dùng dark styling đặc biệt trong so-do-trieu-dinh
