import { User } from '~/types'
import { users } from '~/utils/users'

declare module 'h3' {
  interface H3EventContext {
    user: User | null
  }
}

export default defineEventHandler(async (event) => {
  event.context.user = null

  const cookie = getCookie(event, 'tw_test_credentials')

  if (!cookie) return

  const parsed = JSON.parse(cookie) as Pick<
    User['credentials'],
    'username' | 'passphrase'
  >

  const i = users.findIndex((user) => {
    const {
      credentials: { username, passphrase },
    } = user

    return username === parsed.username && passphrase === parsed.passphrase
  })

  if (i === -1) return

  event.context.user = users[i]
})
