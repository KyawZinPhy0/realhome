/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'xl': '0 10px 16px 0 rgba(0,84,166,.2)',
       'md': ' 3px 0px 12px 0px rgba(15, 69.99999999999999, 124, 0.1)' ,
       'sm':'0px 5px 8px 0px rgba(0, 84, 165.99999999999997, 0.2)'
      }
    },
  },
  plugins: [],
}

