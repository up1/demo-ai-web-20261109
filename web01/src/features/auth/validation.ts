import type { LoginCredentials, LoginErrors } from './types'

export function validateLogin({ username, password }: LoginCredentials): LoginErrors {
  const errors: LoginErrors = {}

  if (!username || username.length > 10 || !/^[a-zA-Z0-9]+$/.test(username)) {
    errors.username = 'Username invalid'
  }

  if (!password || password.length > 20) {
    errors.password = 'Password invalid'
  }

  return errors
}