/**
 * NotFoundPage
 * ------------------------------------------------------------------
 * Ruta catch-all (path="*" en App.jsx). Se renderiza cuando el usuario
 * entra a una URL que no existe en ninguna definición de <Route>.
 * Es intencionalmente simple: su único trabajo es explicar qué pasó
 * y darle al usuario UNA salida clara (volver al inicio).
 */
import './NotFoundPage.css' 
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <p className="not-found-emoji">🐾</p>
      <h1 className="not-found-titulo">Página no encontrada</h1>
      <p className="not-found-texto">
        Lo sentimos, pero la página que estás buscando no existe. <br />
        Puede que hayas escrito mal la URL o que la página haya sido movida.
      </p>
      <Link to="/" className="not-found-link">
        ← Volver al inicio
      </Link>
    </div>
  )
  
}

export default NotFoundPage