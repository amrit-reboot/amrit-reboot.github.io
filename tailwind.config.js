/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dash: {
          bg: '#EAE5D9',
          card: '#F5F1E6',
          text: '#2d2a26',
          muted: '#8B867D',
          orange: '#A95232',
          green: '#3D5C4B',
          border: '#D8D3C7',
          darkbg: '#111315',
          darkcard: '#1A1D20',
          darktext: '#F3F0EA',
          darkmuted: '#8B95A6',
          darkborder: '#2A2E33',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        handwriting: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'neumorphic': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'neumorphic-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}