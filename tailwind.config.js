/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainPurple: '#3a0041',
        mainPink: '#c477a2',
        mainYellow: '#f2f18b'
      },
      keyframes: {
        opacity: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        }
      },
      animation: {
        'home-balloon': 'opacity 1s linear 1s 1 normal forwards',
        'home-balloon-text': 'opacity 1s ease .2s 1 normal forwards'
      }
    },
  },
  plugins: [],
}
