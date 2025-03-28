/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },

  content: ['./src/**/*.{html,js,ts,vue}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto, sans-serif'],
      },
      keyframes: {
        toast: {
          '0%': {
            opacity: 0,
            transform: 'translateX(100%)',
          },
          '70%': {
            transform: 'translateX(-5%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        toast: 'toast .25s ease',
      },
      colors: {},
    },
  },
}
