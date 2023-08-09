/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "480px" },
      md: { max: "768px" },
      lg: { max: "976px" },
      xl: { max: "1440px" },
    },
    extend: {
      colors: {
        lightGreen: "#00aeb5",
        lightGray: "#f8f9fe",
      },
    },
  },
  plugins: [],
};
