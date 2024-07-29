/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { 
        'belle': ['Bellefair'],
        'barlow': ['Barlow+Condensed'],  
      },
      colors: {
        std: {
          c1: "#0B0D17",
          c2: "#D0D6F9",
          c3: "#FFFFFF",
        },
      },
      minHeight: {
        30: "30vh",
      },
      dropShadow: {
        standard: "2px 5px 2px grey",
      },
      animation: {
        reviewFade: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
