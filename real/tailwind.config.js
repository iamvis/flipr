/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { animation: {
      'slide-left': 'slideLeft 0.8s ease-out forwards',
      'slide-right': 'slideRight 0.8s ease-out forwards',
    },
    keyframes: {
      slideLeft: {
        '0%': { transform: 'translateX(-100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
      slideRight: {
        '0%': { transform: 'translateX(100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      }
    },
  }
  },

  plugins: [],
}

