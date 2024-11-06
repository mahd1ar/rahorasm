
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
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
        shabnam: ['Shabnam', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
  },
  plugins: [
    // require('@tailwindcss/forms')
    require('tailwindcss-no-scrollbar'),
    require('@tailwindcss/forms'),    
  ],
}

