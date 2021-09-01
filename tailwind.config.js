module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        link: 'hsl(228, 45%, 44%)',
        customblue: {
          pale: 'hsl(225, 100%, 94%)',
          bright: 'hsl(245, 75%, 52%)',
          verypale: 'hsl(225, 100%, 98%)',
          desaturated: 'hsl(224, 23%, 55%)',
          dark: 'hsl(223, 47%, 23%)'
        }
      },
      brightness: {
        250: '2.5',
        300: '3',
      },
      spacing: {
        108: '27rem',
      }
    },
  },
  variants: {
    extend: {
      brightness: ['hover'],
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
  ],
}
