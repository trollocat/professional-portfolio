import { SpeedInsights } from "@vercel/speed-insights/react"
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SpeedInsights />
    <App />
  </StrictMode>,
)
