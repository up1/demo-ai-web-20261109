import { LoginForm } from './LoginForm'

export function LoginPage() {
  return (
    <div className="auth-page">
      <main className="auth-main">
        <div className="brand-lockup" aria-label="AegisID">
          <span className="brand-mark" aria-hidden="true">A</span>
          <span>AegisID</span>
        </div>
        <LoginForm />
      </main>
      <footer className="auth-footer">Identity workspace · Sign in to continue</footer>
    </div>
  )
}