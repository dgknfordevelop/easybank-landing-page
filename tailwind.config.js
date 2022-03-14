
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],

  theme: {
    extend: {
      colors: {
        'dark-blue': 'var(--dark-blue)',
        'lime-green': 'var(--lime-green)',
        'bright-cyan': 'var(--bright-cyan)',
        'grayish-blue': 'var(--grayish-blue)',
        'light-grayish-blue': 'var(--light-grayish-blue)',
        'very-light-gray': 'var(--very-light-gray)'
      }, 
      zIndex: {
        '1': '1',
      },
      spacing: {
        '90': '90%',
      }
    }
  },

  plugins: [],
}
