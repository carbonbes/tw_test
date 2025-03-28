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

export type Toast = {
  id?: string
  title?: string
  text: string
  duration?: number
  type?: 'success' | 'error'
}
