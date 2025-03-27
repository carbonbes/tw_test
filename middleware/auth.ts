export default defineNuxtRouteMiddleware(() => {
  if (import.meta.server) {
    const event = useRequestEvent()

    if (!event?.context.user) {
      return navigateTo('/login', { redirectCode: 401 })
    }
  }

  if (import.meta.client) {
    const { isAuthenticated } = useUserStore()

    if (!isAuthenticated) {
      return navigateTo('/login', { redirectCode: 401 })
    }
  }
})
