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
    },
  },
}
