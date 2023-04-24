/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "pack-train":
          "url('../src/img/91299883bbd84682e31b00cdc559198455f6fa74-1080x720.jpg')",
        "women-clothe":
          "url('../src/img/5b04a83d-76d2-4bb6-8386-27727e1da5ae.jpg')",
        "kids-clothe": "url('../src/img/kidsTwo.jpg')",
      },
    },
  },
  plugins: [],
};
