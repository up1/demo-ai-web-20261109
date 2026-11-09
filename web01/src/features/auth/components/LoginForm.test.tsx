import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { AppRoutes } from '../../../App'
import { createAppStore } from '../../../app/store'
import { validateLogin } from '../validation'

function renderLogin() {
  const store = createAppStore()
  return {
    store,
    user: userEvent.setup(),
    ...render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/login']}>
          <AppRoutes />
        </MemoryRouter>
      </Provider>,
    ),
  }
}

describe('login flow', () => {
  it('rejects empty and overlength credentials with the specified messages', () => {
    expect(validateLogin({ username: '', password: '' })).toEqual({
      username: 'Username invalid',
      password: 'Password invalid',
    })
    expect(validateLogin({ username: '12345678901', password: '123456789012345678901' })).toEqual({
      username: 'Username invalid',
      password: 'Password invalid',
    })
  })

  it('shows the specified validation message for invalid username input', async () => {
    const { user } = renderLogin()

    await user.type(screen.getByLabelText(/Username/), 'alex.vance')
    await user.type(screen.getByLabelText('Password'), 'secret')
    await user.click(screen.getByRole('button', { name: /sign in to workspace/i }))

    expect(await screen.findByText('Username invalid')).toBeInTheDocument()
  })

  it('shows the mock API failure message', async () => {
    const { user } = renderLogin()

    await user.type(screen.getByLabelText(/Username/), 'alex')
    await user.type(screen.getByLabelText('Password'), 'wrongpass')
    await user.click(screen.getByRole('button', { name: /sign in to workspace/i }))

    expect(await screen.findByRole('alert')).toHaveTextContent('Error na ja !!')
  })

  it('stores the mock token and navigates to welcome on success', async () => {
    const { store, user } = renderLogin()

    await user.type(screen.getByLabelText(/Username/), 'alex')
    await user.type(screen.getByLabelText('Password'), 'demo123')
    await user.click(screen.getByRole('button', { name: /sign in to workspace/i }))

    expect(await screen.findByRole('heading', { name: 'You’re signed in.' })).toBeInTheDocument()
    await waitFor(() => expect(store.getState().auth.token).toBe('mock-jwt-token'))
  })
})