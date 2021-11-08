module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'header-background': "url('/src/assets/header-background.png')",

        'footer-background': "url('/src/assets/footer.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
