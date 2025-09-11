/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0a0a0a',
        'light': '#ffffff',
        'light-alt': '#e5e5e5',
        'card-bg-start': '#1a1a1a',
        'card-bg-end': '#2a2a2a',
        'border-color': '#333333',
        'tag-bg': '#3b82f6',
        'tag-text': '#ffffff',
        'tag-name': '#60a5fa',
        'terminal-bg': '#0f0f0f',
        'accent-gradient-start': '#3b82f6',
        'accent-gradient-end': '#1d4ed8',
        'hover-shadow-color': 'rgba(59, 130, 246, 0.3)',
      },
      fontFamily: {
        'mono': ['Fira Code', 'monospace'],
        'sans': ['Google Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}
