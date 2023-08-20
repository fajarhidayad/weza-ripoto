/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        "cloud-bg": "url('/src/assets/img/Cloud-background.png')",
      },
      colors: {
        dark: "#100E1D",
        primary: "#1E213A",
        "t-light": "#E7E7EB",
        "t-dark": "#A09FB1",
      },
    },
  },
  plugins: [],
};
