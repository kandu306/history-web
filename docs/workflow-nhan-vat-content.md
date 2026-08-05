# Workflow: Kiểm tra Chất lượng Nội dung Nhân vật trước khi Commit

> **Mục tiêu:** Đảm bảo mọi trang nhân vật (`src/nhan-vat/*.html`) đạt chuẩn nội dung **sâu** trước khi push lên GitHub.

---

## 🔴 Dấu hiệu Nội dung NÔNG (Phải viết lại)

Một trang bị coi là nông nếu có **bất kỳ 1 trong số** các dấu hiệu sau:

| # | Dấu hiệu | Cách kiểm tra |
|---|---|---|
| 1 | Vẫn dùng **"Phán quyết nhanh"** | Tìm chuỗi `Phán quyết nhanh` trong file |
| 2 | Không có CSS tag pills (`.tag-su-kien`, `.tag-suy-luan`) | Tìm `.tag-su-kien` trong `<style>` |
| 3 | Mỗi mục 3 Gốc/3 Độc chỉ có **1 đoạn văn < 100 ký tự** | Xem nội dung bên trong từng section |
| 4 | Phần 3 Độc: mỗi mục chỉ **1-2 câu mô tả** | Ví dụ: "Không tơ hào tư lợi." |
| 5 | Phần Bài học: chỉ có **1 bài học**, không có box ứng dụng | Đếm `.p-6.rounded-xl` trong section 03 |
| 6 | Không có **`<div class="quote-box">`** nào trong toàn trang | Tìm `quote-box` trong file |
| 7 | Không có **`.ev-block`** — còn dùng layout cũ | Tìm `.ev-block` hoặc `ev-block` trong file |
| 8 | Mỗi sự kiện không có **tiêu đề riêng (bold, dòng riêng)** | Kiểm tra cấu trúc bên trong ev-block |

---

## ✅ Tiêu chuẩn Nội dung SÂU (Đạt chuẩn)

### Cấu trúc trang chuẩn

```
HERO
├── Chân dung lịch sử (không phải "Phán quyết nhanh")
│   └── 2 đoạn văn, mỗi đoạn ≥ 50 từ

01 — 3 GỐC
├── Trí tuệ ★★★★☆
│   ├── ev-block 1: [SỰ KIỆN] tag + tiêu đề + ≥ 80 từ nội dung
│   ├── ev-block 2: [SỰ KIỆN] tag + tiêu đề + ≥ 80 từ nội dung
│   └── (tuỳ chọn) ev-block 3 hoặc quote-box
├── Đạo đức ★★★★★
│   └── 2–3 ev-block tương tự
└── Nghị lực ★★★★☆
    └── 2–3 ev-block tương tự

02 — 3 ĐỘC
├── Tham lam ★★☆☆☆
│   └── [SUY LUẬN] tag + ≥ 60 từ phân tích triết học / tâm lý
├── Sân giận ★★★☆☆
│   └── [SUY LUẬN] tag + ≥ 60 từ
└── Si mê ★★☆☆☆
    └── [SUY LUẬN] tag + ≥ 60 từ

03 — DI SẢN & BÀI HỌC
├── Ứng dụng 01 (tiêu đề + ≥ 80 từ + box gợi ý thực tiễn)
├── Ứng dụng 02 (tiêu đề + ≥ 80 từ + box gợi ý thực tiễn)
└── Ứng dụng 03 (tiêu đề + ≥ 80 từ + box gợi ý thực tiễn)

04 — XEM THÊM
└── ≥ 3 liên kết đến trang liên quan
```

### CSS bắt buộc có trong `<style>`

```css
.tag-su-kien  { ... }   /* pill đỏ */
.tag-suy-luan { ... }   /* pill tím */
.tag-han-che  { ... }   /* pill vàng */
.ev-block + .ev-block { border-top: 1px solid #e7e5e4; ... }
.quote-box { border-left: 4px solid #9b1c1c; ... }
```

### Cấu trúc ev-block chuẩn

