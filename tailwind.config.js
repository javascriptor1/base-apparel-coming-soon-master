/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors : {
          DesaturatedRed: 'hsl(0, 36%, 70%)',
          SoftRed: 'hsl(0, 93%, 68%)',
          DarkGrayishRed: 'hsl(0, 6%, 24%)',

      },
      fontFamily: {
        sans : ['Josefin Sans'],
      },
    },
  },
  plugins: [],
}

