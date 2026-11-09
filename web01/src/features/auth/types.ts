export interface LoginCredentials {
  username: string
  password: string
}

export interface LoginResponse {
  token: string
}

export type LoginErrors = Partial<Record<keyof LoginCredentials, string>>

export type AuthStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

export interface AuthState {
  token: string | null
  status: AuthStatus
  error: string | null
}