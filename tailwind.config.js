/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: 0},
          '100%': { transform: 'translateX(0)', opacity: 1, animationFillMode: 'forwards' }
        }
      },
      animation: {
        // sliding to the right
        'slide-right': 'slideRight 1s ease-in-out forwards',
        'slide-right-delay-05': 'slideRight 1s ease-in-out 0.5s forwards',
        'slide-right-delay-1s': 'slideRight 1s ease-in-out 1s forwards',
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

