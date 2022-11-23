/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
        serif: 'Roboto Slab, serif'
      },
      boxShadow: {
        'sidebar': '-10px 0px 50px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
