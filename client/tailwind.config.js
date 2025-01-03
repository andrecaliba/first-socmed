/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'champagne': '#fff8dd',
        'desert': '#df9841',
        'sage': '#9da993',
        'carafe': '#6a463a'
      }
    },
  },
  plugins: [],
}

