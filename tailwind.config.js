module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        special: ['Rancho', 'Arial', 'sans-serif', 'ui-sans-serif', 'system-ui'],
      },
      screens: {
        xs: '425px',
      },
      colors: {
        primary: '#D5AB2D',
        secondary: '#685B60',
      },
    },
  },
};
