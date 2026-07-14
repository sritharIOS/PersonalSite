import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#141221',
        paper: '#faf8f4',
        accent: '#e8590c',
        moss: '#2f5d50',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
      backgroundImage: {
        grain: 'radial-gradient(circle at 1px 1px, rgba(20,18,33,0.06) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
} satisfies Config
