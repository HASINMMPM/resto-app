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
        'red' :'#c60000',
      },
      fontFamily:{
        'heading':[ "Montaga", 'serif'],
        'secondary':["PT Serif Caption", 'serif']

      }
    },
  },
  plugins: [require('daisyui'),],
}