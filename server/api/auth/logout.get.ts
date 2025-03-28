export default defineEventHandler(async (event) => {
  deleteCookie(event, 'tw_test_credentials')
})
