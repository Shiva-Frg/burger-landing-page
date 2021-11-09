module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'header-background': "url('/src/assets/header-background.png')",

        'footer-background': "url('/src/assets/footer.png')",
        'feature-img-1': "url('/src/assets/menu-left.png')",
        'feature-img-2': "url('/src/assets/menu-right-top.png')",
        'feature-img-3': "url('/src/assets/menu-right-bottom.png')",
        'contact': "url('/src/assets/contact.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
