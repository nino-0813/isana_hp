import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-noto-serif)', 'var(--font-cormorant)', 'serif'],
      },
      colors: {
        gold: '#D4AF37',
        champagne: '#F7E7CE',
        ivory: '#FFFFF0',
        ink: '#1A1A1A',
        paper: '#FDFDFD',
      },
    },
  },
  plugins: [],
};

export default config;
