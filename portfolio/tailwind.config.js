/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'peacock-green': ' rgb(17, 205, 170)', // Adjust the hex code if needed
      }
    },
    fontFamily:{
      'hero-font':'Oleo'
    }
  },
  plugins: [],
}

