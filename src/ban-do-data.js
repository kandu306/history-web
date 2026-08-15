// =============================================================
//  ban-do-data.js — Dữ liệu Bản Đồ Khái Niệm
//  Cách cập nhật:
//    • Thêm triều đại mới: thêm key vào DATABASE
//    • Thêm bài học: thêm vào mảng lessons[]
//    • Thêm nhân vật: thêm vào mảng figures[]
//    • Thêm node trên map: thêm vào NODES_CONFIG và DATABASE
// =============================================================

// ─── NODE CONFIG: thứ tự và nội dung các node trên Flow Map ───
const NODES_CONFIG = [
  {
    id: "vl",
    tagLabel: "Dựng Nước", tagColor: "#b45309",
    period: "Thế kỷ 7-6 TCN",
    title: "Nhà nước Văn Lang",
    subtitle: "Cơ cấu 3 cấp Hùng Vương, Lạc Tướng, Lạc Dân"
  },
  {
    id: "al",
    tagLabel: "Thục Phán lập thành", tagColor: "#b45309",
    period: "257–179 TCN",
    title: "Nhà nước Âu Lạc",
    subtitle: "Thành Cổ Loa kiên cố & bài học nỏ thần mất nước"
  },
  {
    id: "bt",
    tagLabel: "Thời kỳ Đề kháng", tagColor: "#9b1c1c",
    period: "111 TCN – 938 SCN",
    title: "1.000 Năm Bắc Thuộc",
    subtitle: "Làng xã tự trị chống đồng hóa & Các khởi nghĩa"
  },
  {
    id: "nq",
    tagLabel: "Bạch Đằng vĩ đại", tagColor: "#b45309",
    period: "Năm 938 SCN",
    title: "Ngô Quyền — Độc lập vĩnh viễn",
    subtitle: "Khai quốc vương triều, đóng đô Cổ Loa"
  },
  {
    id: "l12",
    tagLabel: "Nội chiến cát cứ", tagColor: "#9b1c1c",
    period: "944–968 SCN",
    title: "Loạn 12 Sứ Quân",
    subtitle: "Nguy cơ mất nước & Bài học khoảng trống quyền lực"
  },
  {
    id: "dl",
    tagLabel: "Hoa Lư lập hoàng đế", tagColor: "#b45309",
    period: "968–979 SCN",
    title: "Nhà Đinh — Đinh Bộ Lĩnh",
    subtitle: "Sự thống nhất Hoa Lư & Sáng lập Đại Cồ Việt"
  },
  {
    id: "ntl",
    tagLabel: "Lê Hoàn phá Tống", tagColor: "#b45309",
    period: "980–1009 SCN",
    title: "Nhà Tiền Lê — Lê Đại Hành",
    subtitle: "Chuyển giao quyền lực Dương Vân Nga & Ngoại giao khôn ngoan"
  },
  {
    id: "ly",
    tagLabel: "Thể chế hóa tối cao", tagColor: "#9b1c1c",
    period: "1009–1225 SCN",
    title: "Nhà Lý — Thăng Long thịnh trị",
    subtitle: "Dời đô Thăng Long, ban Hình Thư & dựng Văn Miếu"
  },
  {
    id: "nha_tran",
    tagLabel: "Hào Khí Đông A", tagColor: "#9b1c1c",
    period: "1225–1400 SCN",
    title: "Nhà Trần — 3 Lần Phá Mông Cổ",
    subtitle: "Vườn không nhà trống & Trần Hưng Đạo bất khuất"
  },
  {
    id: "nha_ho",
    tagLabel: "Cải cách vượt thời đại", tagColor: "#9b1c1c",
    period: "1400–1407 SCN",
    title: "Nhà Hồ — Sụp Đổ Vì Mất Lòng Dân",
    subtitle: "Tiền giấy, hạn điền, súng thần công — không có lòng dân"
  },
  {
    id: "nha_hau_tran",
    tagLabel: "Kháng chiến bi tráng", tagColor: "#7a1f1f",
    period: "1407–1413 SCN",
    title: "Nhà Hậu Trần — Kháng Chiến Bi Tráng 4 Năm",
    subtitle: "Thắng Bô Cô vang dội · Vua nghi kỵ giết công thần · Tiền đề Lam Sơn"
  },
  {
    id: "nha_hau_le",
    tagLabel: "Khai quốc", tagColor: "#166534",
    period: "1428 SCN – ...",
    title: "Nhà Hậu Lê — Triều Đại Dài Nhất",
    subtitle: "Lam Sơn khởi nghĩa & Bình Ngô Đại Cáo"
  },
  {
    id: "nha_mac",
    tagLabel: "Nam-Bắc triều", tagColor: "#92400e",
    period: "1527–1592 SCN",
    title: "Nhà Mạc — Bị Lịch Sử Đánh Giá Thiếu Công Bằng",
    subtitle: "Ngư dân lên ngôi · Thịnh trị thực sự · Nhượng danh giữ thực"
  },
  {
    id: "trinh_nguyen",
    tagLabel: "Đất nước chia đôi", tagColor: "#44403c",
    period: "1533–1786 SCN",
    title: "Trịnh–Nguyễn Phân Tranh",
    subtitle: "Đàng Ngoài · Đàng Trong · 148 năm phân tranh · Sông Gianh ranh giới"
  },
  {
    id: "nha_tay_son",
    tagLabel: "Bão lốc Tây Sơn", tagColor: "#9b1c1c",
    period: "1771–1802 SCN",
    title: "Nhà Tây Sơn — Xóa Bỏ Ranh Giới Trịnh - Nguyễn",
    subtitle: "Đại phá 5 vạn quân Xiêm & 29 vạn quân Thanh · Canh tân Nôm học"
  },
  {
    id: "nha_nguyen",
    tagLabel: "Thực Dân Pháp Xâm Lược", tagColor: "#7f1d1d",
    period: "1802–1945 SCN",
    title: "Nhà Nguyễn — Triều Đại Cuối Cùng",
    subtitle: "Thống nhất lãnh thổ · Đối đầu Pháp · Cần Vương · Mất chủ quyền 1884"
  }
];

// ─── SVG LINES: kết nối các node theo thứ tự ───
const LINES_CONFIG = [
  { id: "line-vl-al",  x1: "50%", y1: "60",   x2: "50%", y2: "120"  },
  { id: "line-al-bt",  x1: "50%", y1: "170",  x2: "50%", y2: "230"  },
  { id: "line-bt-nq",  x1: "50%", y1: "280",  x2: "50%", y2: "340"  },
  { id: "line-nq-l12", x1: "50%", y1: "390",  x2: "50%", y2: "450"  },
  { id: "line-l12-dl", x1: "50%", y1: "500",  x2: "50%", y2: "560"  },
  { id: "line-dl-ntl", x1: "50%", y1: "610",  x2: "50%", y2: "670"  },
  { id: "line-ntl-ly", x1: "50%", y1: "720",  x2: "50%", y2: "780"  },
  { id: "line-ly-tran",   x1: "50%", y1: "830",  x2: "50%", y2: "890"  },
  { id: "line-tran-ho",   x1: "50%", y1: "940",  x2: "50%", y2: "1000" },
  { id: "line-ho-haule",  x1: "50%", y1: "1050", x2: "50%", y2: "1110" },
  { id: "line-haule-mac", x1: "50%", y1: "1160", x2: "50%", y2: "1220" },
  { id: "line-mac-trinh", x1: "50%", y1: "1270", x2: "50%", y2: "1330" },
  { id: "line-trinh-tayson", x1: "50%", y1: "1380", x2: "50%", y2: "1440" },
  { id: "line-tayson-nguyen", x1: "50%", y1: "1490", x2: "50%", y2: "1550" }
];

