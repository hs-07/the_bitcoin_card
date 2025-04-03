/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        onest: ["var(--font-onest)"],
        oxygen: ["var(--font-oxygen)"],
        sofia: ["var(--font-sofia)"],
      },
      colors: {
        primary: "#F5860E",
        light_primary: "#FC935B",
        secondary: "#03213D",
        bg_color: "#E8EBEF",
      },
    },
  },
  plugins: [],
};
