module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%'
    },
    fontFamily:{
      'sans': 'Verdana,  Calibri, "Trebuchet MS", sans-serif',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    './src/**/*.html',
    './src/**/*.tsx'
  ],
}
