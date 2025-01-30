/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: '340px',
      md: '540px',
      lg: '768px',
      xl: '1180px',
    },
    extend: {},
    fontFamily: {
      Caveat: ["Caveat", "serif"],
      Inter: ["Inter", "serif"]
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

