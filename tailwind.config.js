module.exports = {
  content: [
    "./src/**/*.{html,js,svelte}",
  ],
  purge: ['./index.html', './src/**/*.{js,svelte}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
