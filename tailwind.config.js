
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#1ebfbf',
        Secondary: "#ff4c64",
        dark: '#16191c',
        background: '#ededf1d4'
      }
    },
     fontFamily: {
        yekan: ['yekan', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
  },
  plugins: [
    // require('@tailwindcss/forms')
    require('tailwindcss-no-scrollbar'),
    require('@tailwindcss/forms'),    
  ],
}

