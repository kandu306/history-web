# Changelog

Tất cả những thay đổi quan trọng của dự án **Lịch Sử Việt Nam — Khoá học phân tích nhân vật** sẽ được lưu trữ tại tệp này.

---

## [2026-05-23]

### Added
- **5 Bài học Lịch sử mới**: Tích hợp các tệp bài học mới:
  - [nha-nuoc-au-lac.html](file:///d:/01.%20Projects/history-web/bai-hoc/nha-nuoc-au-lac.html) (257–179 TCN)
  - [1000-nam-bac-thuoc.html](file:///d:/01.%20Projects/history-web/bai-hoc/1000-nam-bac-thuoc.html) (111 TCN–938 SCN)
  - [ngo-quyen.html](file:///d:/01.%20Projects/history-web/bai-hoc/ngo-quyen.html) (938 SCN)
  - [loan-12-su-quan.html](file:///d:/01.%20Projects/history-web/bai-hoc/loan-12-su-quan.html) (944–968 SCN)
  - [nha-tien-le.html](file:///d:/01.%20Projects/history-web/bai-hoc/nha-tien-le.html) (979–981 SCN)
- **3 Nhân vật Lịch sử mới**: Tích hợp các tệp phân tích 3 Gốc / 3 Độc mới:
  - [le-long-dinh.html](file:///d:/01.%20Projects/history-web/nhan-vat/le-long-dinh.html) (1005–1009 SCN)
  - [thien-su-van-hanh.html](file:///d:/01.%20Projects/history-web/nhan-vat/thien-su-van-hanh.html) (Cuối TK X - Đầu TK XI)
  - [ly-cong-uan.html](file:///d:/01.%20Projects/history-web/nhan-vat/ly-cong-uan.html) (1009–1028 SCN - hoàn thiện 100% phần khuyết ở cuối).
- **Bản đồ Khái niệm tương tác**: Tạo mới trang tương tác [ban-do.html](file:///d:/01.%20Projects/history-web/ban-do.html) thể hiện lộ trình thời gian và 5 quy luật lịch sử lặp lại.
- **Tài liệu Lộ trình Vĩ mô**: Tạo mới phác thảo tổng thể [master-concept-map.md](file:///d:/01.%20Projects/history-web/docs/master-concept-map.md) phục vụ cộng tác mở rộng.
- **Custom Project Skill**: Thiết lập cẩm nang kỹ thuật & quy chuẩn [SKILL.md](file:///d:/01.%20Projects/history-web/.brain/skills/history-web-manager/SKILL.md) hướng dẫn vận hành dự án chi tiết.

### Changed
- **Trang chủ index.html**:
  - Tái cấu trúc và kích hoạt 3 card nhân vật mới, nâng bộ đếm lên **11 / 20+ nhân vật**.
  - Sắp xếp lại danh sách bài học theo đúng trật tự thời gian (Loạn 12 Sứ Quân lên trước Đinh - Lê), nâng bộ đếm bài học lên **7 bài**.
  - Liên kết trang Bản đồ khái niệm vào Menu Điều hướng.
- **Dọn dẹp mã nguồn**: Xóa bỏ các hộp ghi chú nháp/metadata còn sót lại trong `dinh-le.html` và `nha-nuoc-van-lang.html`.
- **Đồng bộ hóa JSON & Git**: Cập nhật `brain.json`, `session.json`, commit và đẩy toàn bộ thay đổi lên GitHub.

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
