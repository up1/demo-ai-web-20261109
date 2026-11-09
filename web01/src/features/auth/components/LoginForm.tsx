import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Eye, EyeOff, LockKeyhole, UserRound } from 'lucide-react'
import { useAppDispatch } from '../../../app/store'
import { clearAuthError, loginUser } from '../authSlice'
import { useAuth } from '../hooks/useAuth'
import type { LoginErrors } from '../types'
import { validateLogin } from '../validation'

export function LoginForm() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { status, error } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [validationErrors, setValidationErrors] = useState<LoginErrors>({})
  const isLoading = status === 'loading'

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const errors = validateLogin({ username, password })
    setValidationErrors(errors)
    dispatch(clearAuthError())

    if (Object.keys(errors).length > 0) return

    try {
      await dispatch(loginUser({ username, password })).unwrap()
      navigate('/welcome', { replace: true })
    } catch {
      return
    }
  }

  return (
    <section className="auth-card" aria-labelledby="login-title">
      <header className="auth-heading">
        <p className="eyebrow">Workspace access</p>
        <h1 id="login-title">Sign in to your account</h1>
        <p>Enter your credentials to access your workspace</p>
      </header>

      <form className="auth-form" noValidate onSubmit={handleSubmit}>
        <div>
          <label className="field-label" htmlFor="username">
            <span>Username</span>
            <span className="field-hint">Alphanumeric · 10 characters max</span>
          </label>
          <div className="input-wrap">
            <UserRound className="input-icon" size={18} aria-hidden="true" />
            <input
              autoComplete="username"
              className={`form-control auth-input${validationErrors.username ? ' is-invalid' : ''}`}
              data-testid="ex-id-username"
              id="username"
              maxLength={10}
              name="username"
              onChange={(event) => {
                setUsername(event.target.value)
                setValidationErrors((current) => ({ ...current, username: undefined }))
              }}
              placeholder="Enter your username"
              aria-describedby={validationErrors.username ? 'username-error' : undefined}
              value={username}
            />
          </div>
          {validationErrors.username && (
            <p className="field-error" id="username-error" role="alert">
              {validationErrors.username}
            </p>
          )}
        </div>

        <div>
          <label className="field-label" htmlFor="password">Password</label>
          <div className="input-wrap">
            <LockKeyhole className="input-icon" size={18} aria-hidden="true" />
            <input
              autoComplete="current-password"
              className={`form-control auth-input${validationErrors.password ? ' is-invalid' : ''}`}
              data-testid="ex-id-password"
              id="password"
              maxLength={20}
              name="password"
              onChange={(event) => {
                setPassword(event.target.value)
                setValidationErrors((current) => ({ ...current, password: undefined }))
              }}
              placeholder="Enter your password"
              aria-describedby={validationErrors.password ? 'password-error' : undefined}
              type={showPassword ? 'text' : 'password'}
              value={password}
            />
            <button
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="password-toggle"
              onClick={() => setShowPassword((visible) => !visible)}
              type="button"
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
          {validationErrors.password && (
            <p className="field-error" id="password-error" role="alert">
              {validationErrors.password}
            </p>
          )}
        </div>

        {error && <div className="alert auth-alert" role="alert">{error}</div>}

        <button className="btn submit-button" data-testid="ex-id-button" disabled={isLoading} type="submit">
          <span>{isLoading ? 'Signing in…' : 'Sign in to workspace'}</span>
          {!isLoading && <ArrowRight size={17} aria-hidden="true" />}
          {isLoading && <span className="spinner-border spinner-border-sm" aria-hidden="true" />}
        </button>
      </form>

      <div className="demo-note">
        <CheckCircle2 size={14} aria-hidden="true" />
        <span>Demo access: alex / demo123</span>
      </div>
    </section>
  )
}