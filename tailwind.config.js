/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#292929", // rgb(41,41,41)
        secondary: "#757575", // rgb(117, 117, 117)
        dark: {
          400: "#191919", // rgb(25,25,25)
          500: "#080808", // rgb(8,8,8)
        },
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
  plugins: [require("@tailwindcss/line-clamp")],
};
