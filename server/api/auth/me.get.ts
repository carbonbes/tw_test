export default defineEventHandler((event) => {
  if (!event.context.user) {
    throw createError({ statusCode: 401 })
  }

  return event.context.user
})
