import { User } from '~/types'
import { users } from '~/utils/users'

declare module 'h3' {
  interface H3EventContext {
    user: User | null
  }
}

export default defineEventHandler(async (event) => {
  event.context.user = null

  const cookie = getCookie(event, 'tw_test_cookie')

  if (!cookie) return

  const parsed = JSON.parse(cookie) as User | undefined

  const i = users.findIndex((user) => {
    const {
      credentials: { username, passphrase },
    } = user

    return (
      username === parsed?.credentials.username &&
      passphrase === parsed?.credentials.passphrase
    )
  })

  if (i === -1) return

  event.context.user = users[i]
})
