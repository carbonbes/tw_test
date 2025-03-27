export type User = {
  name: string
  surname: string
  credentials: {
    username: string
    passphrase: string
  }
  active: boolean
  created: string
  _comment: string
}
