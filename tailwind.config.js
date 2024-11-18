/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['"./public/*.{html,js}"'],
  theme: {
    extend: {
      colors: {
        grisPale: "#eaecf1",
      },
      maxWidth: {
        'encadre': '380px',
      }
    },
  },
  plugins: [],
}

