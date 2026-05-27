# 🎨 DESIGN: Trang Chủ Lịch Sử Việt Nam (index.html) Redesign

**Ngày tạo:** 2026-05-27
**Dự án:** `history-web`
**Trạng thái thiết kế:** Đã phê duyệt bởi Khách hàng (USER)

---

## 1. Phân Tích Hiện Trạng & Khắc Phục Lỗi Chí Mạng

### 1.1. Lỗi hiển thị nghiêm trọng (Lỗi tàng hình)
*   **Hiện tượng:** Tiêu đề lớn nhất trang **"Lịch Sử Việt Nam"** dùng class `text-[#faf9f7]` (màu kem sáng) trên nền body mặc định cũng là `#faf9f7` (màu kem sáng).
*   **Hậu quả:** Tiêu đề bị **tàng hình 100%** trên trang chủ, tạo ra khoảng trống trống trải kỳ lạ ở góc trên bên phải màn hình.
*   **Giải pháp:** Tái cấu trúc phân vùng Hero thành **Deep Obsidian & Crimson Gradient** (Nền tối hoàng gia), giúp chữ màu kem nổi bật rực rỡ và tạo chiều sâu thị giác cực mạnh ngay khi tải trang.

---

## 2. Bản Thiết Kế Chi Tiết Giao Diện Mới (UI Component Specification)

### 2.1. Phân khu 1: Hero Section (Cổng Vào Bảo Tàng Số)
*   **Nền (Background):** `bg-[#1c1917]` kết hợp gradient chéo chìm `bg-gradient-to-br from-[#1c1917] via-[#3a1c1c] to-[#1c1917]` tạo cảm giác cổ kính, sâu thẳm.
*   **Bố cục (Layout):** Chia làm 2 cột rõ rệt trên màn hình lớn (Grid 12 cột: Trái 7 cột, Phải 5 cột):
    *   **Cột Trái (Nội dung chính):**
        *   Badge "Khoá học phân tích nhân vật" được cách điệu mềm mại.
        *   Tiêu đề chính "Lịch Sử Việt Nam" (`Noto Serif` quyến rũ, size lớn, màu kem `#faf9f7`).
        *   Dòng phụ đề dẫn nhập màu xám ấm `#a8a29e`.
        *   Hàng chỉ số thống kê (Stats Grid) mạ vàng đồng thau nhạt.
    *   **Cột Phải (Thẻ Tri Thức Hùng Vĩ - Great Archive Panel):**
        *   Một chiếc hộp kính mờ (Glassmorphism card) màu sậm `bg-[#292524]/60 backdrop-blur-md` viền đồng chìm.
        *   Bên trong chứa **Bản đồ khái niệm thu nhỏ** hoặc bộ đếm thời gian lịch sử bằng CSS tinh xảo, kích thích người dùng bấm vào nút "Khám phá Bản đồ Khái niệm".
*   **Hệ thống nút tiêu chí nhanh (Criteria Pills):** Thiết kế lại đồng bộ dưới chân Hero, xếp gọn gàng, đổi màu từ đặc (solid) sang viền phát sáng (glowing borders) nhẹ nhàng khi di chuột.

### 2.2. Phân khu 2: Khung Phương Pháp 3 Gốc / 3 Độc (Methodology Upgrade)
*   **Cấu trúc:** Giữ nguyên 2 cột lớn, nhưng thiết kế lại thẻ chứa:
    *   Sử dụng hiệu ứng viền chìm hoàng gia.
    *   **Icon SVG độc quyền:** Tự vẽ các biểu tượng hình học tối giản bằng SVG (không dùng emoji thô sơ):
        *   *Trí tuệ:* Biểu tượng ngọn đuốc tri thức / vòng tròn đồng tâm SVG.
        *   *Đạo đức:* Biểu tượng cán cân công lý SVG tinh xảo.
        *   *Nghị lực:* Biểu tượng tia sét / ngọn núi SVG kiên định.
        *   *Tham lam/Sân giận/Si mê:* Các biến thể SVG sắc sảo đối lập.
    *   Nền thẻ màu trắng ngà mượt mà, bóng đổ khuếch tán cực rộng (`shadow-xl` với opacity chìm).

### 2.3. Phân khu 3: Danh Sách Card Bài Học & Nhân Vật (Card Grid Polishing)
*   **Thanh tiến trình chìm (Track line):** Mỗi card sẽ có một đường line gradient mỏng 2px ở mép trên để điều hướng ánh nhìn.
*   **Hiệu ứng di chuột (Card-Hover System):**
    *   Nâng card lên 4px (`-translate-y-1`).
    *   Bóng đổ mịn màu đỏ gạch mờ tỏa ra xung quanh (`shadow-[0_15px_30px_-5px_rgba(155,28,28,0.12)]`).
    *   Viền card tự động chuyển sang màu đỏ sậm `#9b1c1c` thanh mảnh.
*   **Gom nhóm Pills:** Dọn sạch các nhãn dư thừa, chỉ giữ lại các nhãn thực sự cần thiết, phân bố khoảng cách thoáng đãng chuẩn chuyên nghiệp.

---

## 3. Luồng Hoạt Động (User Journey)

1.  **Bước 1:** Người dùng truy cập trang chủ → Bị ấn tượng bởi màn Hero tối huyền bí sang trọng, tiêu đề "Lịch Sử Việt Nam" phát sáng nổi bật trên nền obsidian cổ kính.
2.  **Bước 2:** Nhìn sang bên phải → Thấy thẻ "Bản đồ khái niệm" mờ ảo cực kỳ kích thích tò mò → Có thể bấm đi tới [ban-do.html](file:///d:/01.%20Projects/history-web/ban-do.html) ngay lập tức.
3.  **Bước 3:** Cuộn xuống dưới → Thấy khung Phương pháp với các biểu tượng SVG chuyên nghiệp, giải thích rõ ràng triết lý dự án.
4.  **Bước 4:** Lướt qua danh sách Bài học / Nhân vật sắp xếp theo dòng thời gian chuẩn chỉ → Di chuột vào card thấy tương tác mượt mà → Bấm vào đọc chi tiết.

---

## 4. Checklist Kiểm Tra & Nghiệm Thu (Acceptance Criteria)

-   [ ] **Lỗi tàng hình:** Tiêu đề "Lịch Sử Việt Nam" phải hiển thị sắc nét, tương phản hoàn hảo trên nền tối.
-   [ ] **Responsive:** Màn Hero phải co giãn mượt mà từ Mobile (1 cột dọc) lên Desktop (2 cột song song cân đối).
-   [ ] **Thẩm mỹ cao cấp:** Tuyệt đối không còn emoji thô trong mục phương pháp, thay bằng Icon SVG đồng bộ.
-   [ ] **Micro-animations:** Các nút bấm, card nhân vật và bài học phải có hiệu ứng chuyển cảnh mượt mà khi hover (transition duration từ 200ms - 300ms).
-   [ ] **Sạch 100% Bớt Tối:** Không tồn tại từ khóa cấm trong file index.html mới.

---
*Tạo bởi AWF 4.0 - Minh Solution Architect*
