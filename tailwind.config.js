module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { craft: ['Josefin Sans', 'Sans-serif'] },
      spacing: { 112: '28rem', 128: '32rem' },
    },
  },
  variants: {
    extend: {
      animation: ['active'],
    },
  },
  plugins: [],
}
