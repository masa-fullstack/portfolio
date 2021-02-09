module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      screens: {
        xs: { min: '576px' },
        // => @media (min-width: 576px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
