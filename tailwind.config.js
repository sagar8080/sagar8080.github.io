/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Paper (light backgrounds)
        paper: {
          DEFAULT: '#faf7f2',
          2: '#f3efe7',
          3: '#ebe5d9',
        },
        // Ink (text)
        ink: {
          DEFAULT: '#1c1917',
          2: '#44403c',
          3: '#78716c',
          4: '#a8a29e',
        },
        // Hairlines
        line: {
          DEFAULT: '#e5e0d6',
          2: '#d4cdbe',
        },
        // Terracotta (primary accent)
        terracotta: {
          DEFAULT: '#b45a3c',
          2: '#8e4329',
          3: '#f4e6dd',
        },
        // Sage (secondary)
        sage: {
          DEFAULT: '#6b7a4e',
          2: '#4f5c39',
          3: '#e6e9d6',
        },
        // Ochre (warm time-state)
        ochre: {
          DEFAULT: '#b58a3a',
          2: '#8a6724',
          3: '#f0e3c8',
        },
        'ink-blue': '#324a6c',

        // Compatibility shims so existing class names continue to work but now
        // resolve to the paper palette. Older code uses bg-background, text-zinc-*,
        // border-hairline, bg-accent, etc; these aliases keep them rendering.
        background: '#faf7f2', // was dark slate; now paper
        foreground: '#1c1917',
        muted: '#ebe5d9',
        surface: {
          1: '#faf7f2',
          2: '#f3efe7',
          3: '#ebe5d9',
        },
        hairline: {
          DEFAULT: '#e5e0d6',
          strong: '#d4cdbe',
          accent: 'rgba(180, 90, 60, 0.30)',
        },
        accent: {
          DEFAULT: '#b45a3c',
          soft: 'rgba(180, 90, 60, 0.10)',
          glow: 'rgba(180, 90, 60, 0.16)',
          ring: 'rgba(180, 90, 60, 0.35)',
        },
        warm: {
          DEFAULT: '#b58a3a',
          soft: 'rgba(181, 138, 58, 0.12)',
          glow: 'rgba(181, 138, 58, 0.20)',
          ring: 'rgba(181, 138, 58, 0.35)',
        },
        signal: {
          DEFAULT: '#6b7a4e',
        },
        // zinc remap. Older components use text-zinc-300/400/500/600/700.
        // Repointing to ink/line tones keeps the visual hierarchy consistent
        // on a light background without rewriting every file.
        zinc: {
          50:  '#faf7f2',
          100: '#f3efe7',
          200: '#1c1917', // dark text on paper (was light)
          300: '#1c1917',
          400: '#44403c',
          500: '#78716c',
          600: '#a8a29e',
          700: '#a8a29e',
          800: '#d4cdbe',
          900: '#e5e0d6',
        },
        // Override Tailwind primitives. `text-white` and `bg-white` were
        // hardcoded in many places when the site was dark; on the paper
        // theme they render as invisible white-on-cream. Remap both `white`
        // and `black` to ink so legacy classNames stay legible. Dark mockup
        // interiors (LaunchPanel, PhotoStrip overlay, Lightbox) explicitly
        // use `text-paper` / `bg-paper` to get the light-on-dark contrast.
        white: '#1c1917',
        black: '#1c1917',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'display-lg': ['56px', { lineHeight: '1.05', letterSpacing: '-0.022em' }],
        'display-md': ['40px', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-sm': ['28px', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        eyebrow: ['11px', { lineHeight: '1', letterSpacing: '0.18em' }],
      },
      letterSpacing: {
        eyebrow: '0.08em',
      },
      maxWidth: {
        editorial: '1080px',
        prose: '720px',
      },
      boxShadow: {
        panel:
          '0 1px 0 0 rgba(28,25,23,0.04), 0 14px 40px -18px rgba(28,25,23,0.18)',
        'panel-accent':
          '0 1px 0 0 rgba(28,25,23,0.04), 0 18px 50px -22px rgba(180,90,60,0.30)',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