// ─── PATTERNS: các quy luật lịch sử ───
const PATTERNS_CONFIG = [
  {
    id: "pt1",
    label: "Pattern 1",
    title: "Thiên thời + Nhân hòa",
    desc: "Tại sao các cuộc khởi nghĩa Bắc thuộc chỉ thắng tạm thời, còn Ngô Quyền thắng vĩnh viễn nhờ kết hợp triều đại suy thoái với xây dựng triều đình tự lập.",
    span: 1  // CSS grid span (1 = normal, 2 = full width)
  },
  {
    id: "pt2",
    label: "Pattern 2",
    title: "Khoảng trống quyền lực",
    desc: "Khi lãnh đạo tối cao qua đời đột ngột mà chưa thiết lập thể chế vững chắc sẽ dẫn đến thảm họa cát cứ chia cắt (Ngô Quyền, Đinh Bộ Lĩnh).",
    span: 1
  },
  {
    id: "pt3",
    label: "Pattern 3",
    title: "Trả rẻ giữ đắt",
    desc: "Phương châm ngoại giao sinh tồn của nước nhỏ: Chấp nhận triều cống giữ hòa khí và hạ mình danh nghĩa, nhưng kiên định giữ tự trị nội bộ thực chất.",
    span: 1
  },
  {
    id: "pt4",
    label: "Pattern 4",
    title: "Trận Bạch Đằng lặp lại",
    desc: "Mô hình cọc nhọn bịt sắt cắm sâu lòng sông Bạch Đằng là biểu tượng quân sự lặp lại xuất sắc qua 3 triều đại (Ngô Quyền 938, Lê Hoàn 981).",
    span: 1
  },
  {
    id: "pt5",
    label: "Pattern 5",
    title: "Uy vũ cá nhân chuyển sang Thể chế hóa",
    desc: "Sự phát triển từ cai trị phụ thuộc vào sức mạnh của một anh hùng cụ thể sang việc vận hành bằng luật pháp, giáo dục và di sản ổn định bền vững lâu dài (Hình thư và Văn miếu nhà Lý).",
    span: 2
  }
];

