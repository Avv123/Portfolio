/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07080a',
          900: '#0b0d10',
          850: '#101319',
          800: '#151922',
          700: '#1c212c',
          600: '#2a303d',
          400: '#5a6472',
          300: '#8b93a1',
          200: '#c2c8d2',
          100: '#e7eaee',
        },
        accent: {
          DEFAULT: '#5eead4',
          soft: '#99f6e4',
          dim: '#134e4a',
        },
        signal: {
          DEFAULT: '#f0b429',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'glow-radial':
          'radial-gradient(circle at 50% 0%, rgba(94,234,212,0.16), transparent 60%)',
      },
      animation: {
        blink: 'blink 1.1s steps(2, start) infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        blink: { to: { visibility: 'hidden' } },
        'fade-up': {
          from: { opacity: 0, transform: 'translateY(18px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
