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
        },
        accent: {
          light: "#e0f2fe",
          DEFAULT: "#0ea5e9",
          dark: "#0284c7"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    }
  },
  plugins: []
};