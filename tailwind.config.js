/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["build/pages/*.html","build/js/*.js"],
  theme: {
    fontFamily: {
      "sans": ['Inter', 'sans-serif'],
    },
    outline: {
      "blue": '2px solid rgba(0, 112, 244, 0.5)',
    },
    
    extend: {},
  },
  plugins: [],
}
