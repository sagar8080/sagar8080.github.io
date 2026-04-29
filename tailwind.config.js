/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: '#050505',
        glow: '#1A0B2E',
        vint: {
          cyan: '#22d3ee',
          pink: '#ec4899',
          cream: '#F1E6C9',
          mint: '#ABDADC',
        },
        phosphor: '#ABDADC',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        pixel: ['var(--font-pixel)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'vint-cyan': '0 0 15px rgba(34, 211, 238, 0.5)',
        'vint-cyan-lg': '0 0 24px rgba(34, 211, 238, 0.45)',
        'vint-pink': '0 0 15px rgba(236, 72, 153, 0.5)',
        'vint-pink-lg': '0 0 24px rgba(236, 72, 153, 0.45)',
      },
      animation: {
        glitch: 'glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'marquee': 'marquee 40s linear infinite',
        'name-shift': 'name-shift 7s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 1px)' },
          '40%': { transform: 'translate(2px, -1px)' },
          '60%': { transform: 'translate(-1px, -1px)' },
          '80%': { transform: 'translate(1px, 2px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'name-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
