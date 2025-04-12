import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'red-500': '#ED247F',
        'indigo-500': '#3950A3',
        'indigo-600': '#F15F43',
      },
      fontFamily: {
        sans: ['"Montserrat"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      keyframes: {
        drift: {
          'from': { transform: 'translate(0, 0)' },
          'to': { transform: 'translate(-50%, -50%)' }
        },
        rotate1: {
          'to': { transform: 'rotate(360deg)' }
        },
        rotate2: {
          'to': { transform: 'rotate(-360deg)' }
        },
        rotate3: {
          'to': { transform: 'rotate(360deg)' }
        },
        rotate4: {
          'to': { transform: 'rotate(-360deg)' }
        }
      },
      animation: {
        'drift': 'drift 120s linear infinite',
        'rotate1': 'rotate1 80s linear infinite',
        'rotate2': 'rotate2 60s linear infinite',
        'rotate3': 'rotate3 40s linear infinite',
        'rotate4': 'rotate4 20s linear infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
export default config