```html
<div class="ev-block">
  <span class="tag-su-kien">Sự kiện</span>           <!-- DÒNG 1: tag pill -->
  <p class="font-semibold ...">Tiêu đề sự kiện</p>   <!-- DÒNG 2: tiêu đề riêng -->
  <p class="text-sm ...">Nội dung ≥ 80 từ...</p>     <!-- DÒNG 3+: nội dung -->
</div>
```

---

## 📋 Checklist trước khi `git commit`

Chạy script kiểm tra tự động:
```bash
node scripts/check-content-quality.js src/nhan-vat/<ten-file>.html
```

Hoặc kiểm tra thủ công theo checklist:

### Hero & Chân dung
- [ ] Không còn chữ "Phán quyết nhanh"
- [ ] "Chân dung lịch sử" có đủ 2 đoạn văn
- [ ] Tagline (in nghiêng đỏ) mô tả đặc trưng nhất của nhân vật

### Section 01 — 3 Gốc
- [ ] **Trí tuệ:** Có ≥ 2 ev-block với tiêu đề và nội dung dài
- [ ] **Đạo đức:** Có ≥ 2 ev-block, ít nhất 1 sự kiện cụ thể
- [ ] **Nghị lực:** Có ≥ 2 ev-block
- [ ] Có ít nhất 1 `quote-box` trong toàn section 01

### Section 02 — 3 Độc
- [ ] Mỗi Độc: có ít nhất 1 tag pill + ≥ 3 câu phân tích
- [ ] Không phân tích kiểu "Không màng tư lợi." (chỉ 1 câu)
- [ ] **Sân giận** và **Si mê** phải có góc nhìn độc đáo, không chỉ nêu sự kiện

### Section 03 — Bài học
- [ ] Có đủ **3 bài học** (không phải 1)
- [ ] Mỗi bài học: tiêu đề h3 rõ ràng + ≥ 3 câu phân tích + box ứng dụng thực tiễn
- [ ] Box ứng dụng có ví dụ cụ thể (có thể là ví dụ kinh doanh, quản trị)

### Section 04 — Xem thêm
- [ ] Có ≥ 3 liên kết đến trang liên quan
- [ ] Các liên kết dùng class `rounded-xl` (không phải `rounded-lg` cũ)

---

## 🔧 Quy trình Viết Trang Nhân vật Mới

```
1. TẠO FILE từ template
   → Copy cấu trúc từ bui-thi-xuan.html hoặc ngo-thi-nham.html

2. ĐIỀN NỘI DUN THỰC SỰ
   Cho mỗi ev-block:
   a. [SỰ KIỆN]: Mô tả sự kiện lịch sử cụ thể với năm/địa điểm
   b. [SUY LUẬN]: Phân tích tâm lý / triết học / chiến lược
   c. [HẠN CHẾ]: Phê bình khách quan điểm yếu

3. KIỂM TRA tự động
   → node scripts/check-content-quality.js <file>

4. SỬA nếu script báo lỗi

5. BUILD để xác nhận
   → npm run build

6. GIT COMMIT + PUSH
   → git add + commit + push
```

---

## 📁 Template File Mới

Khi tạo trang nhân vật mới, sao chép từ:
```
src/nhan-vat/bui-thi-xuan.html   ← Template chuẩn nhất
```

Hoặc tham khảo thêm:
```
src/nhan-vat/ngo-thi-nham.html   ← Ví dụ nhân vật trí thức
src/nhan-vat/nguyen-anh.html     ← Ví dụ nhân vật đa chiều
src/nhan-vat/tran-quang-dieu.html ← Ví dụ nhân vật bi kịch
```

---

## 📊 Tiêu chí Chấm điểm Nhanh

| Điểm | Mức độ | Hành động |
|------|--------|-----------|
| 0–2 tiêu chí đạt | 🔴 Nông | Viết lại hoàn toàn trước khi commit |
| 3–5 tiêu chí đạt | 🟡 Trung bình | Bổ sung thêm sự kiện + mở rộng 3 Độc |
| 6–7 tiêu chí đạt | 🟢 Đạt | Có thể commit, chú thích TODO để cải thiện sau |
| 8/8 tiêu chí đạt | ⭐ Xuất sắc | Commit ngay |
