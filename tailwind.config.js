/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        main: "#1E213A",
        secondary: "#1E213A",
        greyw: "#E7E7EB",
      },
    },
  },
  plugins: [],
};
