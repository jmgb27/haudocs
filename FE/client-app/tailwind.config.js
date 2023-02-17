/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./node_modules/flowbite/**/*.js" ],
  theme: {
    colors: {
      'maroon': '#800000',
      'mustard': '#FFDB58'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
