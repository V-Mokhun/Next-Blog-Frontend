/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#292929",
        secondary: "#757575",
        dark: { 400: "#191919", 500: "#080808" },
        green: { 400: "#1a8917", 500: "#0f730c" },
      },
      screens: {
        xs: "479px",
      },
    },
    fontFamily: {
      georgia: ['"Georgia"', "sans-serif"],
      helvetica: ['"HelveticaNeue"', "sans-serif"],
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
  },
  plugins: [],
};
