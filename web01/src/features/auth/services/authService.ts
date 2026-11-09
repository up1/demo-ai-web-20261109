import axios from 'axios'
import type { LoginCredentials, LoginResponse } from '../types'

export function requestLogin(credentials: LoginCredentials) {
  return axios.post<LoginResponse>('/api/login', credentials)
}