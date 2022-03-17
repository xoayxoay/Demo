/* eslint-disable global-require */
import { defineConfig } from 'windicss/helpers';
import plugin from 'windicss/plugin';

export default defineConfig({
  extract: {
    include: ['**/*.{js,jsx,css,html}'],
    exclude: ['node_modules', '.git', '.next/**/*'],
  },
  attributify: true,
  shortcuts: {
    // btn: 'rounded-lg border border-gray-300 text-gray-100 bg-blue-500 px-4 py-2 m-2 inline-block hover:shadow',
    'section-box': 'rounded-xl border border-blue-gray-200 shadow-lg bg-white bg-opacity-40',
  },
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins','-apple-system','BlinkMacSystemFont','sans-serif'],
        sans: ['Poppins','-apple-system','BlinkMacSystemFont','sans-serif'],
        captain: ['American Captain', 'Open Sans', 'ui-sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1273ea',
          disabled: '#737ee1',
          hovered: '#155dbb',
        },
        success: {
          DEFAULT: '#0f766e',
          disabled: '#128d83',
          hovered: '#0d6861',
        },
        secondary: '#0281EB',
        dark: {
          900: '#0f1621',
          800: '#19222F',
          700: '#1f2d44',
          600: '#273956',
        },
        'true-gray': {
          1000: '#101010',
        },
        social: {
          facebook: '#3b5998',
          twitter: '#00acee',
          telegram: '#0088CC',
          linkedin: '#0e76a8',
        },
        footer: {
          DEFAULT: '#171628',
          darken: '#0e0d18',
        },
        link: '#4C82CE',
      },
      flex: {
        2: '2',
        3: '3',
        '1/3': '33.33333%',
        none: 'none',
      },
      height: {
        '2px': '2px',
        '1/4-screen': '25vh',
        '1/2-screen': '50vh',
        '3/4-screen': '75vh',
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
        left: 'left',
      },
      textShadow: {
        light: '1px 1px 3px rgba(255, 255, 255, .5)',
      },
      backgroundSize: {
        120: '70rem',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          lg: '0rem',
        },
      }
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const landingPageUtils = {
        '.customshadow-landing-page-slider': {
          'box-shadow': 'inset 3px 0.5px 5px 2px rgba(255,255,255, 0.7)',
        },
        '.bg-landing-feature-slider-item': {
          background:
            'linear-gradient(329deg, #b343b5 0%, rgba(0,0,0,0) 100%), #f9635c',
          'box-shadow': 'inset 1px 1px 4px 2px hsl(0deg 0% 100% / 70%)',
        },
      };
      const fixedSocialButtonUtils = {
        '.fixed-shadow-facebook': {
          'box-shadow': '0 0px 2px 3px rgba(59, 89, 152, 0.5)',
        },
        '.fixed-shadow-twitter': {
          'box-shadow': '0 0px 2px 3px rgba(0, 172, 238, 0.5)',
        },
        '.fixed-shadow-telegram': {
          'box-shadow': '0 0px 2px 3px rgba(0, 136, 204, 0.5)',
        },
      };

      const shadow = {
        '.shadow-primary': {
          'box-shadow': '0 0.15rem 0.4rem rgb(85 102 255 / 30%)',
        },
      };

      const utils = {
        '.content-empty': {
          content: '""',
        },
        '.text-2-col': {
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          display: '-webkit-box',
          'line-clamp': '2',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
        },
      };

      addUtilities({
        ...utils,
        ...landingPageUtils,
        ...fixedSocialButtonUtils,
        ...shadow,
      });
    }),
    require('windicss/plugin/aspect-ratio'),
  ],
});
