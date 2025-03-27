import { defineStore } from 'pinia'
import type { User } from '~/types'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>()
  const isAuthenticated = ref(false)

  const { $api } = useNuxtApp()

  async function getMe() {
    const data = await $api.me()

    user.value = data
    isAuthenticated.value = true
  }

  return { user, isAuthenticated, getMe }
})
