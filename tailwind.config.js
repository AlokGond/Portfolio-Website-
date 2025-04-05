/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'fira-code': ['Fira Code', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'neon-cyan': '#0ea5e9',
        'neon-magenta': '#e879f9',
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': {
            textShadow: '0 0 10px #0ea5e9, 0 0 20px #0ea5e9',
          },
          '50%': {
            textShadow: '0 0 20px #0ea5e9, 0 0 30px #0ea5e9',
          },
        },
      },
      boxShadow: {
        'neon-sm': '0 0 5px #0ea5e9',
        'neon-md': '0 0 10px #0ea5e9',
        'neon-lg': '0 0 20px #0ea5e9',
      },
    },
  },
  plugins: [],
}