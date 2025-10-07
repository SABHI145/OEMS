/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-teal': '#008080',
        'cool-mint': '#98FF98',
        'charcoal': '#36454F',
        'off-white': '#F4F4F4',
      },
      boxShadow: {
        'mint': '0 0 20px rgba(152, 255, 152, 0.5)',
      },
    },
  },
  plugins: [],
};
