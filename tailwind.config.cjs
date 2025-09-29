/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f0f5f9",
          DEFAULT: "#0070f3",
          dark: "#004f8c"
        }
      }
    }
  },
  plugins: []
};