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
          light: "#f5f5f5",
          DEFAULT: "#1a1a1a",
          dark: "#000000"
        },
        accent: {
          light: "#e5e5e5",
          DEFAULT: "#666666",
          dark: "#333333"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    }
  },
  plugins: []
};