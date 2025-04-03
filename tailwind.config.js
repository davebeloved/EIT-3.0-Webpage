/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppings: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#0F3C9E", // Example primary color
        secondary: "#F1D458", // Example secondary color
      },
    },
  },
  plugins: [],
};
