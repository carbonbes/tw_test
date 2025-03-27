import type { User } from '~/types'

export default defineNuxtPlugin((nuxtApp) => {
  const fetchInstance = $fetch.create({
    baseURL: '/api',
    headers: useRequestHeaders(['cookie']),
  })

  const api = {
    async me() {
      return await fetchInstance<User>('/v1/auth/me')
    },

    async login(body: { login: string; password: string }) {
      return await fetchInstance<User | undefined>('/v1/auth/login', {
        method: 'POST',
        body,
      })
    },
  }

  return {
    provide: {
      api,
    },
  }
})
