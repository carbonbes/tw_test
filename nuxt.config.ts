// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon', '@pinia/nuxt'],

  css: ['~/assets/styles/index.sass'],

  fonts: {
    families: [
      {
        name: 'Roboto',
        provider: 'google',
      },
    ],
  },
})
