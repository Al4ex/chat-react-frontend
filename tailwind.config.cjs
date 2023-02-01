/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/**.jsx"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    // ...
  ],
};
