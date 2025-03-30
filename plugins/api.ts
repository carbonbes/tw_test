import type { User } from '~/utils/users'

export default defineNuxtPlugin(() => {
  const fetchInstance = $fetch.create({
    baseURL: '/api',
    headers: useRequestHeaders(['cookie']),
  })

  const api = {
    async me() {
      return await fetchInstance<User>('/api/auth/me')
    },

    async login(body: { login: string; password: string }) {
      return await fetchInstance<User | undefined>('/api/auth/login', {
        method: 'POST',
        body,
      })
    },

    async logout() {
      return await fetchInstance('/api/auth/logout')
    },
  }

  return {
    provide: {
      api,
    },
  }
})
