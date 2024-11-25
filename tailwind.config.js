/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['"./public/*.{html,js}"'],
  theme: {
    extend: {
      colors: {
        grisPale: "#eaecf1",
        mauve: '#5457b6',
        mauvePale: '#c3c4ef',
      },
      maxWidth: {
        'encadre': '380px',
      }
    },
  },
  plugins: [],
}

