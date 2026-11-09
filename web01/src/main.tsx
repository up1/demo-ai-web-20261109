import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.tsx'

async function startApp() {
  if (import.meta.env.DEV && import.meta.env.VITE_API_MOCKING === 'true') {
    const { worker } = await import('./mocks/browser.ts')
    await worker.start({ onUnhandledFrame: 'bypass' })
  }

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

void startApp()
