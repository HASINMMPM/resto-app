/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'yellow' :'#fdcf03',
        'red' :'#d31e3d',
      },
      fontFamily:{
        'heading':[ "Montaga", 'serif'],
        'secondary':["PT Serif Caption", 'serif'],
        'subtitle' :["Quicksand", 'sans-serif']

      }
    },
  },
  plugins: [require('daisyui'),],
}