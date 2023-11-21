/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "btn-color": "white"
      }
    },
  },
  plugins: [],
}