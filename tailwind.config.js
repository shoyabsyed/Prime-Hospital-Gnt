/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1280px',
        'xl': '1280px',
      }
    },
    letterSpacing: {
      '1': '0em',
      '2': '0.025em',
      '3': '0.05em',
      '4': '0.1em',
    },
    extend: {},
  },
  plugins: [],
}

