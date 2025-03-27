import { users } from '~/utils/users'

export default defineEventHandler(async (event) => {
  const { login, password }: { login: string; password: string } =
    await readBody(event)

  if (!(login || password)) {
    throw createError('Заполните все необходимые поля')
  }

  const i = users.findIndex((user) => {
    const {
      credentials: { username, passphrase },
    } = user

    return username === login && passphrase === password
  })

  if (i === -1) {
    throw createError('Введены неверные данные авторизации. Попробуйте ещё раз')
  }

  return users[i]
})
