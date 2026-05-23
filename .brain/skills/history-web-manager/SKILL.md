# Skill: History Web Project Manager (history-web-manager)

Cẩm nang hướng dẫn thao tác, chuẩn hóa nội dung và quy trình đồng bộ hóa kỹ thuật dành cho dự án `history-web`.

---

## 📌 Tổng quan dự án
Dự án `history-web` là nền tảng học tập lịch sử Việt Nam chất lượng cao. Dự án phân tích các nhân vật lịch sử và các sự kiện lịch sử dưới lăng kính **3 Gốc (Trí tuệ, Đạo đức, Nghị lực)** và **3 Độc (Tham lam, Sân hận, Si mê)**, kết hợp rút ra các bài học thực tiễn ứng dụng cho đời sống hiện đại.

---

## 🛠️ Quy chuẩn Kỹ thuật & Thiết kế (Visual & Coding Guidelines)

### 1. Hệ thống Stylesheet và Scripts chung
Tất cả các trang mới (`bai-hoc/*.html` và `nhan-vat/*.html`) bắt buộc phải thừa hưởng:
* **Tailwind CSS (CDN)** làm nền tảng.
* **Shared Assets**:
  - CSS: `../shared/styles.css` (Cung cấp bảng màu kem `#faf9f7`, đỏ sậm `#9b1c1c`, gradient hổ phách, hiệu ứng căn lề, kiểu chữ Serif sang trọng).
  - JS: `../shared/scripts.js` (Cung cấp chức năng Reading Progress Bar, Menu Hamburger, IntersectionObserver cho hiệu ứng cuộn mượt).
  - Favicon: `../shared/favicon.svg`
* **Navigation & Footer**: Đảm bảo hiển thị thanh điều hướng Sticky Nav (bắt buộc hỗ trợ Menu di động) và chân trang đồng điệu với trang chủ.

### 2. Quy chuẩn Nội dung Nhân vật (3 Gốc / 3 Độc)
Mỗi trang nhân vật cần tuân thủ cấu trúc:
* **Mở đầu (Hero section):** Tiêu đề lớn, thời kỳ, các thẻ mốc sự kiện chính, và một bảng tóm tắt nhanh dạng **TL;DR** trực quan làm nổi bật tỉ lệ 3 Gốc / 3 Độc.
* **Tiểu sử nhanh:** Tóm tắt niên đại và các sự kiện chính dưới dạng timeline.
* **Phân tích 3 Gốc & 3 Độc:** Sử dụng các thẻ đánh giá sao (`★★★★★`) và thanh tỷ lệ trực quan `.score-bar-fill`.
* **Góc nhìn đa chiều/Câu hỏi triết học:** Khai thác các khía cạnh tranh biện lịch sử.
* **Bài học cốt lõi:** Rút ra tối thiểu 2 bài học thực tế ứng dụng trong đời sống hiện đại.
* **Liên kết nhân vật:** Tạo liên kết chéo thông minh đến các nhân vật liên quan.

### 3. Quy chuẩn nội dung Bài học
Mỗi trang bài học cần tuân thủ cấu trúc:
* **Hero Section & TL;DR**
* **4 Ý chính** (hoặc nội dung cốt lõi của bài học)
* **Dễ nhầm** (các điểm ngộ nhận lịch sử phổ biến)
* **Áp dụng vào tư duy thực tế**
* **Trích dẫn nổi bật & Bài học cốt lõi**
* **Bước Tiếp Theo** (liên kết đến bài học tiếp theo)

---

## 🚫 Nguyên tắc "SẠCH BỚT TỐI 100%"
Tuyệt đối không để sót hoặc lạm dụng từ khóa nhạy cảm "Bớt Tối" hay "bớt tối" trong mã nguồn và nội dung hiển thị:
* Chuyển hóa nhãn `Bớt Tối` thành **`Bài học cốt lõi`**, **`Tư duy thực tế`**, hoặc **`Tư duy phản biện`**.
* Đảm bảo giọng văn lịch sử nghiêm túc, khoa học, khách quan và giàu tính đúc kết thực tiễn.

---

## 🔗 Quy trình 4 bước đồng bộ hóa khi thêm nội dung mới

Khi thêm 1 bài học hoặc 1 nhân vật mới vào hệ thống, bắt buộc phải thực hiện đủ 4 bước đồng bộ:

```
[Tạo trang mới]
      │
      ▼
1. Cập nhật Trang chủ (index.html) ────► Tăng bộ đếm & Kích hoạt card theo đúng NIÊN ĐẠI LỊCH SỬ
      │
      ▼
2. Đồng bộ Cơ sở Tri thức (brain.json) ──► Thêm vào content_plan đúng trật tự thời gian
      │
      ▼
3. Cập nhật Báo cáo tiến trình (session.json) ──► Cập nhật working_on, recent_changes & timestamps
      │
      ▼
4. Git Commit & Push ──────────────────► Đẩy lên GitHub repository (main branch)
```

### Chi tiết bước 1: Sắp xếp niên đại lịch sử trên Trang chủ
Các card bài học và nhân vật bắt buộc phải xếp theo thứ tự thời gian tăng dần từ cổ đại đến trung đại:
* **Bài học:** Văn Lang (TK 7-6 TCN) $\rightarrow$ Âu Lạc (257-179 TCN) $\rightarrow$ Bắc Thuộc (111 TCN - 938 SCN) $\rightarrow$ Ngô Quyền (938 SCN) $\rightarrow$ Loạn 12 Sứ Quân (944-968 SCN) $\rightarrow$ Đinh - Lê (968-1009 SCN) $\rightarrow$ Nhà Tiền Lê (979-981 SCN).
* **Nhân vật:** Hai Bà Trưng $\rightarrow$ Phùng Hưng $\rightarrow$ Khúc Thừa Dụ $\rightarrow$ Dương Đình Nghệ $\rightarrow$ Ngô Quyền $\rightarrow$ Đinh Bộ Lĩnh $\rightarrow$ Dương Vân Nga $\rightarrow$ Lê Hoàn $\rightarrow$ Thiền Sư Vạn Hạnh $\rightarrow$ Lê Long Đĩnh $\rightarrow$ Lý Công Uẩn.
* **Counter:** Đảm bảo cập nhật chính xác bộ đếm bài học và nhân vật trên trang chủ.
