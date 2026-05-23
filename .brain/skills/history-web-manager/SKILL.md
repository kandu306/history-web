# Skill: History Web Project Manager (history-web-manager)

Cẩm nang quy chuẩn kỹ thuật thực chiến, cấu trúc mã nguồn chi tiết và quy trình đồng bộ hóa tự động dành cho hệ thống `history-web`.

---

## 🚫 1. Nguyên Tắc Vàng "SẠCH BỚT TỐI 100%" (Bắt buộc)
Tuyệt đối không để sót hoặc lạm dụng từ khóa "Bớt Tối" trong toàn bộ mã nguồn HTML, comment, và nội dung hiển thị. 

### Bảng tra cứu chuyển hóa từ khóa nháp:
| Từ khóa nháp (Cấm) | Từ khóa chuẩn hóa thay thế (Chọn) | Bối cảnh sử dụng |
| :--- | :--- | :--- |
| `Bớt Tối` | `Bài học cốt lõi` hoặc `Tư duy thực tế` | Tiêu đề nhãn, tag |
| `Potential Bớt Tối` | `Bài học cốt lõi` | Điểm nhấn nội dung chính |
| `rất giàu tính bớt tối` | `rất giàu tính thực tiễn và phản biện` | Nhận xét phân tích |
| `góc nhìn bớt tối` | `góc nhìn tư duy thực dụng` | Tiêu đề phân tích |

*Lưu ý: Luôn chạy lệnh kiểm tra trước khi commit:*
```powershell
# Chạy trong PowerShell để quét từ khóa cấm
Get-ChildItem -Recurse -Include *.html, *.json, *.js, *.css | Select-String "bớt tối"
```

---

## 🎨 2. Quy Chuẩn Thiết Kế Giao Diện & Boilerplate Mã Nguồn

### 2.1. Cấu trúc chuẩn của một trang Nhân vật (`nhan-vat/*.html`)
Sao chép chính xác cấu trúc mẫu dưới đây để tạo trang nhân vật mới nhằm đảm bảo tính đồng bộ 100% về visual:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Tên Nhân Vật] — [Danh Hiệu]: [Mô tả ngắn gọn] | Phân tích 3 Gốc / 3 Độc</title>
  <meta name="description" content="[Tóm tắt phân tích 3 Gốc/3 Độc của nhân vật trong 150 ký tự]">
  <link class="js-favicon" rel="icon" type="image/svg+xml" href="../shared/favicon.svg">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Noto+Serif:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../shared/styles.css">
  <script src="../shared/scripts.js" defer></script>
