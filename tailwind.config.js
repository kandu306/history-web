/** @type {import('tailwindcss').Config} */
module.exports = {
  // .json bắt buộc: các class chip trong _data/eras.json được Nunjucks render
  // động, Tailwind chỉ thấy chúng nếu quét luôn file JSON nguồn.
  content: ["./src/**/*.{html,njk,js,json}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Be Vietnam Pro", "system-ui", "sans-serif"],
        serif: ["Noto Serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
