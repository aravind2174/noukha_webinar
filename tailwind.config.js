/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // changed from -100% to -50% for smooth loop
        },
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
    },
  },
  plugins: [],
};