module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      '3E3C3C': '#3E3C3C',
      'E0F2FF': '#E0F2FF',
      'E2E8F0': '#E2E8F0',
      '161722': '#161722',
      '7E7B7B': '#7E7B7B',
      'E5E5E5': '#E5E5E5',
      '1E1E1E': '#1E1E1E',
      'white': '#fff',
      'EEF2F4': '#EEF2F4',
      '567286': '#567286',
      '536F84': '#536F84',
      '577387': '#577387',
      'red': '#FD5F5F',
      '3E3C3C': '#3E3C3C',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    "./index.html",
    "./src/**/*.{vue,js, jsx,tsx}",
  ],
}
