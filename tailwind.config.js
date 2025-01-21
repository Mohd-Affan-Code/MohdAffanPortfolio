/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        afacad: ["Afacad", "serif"],
      },
      colors: {
        homeColer: "#f0ffff",
      },
    },
  },
  plugins: [],
};
