const colors = require('./src/shared/styles/colors');

/**
 * custom theme 값은 module.exports로 내보내야 함.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
