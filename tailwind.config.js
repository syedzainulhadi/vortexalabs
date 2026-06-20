/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#08080C',
        surface: '#131318',
        'surface-2': '#1A1A21',
        ink: '#F5F5F7',
        'ink-muted': '#A3A3AD',
        'ink-faint': '#75757F',
        accent: '#6D5EF0',
        'accent-soft': 'rgba(109,94,240,0.14)',
        line: 'rgba(255,255,255,0.14)',
        'line-strong': 'rgba(255,255,255,0.26)',

        'bg-secondary': '#0F0F14',
        card: '#131318',
        muted: '#A3A3AD',
        'accent-primary': '#6D5EF0',
        'accent-secondary': '#2563EB',
        'accent-highlight': '#EC4899',
        'accent-warm': '#F59E0B',
      },
      fontFamily: {
        heading: ['Cabinet Grotesk', 'sans-serif'],
        body: ['Switzer', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        container: '1320px',
      },
      boxShadow: {
        premium: '0 8px 30px rgba(0,0,0,0.35)',
        glow: '0 0 40px rgba(109,94,240,0.18)',
        card: '0 4px 24px rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(circle at center, rgba(109,94,240,0.18), transparent 70%)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
    },
  },
  plugins: [],
}