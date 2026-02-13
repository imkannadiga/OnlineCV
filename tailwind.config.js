/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--color-bg)',
          elevated: 'var(--color-bg-elevated)',
          card: 'var(--color-bg-card)',
        },
      },
      fontFamily: {
        sans: [['DM Sans', 'system-ui', 'sans-serif']],
        mono: [['JetBrains Mono', 'monospace']],
      },
    },
  },
  plugins: [],
}
