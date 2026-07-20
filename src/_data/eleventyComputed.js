// Giữ nguyên URL dạng /duong-dan/ten-file.html (Eleventy mặc định đổi sang /ten-file/
// sẽ làm vỡ toàn bộ link cũ của site đang live)
module.exports = {
  permalink: (data) => `${data.page.filePathStem}.html`,
};
