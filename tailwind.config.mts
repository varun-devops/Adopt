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
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
export default config
