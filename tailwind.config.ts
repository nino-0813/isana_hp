import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Aozora Mincho"', 'var(--font-shippori)', '"游明朝"', '"Yu Mincho"', 'serif'],
        serif: ['"Aozora Mincho"', 'var(--font-shippori)', '"游明朝"', '"Yu Mincho"', 'YuMincho', '"ヒラギノ明朝 ProN"', 'serif'],
      },
      colors: {
        gold: '#D4AF37',
        champagne: '#F7E7CE',
        ivory: '#FFFFF0',
        ink: '#1A1A1A',
        paper: '#FDFDFD',
        warm: {
          50: '#faf8f5',
          100: '#f5f0ea',
          200: '#ebe3d8',
          300: '#d9ccba',
          400: '#c5b9a8',
          500: '#b0a08a',
          600: '#9a8870',
          700: '#7d6e5a',
          800: '#5f5444',
          900: '#433b30',
        },
        accent: {
          rose: '#d4928e',
          sage: '#8fad8b',
          sky: '#8db4c8',
          sand: '#c9b896',
        },
      },
    },
  },
  plugins: [],
};

export default config;
