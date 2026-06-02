# 📋 HISTORY-WEB PROJECT RULES

> Các quy tắc BẮT BUỘC khi làm việc với project `D:\01. Projects\history-web`

---

## 🎨 QUY TẮC 1: DESIGN SYSTEM — LUÔN DÙNG ĐÚNG KHUNG

Khi nhận bất kỳ file nội dung nào từ user (nhân vật, bài học, ...) để đưa vào project:

### ✅ PHẢI làm:
- **Chỉ lấy nội dung (text)** từ file gốc của user
- **KHÔNG lấy CSS, font, layout** từ file gốc
- **Rebuild hoàn toàn** theo design system của project

### Design System chuẩn của project:
```
Fonts     : Be Vietnam Pro + Noto Serif (Google Fonts)
Styles    : ../shared/styles.css + ../shared/scripts.js
Layout    : sticky nav → hero header → TL;DR dark card →
            sections với cards → timeline → bài học grid →
            liên kết → share CTA → footer
Colors    : cream #faf9f7 | đỏ #9b1c1c | ink #1c1917
```

### Template tham chiếu (source of truth):
- **Nhân vật**: `nhan-vat/dinh-bo-linh.html` hoặc `nhan-vat/ly-nhan-tong.html`
- **Bài học**: `bai-hoc/nha-ly-chap4.html` hoặc `bai-hoc/nha-ly-chap5.html`

### ❌ DẤU HIỆU SAI cần check ngay:
- File dùng `Playfair Display` hoặc `IBM Plex Serif` → SAI
- File có `font-family: 'IBM Plex Serif'` trong CSS → SAI
- File không có `../shared/styles.css` → SAI
- File dùng Tailwind config inline (tailwind.config = {...}) → SAI

---

## 📦 QUY TẮC 2: GIT COMMIT — ĐỒNG BỘ TẤT CẢ TRANG LIÊN QUAN

Khi hoàn thành thêm/sửa nhân vật hoặc bài học, **PHẢI commit đồng thời** tất cả file bị ảnh hưởng:

### Checklist trước khi commit:

#### Khi thêm NHÂN VẬT mới:
```
□ nhan-vat/[ten-nhan-vat].html          ← file chính
□ index.html                             ← thêm card vào grid
□ so-do-trieu-dinh.html                 ← thêm node vào sơ đồ
□ ban-do.html                            ← thêm điểm vào bản đồ (nếu cần)
```

#### Khi thêm BÀI HỌC mới:
```
□ bai-hoc/[ten-bai-hoc].html            ← file chính
□ index.html                             ← thêm card vào grid bài học
□ ban-do-khai-niem.html                 ← thêm nội dung vào bản đồ khái niệm (nếu có)
```

### Format commit message chuẩn:
```
feat: add [tên nhân vật/bài học] - sync all related pages

- [ten-file].html: [mô tả ngắn]
- index.html: add card to character/lesson grid  
- so-do-trieu-dinh.html: add node (nếu có)
- ban-do.html: add location (nếu có)
```

---

## 📅 QUY TẮC 3: THỨ TỰ THỜI GIAN trong index.html

Khi thêm card mới vào index (nhân vật hoặc bài học), **PHẢI chèn đúng vị trí theo thứ tự thời gian**:

### Nhân vật — thứ tự theo năm tại vị / hoạt động chính:
```
40 SCN    → Hai Bà Trưng
~791      → Phùng Hưng
905       → Khúc Thừa Dụ
931       → Dương Đình Nghệ
938       → Ngô Quyền
968       → Đinh Bộ Lĩnh
979       → Dương Vân Nga
980       → Lê Hoàn
TK X-XI   → Thiền Sư Vạn Hạnh
1005      → Lê Long Đĩnh
1009      → Lý Công Uẩn
1028      → Lý Thái Tông
1019      → Lý Thường Kiệt   ← chèn trước Lý Thánh Tông
1054      → Lý Thánh Tông
1044      → Hoàng Hậu Ỷ Lan
1072      → Lý Nhân Tông
1075      → Lê Văn Thịnh
1076      → Quách Quỳ
1065      → Nguyễn Minh Không  ← chèn sau nhóm 1075
1102      → Tô Hiến Thành
1128      → Lý Thần Tông
1138      → Lý Anh Tông
1173      → Lý Cao Tông
```

### ❌ Lỗi cần tránh:
- Thêm nhân vật vào cuối list mà không kiểm tra mốc thời gian
- Đặt nhân vật sai vị trí so với timeline

---

## 🔄 QUY TRÌNH CHUẨN khi nhận file nội dung từ user:

```
1. ĐỌC file gốc  → CHỈ extract text/nội dung
2. REBUILD      → Dùng template chuẩn của project (KHÔNG copy design cũ)
3. VERIFY       → Kiểm tra font, styles, layout đúng chưa
4. UPDATE INDEX → index.html (thêm card)
5. UPDATE SƠ ĐỒ → so-do-trieu-dinh.html + ban-do.html (nếu cần)
6. COMMIT       → git add tất cả file liên quan CÙNG LÚC
7. PUSH         → git push origin main
```

---

*Cập nhật: 2026-06-02 | Lý do: User nhắc nhở sau lỗi sai design và commit thiếu pages*