</head>
<body class="font-sans antialiased text-[#1c1917]">
  <div id="progress-bar"></div>

  <!-- Sticky Nav -->
  <nav style="background: rgba(250,249,247,0.92); backdrop-filter: blur(12px);" class="sticky top-0 z-50 border-b border-[#e7e5e4]">
    <div class="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
      <div class="flex items-center gap-2 text-sm text-[#78716c]">
        <a href="../index.html" class="text-[#9b1c1c] text-base leading-none hover:opacity-75 transition-opacity">◈</a>
        <span>Lịch sử Việt Nam</span>
        <span class="text-[#d6d3d1]">›</span>
        <span class="font-medium text-[#1c1917]">[Tên Nhân Vật]</span>
      </div>
      <span class="text-xs text-[#a8a29e] font-semibold tracking-widest uppercase hidden sm:block">3 Gốc / 3 Độc</span>
    </div>
  </nav>

  <main>
    <header class="max-w-4xl mx-auto px-6 pt-16 pb-12">
      <div class="relative overflow-hidden">
        <!-- Label & Thời kỳ -->
        <div class="flex flex-wrap items-center gap-3 mb-7">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-[#fef2f2] text-[#9b1c1c] rounded-full border border-[#9b1c1c]/20">Phân tích nhân vật</span>
          <span class="text-sm text-[#78716c] font-medium">[Thời gian trị vì/hoạt động SCN] · [Triều đại]</span>
        </div>

        <h1 class="font-serif font-bold text-[#1c1917] leading-tight mb-4" style="font-size: clamp(2.75rem, 6vw, 4rem);">[Tên Nhân Vật]</h1>
        <p class="font-serif text-xl text-[#78716c] italic leading-snug mb-8 max-w-xl">[Tên phụ] — <em class="text-[#9b1c1c] not-italic font-semibold">[Hình mẫu đặc trưng]</em></p>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 pt-2 pb-2">
          <div class="rounded-xl bg-[#fafaf8] border border-[#e7e5e4] p-4 text-center sm:text-left card-hover">
            <div class="font-serif text-3xl font-bold text-[#9b1c1c]">[Mốc 1]</div>
            <div class="text-[10px] text-[#78716c] font-semibold tracking-wider uppercase mt-1">[Sự kiện 1]</div>
          </div>
          <!-- Lặp lại 3 khối tương tự -->
        </div>

        <!-- TL;DR Card -->
        <div class="relative rounded-2xl bg-[#1c1917] p-8 overflow-hidden shadow-md">
          <div class="relative z-10">
            <div class="text-xs font-semibold tracking-[0.15em] uppercase text-[#9b1c1c] mb-3">TL;DR / Tóm tắt nhanh</div>
            <p class="text-base leading-relaxed text-[#d6d3d1] mb-5">[Nội dung tóm tắt cốt lõi]</p>
          </div>
        </div>
      </div>
    </header>

    <article class="max-w-[700px] mx-auto px-6 pb-28">
      <!-- Nội dung chi tiết các phần: Tiểu sử nhanh, Phân tích 3 Gốc, Phân tích 3 Độc -->
      <!-- Điểm số Ratings mẫu -->
      <div class="card p-6 mb-5">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0" style="background:#fef2f2; color:#9b1c1c; border:1px solid rgba(155,28,28,0.2);">T</div>
          <h3 class="font-serif text-xl font-bold text-[#1c1917] mb-0">Trí tuệ: [Tiêu đề phụ]</h3>
          <div class="ml-auto text-right">
            <span class="text-[#f59e0b]">★★★★★</span>
            <div class="score-bar-bg"><div class="score-bar-fill" style="width:100%;"></div></div>
          </div>
        </div>
        <p class="text-base leading-relaxed text-[#44403c]">[Nội dung phân tích Trí tuệ]</p>
      </div>
    </article>
  </main>
</body>
</html>
```

### 2.2. Style Classes & Mảng Màu Cố Định (CSS Variables)
Không tạo màu tự do. Sử dụng các token màu cố định để bảo toàn thẩm mỹ cao cấp:
* Nền trang (`body`): `#faf9f7` (màu kem ấm áp, bảo vệ mắt).
* Màu thương hiệu chính (`brand-primary`): `#9b1c1c` (đỏ sậm trang trọng).
* Màu điểm nhấn (`brand-accent`): `#b45309` (màu đồng thau/amber cổ kính).
* Chữ tiêu đề (`headings`): `#1c1917` (màu đá xám đậm).
* Chữ nội dung (`body-text`): `#44403c` (xám ấm).

---

## 🔗 3. Quy Trình Đồng Bộ Hóa Hệ Thống 4 Bước (Bắt buộc khi thêm bài viết)

Mỗi khi tích hợp thêm một bài viết mới, bắt buộc phải hoàn thành trọn vẹn 4 bước đồng bộ kỹ thuật sau:

### Bước 1: Cập nhật Trang chủ (`index.html`)
* **Đối với bài học:** Tìm thẻ `<span class="text-sm text-[#a8a29e]">X bài</span>` và cập nhật lại số lượng chính xác. Chèn thẻ card `<a>` vào đúng vị trí dòng thời gian lịch sử.
* **Đối với nhân vật:** Tìm thẻ `<span class="text-sm text-[#a8a29e]">Y / 20+ nhân vật</span>` và cập nhật số Y. Kích hoạt hoặc chèn thẻ card `<a>` vào vị trí chính xác sau triều đại liền trước.
* **Quy định thiết kế card hoạt động:**
```html
<a href="nhan-vat/[file-name].html" id="card-[id-name]"
   class="card-hover rounded-2xl border border-[#9b1c1c]/25 bg-white overflow-hidden block"
   style="box-shadow: 0 0 0 1px rgba(155,28,28,0.1), 0 4px 20px rgba(155,28,28,0.07);">
  <div class="h-2 bg-gradient-to-r from-[#9b1c1c] to-[#b45309]"></div>
  <div class="p-6">
    <div class="mb-4">
      <span class="period-badge tag" style="background:#fef2f2; color:#9b1c1c; border:1px solid rgba(155,28,28,0.2);">[Niên đại]</span>
    </div>
    <h3 class="font-serif text-xl font-bold text-[#1c1917] mb-1">[Tên Nhân Vật]</h3>
    <p class="text-sm text-[#78716c] italic mb-4">[Tóm tắt đặc trưng ngắn gọn]</p>
    <div class="flex flex-wrap gap-2 mb-4">
      <span class="inline-flex items-center gap-1.5 text-xs text-[#57534e]">
        <span class="text-[#f59e0b]">★★★★★</span> [Chỉ số 1]
      </span>
      <span class="inline-flex items-center gap-1.5 text-xs text-[#57534e]">
        <span class="text-[#f59e0b]">★★★★★</span> [Chỉ số 2]
      </span>
    </div>
  </div>
</a>
```

### Bước 2: Đồng bộ hóa cơ sở tri thức (`.brain/brain.json`)
Cập nhật danh sách trong `content_plan.nhan_vat` hoặc `content_plan.bai_hoc` đúng theo thứ tự niên đại.
```json
{
  "ten": "Tên Hiển Thị",
  "file": "thue-muc/file-name.html",
  "status": "done"
}
```

### Bước 3: Ghi nhận báo cáo tiến trình (`.brain/session.json`)
Cập nhật các trường:
* `"updated_at"`: Thời gian chạy lệnh (ISO format).
* `"working_on"`: Ghi rõ tính năng, trạng thái `"completed"` và các tệp liên quan.
* `"recent_changes"`: Mô tả ngắn gọn sự thay đổi để AI phiên sau đọc hiểu ngay lập tức.

### Bước 4: Git Commit & Push
Chạy chuỗi lệnh chuẩn hóa để đẩy mã nguồn lên GitHub:
```powershell
git status
git add .
git commit -m "feat: integrate [tên bài/nhân vật], sync index counters, and update brain json"
git push origin main
```