// ─── DATABASE: chi tiết mỗi node khi click ───
const DATABASE = {
  vl: {
    category: "Thời kỳ Dựng Nước",
    title: "Nhà nước Văn Lang",
    period: "Thế kỷ 7–6 TCN",
    desc: "Văn Lang là nhà nước sơ khai đầu tiên của người Việt cổ. Mặc dù huyền thoại chép lại lập quốc năm 2879 TCN, các bằng chứng khảo cổ học văn hóa Đông Sơn xác thực nhà nước chỉ thực sự hình thành rõ rệt từ thế kỷ 7–6 TCN. Mô hình cai trị chia 3 cấp: Vua Hùng ở trung ương, Lạc tướng cai quản các bộ và Lạc dân tự do canh tác lúa nước.",
    lessons: [
      { name: "Bài 1: Nhà nước Văn Lang", url: "bai-hoc/nha-nuoc-van-lang.html" }
    ],
    figures: [
      { name: "Vua Hùng (Huyền thoại)", url: "#" }
    ],
    lineConnections: ["line-vl-al"]
  },

  al: {
    category: "Kế thừa & Chuyển tiếp",
    title: "Nhà nước Âu Lạc",
    period: "257–179 TCN",
    desc: "Thục Phán sáp nhập Âu Việt và Lạc Việt, tự xưng là An Dương Vương lập nước Âu Lạc. Triều đại này đánh dấu sự chuyển mình từ uy vũ bộ lạc sang một nhà nước tập quyền thật sự. Bằng chứng khảo cổ học là kỳ quan Thành Cổ Loa kiên cố xoắn ốc dài 16km. Tuy nhiên vương triều sụp đổ vì mất bí mật nỏ thần quân sự qua cuộc hôn nhân chính trị Trọng Thủy - Mỵ Châu.",
    lessons: [
      { name: "Bài 2: Nhà nước Âu Lạc", url: "bai-hoc/nha-nuoc-au-lac.html" }
    ],
    figures: [
      { name: "An Dương Vương", url: "#" }
    ],
    lineConnections: ["line-vl-al", "line-al-bt"]
  },

  bt: {
    category: "Hơn 10 thế kỷ đề kháng",
    title: "1.000 Năm Bắc Thuộc",
    period: "111 TCN – 938 SCN",
    desc: "Giai đoạn bị các triều đại phong kiến Trung Hoa chiếm đóng và thực thi chính sách đồng hóa khốc liệt bằng chữ Hán, nho giáo và luật pháp quan liêu. Mặc dù tầng lớp quý tộc trên bị Hán hóa, nền văn hóa Việt cốt lõi vẫn được bảo tồn vững chắc nhờ pháo đài tự trị Làng xã (Phép vua thua lệ làng) kết hợp các cuộc khởi nghĩa liên tục tích lũy ký ức kháng cự.",
    lessons: [
      { name: "Bài 3: 1000 Năm Bắc Thuộc", url: "bai-hoc/1000-nam-bac-thuoc.html" }
    ],
    figures: [
      { name: "Hai Bà Trưng",    url: "nhan-vat/hai-ba-trung.html",    role: "king" },
      { name: "Phùng Hưng",      url: "nhan-vat/phung-hung.html",      role: "king" },
      { name: "Khúc Thừa Dụ",   url: "nhan-vat/khuc-thua-du.html",    role: "king" },
      { name: "Dương Đình Nghệ", url: "nhan-vat/duong-dinh-nghe.html", role: "king" }
    ],
    lineConnections: ["line-al-bt", "line-bt-nq"]
  },

  nq: {
    category: "Mốc son vĩnh viễn",
    title: "Ngô Quyền — 938 SCN",
    period: "Năm 938 SCN",
    desc: "Ngô Quyền hạ sát phản tặc Kiều Công Tiễn và lập trận địa cọc gỗ bịt sắt trên sông Bạch Đằng dẹp tan quân Nam Hán xâm lược năm 938 SCN. Chiến thắng này chấm dứt vĩnh viễn 1.000 năm Bắc thuộc. Ông dời đô về lại Cổ Loa xưng vương vĩ đại, tuy nhiên do băng hà sớm năm 944 nên chưa kịp thiết lập hệ thống thể chế vững chắc lâu dài.",
    lessons: [
      { name: "Bài 4: Ngô Quyền 938", url: "bai-hoc/ngo-quyen.html" }
    ],
    figures: [
      { name: "Ngô Quyền", url: "nhan-vat/ngo-quyen.html" }
    ],
    lineConnections: ["line-bt-nq", "line-nq-l12"]
  },

  l12: {
    category: "Hậu Ngô Quyền",
    title: "Loạn 12 Sứ Quân",
    period: "944–968 SCN",
    desc: "Sau cái chết của Ngô Quyền, đất nước xuất hiện khoảng trống quyền lực tối cao, dẫn đến các hào trưởng tự lập địa bàn chia cát cứ nội chiến đẫm máu suốt hơn 20 năm. Loạn sứ quân phản ánh điểm yếu chí mạng khi vương triều cai trị chỉ dựa trên uy vũ cá nhân của một người lãnh đạo mà thiếu đi cơ chế pháp trị hay thể chế hóa bộ máy kế vị.",
    lessons: [
      { name: "Bài 5: Loạn 12 Sứ Quân", url: "bai-hoc/loan-12-su-quan.html" }
    ],
    figures: [
      { name: "Đinh Bộ Lĩnh", url: "nhan-vat/dinh-bo-linh.html" }
    ],
    lineConnections: ["line-nq-l12", "line-l12-dl"]
  },

  dl: {
    category: "Thiết lập Hoàng quyền",
    title: "Nhà Đinh — Đinh Bộ Lĩnh",
    period: "968–979 SCN",
    desc: "Đinh Bộ Lĩnh bằng chiến lược liên minh hôn nhân và thu phục khéo léo đã dẹp tan 12 sứ quân, lập ra nhà Đinh năm 968 SCN tại vùng thung lũng hiểm trở Hoa Lư. Ông xưng Hoàng đế (ngang hàng Trung Hoa), đặt quốc hiệu Đại Cồ Việt, xác lập 3 nền móng độc lập vững chắc: danh hiệu tự lập, bộ máy quan lại phân cấp và ngoại giao triều cống khôn ngoan.",
    lessons: [
      { name: "Bài 6: Đinh – Lê", url: "bai-hoc/dinh-le.html" }
    ],
    figures: [
      { name: "Đinh Bộ Lĩnh", url: "nhan-vat/dinh-bo-linh.html" }
    ],
    lineConnections: ["line-l12-dl", "line-dl-ntl"]
  },

  ntl: {
    category: "Ngoại giao Cương & Nhu",
    title: "Nhà Tiền Lê — Lê Đại Hành",
    period: "980–1009 SCN",
    desc: "Sau khi Đinh Bộ Lĩnh bị ám sát 979, trước nguy cơ xâm lược của nhà Tống, Thái hậu Dương Vân Nga đã quyết định thực dụng: trao áo long bào cống hiến quốc gia cho Thập đạo tướng quân Lê Hoàn. Vua Lê Hoàn đánh tan quân Tống năm 981 bằng chiến thuật Bạch Đằng lặp lại, ngay lập tức cử sứ giả bang giao triều cống nhún nhường để bảo đảm hòa bình lâu dài.",
    lessons: [
      { name: "Bài 7: Nhà Tiền Lê", url: "bai-hoc/nha-tien-le.html" }
    ],
    figures: [
      { name: "Lê Hoàn",       url: "nhan-vat/le-hoan.html",       role: "king"  },
      { name: "Dương Vân Nga", url: "nhan-vat/duong-van-nga.html",  role: "queen" },
      { name: "Lê Long Đĩnh", url: "nhan-vat/le-long-dinh.html",   role: "king"  }
    ],
    lineConnections: ["line-dl-ntl", "line-ntl-ly"]
  },

  ly: {
    category: "Kỷ nguyên văn hiến",
    title: "Nhà Lý — Thời kỳ Thịnh Trị",
    period: "1009–1225 SCN",
    desc: "Nhà Lý dời đô về Thăng Long phát triển giao thương cởi mở, kết hợp văn hóa Phật giáo khoan hòa, tạo nên kỷ nguyên văn hiến hoàng kim. Triều đại này giải quyết triệt để tính bấp bênh của Đinh-Tiền Lê bằng cách 'thể chế hóa' đất nước: dời đô phát triển kinh tế (Lý Thái Tổ), ban Hình thư lập pháp (Lý Thánh Tông), và xây dựng Văn Miếu (1070) đào tạo hiền tài bằng thực học, giúp vương triều tự vận hành ổn định lâu dài.",
    lessons: [
      { name: "Bài 8: Nhà Lý — Tổng quan", url: "bai-hoc/nha-ly-total.html" },
      { name: "Bài 9: Nhà Lý — Khai Quốc & Dời Đô", url: "bai-hoc/nha-ly-chap1.html" },
      { name: "Bài 10: Nhà Lý — Củng Cố & Mở Rộng", url: "bai-hoc/nha-ly-chap2.html" },
      { name: "Bài 11: Nhà Lý — Kháng Chiến Chống Tống", url: "bai-hoc/nha-ly-chap3.html" },
      { name: "Bài 12: Nhà Lý — Xây Dựng Văn Hóa & Thể Chế", url: "bai-hoc/nha-ly-chap4.html" },
      { name: "Bài 13: Nhà Lý — Suy Tàn & Chuyển Giao", url: "bai-hoc/nha-ly-chap5.html" }
    ],
    figures: [
      { name: "Lý Công Uẩn",         url: "nhan-vat/ly-cong-uan.html",        role: "king"     },
      { name: "Đào Cam Mộc",         url: "nhan-vat/dao-cam-moc.html",        role: "official" },
      { name: "Lưu Cơ",              url: "nhan-vat/luu-co.html",             role: "official" },
      { name: "Nguyễn Đạo Thanh",    url: "nhan-vat/nguyen-dao-thanh.html",   role: "official" },
      { name: "Lý Thái Tông",         url: "nhan-vat/ly-thai-tong.html",       role: "king"     },
      { name: "Lê Phụng Hiểu",        url: "nhan-vat/le-phung-hieu.html",      role: "official" },
      { name: "Nùng Trí Cao",          url: "nhan-vat/nung-tri-cao.html",       role: "enemy"    },
      { name: "Thiền Sư Vạn Hạnh",   url: "nhan-vat/thien-su-van-hanh.html",  role: "advisor"  },
      { name: "Lý Thánh Tông",        url: "nhan-vat/ly-thanh-tong.html",      role: "king"     },
      { name: "Hoàng Hậu Ỷ Lan",     url: "nhan-vat/hoang-hau-y-lan.html",    role: "queen"    },
      { name: "Lý Nhân Tông",         url: "nhan-vat/ly-nhan-tong.html",       role: "king"     },
      { name: "Lê Văn Thịnh",         url: "nhan-vat/le-van-thinh.html",       role: "official" },
      { name: "Quách Quỳ (Nhà Tống)", url: "nhan-vat/quach-quy.html",          role: "enemy"    },
      { name: "Lý Thường Kiệt",       url: "nhan-vat/ly-thuong-kiet.html",     role: "official" },
      { name: "Tô Hiến Thành",        url: "nhan-vat/to-hien-thanh.html",      role: "official" },
      { name: "Lý Thần Tông",         url: "nhan-vat/ly-than-tong.html",       role: "king"     },
      { name: "Nguyễn Minh Không",    url: "nhan-vat/nguyen-minh-khong.html",  role: "advisor"  },
      { name: "Lý Anh Tông",          url: "nhan-vat/ly-anh-tong.html",        role: "king"     },
      { name: "Lý Cao Tông",          url: "nhan-vat/ly-cao-tong.html",        role: "king"     },
      { name: "Lý Huệ Tông",          url: "nhan-vat/ly-hue-tong.html",        role: "king"     },
      { name: "Trần Thị Dung",      url: "nhan-vat/tran-thi-dung.html",       role: "queen"    },
      { name: "Lý Chiêu Hoàng",      url: "nhan-vat/ly-chieu-hoang.html",      role: "king"     }
    ],
    lineConnections: ["line-ntl-ly", "line-ly-tran"]
  },

  nha_tran: {
    category: "Triều Đại",
    title: "Nhà Trần",
    period: "1225 – 1400 SCN",
    desc: "Vương triều thành lập bởi bàn tay sắt của Thái sư Trần Thủ Độ — đạo diễn hoàn hảo cuộc chuyển giao quyền lực không đổ máu. Nhà Trần đối mặt ngay với bóng ma Mông Cổ và 3 lần đánh bại đế chế hùng mạnh nhất thế giới. Chiến thắng Đông Bộ Đầu (1258), Hàm Tử Quan và Bạch Đằng Giang (1288) là kỳ tích quân sự vĩ đại nhất Đại Việt.",
    lessons: [
      { name: "Nhà Trần - Khai Triều & Chuyển Giao Máu Lửa", url: "bai-hoc/nha-tran-chap1.html" },
      { name: "Nhà Trần - 3 Lần Kháng Chiến Chống Mông-Nguyên", url: "bai-hoc/nha-tran-chap2.html" },
      { name: "Nhà Trần - Thịnh Trị & Văn Hoá (1288–1341)", url: "bai-hoc/nha-tran-chap3.html" },
      { name: "Sự kiện 1299: Trần Nhân Tông lên Yên Tử", url: "bai-hoc/tran-nhan-tong-yen-tu.html" },
      { name: "Sự kiện 1301: Du Ngoạn Phương Nam", url: "bai-hoc/du-ngoan-phuong-nam.html" },
      { name: "Sự kiện 1307: Vụ Cướp Dâu Huyền Trân", url: "bai-hoc/cuop-dau-huyen-tran.html" },
      { name: "Sự kiện 1312: Đoàn Nhữ Hài Dụ Hàng Chiêm", url: "bai-hoc/doan-nhu-hai-du-hang.html" },
      { name: "Sự kiện 1328: Vụ Án Trần Quốc Chẩn", url: "bai-hoc/vu-an-tran-quoc-chan.html" },
      { name: "1341 · Kỷ Nguyên Sa Đọa & Thất Trảm Sớ", url: "bai-hoc/ky-nguyen-sa-doa-tran-du-tong.html" },
      { name: "1369 · Biến Cố Dương Nhật Lễ", url: "bai-hoc/bien-co-duong-nhat-le.html" },
      { name: "1370 · Sự Nhu Nhược Của Trần Nghệ Tông", url: "bai-hoc/su-nhu-nuoc-tran-nghe-tong.html" },
      { name: "1400 · Cú Chốt Hạ Của Hồ Quý Ly", url: "bai-hoc/cu-chot-ha-cua-ho-quy-ly.html" }
    ],
    figures: [
      { name: "Trần Thủ Độ",           url: "nhan-vat/tran-thu-do.html",          role: "official" },
      { name: "Trần Thái Tông",         url: "nhan-vat/tran-thai-tong.html",        role: "king"     },
      { name: "Lý Chiêu Hoàng",         url: "nhan-vat/ly-chieu-hoang.html",        role: "queen"    },
      { name: "Trần Thị Dung",          url: "nhan-vat/tran-thi-dung.html",         role: "official" },
      { name: "Trần Liễu",              url: "nhan-vat/tran-lieu.html",             role: "official" },
      { name: "Lê Phụ Trần",            url: "nhan-vat/le-phu-tran.html",           role: "official" },
      { name: "Trần Thánh Tông",        url: "nhan-vat/tran-thanh-tong.html",       role: "king"     },
      { name: "Trần Nhân Tông",         url: "nhan-vat/tran-nhan-tong.html",        role: "king"     },
      { name: "Trần Hưng Đạo",          url: "nhan-vat/tran-hung-dao.html",         role: "official" },
      { name: "Trần Quang Khải",        url: "nhan-vat/tran-quang-khai.html",       role: "official" },
      { name: "Trần Khánh Dư",          url: "nhan-vat/tran-khanh-du.html",         role: "official" },
      { name: "An Tư Công Chúa",        url: "nhan-vat/an-tu-cong-chua.html",       role: "queen"    },
      { name: "Trần Ích Tắc",           url: "nhan-vat/tran-ich-tac.html",          role: "enemy"    },
      { name: "Trần Quốc Toản",         url: "nhan-vat/tran-quoc-toan.html",        role: "official" },
      { name: "Trần Anh Tông",          url: "nhan-vat/tran-anh-tong.html",         role: "king"     },
      { name: "Trần Nhật Duật",         url: "nhan-vat/tran-nhat-duat.html",        role: "official" },
      { name: "Phạm Ngũ Lão",           url: "nhan-vat/pham-ngu-lao.html",          role: "official" },
      { name: "Trần Bình Trọng",        url: "nhan-vat/tran-binh-trong.html",       role: "official" },
      { name: "Yết Kiêu & Dã Tượng",   url: "nhan-vat/yet-kieu-da-tuong.html",     role: "official" },
      { name: "Huyền Trân Công Chúa",  url: "nhan-vat/huyen-tran-cong-chua.html",  role: "queen"    },
      { name: "Trần Minh Tông",         url: "nhan-vat/tran-minh-tong.html",        role: "king"     },
      { name: "Đoàn Nhữ Hài",           url: "nhan-vat/doan-nhu-hai.html",          role: "official" },
      { name: "Mạc Đĩnh Chi",           url: "nhan-vat/mac-dinh-chi.html",          role: "official" },
      { name: "Chu Văn An",             url: "nhan-vat/chu-van-an.html",            role: "advisor"  },
      { name: "Trần Dụ Tông",           url: "nhan-vat/tran-du-tong.html",          role: "king"     },
      { name: "Dương Nhật Lễ",          url: "nhan-vat/duong-nhat-le.html",         role: "king"     },
      { name: "Trần Nghệ Tông",         url: "nhan-vat/tran-nghe-tong.html",        role: "king"     },
      { name: "Chế Bồng Nga",           url: "nhan-vat/che-bong-nga.html",          role: "enemy"    },
      { name: "Trần Khát Chân",         url: "nhan-vat/tran-khat-chan.html",        role: "official" },
      { name: "Trần Hiến Tông",         url: "nhan-vat/tran-hien-tong.html",        role: "king"     },
      { name: "Bộ Ba Vua Bù Nhìn",     url: "nhan-vat/bo-ba-vua-bu-nhin.html",     role: "king"     }
    ],
    lineConnections: ["line-ly-tran"]
  },

  nha_ho: {
    category: "Triều đại",
    title: "Nhà Hồ (Đại Ngu)",
    period: "1400 – 1407 SCN",
    desc: "Triều đại ngắn nhất nhưng cải cách nhất lịch sử Việt Nam. Hồ Quý Ly đưa ra tiền giấy, hạn điền, thi chữ Nôm đi trước thời đại 200 năm. Sụp đổ chỉ sau 7 năm vì không có lòng dân — khi nhà Minh đến, không ai đứng ra bảo vệ.",
    lessons: [
      { name: "Nhà Hồ — Tổng Quan", url: "bai-hoc/nha-ho-tong-quan.html" },
      { name: "Kháng Chiến Chống Minh (1407)", url: "bai-hoc/nha-ho-sup-do-1407.html" }
    ],
    figures: [
      { name: "Hồ Quý Ly",       url: "nhan-vat/ho-quy-ly.html",       role: "king"     },
      { name: "Hồ Nguyên Trừng", url: "nhan-vat/ho-nguyen-trung.html", role: "official" }
    ],
    lineConnections: []
  },

  nha_hau_tran: {
    category: "Triều đại",
    title: "Nhà Hậu Trần",
    period: "1407 – 1413 SCN",
    desc: "Vương triều kháng chiến do Giản Định Đế Trần Ngỗi và Trùng Quang Đế Trần Quý Khoáng lãnh đạo chống quân Minh xâm lược. Thắng lớn ở trận Bô Cô (1408) lẫy lừng nhưng rồi bị rạn nứt do Giản Định Đế nghi kỵ sát hại Đặng Tất và Nguyễn Cảnh Chân.",
    lessons: [
      { name: "Nhà Hậu Trần — Kháng Chiến Bi Tráng 4 Năm", url: "bai-hoc/nha-hau-tran.html" }
    ],
    figures: [
      { name: "Giản Định Đế",     url: "nhan-vat/tran-ngoi.html",        role: "king"     },
      { name: "Trùng Quang Đế",   url: "nhan-vat/tran-quy-khoang.html", role: "king"     },
      { name: "Đặng Tất",          url: "nhan-vat/dang-tat.html",         role: "official" },
      { name: "Nguyễn Cảnh Chân", url: "nhan-vat/nguyen-canh-chan.html", role: "official" },
      { name: "Nguyễn Cảnh Dị",   url: "nhan-vat/nguyen-canh-di.html",   role: "official" }
    ],
    lineConnections: []
  },

  nha_hau_le: {
    category: "Triều đại",
    title: "Nhà Hậu Lê",
    period: "1428 – 1788 SCN",
    desc: "Triều đại dài nhất lịch sử Việt Nam (360 năm). Chia 2 giai đoạn: Lê Sơ (1428–1527) — 100 năm đỉnh cao với Lê Thánh Tông, Luật Hồng Đức, Nam Tiến 1471. Lê Trung Hưng (1533–1789) — 250 năm bóng ma trên ngai vàng, Chúa Trịnh – Chúa Nguyễn phân tranh.",
    lessons: [
      { name: "Nhà Hậu Lê — Tổng Quan", url: "bai-hoc/nha-hau-le-tong-quan.html" },
      { name: "Chap 1 · Kháng Chiến Chống Minh (1418–1427)", url: "bai-hoc/hau-le-khang-chien-chong-minh.html" },
      { name: "Chap 2 · Đỉnh Cao Hoàng Kim (1428–1497)", url: "bai-hoc/nha-hau-le-chap2-dinh-cao-hoang-kim.html" },
      { name: "Chap 3 · Suy Tàn & Mạc Thay Thế (1497–1527)", url: "bai-hoc/nha-hau-le-chap3-suy-tan-mac-thay-the.html" },
      { name: "└ 1497–1505 · Lê Hiến Tông & Lê Túc Tông", url: "bai-hoc/nha-hau-le-chap4-cum1-le-hien-tong.html" },
      { name: "└ 1505–1509 · Lê Uy Mục — Vua Quỷ", url: "bai-hoc/nha-hau-le-chap4-cum2-le-uy-muc.html" },
      { name: "└ 1510–1516 · Lê Tương Dực — Vua Lợn", url: "bai-hoc/nha-hau-le-chap4-cum3-le-tuong-duc.html" },
      { name: "└ 1516–1527 · Triều Đình Tan Rã & Mạc Soán Ngôi", url: "bai-hoc/nha-hau-le-chap4-cum4-trieu-dinh-tan-ra.html" }
    ],
    figures: [
      { name: "Lê Lợi",          url: "nhan-vat/le-loi.html",          role: "king"     },
      { name: "Lê Thái Tông",    url: "nhan-vat/le-thai-tong.html",    role: "king"     },
      { name: "Lê Thánh Tông",   url: "nhan-vat/le-thanh-tong.html",   role: "king"     },
      { name: "Nguyễn Trãi",     url: "nhan-vat/nguyen-trai.html",     role: "advisor"  },
      { name: "Lê Lai",          url: "nhan-vat/le-lai.html",          role: "official" },
      { name: "Nguyễn Chích",    url: "nhan-vat/nguyen-chich.html",    role: "official" },
      { name: "Lê Sát",          url: "nhan-vat/le-sat.html",          role: "official" },
      { name: "Thân Nhân Trung", url: "nhan-vat/than-nhan-trung.html", role: "advisor"  },
      { name: "Lương Thế Vinh",  url: "nhan-vat/luong-the-vinh.html",  role: "advisor"  },
      { name: "Nguyễn Thị Anh",  url: "nhan-vat/nguyen-thi-anh.html",  role: "queen"    },
      { name: "Nguyễn Thị Lộ",   url: "nhan-vat/nguyen-thi-lo.html",   role: "official" },
      { name: "Trà Toàn",        url: "nhan-vat/tra-toan.html",        role: "enemy"    },
      { name: "Lê Hiến Tông",    url: "nhan-vat/le-hien-tong.html",    role: "king"     },
      { name: "Lê Uy Mục",       url: "nhan-vat/le-uy-muc.html",       role: "king"     },
      { name: "Lê Tương Dực",    url: "nhan-vat/le-tuong-duc.html",    role: "king"     },
      { name: "Vũ Như Tô",       url: "nhan-vat/vu-nhu-to.html",       role: "advisor"  },
      { name: "Trịnh Duy Sản",   url: "nhan-vat/trinh-duy-san.html",   role: "official" },
      { name: "Lê Chiêu Tông",   url: "nhan-vat/le-chieu-tong.html",   role: "king"     },
      { name: "Lê Cung Hoàng",   url: "nhan-vat/le-cung-hoang.html",   role: "king"     },
      { name: "Mạc Đăng Dung",   url: "nhan-vat/mac-dang-dung.html",   role: "king"     },
      { name: "Nguyễn Kim",      url: "nhan-vat/nguyen-kim.html",      role: "official" },
      { name: "Trần Cảo",        url: "nhan-vat/tran-cao.html",        role: "enemy"    }
    ],
    lineConnections: []
  },


  nha_mac: {
    category: "Triều đại",
    title: "Nhà Mạc",
    period: "1527 – 1592 SCN",
    desc: "65 năm tồn tại bị lịch sử đánh giá thiếu công bằng — phe thắng cuộc Lê-Trịnh cần Nhà Mạc là phản diện. Thực tế: Mạc Đăng Doanh (1529–1540) mang lại thịnh trị thực sự, 22 khoa thi liên tục, kinh tế sôi động. Sụp đổ 1592 khi Trịnh Tùng chiếm Thăng Long.",
    lessons: [
      { name: "Chap 1 · Lập Triều & Thịnh Trị (1527–1541)", url: "bai-hoc/nha-mac-chap1-lap-trieu-thinh-tri.html" },
      { name: "Chap 2 · Nam-Bắc Triều & Sụp Đổ (1541–1592)", url: "bai-hoc/nha-mac-chap2-nam-bac-trieu-sup-do.html" },
      { name: "SK1 · Mạc Đăng Dung lên ngôi (1527)", url: "su-kien/mac-dang-dung-len-ngoi.html" },
      { name: "SK2 · Lê Cung Hoàng thoái vị (1527)", url: "su-kien/le-cung-hoang-thoai-vi.html" },
      { name: "SK3 · Thăng Long Thịnh Trị (1529–1540)", url: "su-kien/thang-long-thinh-tri-mac-dang-doanh.html" },
      { name: "SK4 · Nguyễn Kim lập Lê Trung Hưng (1533)", url: "su-kien/nguyen-kim-lap-le-trung-hung.html" },
      { name: "SK5 · Cú Quỳ Lạy Nam Quan (1541)", url: "su-kien/cu-quy-lay-nam-quan.html" }
    ],
    figures: [
      { name: "Mạc Đăng Dung",    url: "nhan-vat/mac-dang-dung.html",    role: "king"     },
      { name: "Mạc Đăng Doanh",   url: "nhan-vat/mac-dang-doanh.html",   role: "king"     },
      { name: "Mạc Mậu Hợp",      url: "nhan-vat/mac-mau-hop.html",      role: "king"     },
      { name: "Nguyễn Kim",        url: "nhan-vat/nguyen-kim.html",        role: "official" },
      { name: "Trịnh Kiểm",        url: "nhan-vat/trinh-kiem.html",        role: "official" },
      { name: "Trịnh Tùng",        url: "nhan-vat/trinh-tung.html",        role: "official" },
      { name: "Nguyễn Hoàng",      url: "nhan-vat/nguyen-hoang.html",      role: "official" },
      { name: "Nguyễn Bỉnh Khiêm", url: "nhan-vat/nguyen-binh-khiem.html", role: "advisor"  },
      { name: "Phùng Khắc Khoan",  url: "nhan-vat/phung-khac-khoan.html",  role: "advisor"  },
      { name: "Dương Chấp Nhất",   url: "nhan-vat/duong-chap-nhat.html",   role: "official" },
      { name: "Trịnh Xuân",        url: "nhan-vat/trinh-xuan.html",        role: "official" },
      { name: "Lê Kính Tông",      url: "nhan-vat/le-kinh-tong.html",      role: "king"     }
    ],
    lineConnections: ["line-mac-trinh"]
  },

  trinh_nguyen: {
    category: "Giai đoạn Phân Tranh",
    title: "Trịnh–Nguyễn Phân Tranh",
    period: "1533 – 1786 SCN",
    desc: "Giai đoạn đất nước chia đôi dài nhất lịch sử (148 năm chiến tranh + 100 năm hòa hoãn). Từ 1533 Nguyễn Kim lập Lê Trung Hưng — thực quyền lần lượt vào tay Chúa Trịnh (Đàng Ngoài) và Chúa Nguyễn (Đàng Trong). 1627–1672: 7 lần đại chiến, Trịnh không phá được Lũy Thầy, Nguyễn không đủ quân tiến ra Bắc. Hòa hoãn ngầm 1672: Sông Gianh thành ranh giới mặc định. Đàng Trong Nam tiến tạo bản đồ hiện đại, Đàng Ngoài dần trì trệ — tiền đề cho Tây Sơn 1771.",
    lessons: [
      { name: "C1 · Nguồn Gốc Phân Tranh (1533–1627)", url: "bai-hoc/trinh-nguyen-phan-tranh-c1.html" },
      { name: "C2 · Chiến Tranh 7 Lần (1627–1672)",     url: "bai-hoc/trinh-nguyen-phan-tranh-c2.html" },
      { name: "C3 · Đàng Trong Phát Triển (1672–1750)", url: "bai-hoc/trinh-nguyen-phan-tranh-c3.html" }
    ],
    figures: [
      { name: "Trịnh Kiểm",        url: "nhan-vat/trinh-kiem.html",        role: "king"     },
      { name: "Trịnh Tùng",        url: "nhan-vat/trinh-tung.html",        role: "king"     },
      { name: "Trịnh Tráng",       url: "nhan-vat/trinh-trang.html",       role: "king"     },
      { name: "Nguyễn Hoàng",      url: "nhan-vat/nguyen-hoang.html",      role: "king"     },
      { name: "Nguyễn Phúc Nguyên", url: "nhan-vat/nguyen-phuc-nguyen.html", role: "king"  },
      { name: "Nguyễn Phúc Lan",   url: "nhan-vat/nguyen-phuc-lan.html",   role: "king"     },
      { name: "Nguyễn Phúc Tần",   url: "nhan-vat/nguyen-phuc-tan.html",   role: "king"     },
      { name: "Nguyễn Bỉnh Khiêm", url: "nhan-vat/nguyen-binh-khiem.html", role: "advisor"  },
      { name: "Đào Duy Từ",        url: "nhan-vat/dao-duy-tu.html",        role: "advisor"  },
      { name: "Lê Kính Tông",      url: "nhan-vat/le-kinh-tong.html",      role: "puppet"   },
      { name: "Trịnh Xuân",        url: "nhan-vat/trinh-xuan.html",        role: "official" },
      { name: "Nguyễn Phúc Chu",   url: "nhan-vat/nguyen-phuc-chu.html",   role: "king"     },
      { name: "Nguyễn Hữu Cảnh",   url: "nhan-vat/nguyen-huu-canh.html",   role: "official" },
      { name: "Mạc Cửu",           url: "nhan-vat/mac-cuu.html",           role: "official" },
      { name: "Mạc Thiên Tứ",      url: "nhan-vat/mac-thien-tu.html",      role: "official" },
      { name: "Trần Thượng Xuyên", url: "nhan-vat/tran-thuong-xuyen.html", role: "official" },
      { name: "Dương Ngạn Địch",   url: "nhan-vat/duong-ngan-dich.html",   role: "official" },
      { name: "Trịnh Cương",       url: "nhan-vat/trinh-cuong.html",       role: "king"     }
    ],
    lineConnections: ["line-mac-trinh", "line-trinh-tayson"]
  },

  nha_tay_son: {
    category: "Triều đại",
    title: "Nhà Tây Sơn",
    period: "1771 – 1802 SCN",
    desc: "Bão lốc Tây Sơn xóa bỏ cả hai tập đoàn phong kiến Trịnh - Nguyễn, đại phá 5 vạn quân Xiêm tại Rạch Gầm - Xoài Mút (1785) và 29 vạn quân Thanh tại Ngọc Hồi - Đống Đa (1789). Thể chế gắn liền với thiên tài quân sự - chính trị Quang Trung Nguyễn Huệ.",
    lessons: [
      { name: "Nhà Tây Sơn — Khởi Phát, Đỉnh Cao & Sụp Đổ", url: "bai-hoc/nha-tay-son.html" }
    ],
    figures: [
      { name: "Quang Trung (Nguyễn Huệ)", url: "nhan-vat/nguyen-hue.html",        role: "king"     },
      { name: "Thái Đức Đế (Nguyễn Nhạc)", url: "nhan-vat/nguyen-nhac.html",       role: "king"     },
      { name: "Đông Định Vương (Nguyễn Lữ)", url: "nhan-vat/nguyen-lu.html",       role: "king"     },
      { name: "Cảnh Thịnh Đế (Nguyễn Quang Toản)", url: "nhan-vat/nguyen-quang-toan.html", role: "king" },
      { name: "Gia Long (Nguyễn Ánh)",     url: "nhan-vat/nguyen-anh.html",        role: "enemy"    },
      { name: "Lê Chiêu Thống",           url: "nhan-vat/le-chieu-thong.html",    role: "enemy"    },
      { name: "Ngô Thì Nhậm",              url: "nhan-vat/ngo-thi-nham.html",     role: "advisor"  },
      { name: "La Sơn Phu Tử (Nguyễn Thiếp)", url: "nhan-vat/nguyen-thiep.html",   role: "advisor"  },
      { name: "Bá Đa Lộc",                 url: "nhan-vat/ba-da-loc.html",        role: "advisor"  },
      { name: "Bùi Thị Xuân",              url: "nhan-vat/bui-thi-xuan.html",     role: "official" },
      { name: "Trần Quang Diệu",           url: "nhan-vat/tran-quang-dieu.html",  role: "official" },
      { name: "Vũ Văn Dũng",               url: "nhan-vat/vu-van-dung.html",      role: "official" },
      { name: "Võ Tánh",                   url: "nhan-vat/vo-tanh.html",          role: "official" },
      { name: "Nguyễn Hữu Chỉnh",          url: "nhan-vat/nguyen-huu-chinh.html", role: "official" },
      { name: "Trương Phúc Loan",          url: "nhan-vat/truong-phuc-loan.html", role: "official" },
      { name: "Tôn Sĩ Nghị",               url: "nhan-vat/ton-si-nghi.html",      role: "enemy"    }
    ],
    lineConnections: ["line-trinh-tayson"]
  },

  // ─── PATTERNS ───
  pt1: {
    category: "Quy Luật Lịch Sử 01",
    title: "Thiên thời + Nhân hòa",
    period: "Pattern Quy luật",
    desc: "Sự khác biệt chí mạng giữa các cuộc khởi nghĩa thời Bắc thuộc và đại thắng Ngô Quyền 938 là sự kết hợp thời cơ vàng. Trước 938, khởi nghĩa thắng trận rồi mất vì Trung Hoa còn mạnh và ta chưa xây nhà nước vững chãi. Năm 938, Trung Hoa rơi vào đại loạn Ngũ Đại Thập Quốc (Thiên thời), và Ngô Quyền lập tức xưng vương dựng triều đình đóng đô Cổ Loa (Nhân hòa) thiết lập rào cản ngăn chặn sự tái chiếm.",
    lessons: [
      { name: "Bài 3: 1000 Năm Bắc Thuộc", url: "bai-hoc/1000-nam-bac-thuoc.html" },
      { name: "Bài 4: Ngô Quyền 938", url: "bai-hoc/ngo-quyen.html" }
    ],
    figures: [
      { name: "Ngô Quyền", url: "nhan-vat/ngo-quyen.html" }
    ],
    lineConnections: []
  },

  pt2: {
    category: "Quy Luật Lịch Sử 02",
    title: "Tránh khoảng trống quyền lực",
    period: "Pattern Quy luật",
    desc: "Lịch sử chỉ ra rằng khi vị anh hùng tối cao dựng nước mất sớm hoặc qua đời đột ngột mà chưa hoàn thành xây dựng thể chế và cơ chế thừa kế rõ ràng, đất nước sẽ lập tức rơi vào khủng hoảng hoặc bị ngoại bang dòm ngó. Điển hình là sau cái chết của Ngô Quyền 944 dẫn đến Loạn 12 sứ quân, và cái chết của Đinh Tiên Hoàng 979 dẫn đến đại quân Tống nam tiến. Sự có mặt dũng cảm, thực dụng của Đinh Bộ Lĩnh, Dương Vân Nga, Lê Hoàn và sau này là việc nhiếp chính vững vàng của Hoàng hậu Ỷ Lan đã cứu quốc gia kịp thời thoát khỏi hiểm cảnh.",
    lessons: [
      { name: "Bài 5: Loạn 12 Sứ Quân", url: "bai-hoc/loan-12-su-quan.html" },
      { name: "Bài 6: Đinh – Lê", url: "bai-hoc/dinh-le.html" },
      { name: "Bài 7: Nhà Tiền Lê", url: "bai-hoc/nha-tien-le.html" }
    ],
    figures: [
      { name: "Đinh Bộ Lĩnh",    url: "nhan-vat/dinh-bo-linh.html" },
      { name: "Dương Vân Nga",    url: "nhan-vat/duong-van-nga.html" },
      { name: "Hoàng Hậu Ỷ Lan", url: "nhan-vat/hoang-hau-y-lan.html" }
    ],
    lineConnections: []
  },

  pt3: {
    category: "Quy Luật Lịch Sử 03",
    title: "Trả rẻ giữ đắt (Ngoại giao)",
    period: "Pattern Quy luật",
    desc: "Sách lược ngoại giao xuyên suốt 1.000 năm của các vương triều độc lập tự chủ nước Việt: Chấp nhận nhún nhường, chịu triều cống triều đình phong kiến phương Bắc (trả cái rẻ - danh vị hào nhoáng bên ngoài) để giữ lấy nền độc lập, chủ quyền nội trị thực chất bên trong (giữ cái đắt). Vua Lê Hoàn sau khi đánh bại quân Tống năm 981 đã thả tù binh và lập tức cử sứ thần sang triều cống cầu hòa để đổi lấy hòa bình bền vững.",
    lessons: [
      { name: "Bài 6: Đinh – Lê", url: "bai-hoc/dinh-le.html" },
      { name: "Bài 7: Nhà Tiền Lê", url: "bai-hoc/nha-tien-le.html" }
    ],
    figures: [
      { name: "Lê Hoàn", url: "nhan-vat/le-hoan.html" }
    ],
    lineConnections: []
  },

  pt4: {
    category: "Quy Luật Lịch Sử 04",
    title: "Biểu tượng Bạch Đằng Giang",
    period: "Pattern Quy luật",
    desc: "Sự lặp lại kỳ diệu của tri thức và chiến thuật quân sự. Sông Bạch Đằng với trận địa cắm cọc gỗ nhọn bịt sắt lợi dụng thủy triều lên xuống đã ghi nhận 2 lần chiến thắng vang dội trong thời kỳ này: Ngô Quyền đánh tan quân Nam Hán năm 938 và Lê Hoàn đánh bại quân Tống năm 981. Nó chứng tỏ tri thức quân sự được lưu truyền, kế thừa xuất sắc qua các thế hệ anh hùng cứu quốc.",
    lessons: [
      { name: "Bài 4: Ngô Quyền 938", url: "bai-hoc/ngo-quyen.html" },
      { name: "Bài 7: Nhà Tiền Lê", url: "bai-hoc/nha-tien-le.html" }
    ],
    figures: [
      { name: "Ngô Quyền", url: "nhan-vat/ngo-quyen.html" },
      { name: "Lê Hoàn",   url: "nhan-vat/le-hoan.html" }
    ],
    lineConnections: []
  },

  pt5: {
    category: "Quy Luật Lịch Sử 05",
    title: "Chuyển từ Uy Vũ sang Thể Chế",
    period: "Pattern Quy luật",
    desc: "Đỉnh cao của sự trưởng thành quốc gia. Các triều đại Ngô, Đinh, Tiền Lê cai trị đất nước chủ yếu bằng 'uy vũ cá nhân' của vị dũng tướng lập quốc, khiến vương triều bấp bênh dễ sụp khi vua chết. Nhà Lý lập quốc 1009 đã giải quyết triệt để bằng 'thể chế hóa': Dời đô Thăng Long mở mang giao thương phát triển, ban Hình Thư xác lập luật pháp tối cao và dựng Văn Miếu đào tạo quan lại bằng quy trình chọn lọc thực tài.",
    lessons: [
      { name: "Bài 6: Đinh – Lê", url: "bai-hoc/dinh-le.html" },
      { name: "Bài 8: Nhà Lý — Tổng quan", url: "bai-hoc/nha-ly-total.html" },
      { name: "Bài 9: Nhà Lý — Khai Quốc & Dời Đô", url: "bai-hoc/nha-ly-chap1.html" },
      { name: "Bài 10: Nhà Lý — Củng Cố & Mở Rộng", url: "bai-hoc/nha-ly-chap2.html" },
      { name: "Bài 12: Nhà Lý — Chap 4", url: "bai-hoc/nha-ly-chap4.html" }
    ],
    figures: [
      { name: "Lý Công Uẩn",        url: "nhan-vat/ly-cong-uan.html" },
      { name: "Lý Thái Tông",        url: "nhan-vat/ly-thai-tong.html" },
      { name: "Thiền Sư Vạn Hạnh",  url: "nhan-vat/thien-su-van-hanh.html" },
      { name: "Lý Thánh Tông",       url: "nhan-vat/ly-thanh-tong.html" },
      { name: "Hoàng Hậu Ỷ Lan",    url: "nhan-vat/hoang-hau-y-lan.html" },
      { name: "Lý Nhân Tông",        url: "nhan-vat/ly-nhan-tong.html" },
      { name: "Lê Văn Thịnh",        url: "nhan-vat/le-van-thinh.html" }
    ],
    lineConnections: []
  },

  nha_nguyen: {
    category: "Triều Đại",
    title: "Nhà Nguyễn — Triều Đại Cuối Cùng",
    period: "1802–1945 SCN",
    desc: "Gia Long thống nhất đất nước sau 300 năm chia cắt Trịnh–Nguyễn và 30 năm nội chiến Tây Sơn. Nhà Nguyễn lập kinh đô Huế, đặt quốc hiệu Việt Nam (1804). Nhưng đúng vào lúc đó, chủ nghĩa thực dân phương Tây ập đến với pháo hạm và súng trường hiện đại. Dù có những danh tướng kiên cường như Nguyễn Tri Phương, Hoàng Diệu — và những nhà canh tân sáng suốt như Nguyễn Trường Tộ — triều đình Huế do dự, bảo thủ, từ chối đổi mới. Pháp lần lượt chiếm Nam Kỳ (1858–1867), Bắc Kỳ và Trung Kỳ (1883–1884). Phong trào Cần Vương (1885–1896) bùng lên rồi bị dập tắt. Năm 1945, Vua Bảo Đại thoái vị — khép lại 143 năm triều Nguyễn và nghìn năm phong kiến Việt Nam.",
    lessons: [
      { name: "1802–1858 · Độc Lập, Thống Nhất & Đỉnh Cao", url: "bai-hoc/nha-nguyen-doc-lap-thong-nhat-dinh-cao.html" },
      { name: "1831–32 · Đại Cải Cách 31 Tỉnh Minh Mạng", url: "bai-hoc/nha-nguyen-cai-cach-hanh-chinh-minh-mang.html" },
      { name: "1833–35 · Khởi Nghĩa Lê Văn Khôi & Chống Xiêm", url: "bai-hoc/nha-nguyen-khoi-nghia-le-van-khoi-xiem.html" },
      { name: "1816–1841 · Thực Thi Chủ Quyền Hoàng Sa–Trường Sa", url: "bai-hoc/nha-nguyen-chu-quyen-hoang-sa-truong-sa.html" },
      { name: "1858–1885 · Pháp Xâm Lược & Mất Nước", url: "bai-hoc/nha-nguyen-phap-xam-luoc.html" },
      { name: "1862–1884 · Chuỗi Hòa Ước Nhượng Bộ", url: "bai-hoc/nha-nguyen-hoa-uoc-bat-binh-dang.html" },
      { name: "1873 & 1883 · Hai Chiến Thắng Cầu Giấy", url: "bai-hoc/nha-nguyen-tran-ha-noi-cau-giay.html" },
      { name: "1885 · Biến Cố Kinh Thành & Dụ Cần Vương", url: "bai-hoc/nha-nguyen-bien-co-kinh-thanh-hue-can-vuong.html" }
    ],
    figures: [
      { name: "Gia Long",             url: "nhan-vat/gia-long.html",           role: "king" },
      { name: "Vua Minh Mạng",        url: "nhan-vat/vua-minh-mang.html",      role: "king" },
      { name: "Vua Thiệu Trị",        url: "nhan-vat/vua-thieu-tri.html",      role: "king" },
      { name: "Nguyễn Văn Thành",    url: "nhan-vat/nguyen-van-thanh.html",   role: "official" },
      { name: "Lê Văn Duyệt",         url: "nhan-vat/le-van-duyet.html",       role: "official" },
      { name: "Vua Tự Đức",          url: "nhan-vat/vua-tu-duc.html",         role: "king" },
      { name: "Nguyễn Tri Phương",   url: "nhan-vat/nguyen-tri-phuong.html",  role: "official" },
      { name: "Hoàng Diệu",          url: "nhan-vat/hoang-dieu.html",          role: "official" },
      { name: "Phan Thanh Giản",     url: "nhan-vat/phan-thanh-gian.html",    role: "advisor" },
      { name: "Trương Định",         url: "nhan-vat/truong-dinh.html",         role: "official" },
      { name: "Nguyễn Trung Trực",   url: "nhan-vat/nguyen-trung-truc.html",  role: "official" },
      { name: "Nguyễn Trường Tộ",    url: "nhan-vat/nguyen-truong-to.html",   role: "advisor" },
      { name: "Tôn Thất Thuyết",     url: "nhan-vat/ton-that-thuyet.html",    role: "official" }
    ],
    lineConnections: []
  }
};
