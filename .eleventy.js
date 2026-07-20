module.exports = function (eleventyConfig) {
  // Copy nguyên trạng các asset không qua template
  eleventyConfig.addPassthroughCopy("src/shared");
  eleventyConfig.addPassthroughCopy("src/ban-do-data.js");
  eleventyConfig.addPassthroughCopy("src/so-do-data.js");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");

  // Collections để đếm số liệu thống kê trên trang chủ
  eleventyConfig.addCollection("nhanVat", (c) =>
    c.getFilteredByGlob("src/nhan-vat/*.html")
  );
  eleventyConfig.addCollection("baiHoc", (c) =>
    c.getFilteredByGlob("src/bai-hoc/*.html")
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      layouts: "_layouts",
      includes: "_includes",
      data: "_data",
    },
    // File .html nguồn KHÔNG qua Nunjucks — nội dung có thể chứa {{ }}
    // nhưng vẫn nhận front matter + layout
    htmlTemplateEngine: false,
  };
};
