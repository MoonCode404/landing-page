/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px'
    },
    extend: {
      colors: {
        'blue-primary': '#0049FF',
        'blue-light': '#546575',
        'blue-dark': '#001528',
        'gray-light': '#F6F9FF',
        'gray-medium': '#E4E9EE'
      },
      boxShadow: {
        brand: '0px 1px 4px rgba(12, 12, 13, 0.1), 0px 1px 4px rgba(12, 12, 13, 0.05)'
      }
    },
  },
  plugins: [],
}

