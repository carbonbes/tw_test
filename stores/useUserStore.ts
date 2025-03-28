import { defineStore } from 'pinia'
import type { User } from '~/types'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>()
  const isAuthenticated = ref(false)

  const { $api } = useNuxtApp()

  async function getMe() {
    try {
      const data = await $api.me()

      user.value = data
      isAuthenticated.value = true
    } catch (error) {}
  }

  function setUser(data: User) {
    user.value = data
    isAuthenticated.value = true
  }

  async function logout() {
    try {
      await $api.logout()
      user.value = undefined
      isAuthenticated.value = false
    } catch (error) {}
  }

  return { user, isAuthenticated, getMe, setUser, logout }
})
