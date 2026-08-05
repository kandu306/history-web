const fs = require("fs");
const path = require("path");
const { makeCharacterPage } = require("./generate-helper");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "src");
const CHAR_DIR = path.join(SRC, "nhan-vat");

const characters = [
  // 1. Nguyễn Huệ
  {
    filename: "nguyen-hue.html",
    title: "Nguyễn Huệ (Vua Quang Trung) — Hoàng Đế Áo Vải | Phân tích 3 Gốc / 3 Độc",
    description: "Phân tích Vua Quang Trung Nguyễn Huệ theo 3 Gốc & 3 Độc — Thiên tài quân sự, anh hùng áo vải, xóa bỏ Trịnh–Nguyễn, đại phá quân Xiêm (1785) & quân Thanh (1789), cải cách vượt thời đại.",
    breadcrumb: "Quang Trung (Nguyễn Huệ)",
    eraLine: "1771–1792 SCN · Hoàng Đế Triều Tây Sơn · Anh Hùng Áo Vải",
    name: "Nguyễn Huệ — Vua Quang Trung",
    subtitle: "Thiên tài quân sự & Bậc thầy canh tân — 20 năm cầm quân bất bại, đại phá 5 vạn quân Xiêm & 29 vạn quân Thanh.",
    infoLine1: "Em thứ hai trong ba anh em Tây Sơn · Xưng đế Quang Trung 1788 tại Núi Bân",
    infoLine2: "Sinh 1753 tại Bình Định · Mất đột ngột 1792 (thọ 40 tuổi)",
    verdict: "Thiên tài quân sự - chính trị số 1 lịch sử Việt Nam. 20 năm cầm quân từ năm 18 đến 40 tuổi chưa từng thất bại. Lật đổ hai tập đoàn phong kiến Trịnh - Nguyễn, đại phá 5 vạn quân Xiêm tại Rạch Gầm - Xoài Mút (1785) và 29 vạn quân Thanh tại Ngọc Hồi - Đống Đa Tết Kỷ Dậu (1789). Ban Chiếu khuyến nông, đưa chữ Nôm làm ngôn ngữ quốc gia trước khi đột ngột qua đời.",
    goc: [
      { label: "Trí tuệ", stars: "★★★★★", desc: "[SỰ KIỆN] Bậc thầy tốc độ, bất ngờ và tư duy thể chế. Nhận diện thời cơ \"Phù Lê diệt Trịnh\" 1786; lập bẫy Rạch Gầm - Xoài Mút; đánh thần tốc Tết 1789. Đưa chữ Nôm làm ngôn ngữ quốc gia — cải cách vượt thời đại." },
      { label: "Đạo đức", stars: "★★★★☆", desc: "[SỰ KIỆN] Vì nước vì dân, đại xá tù binh, đối xử bao dung với sĩ phu Bắc Hà (Ngô Thì Nhậm, Nguyễn Thiếp). Thương dân nghèo, bãi bỏ các khoản thuế phi lý." },
      { label: "Nghị lực", stars: "★★★★★", desc: "[SỰ KIỆN] Quyết đoán vô song. Khi hay tin 29 vạn quân Thanh chiếm Thăng Long, trong vài ngày vừa xưng đế vừa tiến quân cấp tốc ra Bắc giải phóng đất nước." }
    ],
    doc: [
      { label: "Tham lam", stars: "★★☆☆☆", desc: "[SUY LUẬN] Không tham tài sản cá nhân nhưng khát vọng lớn về thống nhất và canh tân đất nước." },
      { label: "Sân giận", stars: "★★★☆☆", desc: "[SỰ KIỆN] Quyết liệt, nóng tính trên chiến trường nhưng kiểm soát tốt trong ngoại giao." },
      { label: "Si mê", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Tỉnh táo, sắc bén trong mọi quyết định chiến lược." }
    ],
    lessons: [
      { title: "Sức mạnh của Tốc độ và Sự bất ngờ", desc: "Tốc độ hành quân và tính bất ngờ là vũ khí tối thượng của Quang Trung. Trận Đống Đa Tết 1789 là kinh điển tác chiến thần tốc." },
      { title: "Thu phục sĩ phu và Canh tân văn hóa", desc: "Sử dụng trọng dụng Ngô Thì Nhậm, Nguyễn Thiếp và đưa chữ Nôm làm chữ viết hành chính chứng minh tầm vóc nhà lập pháp vượt thời đại." }
    ],
    links: [
      { text: "📖 Bài học: Nhà Tây Sơn", url: "../bai-hoc/nha-tay-son.html" },
      { text: "👑 Thái Đức Đế (Nguyễn Nhạc)", url: "nguyen-nhac.html" },
      { text: "📜 Ngô Thì Nhậm", url: "ngo-thi-nham.html" },
      { text: "📜 La Sơn Phu Tử", url: "nguyen-thiep.html" }
    ]
  },

  // 2. Nguyễn Nhạc
  {
    filename: "nguyen-nhac.html",
    title: "Nguyễn Nhạc (Thái Đức Đế) — Thủ Lĩnh Khởi Xướng Tây Sơn | Phân tích 3 Gốc / 3 Độc",
    description: "Phân tích Thái Đức Đế Nguyễn Nhạc theo 3 Gốc & 3 Độc — Anh cả ba anh em Tây Sơn, dấy binh 1771, quy tụ lực lượng, đặt nền móng lật đổ Đàng Trong nhưng hạn chế tư duy địa phương.",
    breadcrumb: "Thái Đức Đế (Nguyễn Nhạc)",
    eraLine: "1771–1793 SCN · Thái Đức Đế · Anh cả Tây Sơn",
    name: "Nguyễn Nhạc — Thái Đức Đế",
    subtitle: "Thủ lĩnh khởi xướng phong trào Tây Sơn — Nhìn xa trông rộng buổi đầu nhưng hạn chế tư duy địa phương.",
    infoLine1: "Anh cả ba anh em Tây Sơn · Xưng vương 1776, xưng đế 1778 tại Quy Nhơn",
    infoLine2: "Sinh tại Bình Định · Mất 1793",
    verdict: "Anh cả trong ba anh em Tây Sơn, người dấy binh khởi nghĩa năm 1771 tại Bình Định. Khôn khéo dùng cờ \"Diệt Trương Phúc Loan\" quy tụ lòng dân, hòa Trịnh đánh Nguyễn để tránh hai mặt trận. Xưng Thái Đức Đế năm 1778, đặt nền móng lật đổ Đàng Trong. Tuy nhiên về sau tư duy bị giới hạn ở Quy Nhơn, mâu thuẫn với Nguyễn Huệ khiến sức mạnh Tây Sơn bị rạn nứt.",
    goc: [
      { label: "Trí tuệ", stars: "★★★★☆", desc: "[SỰ KIỆN] Khôn khéo quy tụ lực lượng, dùng mưu chiếm thành Quy Nhơn 1773, tạm hàng Trịnh để rảnh tay diệt Nguyễn Đàng Trong." },
      { label: "Đạo đức", stars: "★★★☆☆", desc: "[SỰ KIỆN] Thương dân nghèo buổi đầu dấy binh, nhưng về sau sa vào hưởng lạc và đố kỵ với em trai Nguyễn Huệ." },
      { label: "Nghị lực", stars: "★★★★☆", desc: "[SỰ KIỆN] Dũng cảm dấy binh chống lại tập đoàn Chúa Nguyễn hùng mạnh tại Đàng Trong." }
    ],
    doc: [
      { label: "Tham lam", stars: "★★★☆☆", desc: "[SUY LUẬN] Thỏa mãn sớm với quyền lực Quy Nhơn, chia cõi với các em." },
      { label: "Sân giận", stars: "★★★☆☆", desc: "[SỰ KIỆN] Mâu thuẫn dẫn quân vây Nguyễn Huệ tại Phú Xuân 1787." },
      { label: "Si mê", stars: "★★★☆☆", desc: "[SUY LUẬN] Hạn chế tầm nhìn chiến lược toàn quốc, không thấy hết tầm vóc của Nguyễn Huệ." }
    ],
    lessons: [
      { title: "Bài học quy tụ lực lượng ban đầu", desc: "Biết chọn đúng khẩu hiệu 'Diệt Trương Phúc Loan' để tranh thủ sự ủng hộ của toàn dân Đàng Trong." },
      { title: "Tầm quan trọng của Tầm nhìn toàn cục", desc: "Thỏa mãn sớm với địa giới Quy Nhơn đã ngăn cản Nguyễn Nhạc trở thành nhà lãnh đạo thống nhất quốc gia." }
    ],
    links: [
      { text: "📖 Bài học: Nhà Tây Sơn", url: "../bai-hoc/nha-tay-son.html" },
      { text: "👑 Quang Trung (Nguyễn Huệ)", url: "nguyen-hue.html" },
      { text: "👑 Gia Long (Nguyễn Ánh)", url: "nguyen-anh.html" }
    ]
  },

  // 3. Nguyễn Lữ
  {
    filename: "nguyen-lu.html",
    title: "Nguyễn Lữ (Đông Định Vương) — Người Em Hiền Hòa Triều Tây Sơn | Phân tích 3 Gốc / 3 Độc",
    description: "Phân tích Đông Định Vương Nguyễn Lữ theo 3 Gốc & 3 Độc — Người em út ba anh em Tây Sơn, xuất thân tu hành, đảm nhận việc hậu cần và trấn giữ Gia Định nhưng thiếu tài năng quân sự.",
    breadcrumb: "Đông Định Vương (Nguyễn Lữ)",
    eraLine: "1771–1787 SCN · Đông Định Vương · Em út Tây Sơn",
    name: "Nguyễn Lữ — Đông Định Vương",
    subtitle: "Người em út xuất thân tu hành — Quản lý hậu cần và cứu tế nhưng thiếu tài thao lược quân sự.",
    infoLine1: "Em út ba anh em Tây Sơn · Đạo sĩ/Tu sĩ Phật giáo",
    infoLine2: "Phong Đông Định Vương trấn Gia Định 1786 · Mất ~1787",
    verdict: "Người em út trong ba anh em Tây Sơn. Xuất thân là đạo sĩ/tu sĩ, tính tình hiền hòa, phụ trách công tác vận động quần chúng và hậu cần buổi đầu khởi nghĩa. Khi được giao trấn giữ Nam Bộ (Gia Định) năm 1786 với danh hiệu Đông Định Vương, ông không chống đỡ nổi các cuộc tấn công của Nguyễn Ánh và phải rút chạy về Quy Nhơn rồi mất sớm.",
    goc: [
      { label: "Trí tuệ", stars: "★★☆☆☆", desc: "[SỰ KIỆN] Thiếu năng lực chỉ huy quân sự và quản trị chiến lược nơi đầu sóng ngọn gió Nam Bộ." },
      { label: "Đạo đức", stars: "★★★★☆", desc: "[SỰ KIỆN] Hiền lành, thương dân, không màng tranh giành quyền lực với các anh." },
      { label: "Nghị lực", stars: "★★☆☆☆", desc: "[SỰ KIỆN] Dễ dao động và tháo chạy khi bị quân Nguyễn Ánh phản công tại Gia Định." }
    ],
    doc: [
      { label: "Tham lam", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Ít tham vọng cá nhân." },
      { label: "Sân giận", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Nhẫn nại, ôn hòa." },
      { label: "Si mê", stars: "★★★☆☆", desc: "[SUY LUẬN] Thiếu bản lĩnh quân vương, không đáp ứng được yêu cầu thời đại." }
    ],
    lessons: [
      { title: "Đúng người đúng việc", desc: "Nguyễn Lữ giỏi vận động nhân tâm và hậu cần nhưng đặt vào vị trí chỉ huy chiến trường Gia Định là sai lầm chiến lược." }
    ],
    links: [
      { text: "📖 Bài học: Nhà Tây Sơn", url: "../bai-hoc/nha-tay-son.html" },
      { text: "👑 Quang Trung (Nguyễn Huệ)", url: "nguyen-hue.html" }
    ]
  },

  // 4. Nguyễn Quang Toản
  {
    filename: "nguyen-quang-toan.html",
    title: "Nguyễn Quang Toản (Cảnh Thịnh Đế) — Vua Cuối Triều Tây Sơn | Phân tích 3 Gốc / 3 Độc",
    description: "Phân tích Cảnh Thịnh Đế Nguyễn Quang Toản theo 3 Gốc & 3 Độc — Lên ngôi năm 10 tuổi khi Quang Trung mất, bị quyền thần Bùi Đắc Tuyên thao túng, nội bộ chia rẽ dẫn đến sụp đổ 1802.",
    breadcrumb: "Cảnh Thịnh Đế (Nguyễn Quang Toản)",
    eraLine: "1792–1802 SCN · Vua Cảnh Thịnh · Hoàng đế cuối Tây Sơn",
    name: "Nguyễn Quang Toản — Cảnh Thịnh Đế",
    subtitle: "Lên ngôi năm 10 tuổi — Bị quyền thần thao túng, nội bộ chia rẽ dẫn đến sự sụp đổ của vương triều.",
    infoLine1: "Con trai Quang Trung Nguyễn Huệ · Lên ngôi 1792 lúc 10 tuổi",
    infoLine2: "Trị vì 1792–1802 · Bị Nguyễn Ánh bắt và hành quyết 1802",
    verdict: "Hoàng đế cuối cùng triều Tây Sơn. Nối ngôi lúc mới 10 tuổi khi thiên tài Quang Trung đột ngột qua đời năm 1792. Vì quá nhỏ tuổi, triều đình bị cậu ruột Bùi Đắc Tuyên thao túng, gây nên mâu thuẫn nghi kỵ đẫm máu giữa các đại thần (Vũ Văn Dũng, Trần Quang Diệu). Dù về sau nỗ lực chống đỡ nhưng không thể ngăn được đà tiến của Nguyễn Ánh, bị bắt năm 1802.",
    goc: [
      { label: "Trí tuệ", stars: "★★☆☆☆", desc: "[SỰ KIỆN] Quá trẻ tuổi, thiếu tầm nhìn chiến lược và bản lĩnh phân biệt phải trái trước gian thần." },
      { label: "Đạo đức", stars: "★★☆☆☆", desc: "[SỰ KIỆN] Dung túng cậu ruột Bùi Đắc Tuyên hoành hành, nghi kỵ tướng giỏi Trần Quang Diệu." },
      { label: "Nghị lực", stars: "★★☆☆☆", desc: "[SỰ KIỆN] Bất lực trước sự rạn nứt triều đình và đà tấn công của đối thủ Nguyễn Ánh." }
    ],
    doc: [
      { label: "Tham lam", stars: "★★☆☆☆", desc: "[SUY LUẬN] Thụ động hưởng thụ quyền lực sẵn có." },
      { label: "Sân giận", stars: "★★★☆☆", desc: "[SỰ KIỆN] Dễ bị kích động gièm pha." },
      { label: "Si mê", stars: "★★★★☆", desc: "[SUY LUẬN] U mê bị ngoại thích thao túng, đánh mất các cột trụ dũng tướng." }
    ],
    lessons: [
      { title: "Thảm họa ấu chủ và ngoại thích", desc: "Ấu chủ lên ngôi mà chưa có cơ chế nhiếp chính minh bạch sẽ dẫn đến quyền thần thao túng và tự diệt." }
    ],
    links: [
      { text: "📖 Bài học: Nhà Tây Sơn", url: "../bai-hoc/nha-tay-son.html" },
      { text: "👑 Gia Long (Nguyễn Ánh)", url: "nguyen-anh.html" },
      { text: "⚔️ Trần Quang Diệu", url: "tran-quang-dieu.html" }
    ]
  },

  // 5. Nguyễn Ánh
  {
    filename: "nguyen-anh.html",
    title: "Nguyễn Ánh (Vua Gia Long) — Nhẫn Nại Phục Thù & Thống Nhất | Phân tích 3 Gốc / 3 Độc",
    description: "Phân tích Vua Gia Long Nguyễn Ánh theo 3 Gốc & 3 Độc — Chúa Nguyễn cuối cùng, kiên trì 25 năm nếm mật nằm gai, kết nối phương Tây, lật đổ Tây Sơn năm 1802 lập ra Nhà Nguyễn.",
    breadcrumb: "Gia Long (Nguyễn Ánh)",
    eraLine: "1777–1820 SCN · Gia Long Hoàng Đế · Khai quốc Nhà Nguyễn",
    name: "Nguyễn Ánh — Vua Gia Long",
    subtitle: "Biểu tượng kiên trì 25 năm nếm mật nằm gai — Kết nối kỹ thuật phương Tây, thống nhất đất nước 1802.",
    infoLine1: "Chúa Nguyễn thứ 10 & Vua đầu Nhà Nguyễn · Trốn thoát thảm sát 1777",
    infoLine2: "Lên ngôi Gia Long 1802 · Mất 1820 (thọ 58 tuổi)",
    verdict: "Khai quốc hoàng đế Nhà Nguyễn. Trốn thoát cuộc thảm sát của Tây Sơn năm 1777 khi mới 15 tuổi, trải qua 25 năm nếm mật nằm gai, thua hàng chục trận nhưng chưa từng từ bỏ. Bằng sự nhẫn nại phi thường, biết kết nối kỹ thuật/vũ khí phương Tây qua Giám mục Bá Đa Lộc, xây dựng căn cứ Gia Định và lật đổ Tây Sơn năm 1802, đặt quốc hiệu Việt Nam.",
    goc: [
      { label: "Trí tuệ", stars: "★★★★☆", desc: "[SỰ KIỆN] Tầm nhìn dài hạn về tổ chức căn cứ Gia Định, tiếp thu công nghệ quân sự phương Tây (thành kiểu Vauban, tàu chiến bọc đồng, pháo thủ)." },
      { label: "Đạo đức", stars: "★★☆☆☆", desc: "[SỰ KIỆN] Tận trung với dòng họ nhưng tàn nhẫn trả thù triều đại Tây Sơn sau khi chiến thắng." },
      { label: "Nghị lực", stars: "★★★★★", desc: "[SỰ KIỆN] Đỉnh cao nghị lực lịch sử: bôn ba đảo Phú Quốc, Xiêm La, nếm mật nằm gai 25 năm quyết không bỏ cuộc." }
    ],
    doc: [
      { label: "Tham lam", stars: "★★★☆☆", desc: "[SUY LUẬN] Quyết tâm thâu tóm toàn bộ lãnh thổ Đại Việt dưới tay dòng họ Nguyễn." },
      { label: "Sân giận", stars: "★★★★☆", desc: "[SỰ KIỆN] Trả thù tàn khốc dòng họ và các tướng sĩ Tây Sơn sau năm 1802." },
      { label: "Si mê", stars: "★★☆☆☆", desc: "[SUY LUẬN] Tỉnh táo trong chiến lược nhưng bảo thủ trong chính sách đóng cửa về sau." }
    ],
    lessons: [
      { title: "Sức mạnh của Sự kiên trì dài hạn", desc: "Nguyễn Ánh thua hàng chục trận nhưng chưa từng từ bỏ mục tiêu thống nhất." },
      { title: "Xây dựng căn cứ và Tiếp thu công nghệ", desc: "Xây dựng Gia Định thành kho lương và tiếp thu công nghệ kỹ thuật phương Tây là chìa khóa chiến thắng." }
    ],
    links: [
      { text: "📖 Bài học: Nhà Tây Sơn", url: "../bai-hoc/nha-tay-son.html" },
      { text: "📜 Bá Đa Lộc", url: "ba-da-loc.html" },
      { text: "⚔️ Võ Tánh", url: "vo-tanh.html" }
    ]
  },

  // 6. Lê Chiêu Thống
  {
    filename: "le-chieu-thong.html",
    title: "Lê Chiêu Thống — Bi Kịch Vua Cõng Rắn Cắn Gà Nhà | Phân tích 3 Gốc / 3 Độc",
    description: "Phân tích Lê Chiêu Thống theo 3 Gốc & 3 Độc — Vua cuối cùng Nhà Lê Trung Hưng, vì hận thù gia tộc sang cầu viện nhà Thanh mang 29 vạn quân sang xâm lược, rốt cuộc bỏ mạng ở xứ người.",
    breadcrumb: "Lê Chiêu Thống",
    eraLine: "1786–1789 SCN · Vua cuối Nhà Lê Trung Hưng",
    name: "Lê Chiêu Thống",
    subtitle: "Bi kịch vua cõng rắn cắn gà nhà — Vì thù riêng rước 29 vạn quân Thanh, chết tủi hổ nơi xứ người.",
    infoLine1: "Hoàng cháu vua Lê Hiển Tông · Được Nguyễn Huệ đưa lên ngôi 1786",
    infoLine2: "Cầu viện nhà Thanh 1788 · Bỏ chạy sang Tàu 1789 · Mất tại Bắc Kinh 1793",
    verdict: "Vua cuối cùng của nhà Lê Trung Hưng. Được Nguyễn Huệ đưa lên ngôi năm 1786 với tinh thần \"Phù Lê diệt Trịnh\". Tuy nhiên vì tư duy hẹp hòi, nghi kỵ Tây Sơn và muốn khôi phục quyền lực tuyệt đối, ông đã phạm sai lầm thảm khốc: sang cầu viện Nhà Thanh, rước 29 vạn quân Tôn Sĩ Nghị về giày xéo đất nước. Sau khi quân Thanh bị Quang Trung đại phá Tết 1789, ông bỏ chạy sang Trung Quốc và chết tủi hổ năm 1793.",
    goc: [
      { label: "Trí tuệ", stars: "★☆☆☆☆", desc: "[SỰ KIỆN] Đố kỵ, nông nổi, không phân biệt được lợi ích dân tộc với quyền lợi dòng họ." },
      { label: "Đạo đức", stars: "★☆☆☆☆", desc: "[SỰ KIỆN] \"Cõng rắn cắn gà nhà\", rước giặc ngoại xâm về tàn phá quê hương." },
      { label: "Nghị lực", stars: "★☆☆☆☆", desc: "[SỰ KIỆN] Hèn nhát, hoảng loạn tháo chạy theo quân Thanh khi thất trận." }
    ],
    doc: [
      { label: "Tham lam", stars: "★★★★☆", desc: "[SUY LUẬN] Tham giữ ngai vàng bằng mọi giá." },
      { label: "Sân giận", stars: "★★★★★", desc: "[SỰ KIỆN] Uất hận Tây Sơn đến mức sẵn sàng bán nước để trả thù." },
      { label: "Si mê", stars: "★★★★★", desc: "[SUY LUẬN] U mê tin rằng nhà Thanh thực lòng giúp mình khôi phục vương triều." }
    ],
    lessons: [
      { title: "Ranh giới giữa Quyền lợi Dòng họ và Vận mệnh Dân tộc", desc: "Đặt thù riêng dòng họ lên trên độc lập dân tộc là sai lầm vĩnh viễn bị lịch sử án ghét." }
    ],
    links: [
      { text: "📖 Bài học: Nhà Tây Sơn", url: "../bai-hoc/nha-tay-son.html" },
      { text: "⚔️ Tôn Sĩ Nghị", url: "ton-si-nghi.html" }
    ]
  },

  // 7. Ngô Thì Nhậm
  {
    filename: "ngo-thi-nham.html",
    title: "Ngô Thì Nhậm — Danh Sĩ & Mưu Sĩ Đỉnh Cao Thời Tây Sơn | Phân tích 3 Gốc / 3 Độc",
    description: "Phân tích Ngô Thì Nhậm theo 3 Gốc & 3 Độc — Trí thức lớn Bắc Hà phò Quang Trung, tác giả kế sách rút về Tam Điệp bảo toàn lực lượng và đàm phán ngoại giao xuất sắc với Nhà Thanh.",
    breadcrumb: "Ngô Thì Nhậm",
    eraLine: "1788–1802 SCN · Mưu sĩ danh sĩ · Triều Tây Sơn",
    name: "Ngô Thì Nhậm",
    subtitle: "Danh sĩ Bắc Hà phò Quang Trung — Tác giả kế sách rút về Tam Điệp & Đỉnh cao ngoại giao với Nhà Thanh.",
    infoLine1: "Tiến sĩ nhà Lê · Ra giúp Tây Sơn 1788 được Quang Trung tin dùng",
    infoLine2: "Sinh 1746 · Mất 1803 (bị Gia Long đánh trượng tại Văn Miếu)",
    verdict: "Trí thức danh sĩ kiệt xuất Bắc Hà. Đỗ Tiến sĩ nhà Lê nhưng nhìn ra tầm vóc của Quang Trung Nguyễn Huệ nên ra cộng tác năm 1788. Khi 29 vạn quân Thanh tràn sang, ông dũng cảm đề xuất kế sách: \"Rút quân bảo toàn lực lượng về Tam Điệp - Biển Sơn, cho giặc ngủ trọ một đêm ở Thăng Long\". Tác giả của các văn kiện ngoại giao xuất sắc buộc nhà Thanh phải công nhận Quang Trung.",
    goc: [
      { label: "Trí tuệ", stars: "★★★★★", desc: "[SỰ KIỆN] Tầm nhìn chiến lược vượt trội: kế rút Tam Điệp bảo toàn lực lượng, ngoại giao \"hạ mình giữ thực\" với Càn Long." },
      { label: "Đạo đức", stars: "★★★★☆", desc: "[SỰ KIỆN] Đặt lợi ích đất nước lên trên tư tưởng trung quân hẹp hòi với nhà Lê đã suy tàn." },
      { label: "Nghị lực", stars: "★★★★☆", desc: "[SỰ KIỆN] Khí phách danh sĩ: chấp nhận dị nghị của đồng liêu Bắc Hà để phò minh quân bảo vệ dân tộc." }
    ],
    doc: [
      { label: "Tham lam", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Không màng tư lợi." },
      { label: "Sân giận", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Điềm tĩnh, tự tại." },
      { label: "Si mê", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Tỉnh táo trước biến chuyển lịch sử." }
    ],
    lessons: [
      { title: "Kế sách Rút lui chiến lược (Strategic Retreat)", desc: "Biết nhường Thăng Long để bảo toàn chủ lực là quyết định quân sự xuất sắc nhất mùa xuân 1789." }
    ],
    links: [
      { text: "📖 Bài học: Nhà Tây Sơn", url: "../bai-hoc/nha-tay-son.html" },
      { text: "👑 Quang Trung (Nguyễn Huệ)", url: "nguyen-hue.html" },
      { text: "📜 La Sơn Phu Tử", url: "nguyen-thiep.html" }
    ]
  },

  // 8. Nguyễn Thiếp
  {
    filename: "nguyen-thiep.html",
    title: "Nguyễn Thiếp (La Sơn Phu Tử) — Cố Vấn Tinh Thần Của Quang Trung | Phân tích 3 Gốc / 3 Độc",
    description: "Phân tích La Sơn Phu Tử Nguyễn Thiếp theo 3 Gốc & 3 Độc — Bậc ẩn sĩ đức độ, cố vấn cho Quang Trung về chiến lược đánh quân Thanh và đứng đầu Viện Cung nghiệt dịch sách chữ Nôm.",
    breadcrumb: "La Sơn Phu Tử (Nguyễn Thiếp)",
    eraLine: "1788–1792 SCN · Bậc Ẩn Sĩ & Cố Vấn Tinh Thần",
    name: "Nguyễn Thiếp — La Sơn Phu Tử",
    subtitle: "La Sơn Phu Tử — Bậc ẩn sĩ đức độ, cố vấn chiến lược và Viện trưởng Viện Cung nghiệt chữ Nôm.",
    infoLine1: "Ẩn sĩ núi Bút Sơn (Nghệ An) · Được Quang Trung 3 lần viết thư mời",
    infoLine2: "Sinh 1723 · Mất 1804 (thọ 81 tuổi)",
    verdict: "Bậc ẩn sĩ đức độ nổi tiếng thời Lê - Tây Sơn. Được Quang Trung 3 lần khiêm nhường viết thư mời ra giúp nước. Ông đã tiên đoán chính xác chiến thắng quân Thanh năm 1789 và cố vấn chiến lược đánh thần tốc. Được Quang Trung giao làm Viện trưởng Viện Cung nghiệt, chủ trì việc dịch các sách kinh điển sang chữ Nôm để cải cách giáo dục.",
    goc: [
      { label: "Trí tuệ", stars: "★★★★★", desc: "[SỰ KIỆN] Trí tuệ thâm sâu, am hiểu thời thế và giáo dục canh tân." },
      { label: "Đạo đức", stars: "★★★★★", desc: "[SỰ KIỆN] Thanh cao, không màng danh lợi, chỉ xuất sơn vì minh quân chân chính vì dân." },
      { label: "Nghị lực", stars: "★★★★☆", desc: "[SỰ KIỆN] Kiên định giữ vững đạo đức sĩ phu trong thời đại hỗn loạn Trịnh - Nguyễn - Tây Sơn." }
    ],
    doc: [
      { label: "Tham lam", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Thanh bạch tuyệt đối." },
      { label: "Sân giận", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Ôn hòa, từ mẫn." },
      { label: "Si mê", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Sáng suốt nhìn thấy chính nghĩa." }
    ],
    lessons: [
      { title: "Tấm lòng của Bậc Ẩn sĩ vì dân", desc: "Không màng chức quyền nhưng sẵn sàng đóng góp trí tuệ cho sự nghiệp văn hóa giáo dục dân tộc." }
    ],
    links: [
      { text: "📖 Bài học: Nhà Tây Sơn", url: "../bai-hoc/nha-tay-son.html" },
      { text: "👑 Quang Trung (Nguyễn Huệ)", url: "nguyen-hue.html" }
    ]
  },

  // 9. Bá Đa Lộc
  {
    filename: "ba-da-loc.html",
    title: "Bá Đa Lộc (Pigneau de Behaine) — Giám Mục Đồng Hành Cùng Nguyễn Ánh | Phân tích 3 Gốc / 3 Độc",
    description: "Phân tích Giám mục Bá Đa Lộc theo 3 Gốc & 3 Độc — Giám mục Adran, cố vấn phương Tây đắc lực cho Nguyễn Ánh, cầu viện Pháp và mua sắm vũ khí, hải thuyền hỗ trợ phục hồi Đàng Trong.",
    breadcrumb: "Bá Đa Lộc",
    eraLine: "1777–1799 SCN · Giám Mục Adran · Cố vấn phương Tây",
    name: "Bá Đa Lộc — Pigneau de Behaine",
    subtitle: "Giám mục đồng hành cùng Nguyễn Ánh — Cầu viện Pháp, mua sắm tàu chiến và pháo thủ phương Tây.",
    infoLine1: "Giám mục người Pháp (Monseigneur d'Adran) · Gắn bó với Nguyễn Ánh từ 1777",
    infoLine2: "Sinh 1741 · Mất 1799 tại Quy Nhơn",
    verdict: "Giám mục người Pháp (Pigneau de Behaine). Người gắn bó và hỗ trợ đắc lực nhất cho Nguyễn Ánh trong 22 năm gian khó. Năm 1787, ông mang Hoàng tử Cảnh sang Pháp đàm phán Hiệp ước Versailles. Dù chính phủ Pháp bỏ dở, ông tự huy động thương nhân Pondicherry mua tàu chiến bọc đồng, pháo hạm và chiêu mộ sĩ quan Pháp huấn luyện quân Nguyễn Ánh.",
    goc: [
      { label: "Trí tuệ", stars: "★★★★☆", desc: "[SỰ KIỆN] Tầm nhìn sắc bén về chiến lược địa chính trị và hỗ trợ kỹ thuật quân sự cho Nguyễn Ánh." },
      { label: "Đạo đức", stars: "★★★☆☆", desc: "[SỰ KIỆN] Tận tụy kiên định với Nguyễn Ánh và truyền giáo, nhưng mang mục đích mở rộng ảnh hưởng nước Pháp." },
      { label: "Nghị lực", stars: "★★★★★", desc: "[SỰ KIỆN] Vượt đại dương, bôn ba nhiều nước huy động tài chính và vũ khí hỗ trợ Đàng Trong." }
    ],
    doc: [
      { label: "Tham lam", stars: "★★☆☆☆", desc: "[SUY LUẬN] Muốn mở rộng ảnh hưởng công giáo và đế quốc Pháp tại Đông Dương." },
      { label: "Sân giận", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Điềm tĩnh, kiên nhẫn." },
      { label: "Si mê", stars: "★★☆☆☆", desc: "[SUY LUẬN] Thao thức với sứ mệnh truyền giáo." }
    ],
    lessons: [
      { title: "Tác động của yếu tố công nghệ phương Tây", desc: "Việc tiếp thu kỹ thuật quân sự phương Tây qua Bá Đa Lộc là lợi thế lớn giúp Nguyễn Ánh phản công thành công." }
    ],
    links: [
      { text: "📖 Bài học: Nhà Tây Sơn", url: "../bai-hoc/nha-tay-son.html" },
      { text: "👑 Gia Long (Nguyễn Ánh)", url: "nguyen-anh.html" }
    ]
  },

  // 10. Bùi Thị Xuân
  {
    filename: "bui-thi-xuan.html",
    title: "Bùi Thị Xuân — Nữ Tướng Voi Chiến Bất Khuất Tây Sơn | Phân tích 3 Gốc / 3 Độc",
    description: "Phân tích Nữ tướng Bùi Thị Xuân theo 3 Gốc & 3 Độc — Nữ dũng tướng Tây Sơn chỉ huy đội voi chiến, chiến đấu anh dũng bảo vệ vương triều đến phút cuối và hy sinh bi tráng.",
    breadcrumb: "Bùi Thị Xuân",
    eraLine: "1771–1802 SCN · Nữ Đô Đốc Tây Sơn",
    name: "Bùi Thị Xuân — Nữ Đô Đốc",
    subtitle: "Nữ tướng voi chiến bất khuất — Huấn luyện tượng binh, chiến đấu bảo vệ vương triều đến hơi thở cuối.",
    infoLine1: "Vợ Đô đốc Trần Quang Diệu · Tây Sơn ngũ phụ long",
    infoLine2: "Sinh ? · Bị Gia Long hành quyết tàn khốc năm 1802",
    verdict: "Nữ dũng tướng kiệt xuất nhất lịch sử phong kiến Việt Nam. Vợ của Đại Đô đốc Trần Quang Diệu. Bà trực tiếp huấn luyện tượng binh Tây Sơn, chỉ huy đội voi chiến lập nhiều chiến công hiển hách. Trận Trấn Ninh (1802), bà phi ngựa cầm hai kiếm thúc quân quyết chiến. Khi bị Nguyễn Ánh bắt và dùng voi xé xác, bà hiên ngang không hề biến sắc.",
    goc: [
      { label: "Trí tuệ", stars: "★★★★☆", desc: "[SỰ KIỆN] Tài năng huấn luyện và chỉ huy tượng binh tác chiến thần tốc." },
      { label: "Đạo đức", stars: "★★★★★", desc: "[SỰ KIỆN] Trung trinh tiết liệt, tận tụy với vương triều và đất nước." },
      { label: "Nghị lực", stars: "★★★★★", desc: "[SỰ KIỆN] Khí phách anh hùng vô song trước cái chết tàn khốc nhất." }
    ],
    doc: [
      { label: "Tham lam", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Không màng danh lợi cá nhân." },
      { label: "Sân giận", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Điềm tĩnh, kiên cường." },
      { label: "Si mê", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Sáng suốt vì đại nghĩa." }
    ],
    lessons: [
      { title: "Biểu tượng Nữ quyền và Khí phách Việt", desc: "Tấm gương Bùi Thị Xuân là đỉnh cao về lòng dũng cảm và khí tiết của nữ giới trong lịch sử." }
    ],
    links: [
      { text: "📖 Bài học: Nhà Tây Sơn", url: "../bai-hoc/nha-tay-son.html" },
      { text: "⚔️ Trần Quang Diệu", url: "tran-quang-dieu.html" }
    ]
  },

  // 11. Trần Quang Diệu
  {
    filename: "tran-quang-dieu.html",
    title: "Trần Quang Diệu — Đại Đô Đốc Tận Trung Của Tây Sơn | Phân tích 3 Gốc / 3 Độc",
    description: "Phân tích Đại Đô đốc Trần Quang Diệu theo 3 Gốc & 3 Độc — Cột trụ dũng tướng Tây Sơn, kiên cường giữ thành Quy Nhơn, có tinh thần thượng võ tha bổng hàng binh Nguyễn Ánh.",
    breadcrumb: "Trần Quang Diệu",
    eraLine: "1771–1802 SCN · Đại Đô Đốc Tây Sơn",
    name: "Trần Quang Diệu — Đại Đô Đốc",
    subtitle: "Cột trụ dũng tướng Tây Sơn — Kiên cường vây thành Quy Nhơn, tinh thần thượng võ tha bổng hàng binh.",
    infoLine1: "Một trong Tây Sơn thất hổ · Chồng Bùi Thị Xuân",
    infoLine2: "Sinh ? · Bị Gia Long hành quyết 1802",
    verdict: "Một trong những đại danh tướng vĩ đại nhất triều Tây Sơn. Cột trụ giữ vững vương triều thời suy thoái. Ông chỉ huy cuộc vây thành Quy Nhơn kéo dài 1799–1801. Khi Võ Tánh tự thiêu để cứu quân sĩ, Trần Quang Diệu vào thành cảm động trước khí tiết đối thủ đã chôn cất tử tế và tha bổng toàn bộ quân Nguyễn Ánh. Bị bắt năm 1802, ông kiên quyết không hàng.",
    goc: [
      { label: "Trí tuệ", stars: "★★★★☆", desc: "[SỰ KIỆN] Thao lược quân sự kiên nhẫn, tác chiến vây thành và công thủ toàn diện." },
      { label: "Đạo đức", stars: "★★★★★", desc: "[SỰ KIỆN] Tinh thần thượng võ tuyệt vời: tha chết cho toàn bộ quân hàng của Võ Tánh." },
      { label: "Nghị lực", stars: "★★★★★", desc: "[SỰ KIỆN] Tận trung với Tây Sơn đến phút cuối cùng, giữ trọn khí tiết khi bị hành quyết." }
    ],
    doc: [
      { label: "Tham lam", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Không tơ hào tư lợi." },
      { label: "Sân giận", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Bao dung đối với đối thủ." },
      { label: "Si mê", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Tỉnh táo trước sự trớ trêu của lịch sử." }
    ],
    lessons: [
      { title: "Tinh thần Thượng võ giữa lòng chiến tranh", desc: "Hành động đối xử nghĩa khí với hàng binh Võ Tánh là bài học lớn về nhân đạo quân sự." }
    ],
    links: [
      { text: "📖 Bài học: Nhà Tây Sơn", url: "../bai-hoc/nha-tay-son.html" },
      { text: "⚔️ Bùi Thị Xuân", url: "bui-thi-xuan.html" },
      { text: "⚔️ Võ Tánh", url: "vo-tanh.html" }
    ]
  },

  // 12. Vũ Văn Dũng
  {
    filename: "vu-van-dung.html",
    title: "Vũ Văn Dũng — Đại Đô Đốc Hải Quân Tây Sơn | Phân tích 3 Gốc / 3 Độc",
    description: "Phân tích Đại Đô đốc Vũ Văn Dũng theo 3 Gốc & 3 Độc — Tướng hải quân kiệt xuất Tây Sơn, tiêu diệt quyền thần Bùi Đắc Tuyên để cứu vãn vương triều, chiến đấu kiên cường.",
    breadcrumb: "Vũ Văn Dũng",
    eraLine: "1771–1802 SCN · Đại Đô Đốc Hải Quân Tây Sơn",
    name: "Vũ Văn Dũng — Đại Đô Đốc",
    subtitle: "Tướng hải quân kiệt xuất — Trừ bỏ quyền thần Bùi Đắc Tuyên để cứu vãn triều đình.",
    infoLine1: "Một trong Tây Sơn thất hổ · Đại Đô đốc hải quân",
    infoLine2: "Sinh ? · Mất 1802",
    verdict: "Đại Đô đốc hải quân kiệt xuất triều Tây Sơn. Chỉ huy lực lượng chiến thuyền hùng hậu của Quang Trung. Năm 1795, trước sự hoành hành thao túng của quyền thần Bùi Đắc Tuyên làm suy yếu vương triều, ông đã phối hợp với Phạm Công Hưng ra tay tiêu diệt Bùi Đắc Tuyên để cứu triều đình. Chiến đấu kiên cường đến năm 1802.",
    goc: [
      { label: "Trí tuệ", stars: "★★★★☆", desc: "[SỰ KIỆN] Giỏi tác chiến hải quân, quyết đoán tiêu diệt gian thần cứu vương triều." },
      { label: "Đạo đức", stars: "★★★★☆", desc: "[SỰ KIỆN] Trung thành với sự nghiệp Tây Sơn và nhân dân." },
      { label: "Nghị lực", stars: "★★★★★", desc: "[SỰ KIỆN] Chiến đấu đến hơi thở cuối cùng trước đà tiến của Nguyễn Ánh." }
    ],
    doc: [
      { label: "Tham lam", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Không vụ lợi." },
      { label: "Sân giận", stars: "★★☆☆☆", desc: "[SỰ KIỆN] Căm ghét quyền thần hoành hành." },
      { label: "Si mê", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Tỉnh táo trước sự nguy biến của triều đình." }
    ],
    lessons: [
      { title: "Khí phách trừ gian diệt nịnh", desc: "Quyết định loại bỏ Bùi Đắc Tuyên chứng minh tinh thần trách nhiệm với vận mệnh vương triều." }
    ],
    links: [
      { text: "📖 Bài học: Nhà Tây Sơn", url: "../bai-hoc/nha-tay-son.html" },
      { text: "⚔️ Trần Quang Diệu", url: "tran-quang-dieu.html" }
    ]
  },

  // 13. Võ Tánh
  {
    filename: "vo-tanh.html",
    title: "Võ Tánh — Gia Định Tam Hùng & Tướng Trung Nghĩa | Phân tích 3 Gốc / 3 Độc",
    description: "Phân tích Võ Tánh theo 3 Gốc & 3 Độc — Một trong Gia Định Tam Hùng phò Nguyễn Ánh, cố thủ thành Quy Nhơn 1799–1801, tự thiêu để cứu hàng ngàn binh sĩ dưới quyền.",
    breadcrumb: "Võ Tánh",
    eraLine: "1788–1801 SCN · Gia Định Tam Hùng",
    name: "Võ Tánh — Gia Định Tam Hùng",
    subtitle: "Mãnh tướng phò Nguyễn Ánh — Tự thiêu tại thành Quy Nhơn để đổi lấy tính mạng binh sĩ.",
    infoLine1: "Một trong \"Gia Định tam hùng\" · Phò Nguyễn Ánh từ 1788",
    infoLine2: "Sinh ? · Tự thiêu tại lầu Bát Giác Quy Nhơn 1801",
    verdict: "Mãnh tướng kiệt xuất trong nhóm \"Gia Định tam hùng\" phò Nguyễn Ánh. Năm 1799, ông được giao trấn giữ thành Quy Nhơn vừa chiếm được. Khi bị đại quân Trần Quang Diệu vây chặt suốt 2 năm (1799–1801) hết lương thảo, ông viết thư xin Trần Quang Diệu không giết binh sĩ, rồi châm ngòi hỏa dược tự thiêu tại lầu Bát Giác.",
    goc: [
      { label: "Trí tuệ", stars: "★★★★☆", desc: "[SỰ KIỆN] Cố thủ kiên cường 2 năm thu hút toàn bộ chủ lực Tây Sơn, tạo điều kiện cho Nguyễn Ánh đánh Thăng Long." },
      { label: "Đạo đức", stars: "★★★★★", desc: "[SỰ KIỆN] Đỉnh cao nhân đức: tự sát để cứu mạng hàng ngàn binh sĩ dưới quyền." },
      { label: "Nghị lực", stars: "★★★★★", desc: "[SỰ KIỆN] Bình thản đối mặt cái chết vì lòng trung và thương binh sĩ." }
    ],
    doc: [
      { label: "Tham lam", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Không màng sự sống cá nhân." },
      { label: "Sân giận", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Điềm tĩnh đến phút cuối." },
      { label: "Si mê", stars: "★☆☆☆☆", desc: "[SUY LUẬN] Tỉnh táo chọn cái chết có ý nghĩa lớn nhất." }
    ],
    lessons: [
      { title: "Bài học Lòng thương quân sĩ", desc: "Quyết định tự thiêu để cứu quân của Võ Tánh là bài học lớn về tình tướng sĩ trong quân sự." }
    ],
    links: [
      { text: "📖 Bài học: Nhà Tây Sơn", url: "../bai-hoc/nha-tay-son.html" },
      { text: "👑 Gia Long (Nguyễn Ánh)", url: "nguyen-anh.html" },
      { text: "⚔️ Trần Quang Diệu", url: "tran-quang-dieu.html" }
    ]
  },

  // 14. Nguyễn Hữu Chỉnh
  {
    filename: "nguyen-huu-chinh.html",
    title: "Nguyễn Hữu Chỉnh — Mưu Sĩ Cơ Hội & Đào Tẩu | Phân tích 3 Gốc / 3 Độc",
    description: "Phân tích Nguyễn Hữu Chỉnh theo 3 Gốc & 3 Độc — Mưu sĩ tài năng nhưng cơ hội, gièm pha gây mâu thuẫn Trịnh–Nguyễn–Tây Sơn, đưa Nguyễn Huệ ra Bắc rồi tự lập kiêu ngạo.",
    breadcrumb: "Nguyễn Hữu Chỉnh",
    eraLine: "1780–1787 SCN · Mưu Sĩ Cơ Hội",
    name: "Nguyễn Hữu Chỉnh",
    subtitle: "Mưu sĩ tài năng nhưng cơ hội — Đưa Nguyễn Huệ ra Bắc diệt Trịnh rồi tự lập kiêu ngạo.",
    infoLine1: "Quan nhà Trịnh → theo Tây Sơn 1780",
    infoLine2: "Sinh 1741 · Bị Vũ Văn Dũng bắt và xử tử 1787",
    verdict: "Mưu sĩ văn võ toàn tài nhưng vô cùng cơ hội và kiêu ngạo. Ban đầu phục vụ Chúa Trịnh, khi Đàng Ngoài hỗn loạn chạy vào Nam theo Tây Sơn. Năm 1786, ông dâng kế \"Phù Lê diệt Trịnh\" xúi Nguyễn Huệ đánh ra Bắc. Sau khi Trịnh sụp, ông ở lại Thăng Long tự thâu tóm quyền lực, chống lại Tây Sơn và bị Vũ Văn Dũng bắt xử tử năm 1787.",
    goc: [
      { label: "Trí tuệ", stars: "★★★★☆", desc: "[SỰ KIỆN] Giỏi mưu lược, nhận diện thời cơ dâng kế \"Phù Lê diệt Trịnh\" hạ Thăng Long." },
      { label: "Đạo đức", stars: "★☆☆☆☆", desc: "[SỰ KIỆN] Tráo trở, phản Trịnh theo Tây Sơn, rồi phản Tây Sơn tự lập." },
      { label: "Nghị lực", stars: "★★★☆☆", desc: "[SỰ KIỆN] Bộc lộ tham vọng mạnh mẽ nhưng thiếu bản lĩnh đường dài." }
    ],
    doc: [
      { label: "Tham lam", stars: "★★★★★", desc: "[SUY LUẬN] Tham thâu tóm quyền lực cá nhân bằng mọi giá." },
      { label: "Sân giận", stars: "★★★☆☆", desc: "[SỰ KIỆN] Kiêu ngạo, coi thường đồng liêu và Tây Sơn." },
      { label: "Si mê", stars: "★★★★☆", desc: "[SUY LUẬN] U mê ả tưởng sức mình có thể chống lại thiên tài Nguyễn Huệ." }
    ],
    lessons: [
      { title: "Bài học về Sự phản bội và Cơ hội", desc: "Tài năng thiếu đạo đức chỉ mang lại sự tráo trở và cái kết thảm hại." }
    ],
    links: [
      { text: "📖 Bài học: Nhà Tây Sơn", url: "../bai-hoc/nha-tay-son.html" },
      { text: "👑 Quang Trung (Nguyễn Huệ)", url: "nguyen-hue.html" }
    ]
  },

  // 15. Trương Phúc Loan
  {
    filename: "truong-phuc-loan.html",
    title: "Trương Phúc Loan — Quyền Thần Thao Túng Đàng Trong | Phân tích 3 Gốc / 3 Độc",
    description: "Phân tích Trương Phúc Loan theo 3 Gốc & 3 Độc — \"Cậu quốc\" ngoại tả thao túng triều đình Chúa Nguyễn Phúc Thuần, tham nhũng tột cùng, ngòi nổ cho khởi nghĩa Tây Sơn 1771.",
    breadcrumb: "Trương Phúc Loan",
    eraLine: "1765–1776 SCN · Quyền Thần Đàng Trong",
    name: "Trương Phúc Loan — \"Cậu Quốc\"",
    subtitle: "\"Cậu quốc\" gian thần thao túng Đàng Trong — Tham nhũng tột cùng, ngòi nổ khởi nghĩa Tây Sơn.",
    infoLine1: "\"Cậu quốc\" ngoại thích · Thao túng triều đình Chúa Nguyễn Phúc Thuần",
    infoLine2: "Bị quân Trịnh bắt 1775 · Mất trên đường giải ra Bắc",
    verdict: "\"Cậu quốc\" ngoại tả thao túng triều đình Chúa Nguyễn Phúc Thuần. Gian thần khét tiếng nhất lịch sử Đàng Trong. Thu thuế tham nhũng tích trữ vàng bạc như núi, giết hại trung thần Nguyễn Phúc Mân, đẩy Đàng Trong vào khủng hoảng kinh tế và lầm than. Chính sự thối nát của ông là ngòi nổ trực tiếp khiến ba anh em Tây Sơn dấy binh năm 1771 với cờ \"Diệt Trương Phúc Loan\".",
    goc: [
      { label: "Trí tuệ", stars: "★☆☆☆☆", desc: "[SỰ KIỆN] Chỉ có thủ đoạn xảo quyệt tước đoạt quyền lực, hoàn toàn thiếu tầm nhìn quốc gia." },
      { label: "Đạo đức", stars: "★☆☆☆☆", desc: "[SỰ KIỆN] Tham nhũng tàn bạo, hại dân hại nước, vơ vét của công." },
      { label: "Nghị lực", stars: "★☆☆☆☆", desc: "[SỰ KIỆN] Hèn nhát khi quân Trịnh tiến vào Quảng Nam, bị dán nhãn giao nộp." }
    ],
    doc: [
      { label: "Tham lam", stars: "★★★★★", desc: "[SUY LUẬN] Đỉnh cao tham lam vơ vét của cải." },
      { label: "Sân giận", stars: "★★★★☆", desc: "[SỰ KIỆN] Tàn nhẫn sát hại bất kỳ ai cản đường." },
      { label: "Si mê", stars: "★★★★★", desc: "[SUY LUẬN] U mê trong quyền lực và tiền bạc, đẩy vương triều Đàng Trong sụp đổ." }
    ],
    lessons: [
      { title: "Bài học về Tham nhũng làm sụp đổ vương triều", desc: "Tham nhũng và lũng đoạn quyền lực là ngòi nổ nhanh nhất bùng phát khởi nghĩa nhân dân." }
    ],
    links: [
      { text: "📖 Bài học: Nhà Tây Sơn", url: "../bai-hoc/nha-tay-son.html" },
      { text: "👑 Thái Đức Đế (Nguyễn Nhạc)", url: "nguyen-nhac.html" }
    ]
  },

  // 16. Tôn Sĩ Nghị
  {
    filename: "ton-si-nghi.html",
    title: "Tôn Sĩ Nghị — Tổng Đốc Nhà Thanh Xâm Lược | Phân tích 3 Gốc / 3 Độc",
    description: "Phân tích Tôn Sĩ Nghị theo 3 Gốc & 3 Độc — Tổng đốc Lưỡng Quảng chỉ huy 29 vạn quân Thanh xâm lược Đại Việt 1788, kiêu ngạo bỏ bê phòng thủ, bị Quang Trung đánh tan Tết Kỷ Dậu 1789.",
    breadcrumb: "Tôn Sĩ Nghị",
    eraLine: "1788–1789 SCN · Tổng Đốc Nhà Thanh Xâm Lược",
    name: "Tôn Sĩ Nghị",
    subtitle: "Chủ tướng 29 vạn quân Thanh xâm lược — Kiêu ngạo chủ quan, bị Quang Trung đánh tan Tết Kỷ Dậu.",
    infoLine1: "Tổng đốc Lưỡng Quảng nhà Thanh thời Càn Long",
    infoLine2: "Chỉ huy 29 vạn quân xâm lược 1788 · Tháo chạy 1789",
    verdict: "Tổng đốc Lưỡng Quảng thời Càn Long. Năm 1788, nhận lời cầu viện của Lê Chiêu Thống, ông chỉ huy 29 vạn quân Thanh tràn sang xâm lược Đại Việt, chiếm thành Thăng Long dễ dàng. Vì kiêu ngạo cho rằng Tây Sơn đã sợ hãi rút lui, ông cho quân ăn Tết xả hơi, không phòng bị. Đêm mùng 5 Tết Kỷ Dậu 1789, ông bị Quang Trung đánh bất ngờ, hoảng loạn cắt cầu phao nhảy sông Hồng tháo chạy.",
    goc: [
      { label: "Trí tuệ", stars: "★★☆☆☆", desc: "[SỰ KIỆN] Chủ quan, kiêu ngạo, không đánh giá đúng thiên tài quân sự Nguyễn Huệ." },
      { label: "Đạo đức", stars: "★☆☆☆☆", desc: "[SỰ KIỆN] Xâm lược nước nhỏ dưới danh nghĩa giúp đỡ, để quân sĩ cướp phá Thăng Long." },
      { label: "Nghị lực", stars: "★☆☆☆☆", desc: "[SỰ KIỆN] Hèn nhát, hoảng loạn bỏ cả ấn tín mã ngọc tháo chạy về nước." }
    ],
    doc: [
      { label: "Tham lam", stars: "★★★★☆", desc: "[SUY LUẬN] Tham lập chiến công mở rộng đất đai cho nhà Thanh." },
      { label: "Sân giận", stars: "★★☆☆☆", desc: "[SUY LUẬN] Kiêu hãnh cậy thế nước lớn." },
      { label: "Si mê", stars: "★★★★★", desc: "[SUY LUẬN] U mê mù quáng trong sự kiêu ngạo của 'đại quốc'." }
    ],
    lessons: [
      { title: "Bài học về Sự kiêu ngạo trong quân sự", desc: "Khinh địch và coi thường đối thủ là nguyên nhân nhanh nhất dẫn đến đại thảm bại." }
    ],
    links: [
      { text: "📖 Bài học: Nhà Tây Sơn", url: "../bai-hoc/nha-tay-son.html" },
      { text: "👑 Quang Trung (Nguyễn Huệ)", url: "nguyen-hue.html" },
      { text: "👑 Lê Chiêu Thống", url: "le-chieu-thong.html" }
    ]
  }
];

characters.forEach(char => {
  const content = makeCharacterPage(char);
  const targetPath = path.join(CHAR_DIR, char.filename);
  fs.writeFileSync(targetPath, content.trim() + "\n", "utf8");
  console.log(`Generated src/nhan-vat/${char.filename}`);
});

console.log("All 17 files generated successfully!");
