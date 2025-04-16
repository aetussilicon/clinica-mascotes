/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#04d16a',
        primaryHover: '#03b85f'
      }
    },
  },
  plugins: [],
}

