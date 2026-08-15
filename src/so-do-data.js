// =============================================================
//  so-do-data.js — Dữ liệu triều đình Việt Nam
//  Cách thêm nội dung mới:
//    • Thêm vua/quan: thêm object vào columns[] của ERA tương ứng
//    • Thêm triều đại: thêm ERA object mới vào cuối DYNASTY_DATA
//    • Đổi màu card: sửa thuộc tính cardStyle / titleStyle / ...
// =============================================================

const DYNASTY_DATA = [

  // ─────────────────────────────────────────────────
  // ERA 1: ĐẤU TRANH GIÀNH ĐỘC LẬP
  // ─────────────────────────────────────────────────
  {
    id: "era-dau-tranh",
    label: "Thời kỳ đấu tranh giành độc lập · 40 – 937 SCN",
    dividerBefore: null,
    columns: [
      {
        king: {
          href: "nhan-vat/hai-ba-trung.html",
          crown: "👑", title: "Nữ Vương",
          name: "Trưng Nữ Vương", realName: "Trưng Trắc & Trưng Nhị",
          years: "📅 40 – 43 SCN",
          note: "Cuộc khởi nghĩa độc lập đầu tiên. Đánh đuổi Tô Định, lập vương quốc tự trị ngắn ngủi."
        },
        officials: []
      },
      {
        king: {
          href: "nhan-vat/phung-hung.html",
          crown: "👑", title: "Bố Cái Đại Vương",
          name: "Phùng Hưng", realName: "Phùng Hưng",
          years: "📅 ~791 – 802 SCN",
          note: "Thủ lĩnh Đường Lâm. Chiếm lại Tống Bình, cai trị tự trị trước khi nhà Đường phục hồi."
        },
        officials: []
      },
      {
        king: {
          href: "nhan-vat/khuc-thua-du.html",
          crown: "👑", title: "Tiết Độ Sứ",
          name: "Khúc Thừa Dụ", realName: "Khúc Thừa Dụ",
          years: "📅 905 – 907 SCN",
          note: "Người đặt nền móng tự trị thực sự. Tiếp quản quyền lực từ nhà Đường suy tàn bằng con đường hoà bình."
        },
        officials: []
      },
      {
        king: {
          href: "nhan-vat/duong-dinh-nghe.html",
          crown: "👑", title: "Tiết Độ Sứ",
          name: "Dương Đình Nghệ", realName: "Dương Đình Nghệ",
          years: "📅 931 – 937 SCN",
          note: "Giải phóng Giao Châu khỏi Nam Hán. Thân phụ của Dương Vân Nga, người kết nối Đinh–Tiền Lê."
        },
        officials: []
      }
    ]
  },

  // ─────────────────────────────────────────────────
  // ERA 2: NGÔ VƯƠNG
  // ─────────────────────────────────────────────────
  {
    id: "era-ngo-vuong",
    label: "Ngô Vương · 939 – 944 SCN",
    dividerBefore: "⚔️ 938 — Ngô Quyền đánh Bạch Đằng, kết thúc 1.000 năm Bắc thuộc",
    columns: [
      {
        king: {
          href: "nhan-vat/ngo-quyen.html",
          crown: "👑", title: "Ngô Vương",
          name: "Ngô Quyền", realName: "Ngô Quyền",
          years: "📅 939 – 944 SCN",
          note: "Chiến thắng Bạch Đằng 938. Khai sinh nền độc lập vĩnh viễn. Mất khi 47 tuổi, chưa kịp xây dựng thể chế."
        },
        officials: []
      }
    ]
  },

  // ─────────────────────────────────────────────────
  // ERA 3: NHÀ ĐINH
  // ─────────────────────────────────────────────────
  {
    id: "era-nha-dinh",
    label: "Nhà Đinh · 968 – 980 SCN",
    dividerBefore: "🌀 Loạn 12 Sứ Quân · 944 – 968",
    columns: [
      {
        king: {
          href: "nhan-vat/dinh-bo-linh.html",
          crown: "👑", title: "Đinh Tiên Hoàng",
          name: "Đinh Bộ Lĩnh", realName: "Đinh Hoàn",
          years: "📅 968 – 979 SCN",
          note: "Dẹp loạn 12 Sứ Quân. Lập Nhà Đinh, đặt tên nước Đại Cồ Việt. Bị ám sát năm 979."
        },
        officials: [
          { href: "nhan-vat/duong-van-nga.html", iconClass: "icon-queen", icon: "👸", roleClass: "role-queen", role: "Hoàng Hậu", name: "Dương Vân Nga", desc: "Hoàng hậu Nhà Đinh → Tiền Lê. Cầu nối quyền lực hai triều đại" }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────
  // ERA 4: NHÀ TIỀN LÊ
  // ─────────────────────────────────────────────────
  {
    id: "era-tien-le",
    label: "Nhà Tiền Lê · 980 – 1009 SCN",
    dividerBefore: null,
    columns: [
      {
        king: {
          href: "nhan-vat/le-hoan.html",
          crown: "👑", title: "Lê Đại Hành",
          name: "Lê Hoàn", realName: "Lê Hoàn",
          years: "📅 980 – 1005 SCN",
          note: "Đại thắng quân Tống 981 & quân Chiêm. Điều phối quyền lực bằng cả cương lẫn nhu."
        },
        officials: [
          { href: "nhan-vat/duong-van-nga.html", iconClass: "icon-queen", icon: "👸", roleClass: "role-queen", role: "Hoàng Hậu / Nhiếp Chính", name: "Dương Vân Nga", desc: "Cựu hoàng hậu Nhà Đinh, trao áo long bào cho Lê Hoàn" },
          { href: "nhan-vat/thien-su-van-hanh.html", iconClass: "icon-advisor", icon: "🧘", roleClass: "role-advisor", role: "Cố Vấn Tối Cao", name: "Thiền Sư Vạn Hạnh", desc: "Cố vấn tinh thần dưới thời Tiền Lê → đưa Lý Công Uẩn lên ngôi" }
        ]
      },
      {
        king: {
          href: "nhan-vat/le-long-dinh.html",
          crown: "👑", title: "Lê Ngọa Triều",
          name: "Lê Long Đĩnh", realName: "Lê Long Đĩnh",
          years: "📅 1005 – 1009 SCN",
          note: "Vị vua cuối Tiền Lê. Bạo ngược khiến triều đình mất lòng dân — mở đường cho sự ra đời Nhà Lý."
        },
        officials: [
          { href: "nhan-vat/thien-su-van-hanh.html", iconClass: "icon-advisor", icon: "🧘", roleClass: "role-advisor", role: "Cố Vấn Bí Mật", name: "Thiền Sư Vạn Hạnh", desc: "Bí mật vận động đưa Lý Công Uẩn thay thế Tiền Lê" }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────
  // ERA 5: NHÀ LÝ
  // ─────────────────────────────────────────────────
  {
    id: "era-nha-ly",
    label: "Nhà Lý (Đại Việt) · 1009 – 1225 SCN",
    dividerBefore: "🌟 1009 — Lý Công Uẩn lên ngôi, khai sáng Nhà Lý · Đại Việt ra đời",
    columns: [
      {
        king: {
          href: "nhan-vat/ly-cong-uan.html",
          crown: "👑", title: "Lý Thái Tổ — Khai Quốc",
          name: "Lý Công Uẩn", realName: "Lý Công Uẩn",
          years: "📅 1009 – 1028 SCN",
          note: "Dời đô từ Hoa Lư về Thăng Long. Đặt nền móng quốc gia văn minh, mở kỷ nguyên 216 năm Nhà Lý."
        },
        officials: [
          { href: "nhan-vat/thien-su-van-hanh.html", iconClass: "icon-advisor", icon: "🧘", roleClass: "role-advisor", role: "Cha Đỡ Đầu Tinh Thần", name: "Thiền Sư Vạn Hạnh", desc: "Người đưa Lý Công Uẩn lên ngôi, nền tảng tư tưởng Phật giáo Nhà Lý" },
          { href: "nhan-vat/dao-cam-moc.html", iconClass: "icon-official", icon: "📜", roleClass: "role-official", role: "Đệ Nhất Công Thần Khai Quốc", name: "Đào Cam Mộc", desc: "Vận động bá quan, thuyết phục Lý Công Uẩn nhận ngai vàng. Không đổ một giọt máu" },
          { href: "nhan-vat/luu-co.html", iconClass: "icon-official", icon: "📜", roleClass: "role-official", role: "Kiến Trúc Sư Thầm Lặng", name: "Lưu Cơ", desc: "Lão thần ba triều — xây nền móng Đại La trước khi dời đô. Nhà kỹ trị sinh tồn qua biến động" },
          { href: "nhan-vat/nguyen-dao-thanh.html", iconClass: "icon-official", icon: "📜", roleClass: "role-official", role: "Chánh Sứ Ngoại Giao Văn Hóa", name: "Nguyễn Đạo Thanh", desc: "Dẫn đoàn sang nhà Tống năm 1018, thỉnh Kinh Tam Tạng — ngoại giao văn hóa xác lập vị thế Đại Việt" }
        ]
      },
      {
        king: {
          href: "nhan-vat/ly-thai-tong.html",
          crown: "👑", title: "Lý Thái Tông — Củng Cố",
          name: "Lý Thái Tông", realName: "Lý Phật Mã",
          years: "📅 1028 – 1054 SCN",
          note: "Lập bộ luật Hình thư — bộ luật thành văn đầu tiên. Chinh phục Chiêm Thành, mở rộng lãnh thổ phía Nam."
        },
        officials: [
          { href: "nhan-vat/le-phung-hieu.html", iconClass: "icon-official", icon: "⚔️", roleClass: "role-official", role: "Đại Danh Tướng Cấm Vệ", name: "Lê Phụng Hiểu", desc: "Một mình xông vào cửa Quảng Phúc, chém chết Vũ Đức Vương, cứu ngai vàng Loạn Tam Vương 1028" },
          { href: "nhan-vat/nung-tri-cao.html", iconClass: "icon-enemy", icon: "⚡", roleClass: "role-enemy", role: "Thủ Lĩnh Đối Kháng", name: "Nùng Trí Cao", desc: "3 lần lập quốc, vây hãm Quảng Châu 50 ngày — đối thủ nội địa buộc nhà Lý dùng đến quân sự" }
        ]
      },
      {
        king: {
          href: "nhan-vat/ly-thanh-tong.html",
          crown: "👑", title: "Lý Thánh Tông — Văn Trị",
          name: "Lý Thánh Tông", realName: "Lý Nhật Tôn",
          years: "📅 1054 – 1072 SCN",
          note: "Đặt tên nước Đại Việt. Mở Văn Miếu Quốc Tử Giám. Khai sáng nền học thuật chính thống."
        },
        officials: [
          { href: "nhan-vat/hoang-hau-y-lan.html", iconClass: "icon-queen", icon: "👸", roleClass: "role-queen", role: "Hoàng Hậu / Nhiếp Chính", name: "Hoàng Hậu Ỷ Lan", desc: "Nhiếp chính khi vua chinh phạt Chiêm 1069. Tài trí hiếm có" }
        ]
      },
      {
        king: {
          href: "nhan-vat/ly-nhan-tong.html",
          crown: "👑", title: "Lý Nhân Tông — Đỉnh Cao",
          name: "Lý Nhân Tông", realName: "Lý Càn Đức",
          years: "📅 1072 – 1127 SCN",
          note: "Lên ngôi năm 7 tuổi. Trị vì 56 năm — dài nhất Nhà Lý. Chiến thắng Tống 1075–1077, lập khoa thi đầu tiên."
        },
        officials: [
          { href: "nhan-vat/hoang-hau-y-lan.html", iconClass: "icon-queen", icon: "👸", roleClass: "role-queen", role: "Thái Hậu Nhiếp Chính", name: "Hoàng Hậu Ỷ Lan", desc: "Nhiếp chính 1072–1076 khi vua còn nhỏ. Quyền lực đỉnh cao" },
          { href: "nhan-vat/le-van-thinh.html", iconClass: "icon-official", icon: "📜", roleClass: "role-official", role: "Trạng Nguyên · Thái Sư", name: "Lê Văn Thịnh", desc: "Trạng nguyên đầu tiên. Đàm phán biên giới với nhà Tống. Bị hạ bệ vì vụ án \"hóa hổ\"" },
          { href: "nhan-vat/ly-thuong-kiet.html", iconClass: "icon-official", icon: "📜", roleClass: "role-official", role: "Đại Tướng · Chiến Lược Gia", name: "Lý Thường Kiệt", desc: "Tiên phát chế nhân — tấn công Tống 1075, trận sông Như Nguyệt 1077. Tác giả Nam quốc sơn hà" }
        ]
      },
      {
        king: {
          href: "nhan-vat/ly-than-tong.html",
          crown: "👑", title: "Lý Thần Tông — Nhân Vật Bản Lề",
          name: "Lý Thần Tông", realName: "Lý Dương Hoán",
          years: "📅 1128 – 1138 SCN",
          note: "Hoàng đế thứ 5. Thiếu nghị lực tự rèn, bạo bệnh \"hóa hổ\" năm 1136. Băng hà năm 23 tuổi, để lại ngai vàng cho ấu chúa 3 tuổi."
        },
        officials: [
          { href: "nhan-vat/nguyen-minh-khong.html", iconClass: "icon-advisor", icon: "🧘", roleClass: "role-advisor", role: "Quốc Sư · Thiền Sư", name: "Nguyễn Minh Không", desc: "Chữa bệnh \"hóa hổ\" cho vua, được phong Quốc Sư. Ông tổ nghề đúc đồng Việt Nam" }
        ]
      },
      {
        king: {
          href: "nhan-vat/ly-anh-tong.html",
          crown: "👑", title: "Lý Anh Tông — Minh Quân & Sai Lầm Chí Mạng",
          name: "Lý Anh Tông", realName: "Lý Thiên Tộ",
          years: "📅 1138 – 1175 SCN",
          note: "Lên ngôi năm 3 tuổi, trị vì 37 năm. Lập thương cảng Vân Đồn (1149), Tống công nhận An Nam Quốc (1164). Sai lầm kế vị: lập con 2 tuổi làm người kế thừa."
        },
        officials: [
          { href: "nhan-vat/to-hien-thanh.html", iconClass: "icon-official", icon: "📜", roleClass: "role-official", role: "Thái Phó · Trụ Cột Pháp Trị", name: "Tô Hiến Thành", desc: "Dẹp loạn Thân Lợi (1142), chỉ huy biên cương, từ chối hối lộ khi hấp hối — biểu tượng công bằng tuyệt đối" }
        ]
      },
      {
        king: {
          href: "nhan-vat/ly-cao-tong.html",
          crown: "👑", title: "Lý Cao Tông — Tội Nhân Vương Triều",
          name: "Lý Cao Tông", realName: "Lý Long Trát",
          years: "📅 1175 – 1210 SCN",
          note: "Lên ngôi năm 3 tuổi. Trưởng thành tự chủ trị quốc theo kiểu tệ nhất: bỏ bê triều chính, ăn chơi xa xỉ, để loạn khởi nghĩa nông dân bùng phát khắp nơi — khai mào suy vong nhà Lý."
        },
        officials: [{ noOfficials: "Không có đại thần nổi bật (triều đình đã rệu rã)" }]
      },
      {
        king: {
          href: "nhan-vat/ly-hue-tong.html",
          cardStyle: "border-color: rgba(155,28,28,0.45); background: linear-gradient(135deg, #1c0a0a 0%, #2d1010 100%); color: white;",
          crown: "👑",
          title: "Lý Huệ Tông — Vua Bù Nhìn Cuối Cùng", titleStyle: "color:#fca5a5;",
          name: "Lý Huệ Tông", nameStyle: "color:white;",
          realName: "Lý Sảm · Pháp danh: Huệ Quang", realNameStyle: "color:#d6d3d1;",
          years: "📅 1210 – 1224 SCN", yearsStyle: "background:rgba(0,0,0,0.3); color:#fca5a5;",
          note: "Bị họ Trần thao túng hoàn toàn từ ngày đầu lên ngôi. Mắc bệnh tâm thần (\"phát cuồng\"), bị ép nhường ngôi cho con gái 7 tuổi, đi tu rồi bị bức tử 1226. Kết thúc 216 năm Nhà Lý.", noteStyle: "color:#d6d3d1;"
        },
        officials: [{ noOfficials: "Không có thực quyền; họ Trần (Trần Thủ Độ) nắm toàn bộ triều đình" }]
      },
      {
        king: {
          href: "nhan-vat/ly-chieu-hoang.html",
          cardStyle: "border-color: rgba(124,58,237,0.5); background: linear-gradient(135deg, #2d1b5a 0%, #4c1d8a 100%); color: white;",
          crown: "👑",
          title: "Lý Chiêu Hoàng — Nữ Hoàng Cuối", titleStyle: "color:#c4b5fd;",
          name: "Lý Chiêu Hoàng", nameStyle: "color:white;",
          realName: "Lý Phật Kim · Chiêu Thánh Hoàng hậu", realNameStyle: "color:#ddd6fe;",
          years: "📅 1224 – 1225 SCN", yearsStyle: "background:rgba(0,0,0,0.3); color:#c4b5fd;",
          note: "Nữ hoàng đầu tiên và duy nhất lịch sử Việt Nam. Lên ngôi 7 tuổi. Nhường ngôi cho Trần Cảnh năm 1225 — chính thức kết thúc 216 năm nhà Lý.", noteStyle: "color:#ddd6fe;"
        },
        officials: [{ noOfficials: "Con cờ bi kịch: bị Trần Thủ Độ đạo diễn toàn bộ. Sau khi nhường ngôi, trở thành Hoàng hậu nhà Trần." }]
      }
    ]
  },

  // ─────────────────────────────────────────────────
  // ENEMY SECTION: ĐỐI LẬP / NGOẠI XÂM
  // ─────────────────────────────────────────────────
  {
    id: "enemy-section",
    isEnemySection: true,
    columns: [
      {
        king: {
          href: "nhan-vat/quach-quy.html",
          cardStyle: "background: linear-gradient(135deg, #1f2937 0%, #374151 100%); box-shadow: 0 4px 20px rgba(55,65,81,0.3);",
          crown: "⚔️",
          title: "Tướng Nhà Tống", titleStyle: "color: #9ca3af;",
          name: "Quách Quỳ", realName: "Quách Quỳ (Guo Kui)",
          years: "📅 Xâm lược 1075–1077", yearsStyle: "background: rgba(0,0,0,0.3); color: #9ca3af;",
          note: "Chỉ huy đại quân Tống xâm lược Đại Việt. Thất bại trước chiến lược của Lý Thường Kiệt tại phòng tuyến Như Nguyệt.", noteStyle: "color: #9ca3af;"
        },
        officials: [{ noOfficials: "Đối đầu với triều Lý Nhân Tông (1072–1127)" }]
      }
    ]
  },

  // ─────────────────────────────────────────────────
  // ERA: NHÀ TRẦN
  // ─────────────────────────────────────────────────
  {
    id: "era-nha-tran",
    label: "Nhà Trần · 1225 – 1400 SCN",
    dividerBefore: null,
    columns: [
      {
        king: {
          href: "nhan-vat/tran-thai-tong.html",
          crown: "👑", title: "Hoàng Đế Khai Triều — Vị Vua Giác Ngộ",
          name: "Trần Thái Tông", realName: "Trần Cảnh · 1218 – 1277 SCN",
          years: "📅 1225 – 1258 (trị vì)",
          note: "Lên ngôi 8 tuổi. Tự cầm gươm đánh tan Mông Cổ 1258 (Đông Bộ Đầu). Nhường ngôi viết Khóa Hư Lục — nền móng Thiền phái Trúc Lâm Yên Tử."
        },
        officials: [
          { href: "nhan-vat/tran-thu-do.html", iconClass: "icon-official", icon: "🧠", roleClass: "role-official", role: "Thái Sư — Kiến Trúc Sư Trưởng", name: "Trần Thủ Độ", desc: "Quyền thần định hình Nhà Trần. Đạo diễn lật đổ Nhà Lý không đổ máu. \"Đầu thần chưa rơi xuống đất...\"" },
          { href: "nhan-vat/tran-thi-dung.html", iconClass: "icon-queen", icon: "👸", roleClass: "role-queen", role: "Linh Từ Quốc Mẫu", name: "Trần Thị Dung", desc: "Vợ Trần Thủ Độ, anh hùng hậu phương kháng Mông Cổ 1258" },
          { href: "nhan-vat/ly-chieu-hoang.html", iconClass: "icon-queen", icon: "👸", roleClass: "role-queen", role: "Hoàng Hậu Đầu Tiên · Vợ Đầu", name: "Lý Chiêu Hoàng", desc: "Nữ hoàng cuối nhà Lý, nhường ngôi 1225. Bị phế 1237, tái giá với Lê Phụ Trần" },
          { href: "nhan-vat/le-phu-tran.html", iconClass: "icon-official", icon: "⚔️", roleClass: "role-official", role: "Dũng Tướng · Cứu Chúa", name: "Lê Phụ Trần", desc: "Xé ván thuyền che tên cứu vua tại Bình Lệ Nguyên 1258. Được giao gả Lý Chiêu Hoàng" },
          {
            href: "nhan-vat/tran-lieu.html",
            iconStyle: "background:rgba(180,83,9,0.1); color:#b45309; border:1px solid rgba(180,83,9,0.25);", icon: "⚠️",
            roleStyle: "color:#b45309;", role: "An Sinh Vương · Anh trai vua Thái Tông",
            name: "Trần Liễu", desc: "Bị cướp vợ 1237. Lời nguyền \"lấy lại thiên hạ\" → người con là Trần Quốc Tuấn"
          }
        ]
      },
      {
        king: {
          href: "nhan-vat/tran-thanh-tong.html",
          crown: "👑", title: "Anh Hùng Thầm Lặng · Người Dọn Đường Vĩ Đại",
          name: "Trần Thánh Tông", realName: "Trần Hoảng · 1240 – 1290 SCN",
          years: "📅 1258 – 1278 (trị vì)",
          note: "Xóa thù nhà để đoàn kết gia tộc. Tổ chức Hội nghị Diên Hồng. Thái Thượng Hoàng trụ cột trong cả 3 lần kháng chiến."
        },
        officials: [
          { href: "nhan-vat/tran-quang-khai.html", iconClass: "icon-official", icon: "📜", roleClass: "role-official", role: "Thượng Tướng Thái Sư", name: "Trần Quang Khải", desc: "Đại thắng Chương Dương – Hàm Tử (1285). Tác giả Tụng giá hoàn kinh sư" },
          { href: "nhan-vat/an-tu-cong-chua.html", iconClass: "icon-queen", icon: "👸", roleClass: "role-queen", role: "Công Chúa · Hy Sinh Thầm Lặng", name: "An Tư Công Chúa", desc: "Em gái Trần Thánh Tông. Dâng vào doanh trại Thoát Hoan 1285 — mua thời gian rút lui" }
        ]
      },
      {
        king: {
          href: "nhan-vat/tran-nhan-tong.html",
          crown: "👑", title: "Điều Ngự Giác Hoàng · Vua Của Các Vị Vua",
          name: "Trần Nhân Tông", realName: "Trần Khâm · 1258 – 1308 SCN",
          years: "📅 1278 – 1293 (trị vì)",
          note: "Lãnh đạo đánh tan Mông Cổ 2 lần. Đốt rương thư đầu hàng — đại xá toàn quốc. Nhường ngôi tuổi 35, lập Thiền phái Trúc Lâm Yên Tử. \"Cư trần lạc đạo.\""
        },
        officials: [
          { href: "nhan-vat/tran-hung-dao.html", iconClass: "icon-official", icon: "⚔️", roleClass: "role-official", role: "Quốc Công Tiết Chế · Tổng Chỉ Huy", name: "Trần Hưng Đạo", desc: "Thiên tài quân sự — chỉ huy 3 lần kháng chiến. Tác giả Hịch Tướng Sĩ bất hủ" },
          { href: "nhan-vat/tran-khanh-du.html", iconClass: "icon-official", icon: "⚓", roleClass: "role-official", role: "Nhân Huệ Vương · Đề Đốc Thủy Quân", name: "Trần Khánh Dư", desc: "Tiêu diệt đoàn thuyền lương Mông Cổ tại Vân Đồn (1288) — nước cờ quyết định" },
          { href: "nhan-vat/tran-quoc-toan.html", iconClass: "icon-official", icon: "🏴", roleClass: "role-official", role: "Hoài Văn Hầu · Anh Hùng Thiếu Niên", name: "Trần Quốc Toản", desc: "15 tuổi bóp nát quả cam · Tự lập 1.000 quân · Hy sinh 18 tuổi" },
          {
            href: "nhan-vat/tran-ich-tac.html",
            cardClass: "official-card", cardStyle: "border-color:rgba(155,28,28,0.25); background:rgba(155,28,28,0.04);",
            iconStyle: "background:rgba(155,28,28,0.12); color:#9b1c1c; border:1px solid rgba(155,28,28,0.3);", icon: "⚠️",
            roleStyle: "color:#9b1c1c;", role: "Chiêu Quốc Vương → Phản Quốc",
            name: "Trần Ích Tắc", desc: "Đầu hàng Mông Cổ 1285 · \"Ả Trần\" · Tương phản với Trần Hưng Đạo"
          },
          { href: "nhan-vat/tran-nhat-duat.html", iconClass: "icon-official", icon: "🏯", roleClass: "role-official", role: "Chiêu Văn Vương · Quái Kiệt Ngoại Giao", name: "Trần Nhật Duật", desc: "Dẹp loạn không đổ máu — tay không vào sào huyệt. Trận Hàm Tử dùng tàn quân Tống làm đòn tâm lý" },
          { href: "nhan-vat/pham-ngu-lao.html", iconClass: "icon-official", icon: "🗡️", roleClass: "role-official", role: "Điện Súy Thượng Tướng Quân", name: "Phạm Ngũ Lão", desc: "Từ người đan sọt thành Đại tướng bất bại · Con rể Trần Hưng Đạo · Tác giả \"Thuật hoài\"" },
          { href: "nhan-vat/tran-binh-trong.html", iconClass: "icon-official", icon: "🔥", roleClass: "role-official", role: "Danh Tướng · Khí Tiết Bất Diệt", name: "Trần Bình Trọng", desc: "\"Ta thà làm ma nước Nam, chứ không thèm làm vương đất Bắc!\" · Hy sinh 26 tuổi ở bãi Thiên Mạc" },
          { href: "nhan-vat/yet-kieu-da-tuong.html", iconClass: "icon-official", icon: "⚓", roleClass: "role-official", role: "Gia Nô Hưng Đạo Vương · Người Hùng Vô Danh", name: "Yết Kiêu & Dã Tượng", desc: "Đục thuyền giặc dưới đáy sông · Cắm thuyền đợi chủ tướng ở Bãi Tân lúc giặc truy sát" },
          { href: "nhan-vat/huyen-tran-cong-chua.html", iconClass: "icon-queen", icon: "👸", roleClass: "role-queen", role: "Công Chúa · Đóa Hoa Mở Cõi", name: "Huyền Trân Công Chúa", desc: "Gả cho vua Chiêm Chế Mân, mang về 2 châu Ô Lý (Huế ngày nay) không tốn một giọt máu" }
        ]
      },
      {
        king: {
          href: "nhan-vat/tran-anh-tong.html",
          crown: "👑", title: "Minh Quân Thức Tỉnh Từ Men Rượu",
          name: "Trần Anh Tông", realName: "Trần Thuyên · 1276 – 1320 SCN",
          years: "📅 1293 – 1314 (trị vì)",
          note: "Từ kẻ nghiện rượu suýt bị phế truất, lột xác thành minh quân nghiêm khắc nhất triều Trần. Trọng dụng Đoàn Nhữ Hài, Mạc Đĩnh Chi, Chu Văn An. Kỷ nguyên \"văn trị\" cực thịnh."
        },
        officials: [
          { href: "nhan-vat/doan-nhu-hai.html", iconClass: "icon-official", icon: "📜", roleClass: "role-official", role: "Tể Tướng · Thần Đồng Trị Quốc", name: "Đoàn Nhữ Hài", desc: "Làm quan năm 14 tuổi. Một mình dụ hàng vua Chiêm Chế Chí 1312 — không tốn một mũi tên" },
          { href: "nhan-vat/mac-dinh-chi.html", iconClass: "icon-official", icon: "🖋️", roleClass: "role-official", role: "Lưỡng Quốc Trạng Nguyên", name: "Mạc Đĩnh Chi", desc: "Trạng nguyên xấu xí nhưng thiên tài. Làm vua Tống phải phục khi ứng đối bài thơ Thương nhân đêm mưa" }
        ]
      },
      {
        king: {
          href: "nhan-vat/tran-minh-tong.html",
          crown: "👑", title: "Minh Quân Tự Chặt Cột Thu Lôi",
          name: "Trần Minh Tông", realName: "Trần Mạnh · 1300 – 1357 SCN",
          years: "📅 1314 – 1329 (trị vì)",
          note: "Chính sách văn trị xuất sắc, trọng dụng hiền tài. Sai lầm lịch sử 1328: nghe lời nịnh thần, bức tử cha vợ Trần Quốc Chẩn — chặt đứt \"cột thu lôi\" của triều đại."
        },
        officials: [{ noOfficials: "Vụ án Trần Quốc Chẩn (1328): nịnh thần Trần Khắc Chung khai thác điểm mù của vua" }]
      },
      {
        king: {
          href: "nhan-vat/tran-hien-tong.html",
          crown: "👑", title: "Quân Cờ Trên Bàn Cờ",
          name: "Trần Hiến Tông", realName: "Trần Vượng · 1319 – 1341 SCN",
          years: "📅 1329 – 1341 (trị vì)",
          note: "Lên ngôi năm 10 tuổi sau vụ án Trần Quốc Chẩn. Thượng hoàng Minh Tông nắm toàn bộ thực quyền. Mất năm 22 tuổi không con trai — mở đường cho Trần Dụ Tông lên ngôi."
        },
        officials: [{ noOfficials: "Chưa bao giờ thực sự cầm quyền; Thượng hoàng Minh Tông quyết hết mọi việc" }]
      },
      {
        king: {
          href: "nhan-vat/tran-du-tong.html",
          cardStyle: "border-color: rgba(155,28,28,0.45); background: linear-gradient(135deg, #1c0a0a 0%, #2d1010 100%); color: white;",
          crown: "👑",
          title: "Phá Gia Chi Tử — Vua Ăn Chơi", titleStyle: "color:#fca5a5;",
          name: "Trần Dụ Tông", nameStyle: "color:white;",
          realName: "Trần Hạo · 1336 – 1369 SCN", realNameStyle: "color:#d6d3d1;",
          years: "📅 1341 – 1369 (trị vì)", yearsStyle: "background:rgba(0,0,0,0.3); color:#fca5a5;",
          note: "28 năm trị vì = 28 năm ăn chơi trác táng. Đánh bạc, bỏ bê triều chính, tướng lĩnh bất lực trước Chiêm Thành. Băng hà không con trai — mở ra cuộc tranh vị khốc liệt.", noteStyle: "color:#d6d3d1;"
        },
        officials: [
          { href: "nhan-vat/chu-van-an.html", iconClass: "icon-advisor", icon: "🎓", roleClass: "role-advisor", role: "Quốc Tử Giám Tế Tửu · Vạn Thế Sư Biểu", name: "Chu Văn An", desc: "Dâng Thất Trảm Sớ đòi chém 7 nịnh thần — không được, từ quan lên núi. Biểu tượng khí tiết sĩ phu Đại Việt" }
        ]
      },
      {
        king: {
          href: "nhan-vat/duong-nhat-le.html",
          cardStyle: "border-color: rgba(107,33,168,0.45); background: linear-gradient(135deg, #1a0a2e 0%, #2e1065 100%); color: white;",
          crown: "👑",
          title: "Cái Áo Không Làm Nên Thầy Tu", titleStyle: "color:#c4b5fd;",
          name: "Dương Nhật Lễ", nameStyle: "color:white;",
          realName: "Trần Nhật Lễ · ~1349 – 1371 SCN", realNameStyle: "color:#ddd6fe;",
          years: "📅 1369 – 1370 (trị vì)", yearsStyle: "background:rgba(0,0,0,0.3); color:#c4b5fd;",
          note: "Con nhà hát xướng mang danh hoàng tộc. Khi vừa lên ngôi lập tức trả thù — đổi quốc hiệu, giết tông thất. Bị lật đổ sau 14 tháng bởi Trần Nghệ Tông.", noteStyle: "color:#ddd6fe;"
        },
        officials: [{ noOfficials: "Chính biến ngắn ngủi; không có hồ sơ quan thần được ghi nhận" }]
      },
      {
        king: {
          href: "nhan-vat/tran-nghe-tong.html",
          cardStyle: "border-color: rgba(155,28,28,0.45); background: linear-gradient(135deg, #1c0a0a 0%, #2d1010 100%); color: white;",
          crown: "👑",
          title: "Kẻ Đào Huyệt Cho Gia Tộc", titleStyle: "color:#fca5a5;",
          name: "Trần Nghệ Tông", nameStyle: "color:white;",
          realName: "Trần Phủ · 1321 – 1395 SCN", realNameStyle: "color:#d6d3d1;",
          years: "📅 1370 – 1372 (trị vì); Thái thượng hoàng 1372–1395", yearsStyle: "background:rgba(0,0,0,0.3); color:#fca5a5;",
          note: "Lên ngôi sau khi lật đổ Dương Nhật Lễ. Nhường ngôi sớm nhưng nắm thực quyền 25 năm. Sai lầm chí mạng: một tay nâng đỡ Hồ Quý Ly — người sẽ xóa sổ nhà Trần.", noteStyle: "color:#d6d3d1;"
        },
        officials: [
          { href: "nhan-vat/tran-khat-chan.html", iconClass: "icon-official", icon: "⚔️", roleClass: "role-official", role: "Thượng Tướng · Ngôi Sao Băng Cuối Cùng", name: "Trần Khát Chân", desc: "Hạ Chế Bồng Nga tại Hải Triều (1390). Lập mưu ám sát Hồ Quý Ly nhưng thất bại — bị xử tử cùng hơn 370 người năm 1399" },
          { href: "nhan-vat/che-bong-nga.html", cardClass: "official-card enemy-card", iconClass: "icon-enemy", icon: "⚡", roleClass: "role-enemy", role: "Vua Chiêm Thành · Ngoại Xâm", name: "Chế Bồng Nga", desc: "3 lần đốt phá Thăng Long (1371–1389) — ác mộng của cuối Nhà Trần. Bị Trần Khát Chân hạ tại Hải Triều năm 1390" }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────
  // KẾT THÚC NHÀ TRẦN: BỘ BA VUA BÙ NHÌN
  // ─────────────────────────────────────────────────
  {
    id: "era-tran-suy-vong",
    label: "Kết thúc Nhà Trần · 1377 – 1400 SCN",
    labelStyle: "background: #7f1d1d;",
    eraBlockStyle: "border-top: 2px dashed rgba(155,28,28,0.3); padding-top: 2rem;",
    dividerBefore: null,
    columns: [
      {
        columnStyle: "min-width:300px; max-width:480px;",
        king: {
          href: "nhan-vat/bo-ba-vua-bu-nhin.html",
          cardStyle: "border-color: rgba(155,28,28,0.6); background: linear-gradient(135deg, #0a0a0a 0%, #1a0505 100%); color: white;",
          crown: "👑👑👑",
          title: "Bia Đỡ Đạn Trên Ngai Vàng — Kết Thúc 175 Năm Nhà Trần", titleStyle: "color:#fca5a5;",
          name: "Bộ Ba Vua Bù Nhìn", nameStyle: "color:white;",
          realName: "Trần Phế Đế · Trần Thuận Tông · Trần Thiếu Đế", realNameStyle: "color:#d6d3d1;",
          years: "📅 1377 – 1400 SCN", yearsStyle: "background:rgba(0,0,0,0.4); color:#fca5a5;",
          note: "Ba mảnh đời bi thảm khép lại 175 năm Nhà Trần. Phế Đế bị cha ruột bức tử. Thuận Tông bị cha vợ thắt cổ. Thiếu Đế bị ông ngoại cướp ngôi khi 3 tuổi — chính thức chấm dứt triều đại.", noteStyle: "color:#d6d3d1;"
        },
        officials: [{ noOfficials: "Nạn nhân cấu trúc. Không có thực quyền; Hồ Quý Ly kiểm soát toàn bộ triều đình" }]
      }
    ]
  },

  // ─────────────────────────────────────────────────
  // NHÀ HỒ
  // ─────────────────────────────────────────────────
  {
    id: "era-nha-ho",
    label: "Nhà Hồ (Đại Ngu) · 1400 – 1407 SCN",
    labelStyle: "background: #7f1d1d;",
    eraBlockStyle: "border-top: 2px dashed rgba(155,28,28,0.3); padding-top: 2rem;",
    dividerBefore: null,
    columns: [
      {
        king: {
          href: "nhan-vat/ho-quy-ly.html",
          cardStyle: "border-color: rgba(155,28,28,0.5); background: linear-gradient(135deg, #0d0505 0%, #1a0505 100%); color: white;",
          crown: "👑",
          title: "Thiên Tài Đi Lạc Thời Đại", titleStyle: "color:#fca5a5;",
          name: "Hồ Quý Ly", nameStyle: "color:white;",
          realName: "Lê Quý Ly → Hồ Quý Ly · 1336 – 1407 SCN", realNameStyle: "color:#d6d3d1;",
          years: "📅 1400 – 1401 (trị vì) · 30 năm nắm quyền thực sự", yearsStyle: "background:rgba(0,0,0,0.4); color:#fca5a5;",
          note: "Tầm nhìn cải cách vượt thế kỷ: tiền giấy, hạn điền, thi chữ Nôm. Nhưng cướp ngôi bằng máu, cai trị bằng sợ hãi. Khi nhà Minh đến, không ai đứng ra bảo vệ ông.", noteStyle: "color:#d6d3d1;"
        },
        officials: [
          { href: "nhan-vat/ho-nguyen-trung.html", iconClass: "icon-official", icon: "⚙️", roleClass: "role-official", role: "Tướng quốc · Kỹ sư thiên tài", name: "Hồ Nguyên Trừng", desc: "Con trai cả — chế tạo súng thần công tiên tiến nhất Đông Nam Á. Tự nhường ngôi thái tử cho em. Câu nói bất hủ: \"Thần không sợ đánh, chỉ sợ lòng dân không theo.\"" }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────
  // NHÀ HẬU TRẦN
  // ─────────────────────────────────────────────────
  {
    id: "era-hau-tran",
    label: "Nhà Hậu Trần · Kháng chiến chống Minh lần 1 (1407 – 1413 SCN)",
    labelStyle: "background: #7a1f1f;",
    eraBlockStyle: "border-top: 2px dashed rgba(122,31,31,0.3); padding-top: 2rem;",
    dividerBefore: null,
    columns: [
      {
        king: {
          href: "nhan-vat/tran-ngoi.html",
          cardStyle: "border-color: rgba(155,28,28,0.5); background: linear-gradient(135deg, #1c0a0a 0%, #2f0e0e 100%); color: white;",
          crown: "👑",
          title: "Giản Định Đế · Vua Khai Triều", titleStyle: "color:#fca5a5;",
          name: "Trần Ngỗi — Giản Định Đế", nameStyle: "color:white;",
          realName: "Trần Ngỗi · ? – 1410 SCN", realNameStyle: "color:#d6d3d1;",
          years: "📅 Trị vì: 1407 – 1409", yearsStyle: "background:rgba(0,0,0,0.4); color:#fca5a5;",
          note: "Con trai thứ vua Trần Nghệ Tông. Dựng ngọn cờ kháng chiến chống Minh tại Nghệ An, đại thắng Bô Cô (1408). Sau nghi kỵ sát hại hai trụ cột Đặng Tất & Nguyễn Cảnh Chân khiến nghĩa quân chia rẽ.", noteStyle: "color:#d6d3d1;"
        },
        officials: [
          { href: "nhan-vat/dang-tat.html", iconClass: "icon-official", icon: "⚔️", roleClass: "role-official", role: "Quốc Công · Đại tướng", name: "Đặng Tất", desc: "Tướng tài Nhà Hậu Trần, chỉ huy đại thắng Bô Cô (12/1408) đánh tan quân Minh. Bị Giản Định Đế nghi kỵ sát hại năm 1409." },
          { href: "nhan-vat/nguyen-canh-chan.html", iconClass: "icon-advisor", icon: "📜", roleClass: "role-advisor", role: "Tán Tương Quân Vụ · Đại thần", name: "Nguyễn Cảnh Chân", desc: "Mưu sĩ, đại thần trụ cột Nhà Hậu Trần cùng Đặng Tất tạo nên chiến thắng Bô Cô. Bị Giản Định Đế giết hại cùng Đặng Tất." }
        ]
      },
      {
        king: {
          href: "nhan-vat/tran-quy-khoang.html",
          cardStyle: "border-color: rgba(155,28,28,0.5); background: linear-gradient(135deg, #1c0a0a 0%, #2f0e0e 100%); color: white;",
          crown: "👑",
          title: "Trùng Quang Đế · Vua Kháng Chiến Bi Tráng", titleStyle: "color:#fca5a5;",
          name: "Trần Quý Khoáng — Trùng Quang Đế", nameStyle: "color:white;",
          realName: "Trần Quý Khoáng · ? – 1414 SCN", realNameStyle: "color:#d6d3d1;",
          years: "📅 Trị vì: 1409 – 1413", yearsStyle: "background:rgba(0,0,0,0.4); color:#fca5a5;",
          note: "Cháu nội vua Trần Nghệ Tông. Được Đặng Dung & Nguyễn Cảnh Dị rước lên ngôi năm 1409. Hàn gắn nghĩa quân, tôn Giản Định Đế làm Thái Thượng Hoàng, kiên cường kháng Minh đến phút cuối rồi tuẫn tiết.", noteStyle: "color:#d6d3d1;"
        },
        officials: [
          { href: "nhan-vat/nguyen-canh-di.html", iconClass: "icon-official", icon: "⚔️", roleClass: "role-official", role: "Danh Tướng · Tán Tương Quân Vụ", name: "Nguyễn Cảnh Dị", desc: "Con trai Nguyễn Cảnh Chân. Gạt thù riêng phò Trùng Quang Đế tiếp tục kháng Minh. Bị giặc bắt 1413, chửi mắng quân Minh vuốt mặt rồi hy sinh bi tráng." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────
  // NHÀ HẬU LÊ
  // ─────────────────────────────────────────────────
  {
    id: "era-hau-le",
    label: "Nhà Hậu Lê · 1428 SCN – ...",
    labelStyle: "background: #14532d;",
    eraBlockStyle: "border-top: 2px dashed rgba(22,101,52,0.3); padding-top: 2rem;",
    dividerBefore: null,
    columns: [
      {
        king: {
          href: "nhan-vat/le-loi.html",
          cardStyle: "border-color: rgba(22,101,52,0.5); background: linear-gradient(135deg, #030a06 0%, #0a1f0e 100%); color: white;",
          crown: "👑",
          title: "Khai Quốc Anh Hùng / Bạo Chúa Thời Bình", titleStyle: "color:#86efac;",
          name: "Lê Lợi — Lê Thái Tổ", nameStyle: "color:white;",
          realName: "Bình Định Vương · 1385 – 1433 SCN", realNameStyle: "color:#d6d3d1;",
          years: "📅 Kháng chiến: 1418–1427 · Trị vì: 1428–1433", yearsStyle: "background:rgba(0,0,0,0.4); color:#86efac;",
          note: "10 năm nằm gai nếm mật, giải phóng Đại Việt. Cấp thuyền cho 10 vạn quân Minh rút về — khoan dung hiếm có. Nhưng khi ngồi vững ngai vàng, bức tử Trần Nguyên Hãn, giết Phạm Văn Xảo — những người đã cứu mạng ông.", noteStyle: "color:#d6d3d1;"
        },
        officials: [
          { href: "nhan-vat/nguyen-trai.html", iconClass: "icon-advisor", icon: "📜", roleClass: "role-advisor", role: "Quân sư · Ức Trai", name: "Nguyễn Trãi", desc: "Chiến lược Tâm Công, soạn Bình Ngô Đại Cáo. Vĩ nhân trí tuệ lớn nhất lịch sử Việt Nam. Bị tru di tam tộc 1442 vì vụ án Lệ Chi Viên — minh oan 22 năm sau khi chết." },
          { href: "nhan-vat/le-lai.html", iconClass: "icon-official", icon: "🛡️", roleClass: "role-official", role: "Tướng tâm phúc · Lũng Nhai", name: "Lê Lai", desc: "Khoác áo bào giả làm Lê Lợi, dẫn 500 quân cảm tử xông vào trại giặc Minh chịu chết để cứu nghĩa quân. \"Giỗ Lê Lai trước, giỗ Lê Lợi sau.\"" },
          { href: "nhan-vat/nguyen-chich.html", iconClass: "icon-official", icon: "🗺️", roleClass: "role-official", role: "Đại tướng · Thổ lĩnh", name: "Nguyễn Chích", desc: "Nông dân Thanh Hóa tự lập căn cứ chống Minh. Hiến kế pivot vào Nghệ An 1421 — turning point thay đổi toàn bộ cục diện chiến tranh." }
        ]
      },
      {
        king: {
          href: "nhan-vat/le-thai-tong.html",
          cardStyle: "border-color: rgba(22,101,52,0.5); background: linear-gradient(135deg, #030a06 0%, #0a1f0e 100%); color: white;",
          crown: "👑",
          title: "Quân Vương Tài Ba Nhưng Đoản Mệnh", titleStyle: "color:#86efac;",
          name: "Lê Thái Tông", nameStyle: "color:white;",
          realName: "Lê Nguyên Long · 1423 – 1442 SCN", realNameStyle: "color:#d6d3d1;",
          years: "📅 Trị vì: 1433 – 1442", yearsStyle: "background:rgba(0,0,0,0.4); color:#86efac;",
          note: "Lên ngôi 11 tuổi, ép quyền thần Lê Sát tự tử năm 15 tuổi. Mở khoa thi Nho học đầu tiên 1442. Chết đột ngột tại Lệ Chi Viên năm 20 tuổi — kéo theo thảm án tru di Nguyễn Trãi.", noteStyle: "color:#d6d3d1;"
        },
        officials: [
          { href: "nhan-vat/le-sat.html", iconClass: "icon-official", icon: "⚔️", roleClass: "role-official", role: "Đại công thần · Thái sư nhiếp chính", name: "Lê Sát", desc: "Dũng tướng khai quốc, nắm quyền nhiếp chính khi vua còn nhỏ. Độc đoán, loại bỏ đồng liêu. Năm 1437 bị vua 15 tuổi ép tự tử — bi kịch của người giỏi chiến trường nhưng thất bại trong triều đình." },
          { href: "nhan-vat/nguyen-thi-anh.html", iconClass: "icon-queen", icon: "👸", roleClass: "role-queen", role: "Hoàng hậu · Nhiếp chính 1442–1453", name: "Nguyễn Thị Anh", desc: "Hoàng hậu thao túng hậu cung, hãm hại đối thủ Ngô Thị Ngọc Dao. Có thể đứng sau vụ Lệ Chi Viên 1442 — đổ tội Nguyễn Thị Lộ để thanh trừng Nguyễn Trãi. Nhiếp chính 11 năm." },
          { href: "nhan-vat/nguyen-thi-lo.html", iconClass: "icon-advisor", icon: "📜", roleClass: "role-advisor", role: "Lễ Nghi Học Sĩ · Vợ lẽ Nguyễn Trãi", name: "Nguyễn Thị Lộ", desc: "Nữ học sĩ duy nhất có chức quan triều đình. Bí mật cứu mạng Ngô Thị Ngọc Dao (mẹ Lê Thánh Tông). Bị đổ tội giết vua — cùng Nguyễn Trãi bị tru di tam tộc 1442. Minh oan 1464." }
        ]
      },
      {
        king: {
          href: "nhan-vat/le-thanh-tong.html",
          cardStyle: "border-color: rgba(22,101,52,0.5); background: linear-gradient(135deg, #030a06 0%, #0a1f0e 100%); color: white;",
          crown: "👑",
          title: "Minh Quân Vĩ Đại Nhất Lịch Sử Phong Kiến Việt Nam", titleStyle: "color:#86efac;",
          name: "Lê Thánh Tông", nameStyle: "color:white;",
          realName: "Lê Tư Thành · 1442 – 1497 SCN", realNameStyle: "color:#d6d3d1;",
          years: "📅 Trị vì: 1460 – 1497 · Niên hiệu Hồng Đức", yearsStyle: "background:rgba(0,0,0,0.4); color:#86efac;",
          note: "Bãi bỏ Tể tướng — trực tiếp điều hành 6 Bộ. Minh oan Nguyễn Trãi 1464. Nam Tiến 1471 với 26 vạn quân. Luật Hồng Đức 1483 — bảo vệ quyền phụ nữ. Hội Tao Đàn — nhà thơ, nhà lập pháp, tướng quân cùng một người.", noteStyle: "color:#d6d3d1;"
        },
        officials: [
          { href: "nhan-vat/luong-the-vinh.html", iconClass: "icon-advisor", icon: "🧮", roleClass: "role-advisor", role: "Trạng nguyên 1463 · Hội Tao Đàn", name: "Lương Thế Vinh — Trạng Lường", desc: "Trạng nguyên 22 tuổi. Viết Đại Thành Toán Pháp — sách toán thực hành đầu tiên của Việt Nam. Sáng lập ký âm hát chèo, tuồng. Thiên tài đa lĩnh vực hiếm có." },
          { href: "nhan-vat/than-nhan-trung.html", iconClass: "icon-advisor", icon: "📖", roleClass: "role-advisor", role: "Tiến sĩ 1469 · Phó Tao Đàn", name: "Thân Nhân Trung", desc: "Đỗ Tiến sĩ năm 50 tuổi. Phó Nguyên soái Hội Tao Đàn. Viết văn bia Quốc Tử Giám 1484 với câu bất hủ: \"Hiền tài là nguyên khí quốc gia.\"" },
          { href: "nhan-vat/tra-toan.html", iconClass: "icon-enemy", icon: "⚔️", roleClass: "role-enemy", role: "Vua Chiêm Thành · Đối lập", name: "Trà Toàn", desc: "Vua Chiêm Thành liên tục khiêu khích Đại Việt. Ảo tưởng sức mạnh bản thân — bị 26 vạn quân Lê Thánh Tông đánh tan 1471, bắt sống. Chiêm Thành không bao giờ phục hồi." }
        ]
      },
      {
        king: {
          href: "nhan-vat/le-hien-tong.html",
          cardStyle: "border-color: rgba(22,101,52,0.5); background: linear-gradient(135deg, #030a06 0%, #0a1f0e 100%); color: white;",
          crown: "👑",
          title: "Lê Hiến Tông · Tia Sáng Cuối", titleStyle: "color:#86efac;",
          name: "Lê Hiến Tông", nameStyle: "color:white;",
          realName: "Lê Tăng · 1461 – 1504 SCN", realNameStyle: "color:#d6d3d1;",
          years: "📅 Trị vì: 1497 – 1504 · 7 năm", yearsStyle: "background:rgba(0,0,0,0.4); color:#86efac;",
          note: "Con trưởng Lê Thánh Tông. Cần, kiệm, cẩn — giữ nguyên bộ máy cha để lại. Vua hiền nhưng không sửa \"lỗi kiến trúc\": quyền lực tập trung một người, không có bộ đệm dự phòng.", noteStyle: "color:#d6d3d1;"
        },
        officials: []
      },
      {
        king: {
          href: "nhan-vat/le-uy-muc.html",
          cardStyle: "border-color: rgba(22,101,52,0.5); background: linear-gradient(135deg, #030a06 0%, #0a1f0e 100%); color: white;",
          crown: "💀",
          title: "Lệ Quỷ Vương · \"Vua Quỷ\"", titleStyle: "color:#86efac;",
          name: "Lê Uy Mục", nameStyle: "color:white;",
          realName: "Lê Tuấn · 1489 – 1509 SCN", realNameStyle: "color:#d6d3d1;",
          years: "📅 Trị vì: 1505 – 1509 · 4 năm", yearsStyle: "background:rgba(0,0,0,0.4); color:#86efac;",
          note: "Lên ngôi do đại thần chọn — không có mandate tuyệt đối. Thanh trừng tôn thất, giết ngoại thích, hoang dâm bỏ bê triều chính. Biệt danh \"Quỷ Vương\" được chính sử quan ghi khi đang còn tại vị.", noteStyle: "color:#d6d3d1;"
        },
        officials: []
      },
      {
        king: {
          href: "nhan-vat/le-tuong-duc.html",
          cardStyle: "border-color: rgba(22,101,52,0.5); background: linear-gradient(135deg, #030a06 0%, #0a1f0e 100%); color: white;",
          crown: "🐷",
          title: "Lệ Trư Vương · \"Vua Lợn\"", titleStyle: "color:#86efac;",
          name: "Lê Tương Dực", nameStyle: "color:white;",
          realName: "Lê Oanh · 1494 – 1516 SCN", realNameStyle: "color:#d6d3d1;",
          years: "📅 Trị vì: 1510 – 1516 · 6 năm", yearsStyle: "background:rgba(0,0,0,0.4); color:#86efac;",
          note: "Lật đổ Lê Uy Mục — hành động đúng, nhưng sau đó sa vào hưởng lạc. Ra lệnh xây Cửu Trùng Đài cực kỳ xa hoa. Bị thần tử Trịnh Duy Sản sát hại — lần đầu tiên trong Lê Sơ, vua bị thần tử giết.", noteStyle: "color:#d6d3d1;"
        },
        officials: [
          { href: "nhan-vat/vu-nhu-to.html", iconClass: "icon-advisor", icon: "🏛️", roleClass: "role-advisor", role: "Kiến Trúc Sư · Bi kịch trí thức", name: "Vũ Như Tô", desc: "Thiên tài kiến trúc bị ép xây Cửu Trùng Đài. Từ chối thì bị xử tử, chấp nhận thì cùng chết khi loạn nổ ra 1516. Bi kịch điển hình của trí thức trong tay vua tệ." },
          { href: "nhan-vat/trinh-duy-san.html", iconClass: "icon-enemy", icon: "⚔️", roleClass: "role-enemy", role: "Quyền Thần · Kẻ sát vua", name: "Trịnh Duy Sản", desc: "Đại thần nắm quyền thực tế. Thiết lập precedent nguy hiểm: thần tử có thể giết vua khi vua \"đủ tệ\". Mở đầu giai đoạn triều đình tan rã." },
          { href: "nhan-vat/tran-cao.html", iconClass: "icon-enemy", icon: "🗡️", roleClass: "role-enemy", role: "Nông dân khởi nghĩa", name: "Trần Cảo", desc: "Nổi dậy 1516, tự xưng là con cháu nhà Trần. Kéo quân về kinh thành, gây sụp đổ triều đình Lê Tương Dực — viên gạch domino đầu tiên." }
        ]
      },
      {
        king: {
          href: "nhan-vat/le-chieu-tong.html",
          cardStyle: "border-color: rgba(22,101,52,0.5); background: linear-gradient(135deg, #030a06 0%, #0a1f0e 100%); color: white;",
          crown: "👑",
          title: "Lê Chiêu Tông · Vua Bù Nhìn I", titleStyle: "color:#86efac;",
          name: "Lê Chiêu Tông", nameStyle: "color:white;",
          realName: "Lê Y · 1506 – 1526 SCN", realNameStyle: "color:#d6d3d1;",
          years: "📅 Trị vì: 1516 – 1522 · 6 năm", yearsStyle: "background:rgba(0,0,0,0.4); color:#86efac;",
          note: "Được Trịnh Duy Sản đưa lên ngôi làm bình phong. Thực quyền nằm trong tay đại thần. Bị Mạc Đăng Dung phế truất 1522 — sau đó chạy trốn, bị bắt và giết.", noteStyle: "color:#d6d3d1;"
        },
        officials: [
          { href: "nhan-vat/mac-dang-dung.html", iconClass: "icon-enemy", icon: "⚔️", roleClass: "role-enemy", role: "Đại Thần → Soán ngôi", name: "Mạc Đăng Dung", desc: "Leo lên từ đô vật → cấm vệ quân → đại tướng nhờ dẹp loạn Trần Cảo. Kiên nhẫn tích lũy quyền lực hơn 10 năm trước khi soán ngôi 1527." }
        ]
      },
      {
        king: {
          href: "nhan-vat/le-cung-hoang.html",
          cardStyle: "border-color: rgba(22,101,52,0.5); background: linear-gradient(135deg, #030a06 0%, #0a1f0e 100%); color: white;",
          crown: "👑",
          title: "Lê Cung Hoàng · Vua Bù Nhìn II", titleStyle: "color:#86efac;",
          name: "Lê Cung Hoàng", nameStyle: "color:white;",
          realName: "Lê Xuân · ? – 1527 SCN", realNameStyle: "color:#d6d3d1;",
          years: "📅 Trị vì: 1522 – 1527 · 5 năm", yearsStyle: "background:rgba(0,0,0,0.4); color:#86efac;",
          note: "Em ruột Lê Chiêu Tông, được Mạc Đăng Dung đưa lên làm bù nhìn hoàn toàn. Năm 1527 bị ép \"tự nguyện nhường ngôi\" trong lễ dàn dựng — sau đó bị buộc tự vẫn. Kết thúc 99 năm Lê Sơ.", noteStyle: "color:#d6d3d1;"
        },
        officials: [
          { href: "nhan-vat/nguyen-kim.html", iconClass: "icon-official", icon: "🏴", roleClass: "role-official", role: "Công Thần Trung Hưng · Người giữ ngọn lửa", name: "Nguyễn Kim", desc: "Quan Hậu Lê chạy vào Nam, quy tụ lực lượng trung thành ở Ai Lao. Lập Lê Trang Tông 1533 — khởi đầu Nhà Lê Trung Hưng đối trọng với nhà Mạc. Cha vợ của Trịnh Kiểm." }
        ]
      }
    ]
  },

  // Kết thúc Lê Sơ
  {
    id: "divider-le-so-end",
    isDividerOnly: true,
    dividerText: "🔥 1527 — Mạc Đăng Dung soán ngôi · Kết thúc 99 năm Lê Sơ (1428–1527)"
  },

  // Nhà Mạc (1527-1592)
  {
    id: "nha-mac",
    label: "Nhà Mạc · 1527–1592 · Nam-Bắc triều",
    eraBlockStyle: "border-left: 3px solid #92400e;",
    labelStyle: "color: #92400e;",
    columns: [
      {
        king: {
          href: "nhan-vat/mac-dang-dung.html",
          cardStyle: "border-color: rgba(146,64,14,0.6); background: linear-gradient(135deg, #1c0a00 0%, #2d1500 100%); color: white;",
          crown: "👑",
          title: "Thái Tổ · Người sáng lập", titleStyle: "color:#fcd34d;",
          name: "Mạc Đăng Dung", nameStyle: "color:white;",
          realName: "1483 – 1541 SCN", realNameStyle: "color:#d6d3d1;",
          years: "📅 Trị vì: 1527 – 1529 · Thái thượng hoàng 1529–1541", yearsStyle: "background:rgba(0,0,0,0.4); color:#fcd34d;",
          note: "Từ ngư dân Cổ Trai → hoàng đế Đại Việt trong 44 năm. Leo lên bằng công thức: luôn đứng về phía hợp pháp, dẹp loạn cho triều đình, kiên nhẫn tích lũy. Cú quỳ lạy Nam Quan 1541 — nhượng danh giữ thực.", noteStyle: "color:#d6d3d1;"
        },
        officials: [
          { href: "nhan-vat/mac-dang-doanh.html", iconClass: "icon-king", icon: "👑", roleClass: "role-king", role: "Thái tử → Vua thịnh trị", name: "Mạc Đăng Doanh", desc: "Vua giỏi nhất Nhà Mạc. 11 năm thịnh trị (1529–1540): thi cử liên tục, kinh tế sôi động, hình phạt khoan hòa. Ngay cả Đại Việt sử ký toàn thư của phe thắng cuộc cũng phải ghi nhận." },
          { href: "nhan-vat/nguyen-binh-khiem.html", iconClass: "icon-advisor", icon: "🔮", roleClass: "role-advisor", role: "Trạng Trình · Tiên tri", name: "Nguyễn Bỉnh Khiêm", desc: "Thần đồng đỗ Trạng nguyên 1535. Quan Nhà Mạc nhưng không dính líu tranh quyền. Tiên đoán 'Hoành Sơn nhất đái, vạn đại dung thân' — lời khuyên định hướng 300 năm Nhà Nguyễn." }
        ]
      },
      {
        king: {
          href: "nhan-vat/mac-dang-doanh.html",
          cardStyle: "border-color: rgba(146,64,14,0.6); background: linear-gradient(135deg, #1c0a00 0%, #2d1500 100%); color: white;",
          crown: "⭐",
          title: "Thái Tông · Vua thịnh trị nhất", titleStyle: "color:#fcd34d;",
          name: "Mạc Đăng Doanh", nameStyle: "color:white;",
          realName: "? – 1540 SCN", realNameStyle: "color:#d6d3d1;",
          years: "📅 Trị vì: 1529 – 1540 · 11 năm", yearsStyle: "background:rgba(0,0,0,0.4); color:#fcd34d;",
          note: "Đỉnh cao Nhà Mạc. 22 khoa thi liên tục 3 năm/lần. Cảng Vân Đồn thương mại sôi động. Thuế nhẹ, hình phạt khoan hòa. Được chính sử đối thủ thừa nhận. Mất 1540 — khởi đầu suy yếu.", noteStyle: "color:#d6d3d1;"
        },
        officials: [
          { href: "nhan-vat/phung-khac-khoan.html", iconClass: "icon-advisor", icon: "📜", roleClass: "role-advisor", role: "Trạng Bùng · Sứ thần tài ba", name: "Phùng Khắc Khoan", desc: "Học trò Nguyễn Bỉnh Khiêm. Ban đầu phục vụ Nhà Mạc, sau theo Lê Trung Hưng. Đi sứ Trung Hoa 1597 — mang về kỹ thuật trồng ngô, đổi 'thất bại ngoại giao' thành 'thắng lợi nông nghiệp'." }
        ]
      },
      {
        king: {
          href: "nhan-vat/mac-mau-hop.html",
          cardStyle: "border-color: rgba(146,64,14,0.6); background: linear-gradient(135deg, #1c0a00 0%, #2d1500 100%); color: white;",
          crown: "💀",
          title: "Mậu Hợp · Vua cuối Nhà Mạc tại Thăng Long", titleStyle: "color:#fcd34d;",
          name: "Mạc Mậu Hợp", nameStyle: "color:white;",
          realName: "1560 – 1592 SCN", realNameStyle: "color:#d6d3d1;",
          years: "📅 Trị vì: 1562 – 1592 · 30 năm", yearsStyle: "background:rgba(0,0,0,0.4); color:#fcd34d;",
          note: "Thừa hưởng Nhà Mạc đã bị bào mòn 60 năm chiến tranh tiêu hao. Nội bộ tranh giành, nguồn lực phân tán. Bị Trịnh Tùng đánh chiếm Thăng Long 1592, bị bắt và xử tử — kết thúc Nhà Mạc tại Thăng Long.", noteStyle: "color:#d6d3d1;"
        },
        officials: [
          { href: "nhan-vat/trinh-tung.html", iconClass: "icon-enemy", icon: "⚔️", roleClass: "role-enemy", role: "Chúa Trịnh · Kẻ kết thúc Nhà Mạc", name: "Trịnh Tùng", desc: "Con trai Trịnh Kiểm. Đánh chiếm Thăng Long 1592, kết thúc Nhà Mạc. Ép vua Lê Kính Tông tự vẫn 1619. Lập mô hình Chúa-Vua tồn tại 200 năm — thực quyền không cần ngai vàng." },
          { href: "nhan-vat/duong-chap-nhat.html", iconClass: "icon-official", icon: "🏴", roleClass: "role-official", role: "Tướng Mạc · Chiến đến cùng", name: "Dương Chấp Nhất", desc: "Tướng trung thành nhà Mạc, chiến đấu đến những ngày cuối cùng. Đại diện cho tầng lớp quan lại và tướng lĩnh Nhà Mạc bị lịch sử phe thắng cuộc cố tình xóa mờ." }
        ]
      }
    ]
  },

  // Divider: Nhà Mạc sụp đổ
  {
    id: "divider-nha-mac-end",
    isDividerOnly: true,
    dividerText: "⚔️ 1592 — Trịnh Tùng chiếm Thăng Long · Kết thúc 65 năm Nhà Mạc · Lê Trung Hưng + Chúa Trịnh nắm quyền"
  },

  // Trịnh-Nguyễn Phân Tranh — SPLIT SECTION
  {
    id: "trinh-nguyen-phan-tranh",
    isSplitSection: true,
    splitLabel: "Trịnh–Nguyễn Phân Tranh · 1627–1775 · Đất nước chia đôi",

    // ══════════════════════════════════════════════
    //  ĐÀNG NGOÀI — 6 Chúa Trịnh (kế nhiệm nhau)
    // ══════════════════════════════════════════════
    left: {
      title: "Đàng Ngoài",
      subtitle: "Chúa Trịnh thực quyền · Vua Lê danh nghĩa — bình phong",
      columns: [

        // ── Chúa Trịnh 1: Trịnh Kiểm ──────────────
        {
          king: {
            href: "nhan-vat/trinh-kiem.html",
            cardStyle: "background: linear-gradient(135deg, #1c1917 0%, #292524 100%); border-color: rgba(155,28,28,0.5); color: white;",
            crown: "⚡",
            title: "Chúa Trịnh I · Người lập mô hình", titleStyle: "color:#fca5a5;",
            name: "Trịnh Kiểm", nameStyle: "color:white;",
            realName: "1503–1570 SCN", realNameStyle: "color:#d6d3d1;",
            years: "📅 Nắm quyền: 1545–1570",
            note: "Không lên ngôi vua — học bài từ Nhà Mạc. Thiết kế mô hình Chúa-Vua: thực quyền không cần danh hiệu. Đẩy Nguyễn Hoàng vào Nam — vô tình tạo ra Đàng Trong."
          },
          officials: [
            { href: "nhan-vat/le-kinh-tong.html", iconClass: "icon-king", icon: "👑", roleClass: "role-king",
              role: "Vua Lê · Bình phong danh nghĩa", name: "Lê Kính Tông",
              desc: "Đại diện cho các đời vua Lê Trung Hưng — ngai vàng có, thực quyền không. Bị ép tự vẫn 1619 khi 'vướng' vào nội loạn Trịnh Xuân." }
          ]
        },

        // ── Chúa Trịnh 2: Trịnh Tùng ──────────────
        {
          king: {
            href: "nhan-vat/trinh-tung.html",
            cardStyle: "background: linear-gradient(135deg, #1c1917 0%, #292524 100%); border-color: rgba(155,28,28,0.5); color: white;",
            crown: "⚔️",
            title: "Chúa Trịnh II · Kết thúc Nhà Mạc", titleStyle: "color:#fca5a5;",
            name: "Trịnh Tùng", nameStyle: "color:white;",
            realName: "1550–1623 SCN", realNameStyle: "color:#d6d3d1;",
            years: "📅 Nắm quyền: 1570–1623",
            note: "Chiếm Thăng Long 1592, kết thúc 65 năm Nhà Mạc. Ép vua Lê Kính Tông tự vẫn 1619. Hoàn thiện cấu trúc Chúa nắm toàn bộ thực quyền."
          },
          officials: [
            { href: "nhan-vat/trinh-xuan.html", iconClass: "icon-enemy", icon: "🗡️", roleClass: "role-enemy",
              role: "Trịnh Xuân · Nội loạn kế vị", name: "Trịnh Xuân",
              desc: "Con trai nổi loạn chống cha, liên minh với vua Lê Kính Tông — thất bại, bị xử tử. Bệnh kinh niên của mô hình quyền lực cha truyền con nối." }
          ]
        },

        // ── Chúa Trịnh 3: Trịnh Tráng ─────────────
        {
          king: {
            href: "nhan-vat/trinh-trang.html",
            cardStyle: "background: linear-gradient(135deg, #1c1917 0%, #292524 100%); border-color: rgba(155,28,28,0.5); color: white;",
            crown: "🔥",
            title: "Chúa Trịnh III · Khai hỏa phân tranh", titleStyle: "color:#fca5a5;",
            name: "Trịnh Tráng", nameStyle: "color:white;",
            realName: "1577–1657 SCN", realNameStyle: "color:#d6d3d1;",
            years: "📅 Nắm quyền: 1623–1657",
            note: "1627: Khai hỏa chiến tranh Trịnh-Nguyễn — 4 lần tấn công (1627, 1633, 1635, 1648), cả 4 lần thất bại vì Lũy Thầy. Trị vì 34 năm — lâu nhất các Chúa Trịnh. Cai trị Đàng Ngoài ổn định nhưng không học được từ thất bại quân sự."
          },
          officials: [
            { href: null, iconClass: "icon-official", icon: "🏯", roleClass: "role-official",
              role: "Chiến lược · Lũy Trường Dục", name: "Phòng tuyến 1627",
              desc: "Xây dựng hệ thống lũy phòng thủ tại sông Gianh — ranh giới thực tế chia đôi Đàng Ngoài và Đàng Trong suốt 148 năm phân tranh." }
          ]
        },

        // ── Chúa Trịnh 4: Trịnh Cương ─────────────
        {
          king: {
            href: "nhan-vat/trinh-cuong.html",
            cardStyle: "background: linear-gradient(135deg, #1c1917 0%, #292524 100%); border-color: rgba(155,28,28,0.5); color: white;",
            crown: "⚖️",
            title: "Chúa Trịnh VI · Nhà cải cách Đàng Ngoài", titleStyle: "color:#fca5a5;",
            name: "Trịnh Cương", nameStyle: "color:white;",
            realName: "1686–1729 SCN", realNameStyle: "color:#d6d3d1;",
            years: "📅 Nắm quyền: 1709–1729 · 20 năm",
            note: "Nhà cải cách duy nhất của Đàng Ngoài — cải cách phép thuế tô dung điệu (1723), chỉnh đốn thi cử quan lại, đắp đê trị thủy. Nỗ lực bị đảo ngược sau khi ông mất vì hệ thống bảo thủ."
          },
          officials: [
            { href: null, iconClass: "icon-official", icon: "📜", roleClass: "role-official",
              role: "Cải cách tài chính · 1723", name: "Phép thuế Tô Dung Điệu",
              desc: "Ban hành chính sách thuế mới nhằm công bằng nghĩa vụ và giảm nhũng nhiễu quan lại — nỗ lực cứu Đàng Ngoài khỏi trì trệ kinh tế." }
          ]
        },

        // ── Chúa Trịnh 5: Trịnh Doanh ─────────────
        {
          king: {
            href: null,
            cardStyle: "background: linear-gradient(135deg, #1c1917 0%, #292524 100%); border-color: rgba(155,28,28,0.5); color: white;",
            crown: "🛡️",
            title: "Chúa Trịnh VII · Dẹp khởi nghĩa nông dân", titleStyle: "color:#fca5a5;",
            name: "Trịnh Doanh", nameStyle: "color:white;",
            realName: "1720–1767 SCN", realNameStyle: "color:#d6d3d1;",
            years: "📅 Nắm quyền: 1740–1767",
            note: "Giai đoạn khủng hoảng nội bộ Đàng Ngoài: 4 cuộc khởi nghĩa nông dân lớn (Nguyễn Hữu Cầu, Hoàng Công Chất, Nguyễn Danh Phương, Lê Duy Mật). Dẹp được nhưng kiệt sức — dấu hiệu hệ thống đang mục ruỗng."
          },
          officials: [
            { href: null, iconClass: "icon-enemy", icon: "⚡", roleClass: "role-enemy",
              role: "Khởi nghĩa nông dân · 1740–1751", name: "Nguyễn Hữu Cầu",
              desc: "Thủ lĩnh khởi nghĩa quy mô lớn nhất — bị dẹp 1751. Cùng với 3 cuộc khởi nghĩa khác cho thấy mâu thuẫn xã hội Đàng Ngoài đã đến mức bùng nổ." }
          ]
        },

        // ── Chúa Trịnh 5: Trịnh Sâm ────────────────
        {
          king: {
            href: null,
            cardStyle: "background: linear-gradient(135deg, #1c1917 0%, #292524 100%); border-color: rgba(155,28,28,0.5); color: white;",
            crown: "💀",
            title: "Chúa Trịnh VIII · Suy đồi & Kiêu binh", titleStyle: "color:#fca5a5;",
            name: "Trịnh Sâm", nameStyle: "color:white;",
            realName: "1739–1782 SCN", realNameStyle: "color:#d6d3d1;",
            years: "📅 Nắm quyền: 1767–1782",
            note: "Mê đắm Đặng Thị Huệ — muốn truyền ngôi cho con thứ thay con cả, gây hỗn loạn nội bộ. 'Loạn Kiêu binh' 1782: binh lính tự ý phế lập Chúa. Khởi đầu của sự sụp đổ họ Trịnh."
          },
          officials: [
            { href: null, iconClass: "icon-queen", icon: "💃", roleClass: "role-queen",
              role: "Đặng Thị Huệ · Nguyên nhân nội loạn", name: "Đặng Thị Huệ",
              desc: "Phi tần được Trịnh Sâm sủng ái, vận động để con trai được lên ngôi thay con cả. Gây chia rẽ nội bộ — dẫn đến Loạn Kiêu binh 1782 và sự sụp đổ của họ Trịnh." }
          ]
        },

        // ── Chúa Trịnh 6: Trịnh Khải ───────────────
        {
          king: {
            href: null,
            cardStyle: "background: linear-gradient(135deg, #1c1917 0%, #292524 100%); border-color: rgba(155,28,28,0.5); color: white;",
            crown: "🏚️",
            title: "Chúa Trịnh IX · Đời cuối · Tây Sơn diệt", titleStyle: "color:#fca5a5;",
            name: "Trịnh Khải", nameStyle: "color:white;",
            realName: "?–1786 SCN", realNameStyle: "color:#d6d3d1;",
            years: "📅 Nắm quyền: 1782–1786 · Kết thúc 241 năm",
            note: "1786: Nguyễn Huệ (Tây Sơn) tiến ra Bắc với danh nghĩa 'phù Lê diệt Trịnh'. Trịnh Khải bị bắt, tự vẫn. Kết thúc 241 năm họ Trịnh nắm quyền Đàng Ngoài."
          },
          officials: [
            { href: null, iconClass: "icon-enemy", icon: "⚡", roleClass: "role-enemy",
              role: "Nguyễn Huệ · Người kết thúc họ Trịnh", name: "Tây Sơn Bắc tiến 1786",
              desc: "Nguyễn Huệ tiến ra Bắc danh nghĩa 'phù Lê diệt Trịnh' — diệt họ Trịnh trong 2 tháng. Đặt dấu chấm hết cho 148 năm Trịnh-Nguyễn phân tranh." }
          ]
        }

      ]  // end left.columns
    },  // end left

    // ══════════════════════════════════════════════
    //  ĐÀNG TRONG — 6 Chúa Nguyễn (kế nhiệm nhau)
    // ══════════════════════════════════════════════
    right: {
      title: "Đàng Trong",
      subtitle: "Chúa Nguyễn — thực thể độc lập, mở cõi về Nam",
      columns: [

        // ── Chúa Nguyễn 1: Nguyễn Hoàng ───────────
        {
          king: {
            href: "nhan-vat/nguyen-hoang.html",
            cardStyle: "background: linear-gradient(135deg, #030a06 0%, #052e16 100%); border-color: rgba(22,101,52,0.5); color: white;",
            crown: "🌿",
            title: "Chúa Nguyễn I · Người khai sáng", titleStyle: "color:#86efac;",
            name: "Nguyễn Hoàng", nameStyle: "color:white;",
            realName: "1525–1613 SCN", realNameStyle: "color:#d6d3d1;",
            years: "📅 Trấn thủ Thuận Hóa: 1558–1613 · 55 năm",
            note: "Bị 'đày' vào Thuận Hóa — biến thành cơ hội. 55 năm không đối đầu, xây nền Đàng Trong vững chắc. Đặt nền móng Nhà Nguyễn 300 năm sau."
          },
          officials: [
            { href: "nhan-vat/nguyen-binh-khiem.html", iconClass: "icon-advisor", icon: "🔮", roleClass: "role-advisor",
              role: "Cố vấn · Trạng Trình", name: "Nguyễn Bỉnh Khiêm",
              desc: "'Hoành Sơn nhất đái, vạn đại dung thân' — lời khuyên 7 chữ định hướng chiến lược 300 năm." }
          ]
        },

        // ── Chúa Nguyễn 2: Nguyễn Phúc Nguyên ─────
        {
          king: {
            href: "nhan-vat/nguyen-phuc-nguyen.html",
            cardStyle: "background: linear-gradient(135deg, #030a06 0%, #052e16 100%); border-color: rgba(22,101,52,0.5); color: white;",
            crown: "🌿",
            title: "Chúa Nguyễn II · Người châm ngòi phân tranh", titleStyle: "color:#86efac;",
            name: "Nguyễn Phúc Nguyên", nameStyle: "color:white;",
            realName: "1563–1635 SCN", realNameStyle: "color:#d6d3d1;",
            years: "📅 Cai quản: 1613–1635",
            note: "'Cha không dám — con dám.' Từ chối nộp cống Đàng Ngoài ~1620 (đúng thời điểm). Chọn Đào Duy Từ, xây Lũy Thầy. Trụ vững qua tấn công đầu tiên 1627 — Đàng Trong chính thức độc lập thực tế."
          },
          officials: [
            { href: "nhan-vat/dao-duy-tu.html", iconClass: "icon-official", icon: "🏯", roleClass: "role-official",
              role: "Đào Duy Từ · Chiến lược phòng thủ", name: "Đào Duy Từ",
              desc: "Tư vấn xây Lũy Thầy (Đồng Hới) — hệ thống phòng thủ ngăn 7 lần tấn công của Trịnh Tráng. Nhà Trịnh không chiếm được Đàng Trong suốt 148 năm phần lớn nhờ công trình này." }
          ]
        },

        // ── Chúa Nguyễn 3: Nguyễn Phúc Lan ────────
        {
          king: {
            href: "nhan-vat/nguyen-phuc-lan.html",
            cardStyle: "background: linear-gradient(135deg, #030a06 0%, #052e16 100%); border-color: rgba(22,101,52,0.5); color: white;",
            crown: "🌿",
            title: "Chúa Nguyễn III · Người giữ lửa", titleStyle: "color:#86efac;",
            name: "Nguyễn Phúc Lan", nameStyle: "color:white;",
            realName: "1601–1648 SCN", realNameStyle: "color:#d6d3d1;",
            years: "📅 Cai quản: 1635–1648",
            note: "Kế vị khi cha và Đào Duy Từ mất cùng năm 1634. 13 năm ổn định — duy trì Lũy Thầy, Hội An phát triển. Không thắp thêm nhưng không để tắt. Mất 1648 đúng năm Trịnh tấn công lần 3."
          },
          officials: [
            { href: null, iconClass: "icon-official", icon: "🕊️", roleClass: "role-official",
              role: "Giai đoạn củng cố · 1635–1648", name: "Ổn định nội bộ",
              desc: "13 năm không có chiến tranh lớn. Duy trì hệ thống Đào Duy Từ để lại. Đây là giai đoạn 'consolidation' cần thiết sau mất mát hai trụ cột lớn nhất cùng lúc." }
          ]
        },

        // ── Chúa Nguyễn 4: Nguyễn Phúc Tần ────────
        {
          king: {
            href: "nhan-vat/nguyen-phuc-tan.html",
            cardStyle: "background: linear-gradient(135deg, #030a06 0%, #052e16 100%); border-color: rgba(22,101,52,0.5); color: white;",
            crown: "⚔️",
            title: "Chúa Nguyễn IV · Hiền Vương · Từ phòng thủ sang chủ động", titleStyle: "color:#86efac;",
            name: "Nguyễn Phúc Tần", nameStyle: "color:white;",
            realName: "1620–1687 SCN", realNameStyle: "color:#d6d3d1;",
            years: "📅 Cai quản: 1648–1687 · 39 năm",
            note: "1648: phản công Trịnh ngay trong năm kế vị — bắt 3.000 quân. 1655: tiến đến Nghệ An — xa nhất lịch sử chiến tranh. 1672: Trịnh Tạc thất bại, hòa hoãn ngầm hình thành. Đánh chìm tàu Hà Lan 1644."
          },
          officials: [
            { href: null, iconClass: "icon-official", icon: "⚓", roleClass: "role-official",
              role: "Hải chiến · 1644 · Đánh Hà Lan", name: "Chiến thắng Cửa Eo",
              desc: "Hạm đội Đàng Trong đánh bại tàu chiến Hà Lan tại Cửa Eo (Thuận An). Chiến thắng hải chiến hiếm hoi — khẳng định sức mạnh thủy quân Đàng Trong trên biển Đông." }
          ]
        },

        // ── Chúa Nguyễn 4: Nguyễn Phúc Chu ────────
        {
          king: {
            href: "nhan-vat/nguyen-phuc-chu.html",
            cardStyle: "background: linear-gradient(135deg, #030a06 0%, #052e16 100%); border-color: rgba(22,101,52,0.5); color: white;",
            crown: "👑",
            title: "Chúa Nguyễn VI · Quốc Chúa · Mở Gia Định", titleStyle: "color:#86efac;",
            name: "Nguyễn Phúc Chu", nameStyle: "color:white;",
            realName: "1675–1725 SCN", realNameStyle: "color:#d6d3d1;",
            years: "📅 Cai quản: 1691–1725 · 34 năm",
            note: "Quốc Chúa — đưa Đàng Trong tới đỉnh cao toàn diện. Cử Nguyễn Hữu Cảnh lập Phủ Gia Định 1698. Thu nhận Mạc Cửu dâng Hà Tiên 1708. Phát triển ngoại thương Hội An và Phật giáo."
          },
          officials: [
            { href: "nhan-vat/nguyen-huu-canh.html", iconClass: "icon-official", icon: "⚔️", roleClass: "role-official",
              role: "Nguyễn Hữu Cảnh · Lập Phủ Gia Định 1698", name: "Nguyễn Hữu Cảnh",
              desc: "Kinh lược phương Nam 1698, lập Phủ Gia Định (Biên Hòa - Sài Gòn), chính thức hóa bộ máy hành chính người Việt ở Nam Bộ." },
            { href: "nhan-vat/mac-cuu.html", iconClass: "icon-official", icon: "🏝️", roleClass: "role-official",
              role: "Mạc Cửu · Khai phá Hà Tiên", name: "Mạc Cửu",
              desc: "Thương gia tị nạn dâng đất Hà Tiên thần phục Chúa Nguyễn năm 1708." },
            { href: "nhan-vat/mac-thien-tu.html", iconClass: "icon-official", icon: "📜", roleClass: "role-official",
              role: "Mạc Thiên Tứ · Chiêu Anh Các", name: "Mạc Thiên Tứ",
              desc: "Con Mạc Cửu, phát triển Hà Tiên rực rỡ cả thương mại lẫn văn hóa tao đàn Chiêu Anh Các." },
            { href: "nhan-vat/tran-thuong-xuyen.html", iconClass: "icon-official", icon: "🏙️", roleClass: "role-official",
              role: "Trần Thượng Xuyên · Cù Lao Phố", name: "Trần Thượng Xuyên",
              desc: "Tướng nhà Minh tị nạn khai phá Cù Lao Phố (Biên Hòa) thành đô thị thương mại sầm uất đầu tiên ở Nam Bộ." },
            { href: "nhan-vat/duong-ngan-dich.html", iconClass: "icon-official", icon: "🌾", roleClass: "role-official",
              role: "Dương Ngạn Địch · Mỹ Tho đại phố", name: "Dương Ngạn Địch",
              desc: "Tướng nhà Minh tị nạn khai phá vùng đất Mỹ Tho đại phố sầm uất." }
          ]
        },

        // ── Chúa Nguyễn 5: Nguyễn Phúc Khoát ──────
        {
          king: {
            href: null,
            cardStyle: "background: linear-gradient(135deg, #030a06 0%, #052e16 100%); border-color: rgba(22,101,52,0.5); color: white;",
            crown: "🌿",
            title: "Chúa Nguyễn VIII · Vũ Vương · Xưng tôn hiệu", titleStyle: "color:#86efac;",
            name: "Nguyễn Phúc Khoát", nameStyle: "color:white;",
            realName: "1714–1765 SCN", realNameStyle: "color:#d6d3d1;",
            years: "📅 Cai quản: 1738–1765",
            note: "Tự xưng 'Vũ Vương' 1744 — lần đầu tiên Chúa Nguyễn dùng tôn hiệu độc lập, không còn nhận danh nghĩa từ triều đình Lê-Trịnh. Đỉnh cao của Đàng Trong, nhưng cũng bắt đầu suy yếu nội bộ."
          },
          officials: [
            { href: null, iconClass: "icon-official", icon: "👘", roleClass: "role-official",
              role: "Cải cách văn hóa · 1744", name: "Áo dài Đàng Trong",
              desc: "Năm 1744, ban sắc chỉ quy định y phục — cải cách tạo ra tiền thân của áo dài Việt Nam hiện đại. Đàng Trong phát triển bản sắc văn hóa riêng biệt với Đàng Ngoài." }
          ]
        },

        // ── Chúa Nguyễn 6: Nguyễn Phúc Thuần ──────
        {
          king: {
            href: null,
            cardStyle: "background: linear-gradient(135deg, #030a06 0%, #052e16 100%); border-color: rgba(22,101,52,0.5); color: white;",
            crown: "🍂",
            title: "Chúa Nguyễn IX · Đời cuối · Tây Sơn diệt", titleStyle: "color:#86efac;",
            name: "Nguyễn Phúc Thuần", nameStyle: "color:white;",
            realName: "1754–1777 SCN", realNameStyle: "color:#d6d3d1;",
            years: "📅 Cai quản: 1765–1777 · Kết thúc Đàng Trong",
            note: "Lên ngôi khi còn nhỏ tuổi — thực quyền trong tay quyền thần Trương Phúc Loan. 1771: Khởi nghĩa Tây Sơn bùng nổ. 1777: Bị Tây Sơn bắt và xử tử — kết thúc 219 năm các Chúa Nguyễn cai quản Đàng Trong."
          },
          officials: [
            { href: null, iconClass: "icon-enemy", icon: "🌊", roleClass: "role-enemy",
              role: "Tây Sơn nổi dậy · 1771", name: "Khởi nghĩa Tây Sơn",
              desc: "Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ khởi binh tại Quy Nhơn. Sinh ra từ mâu thuẫn xã hội tích tụ của Đàng Trong — đội quân nông dân lật đổ cả hai thế lực phân tranh." }
          ]
        }

      ]  // end right.columns
    }   // end right
  },

  {
    id: "era-tay-son",
    label: "Nhà Tây Sơn · Xóa Bỏ Trịnh-Nguyễn & Đại Phá Xiêm-Thanh (1771 – 1802 SCN)",
    labelStyle: "background: #9b1c1c;",
    eraBlockStyle: "border-top: 2px dashed rgba(155,28,28,0.3); padding-top: 2rem;",
    dividerBefore: null,
    columns: [
      {
        king: {
          href: "nhan-vat/nguyen-hue.html",
          cardStyle: "border-color: rgba(155,28,28,0.5); background: linear-gradient(135deg, #1c1917 0%, #450a0a 100%); color: white;",
          crown: "👑",
          title: "Thiên Tài Quân Sự — Vua Quang Trung", titleStyle: "color:#fca5a5;",
          name: "Quang Trung (Nguyễn Huệ)", nameStyle: "color:white;",
          realName: "Nguyễn Văn Huệ · 1753 – 1792 SCN", realNameStyle: "color:#d6d3d1;",
          years: "📅 Xưng đế: 1788 – 1792 · 20 năm cầm quân bất bại", yearsStyle: "background:rgba(0,0,0,0.4); color:#fca5a5;",
          note: "Đại phá 5 vạn quân Xiêm (1785) & 29 vạn quân Thanh Tết Kỷ Dậu (1789). Lật đổ Trịnh-Nguyễn. Đưa chữ Nôm làm quốc ngữ trước khi đột ngột qua đời tuổi 40."
        },
        officials: [
          { href: "nhan-vat/nguyen-nhac.html", iconClass: "icon-king", icon: "👑", roleClass: "role-king", role: "Anh cả · Thái Đức Đế", name: "Nguyễn Nhạc", desc: "Thủ lĩnh dấy binh 1771, quy tụ lòng dân với cờ 'Diệt Trương Phúc Loan', xưng Thái Đức Đế tại Quy Nhơn." },
          { href: "nhan-vat/ngo-thi-nham.html", iconClass: "icon-advisor", icon: "📜", roleClass: "role-advisor", role: "Danh sĩ · Mưu sĩ", name: "Ngô Thì Nhậm", desc: "Tác giả kế sách rút về Tam Điệp bảo toàn lực lượng và các văn kiện ngoại giao xuất sắc buộc nhà Thanh nể sợ." },
          { href: "nhan-vat/nguyen-thiep.html", iconClass: "icon-advisor", icon: "📜", roleClass: "role-advisor", role: "Cố vấn · La Sơn Phu Tử", name: "Nguyễn Thiếp", desc: "Ẩn sĩ đức độ, cố vấn chiến lược và làm Viện trưởng Viện Cung nghiệt dịch sách Nôm." },
          { href: "nhan-vat/tran-quang-dieu.html", iconClass: "icon-official", icon: "⚔️", roleClass: "role-official", role: "Đại Đô đốc · Tượng binh", name: "Trần Quang Diệu", desc: "Cột trụ dũng tướng vây thành Quy Nhơn, tinh thần thượng võ tha bổng toàn bộ quân hàng của Võ Tánh." },
          { href: "nhan-vat/bui-thi-xuan.html", iconClass: "icon-official", icon: "⚔️", roleClass: "role-official", role: "Nữ Đô đốc · Voi chiến", name: "Bùi Thị Xuân", desc: "Nữ tướng chỉ huy đội voi chiến kiệt xuất, chiến đấu hiên ngang đến hơi thở cuối cùng." },
          { href: "nhan-vat/vu-van-dung.html", iconClass: "icon-official", icon: "⚓", roleClass: "role-official", role: "Đại Đô đốc Hải quân", name: "Vũ Văn Dũng", desc: "Chỉ huy hạm đội chiến thuyền Tây Sơn, diệt quyền thần Bùi Đắc Tuyên để cứu vãn vương triều." },
          { href: "nhan-vat/nguyen-anh.html", iconClass: "icon-enemy", icon: "👑", roleClass: "role-enemy", role: "Gia Long · Phục thù", name: "Nguyễn Ánh", desc: "Chúa Nguyễn kiên trì 25 năm nếm mật nằm gai, kết nối kỹ thuật phương Tây, lật đổ Tây Sơn năm 1802." },
          { href: "nhan-vat/le-chieu-thong.html", iconClass: "icon-enemy", icon: "⚠️", roleClass: "role-enemy", role: "Vua rước giặc Thanh", name: "Lê Chiêu Thống", desc: "Vua cuối nhà Lê sang Thanh cầu viện 29 vạn quân sang xâm lược, chết tủi hổ ở xứ người." }
        ]
      }
    ]
  },

  {
    id: "era-nha-nguyen",
    label: "Nhà Nguyễn · Triều Đại Cuối Cùng & Pháp Xâm Lược (1802 – 1945 SCN)",
    labelStyle: "background: #7f1d1d;",
    eraBlockStyle: "border-top: 2px dashed rgba(155,28,28,0.4); padding-top: 2rem;",
    dividerBefore: null,
    columns: [
      {
        king: {
          href: "nhan-vat/gia-long.html",
          cardStyle: "border-color: rgba(155,28,28,0.5); background: linear-gradient(135deg, #3b0764 0%, #6b21a8 100%); color: white;",
          crown: "👑",
          title: "Gia Long — Hoàng Đế Khai Quốc", titleStyle: "color:#d8b4fe;",
          name: "Gia Long (Nguyễn Ánh)", nameStyle: "color:white;",
          realName: "Nguyễn Phúc Ánh · 1762 – 1820 SCN", realNameStyle: "color:#d6d3d1;",
          years: "📅 Trị vì: 1802 – 1820 · 18 năm — Người thống nhất Việt Nam", yearsStyle: "background:rgba(0,0,0,0.4); color:#d8b4fe;",
          note: "Sau 25 năm phục thù kiên trì, thống nhất lần đầu tiên lãnh thổ từ Cà Mau đến Cao Bằng. Lập mô hình '1 Trung ương + 2 Tổng trấn' để quản trị chuyển tiếp. Ban Bộ luật Gia Long (1815). Điểm đen: trả thù gia tộc Tây Sơn tàn bạo, vụ oan Nguyễn Văn Thành."
        },
        officials: [
          { href: "nhan-vat/nguyen-van-thanh.html", iconClass: "icon-official", icon: "📜", roleClass: "role-official", role: "Công Thần Khai Quốc Số 1 · Tổng Trấn Bắc Thành", name: "Nguyễn Văn Thành", desc: "Văn võ toàn tài, phù trợ Nguyễn Ánh suốt 25 năm. Tổng trấn Bắc Thành đầu tiên, chủ trì soạn Bộ luật Gia Long 398 điều. Năm 1817, bị nghi oan và uống thuốc độc tự sát trong ngục để giữ danh tiết." },
          { href: "nhan-vat/le-van-duyet.html", iconClass: "icon-official", icon: "⚔️", roleClass: "role-official", role: "Tứ Quân Tổng Trấn · Gia Định Thành", name: "Lê Văn Duyệt", desc: "Võ tướng số 1 triều Nguyễn, hai lần Tổng trấn Gia Định Thành. Đào kênh Vĩnh Tế, mở cửa giao thương, được dân tôn 'Đức Thượng Công'. Sau khi mất bị Minh Mạng truy tố — dẫn đến khởi nghĩa Lê Văn Khôi 1833." },
          { href: "nhan-vat/vua-minh-mang.html", iconClass: "icon-king", icon: "👑", roleClass: "role-king", role: "Hoàng Đế Thứ Hai · 1820–1841", name: "Vua Minh Mạng", desc: "Kiến trúc sư cải cách 31 tỉnh (1831–32), thực thi chủ quyền Hoàng Sa–Trường Sa. Siêng năng nhất triều Nguyễn, dậy 5h sáng đọc tấu chương đến đêm. Điểm mù: bế quan tỏa cảng và cấm đạo khi thế giới đang thay đổi nhanh." },
          { href: "nhan-vat/vua-thieu-tri.html", iconClass: "icon-king", icon: "👑", roleClass: "role-king", role: "Hoàng Đế Thứ Ba · 1841–1847", name: "Vua Thiệu Trị", desc: "Con trưởng Minh Mạng, trị vì 7 năm. Vua hiền hòa, thương dân, giảm thuế thường xuyên. Rút quân khỏi Trấn Tây Thành để tránh sa lầy. Năm 1847, tàu chiến Pháp bắn chìm 5 chiến thuyền tại Đà Nẵng — tín hiệu cuối cùng mà không ai hành động." }
        ]
      },
      {
        king: {
          href: "nhan-vat/vua-tu-duc.html",
          cardStyle: "border-color: rgba(155,28,28,0.6); background: linear-gradient(135deg, #450a0a 0%, #7f1d1d 100%); color: white;",
          crown: "👑",
          title: "Vua Tự Đức — Triều Đại Bi Kịch Nhất", titleStyle: "color:#fca5a5;",
          name: "Vua Tự Đức", nameStyle: "color:white;",
          realName: "Nguyễn Phúc Thì · 1829 – 1883 SCN", realNameStyle: "color:#d6d3d1;",
          years: "📅 Trị vì: 1847 – 1883 · 36 năm — triều đại dài nhất nhà Nguyễn", yearsStyle: "background:rgba(0,0,0,0.4); color:#fca5a5;",
          note: "Trị vì 36 năm nhưng phải đối diện với cuộc xâm lược của Pháp từ 1858. Bảo thủ Nho giáo, từ chối canh tân, ký 2 hòa ước nhượng bộ (1862, 1874). Mất ngay trước khi Pháp ép ký Hòa ước Harmand (1883) — mất nước chính thức."
        },
        officials: [
          { href: "nhan-vat/nguyen-tri-phuong.html", iconClass: "icon-official", icon: "⚔️", roleClass: "role-official", role: "Danh tướng · Tuẫn tiết 1873", name: "Nguyễn Tri Phương", desc: "Chỉ huy phòng thủ Đà Nẵng & Hà Nội. Bị thương khi Pháp chiếm Hà Nội lần 1 (1873), từ chối băng bó và ăn uống, tuẫn tiết giữ khí tiết không hợp tác với kẻ thù." },
          { href: "nhan-vat/hoang-dieu.html", iconClass: "icon-official", icon: "⚔️", roleClass: "role-official", role: "Tổng đốc Hà Nội · Tuẫn tiết 1882", name: "Hoàng Diệu", desc: "Chỉ huy bảo vệ thành Hà Nội lần 2 (1882). Khi kho thuốc súng cháy và cổng thành thất thủ, viết di thư bằng máu tạ tội với vua rồi thắt cổ tự sát giữ khí tiết." },
          { href: "nhan-vat/phan-thanh-gian.html", iconClass: "icon-advisor", icon: "📜", roleClass: "role-advisor", role: "Đại thần · Ký Hòa ước 1862", name: "Phan Thanh Giản", desc: "Đại thần ký Hòa ước Nhâm Tuất 1862, nhường 3 tỉnh Đông Nam Kỳ cho Pháp. Sau khi mất nốt 3 tỉnh Tây Nam Kỳ (1867), uống thuốc độc tự sát — không ăn trong 17 ngày trước khi mất." },
          { href: "nhan-vat/truong-dinh.html", iconClass: "icon-official", icon: "⚔️", roleClass: "role-official", role: "Bình Tây Đại Nguyên Soái", name: "Trương Định", desc: "Chống lệnh bãi binh của triều đình, ở lại kháng Pháp tại Nam Kỳ. Được dân tôn 'Bình Tây Đại Nguyên Soái'. Hy sinh năm 1864 — biểu tượng ý chí dân tộc độc lập với triều đình." },
          { href: "nhan-vat/nguyen-trung-truc.html", iconClass: "icon-official", icon: "🔥", roleClass: "role-official", role: "Anh hùng · Đốt tàu Esperance", name: "Nguyễn Trung Trực", desc: "Đốt cháy tàu chiến Pháp Esperance (1861), chiếm đồn Rạch Giá (1868). Bị bắt và xử tử, để lại câu nói bất hủ: 'Bao giờ người Tây nhổ hết cỏ nước Nam mới hết người Nam đánh Tây'." },
          { href: "nhan-vat/nguyen-truong-to.html", iconClass: "icon-advisor", icon: "📜", roleClass: "role-advisor", role: "Nhà canh tân · 58 điều trần", name: "Nguyễn Trường Tộ", desc: "Dâng 58+ bản điều trần canh tân toàn diện (1863–1871) — tương tự Minh Trị Duy Tân của Nhật. Bị Tự Đức gạt bỏ vì bảo thủ Nho giáo. Đến khi mất nước không còn cơ hội thứ hai." },
          { href: "nhan-vat/ton-that-thuyet.html", iconClass: "icon-official", icon: "⚔️", roleClass: "role-official", role: "Thượng thư Bộ Binh · Phe Chủ chiến", name: "Tôn Thất Thuyết", desc: "Linh hồn phe Chủ chiến. Bí mật xây căn cứ Tân Sở trước, tấn công đồn Mang Cá (1885), đưa Vua Hàm Nghi ban Dụ Cần Vương — châm ngòi phong trào kháng Pháp toàn quốc 10 năm." }
        ]
      }
    ]
  }

];
