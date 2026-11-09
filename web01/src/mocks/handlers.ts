import { http, HttpResponse } from 'msw'
import type { LoginCredentials } from '../features/auth/types'

export const handlers = [
  http.post('/api/login', async ({ request }) => {
    const { username, password } = (await request.json()) as LoginCredentials

    if (username === 'alex' && password === 'demo123') {
      return HttpResponse.json({ token: 'mock-jwt-token' })
    }

    return HttpResponse.json({ message: 'Error na ja !!' }, { status: 500 })
  }),
]