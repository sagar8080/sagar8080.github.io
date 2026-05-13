/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Surfaces — a single very dark grey background. No warm gradient.
        background: '#111114',
        surface: {
          1: 'rgba(255,255,255,0.02)',
          2: 'rgba(255,255,255,0.04)',
          3: 'rgba(255,255,255,0.06)',
        },
        // Borders are exposed as utility colors for consistency.
        hairline: {
          DEFAULT: 'rgba(255,255,255,0.045)',
          strong: 'rgba(255,255,255,0.075)',
          accent: 'rgba(129,140,248,0.18)',
        },
        // Refined editorial accent — indigo-400 family. Single accent, used sparingly.
        accent: {
          DEFAULT: '#818cf8',
          soft: 'rgba(129,140,248,0.10)',
          glow: 'rgba(129,140,248,0.20)',
          ring: 'rgba(129,140,248,0.35)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      fontSize: {
        // Editorial scale. Tighter line-heights at large sizes, generous at small.
        'display-xl': ['72px', { lineHeight: '1.02', letterSpacing: '0' }],
        'display-lg': ['56px', { lineHeight: '1.05', letterSpacing: '0' }],
        'display-md': ['40px', { lineHeight: '1.08', letterSpacing: '0' }],
        'display-sm': ['28px', { lineHeight: '1.12', letterSpacing: '0' }],
        eyebrow: ['11px', { lineHeight: '1', letterSpacing: '0.18em' }],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      maxWidth: {
        editorial: '68rem', // 1088px — site container
        prose: '44rem',
      },
      boxShadow: {
        // Subtle elevation for product panels — never a glow on cards.
        panel:
          '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 30px 80px -30px rgba(0,0,0,0.6), 0 8px 24px -12px rgba(0,0,0,0.5)',
        'panel-accent':
          '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 30px 100px -25px rgba(129,140,248,0.18), 0 8px 24px -12px rgba(0,0,0,0.5)',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.45' },
        },
      },
      animation: {
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
