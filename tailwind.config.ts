import { type Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#236A8D',
      },
    },
  },
  plugins: [],
} satisfies Config;
