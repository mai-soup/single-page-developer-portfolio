/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Space Grotesk", "ui-sans", "sans-serif"],
    },
    extend: {
      colors: {
        "light-grey": "#D9D9D9",
        "dark-grey": "#242424",
        "darkest-grey": "#151515",
        mint: "#4EE1A0",
      },
      fontSize: {
        "7xl": "5.5rem",
      },
      lineHeight: {
        tighter: "1.16",
      },
      content: {
        circle: "url('/pattern-circle.svg')",
        rings: "url('/pattern-rings.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
