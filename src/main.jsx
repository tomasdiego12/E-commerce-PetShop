import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*browserRouter envuelve toda la app para activar el sistema de rutas*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
