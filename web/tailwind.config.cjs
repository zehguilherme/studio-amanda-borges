/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ['8px', '16px'],
      base: ['16px', '24px'],
      lg: ['18px', '22px'],
      xl: ['20px', '24px'],
      '2xlr': ['24px', '32px'],
      '2xl': ['24px', '32px'],
      '3xl': ['32px', '40px'],
      '4xl': ['48px', '56px'],
    },
    extend: {
      colors: {
        black: '#000000',
        white: {
          white1: '#ffffff',
          white2: '#F4F4F4',
        },
        green: '#77806F',
        pink: '#B6939A'
      }
    },
  },
  plugins: [],
}
