
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vueform.config.ts', // or where `vueform.config.js` is located. Change `.js` to `.ts` if required.
    './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.js'
  ],
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
    require('@vueform/vueform/tailwind'),
    require('@tailwindcss/forms'),    
  ],
}

