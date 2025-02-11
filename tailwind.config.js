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
    colors: {
      'base': '#F1F0E8',
      'primary': '#89A8B2',
      'secondary': '#B3C8CF',
      'tertiary': '#E5E1DA',
      'whitesmoke': '#F5F5F5',
      'primary-text': '#1E201E',
      'secondary-text': '#697565',
      'star': '#FBA518'
    },
    extend: {},
    fontFamily: {
      Caveat: ["Caveat", "serif"],
      Inter: ["Inter", "serif"]
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
        md: '32px',
      }
    },
  },
  plugins: [],
}

