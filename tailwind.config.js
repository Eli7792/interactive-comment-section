/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['"./public/*.{html,js}"'],
  theme: {
    extend: {
      colors: {
        grisPale: "#eaecf1",
        mauve: '#5457b6',
        mauvePale: '#c3c4ef',
        grisFonce: '#67727e',
        rouge: '#ff666e',
      },
      maxWidth: {
        'encadre': '380px',
      },
      width: {
        'popup': '355px',
        'table': '1000px',
        'textareaTable': '800px',
      }

    },
  },
  plugins: [],
}

