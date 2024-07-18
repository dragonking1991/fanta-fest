const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    fontSize: {
      xs: ['10px', '12px'],
      sx: ['12px', '14.59px'],
      sn: ['13px', '15.6px'],
      sm: ['14px', '17.02px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      xlm: ['25px', '32px'],
      '2xl': ['28px', '36px'],
      'xlx': ['30px', '36px'],
      'xxl': ['32px', '36px'],
      'mdx': ['35px', '42px'],
      'md': ['36px', '36px'],
      'avg': ['40px', '42.3px'],
      'extra': ['45px', '42.3px'],
      'ex': ['46px', '43.24px'],
      'big': ['50px', '47px'],
      'vast': ['55px', '51.7px'],
      'large': ['60px', '56.4px'],
      'huge': ['70px', '65.8px'],
      'massive': ['80px', '81.6px'],
    },
    extend: {
      fontFamily: {
        'fs': ['FantaSan', 'Helvetica', 'Arial', 'sans-serif'],
        'fp': ['FantaPop', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'yellow': '#FFD100',
        'yellow1': '#FFEFA6',
        'yellow2': '#FFDA5A',
        'orange': '#FF9900',
        'blue':'#193ABE',
        'red': '#BF1004',
        'gray': '#D4D4D4',
        'gray1': '#505050',
      },
      textShadow: {
        sm: '0 1px 2px #000000',
        DEFAULT: '0 2px 4px #000000',
        lg: '0 8px 16px #000000',
      },
      "shadow": {
        default: "0px 8px 16px 0px #000000;",
        long: "0px 14px 24px 0px #000000",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
