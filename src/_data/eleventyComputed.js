// Giữ nguyên URL dạng /duong-dan/ten-file.html (Eleventy mặc định đổi sang /ten-file/
// sẽ làm vỡ toàn bộ link cũ của site đang live)
module.exports = {
  // Front matter permalink (nếu có, vd sitemap.xml) luôn thắng — chỉ áp
  // permalink .html mặc định cho các trang chưa tự khai báo.
  permalink: (data) =>
    data.permalink || `${data.page.filePathStem}.html`,
};
