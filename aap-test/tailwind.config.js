const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // Added for scanning Flowbite components
  ],
  theme: {
    extend: {
      colors: {
        'blue':'#13428B',
        'primary': '#1D2B3E', // Dark blue color for text
        'link': '#2C62A8',    // Color for links
        'black': '#000000',   // Ensuring black is defined for easy reference
      },
      fontFamily: {
        sans: ['Open Sans', 'Helvetica Neue', 'sans-serif']
      },
      fontSize: {
        'base': '16px', // Base font size for paragraphs
        'lg': '28px',  // Large font size for h2
        'xl': '40px',  // Extra large font size for h1
      },
      fontWeight: {
        light: '400'
      },
      lineHeight: {
        normal: 'normal',
        tight: '24px',  // Specifically for paragraph line height
      },
      spacing: {
        '8': '32px', // Base spacing for paragraph margin bottom
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { 
          color: theme('colors.black'),
          fontFamily: theme('fontFamily.sans'),
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.light'),
          lineHeight: theme('lineHeight.normal'),
        },
        'h2': { 
          color: theme('colors.primary'),
          fontFamily: theme('fontFamily.sans'),
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.light'),
          lineHeight: theme('lineHeight.normal'),
        },
        'p': { 
          color: theme('colors.primary'),
          fontFamily: theme('fontFamily.sans'),
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.light'),
          lineHeight: theme('lineHeight.tight'),
          marginBottom: theme('spacing.8'),
        },
        'a': { 
          listStyle: 'none',
          padding: '0',
          margin: '0',
          color: theme('colors.link'),
          fontFamily: theme('fontFamily.sans'),
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.light'),
          lineHeight: '24px',
        }
      });
    })
  ],
}
