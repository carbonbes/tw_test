// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'reka-ui/nuxt',
  ],

  css: ['~/assets/css/index.sass'],

  fonts: {
    families: [
      {
        name: 'Roboto',
        provider: 'google',
      },
    ],
  },
})
