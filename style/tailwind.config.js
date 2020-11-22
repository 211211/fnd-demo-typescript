const colors = require('tailwindcss/colors')
module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      green: {
        '50': '#f3faf7',
        '100': '#def7ec',
        '200': '#bcf0da',
        '300': '#84e1bc',
        '400': '#31c48d',
        '500': '#0e9f6e',
        '600': '#057a55',
        '700': '#046c4e',
        '800': '#03543f',
        '900': '#014737',
      },
    },
    textColor: {
      'white': '#ffffff',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
