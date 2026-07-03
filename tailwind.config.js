/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--color-bg)',
          alt: 'var(--color-bg-alt)',
        },
        surface: 'var(--color-surface)',
        text: {
          DEFAULT: 'var(--color-text)',
          muted: 'var(--color-text-muted)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          ink: 'var(--color-accent-ink)',
        },
        ok: 'var(--color-ok)',
      },
      fontFamily: {
        display: [['Space Grotesk', 'system-ui', 'sans-serif']],
        sans: [['Inter', 'system-ui', 'sans-serif']],
        mono: [['JetBrains Mono', 'monospace']],
      },
      keyframes: {
        'reveal-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'reveal-up': 'reveal-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
