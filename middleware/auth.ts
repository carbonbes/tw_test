export default defineNuxtRouteMiddleware(() => {
  if (import.meta.client) {
    const { isAuthenticated } = useUserStore()

    if (!isAuthenticated) {
      return navigateTo('/login', { redirectCode: 401 })
    }
  }
})
