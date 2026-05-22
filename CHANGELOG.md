# Changelog

Tất cả những thay đổi quan trọng của dự án **Lịch Sử Việt Nam — Khoá học phân tích nhân vật** sẽ được lưu trữ tại tệp này.

---

## [2026-05-22]

### Added
- **Hai Bà Trưng — Phân tích nhân vật**: Tạo mới trang phân tích [hai-ba-trung.html](file:///d:/01.%20Projects/history-web/nhan-vat/hai-ba-trung.html) (40–43 SCN) theo lăng kính 3 Gốc / 3 Độc từ tệp nguồn.
- **Nhà Nước Văn Lang — Bài học lịch sử**: Tạo mới trang bài học [nha-nuoc-van-lang.html](file:///d:/01.%20Projects/history-web/bai-hoc/nha-nuoc-van-lang.html) (Thế kỷ 7–6 TCN) đối chiếu truyền thuyết và khảo cổ học Đông Sơn.
- **Lê Hoàn — Phân tích nhân vật**: Tạo mới trang phân tích [le-hoan.html](file:///d:/01.%20Projects/history-web/nhan-vat/le-hoan.html) (980–1005 SCN) theo lăng kính 3 Gốc / 3 Độc.
- **Cơ sở tri thức dynamic**: Bổ sung hệ thống quản lý session dynamic [session.json](file:///d:/01.%20Projects/history-web/.brain/session.json) v3.3.

### Changed
- **Trang chủ index.html**:
  - Kích hoạt card nhân vật **Hai Bà Trưng**, hiển thị ratings, cập nhật description và liên kết hoạt động.
  - Kích hoạt card nhân vật **Lê Hoàn**, hiển thị ratings, cập nhật description và liên kết hoạt động.
  - Chèn card bài học **Nhà Nước Văn Lang** lên đầu danh sách bài học (Bài 1).
  - Cập nhật bộ đếm: **8 / 20+ nhân vật** hoạt động và **2 bài học** hoạt động.
- **Loại bỏ "Bớt Tối" (Sạch 100%)**:
  - Sửa đổi `index.html` dòng 268: Đổi nhãn `⭐ Bớt Tối` thành `⭐ Bài học cốt lõi`.
  - Sửa đổi `bai-hoc/dinh-le.html`: Đổi các nhãn `Bớt Tối` thành `Tư duy thực tế`, `⭐ Potential Bớt Tối` thành `⭐ Bài học cốt lõi` và góc phân tích thành `rất giàu tính phản biện`.
- **Cơ sở tri thức static [brain.json](file:///d:/01.%20Projects/history-web/.brain/brain.json)**: Đồng bộ danh sách bài học và nhân vật mới.

---

## [2026-05-21]

### Added
- Khởi tạo dự án `history-web` — website tĩnh phân tích lịch sử Việt Nam.
- Thiết lập hệ thống tài nguyên dùng chung: `shared/styles.css` và `shared/scripts.js`.
- Phân tích 5 nhân vật đầu tiên: Phùng Hưng, Khúc Thừa Dụ, Dương Đình Nghệ, Ngô Quyền, Đinh Bộ Lĩnh, Dương Vân Nga.
- Thiết lập bài học đầu tiên: Đinh – Lê.
- Thiết lập trang chủ danh sách nhân vật `index.html` tích hợp thanh tiến trình đọc, IntersectionObserver hiệu ứng chuyển động và responsive.
