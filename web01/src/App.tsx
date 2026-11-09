import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useAppDispatch, store } from './app/store'
import { LoginPage } from './features/auth/components/LoginPage'
import { useAuth } from './features/auth/hooks/useAuth'
import { logout } from './features/auth/authSlice'
import './styles/app.css'

function WelcomePage() {
  const dispatch = useAppDispatch()

  return (
    <main className="welcome-page">
      <section className="welcome-panel" aria-labelledby="welcome-title">
        <p className="eyebrow">AegisID workspace</p>
        <h1 id="welcome-title">You’re signed in.</h1>
        <p>Your workspace access is ready.</p>
        <p className="session-status">Session token received</p>
        <button className="btn btn-outline-primary" onClick={() => dispatch(logout())}>
          Sign out
        </button>
      </section>
    </main>
  )
}

function ProtectedWelcome() {
  const { token } = useAuth()
  return token ? <WelcomePage /> : <Navigate to="/login" replace />
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/welcome" element={<ProtectedWelcome />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  )
}
