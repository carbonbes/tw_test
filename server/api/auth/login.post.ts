import { users } from '~/utils/users'

export default defineEventHandler(async (event) => {
  const { login, password }: { login: string; password: string } =
    await readBody(event)

  if (!(login || password)) {
    throw createError('Заполните все необходимые поля')
  }

  const i = users.findIndex((user) => {
    const {
      password: _password,
      credentials: { username },
    } = user

    return username === login && _password === password
  })

  if (i === -1) {
    throw createError('Введены неверные данные авторизации. Попробуйте ещё раз')
  }

  setCookie(
    event,
    'tw_test_credentials',
    JSON.stringify(users[i].credentials),
    {
      maxAge: 60 * 60 * 24 * 365,
    }
  )

  return users[i]
})
