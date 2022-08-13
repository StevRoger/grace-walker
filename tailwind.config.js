const defaultTheme = require('tailwindcss/defaultTheme')
require('dotenv').config();
const enablePurge = process.env.ENABLE_PURGE || false;

module.exports = {
  important: true,
  plugins: [],
  purge: {
    enabled: enablePurge,
    content: [
      './src/**/*.html',
      './src/**/*.scss'
    ]
  },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },

}
