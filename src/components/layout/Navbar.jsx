/**
 * Navbar
 * ------------------------------------------------------------------
 * Header principal de la tienda. Combina 3 responsabilidades que
 * suelen vivir juntas en un navbar de e-commerce: identidad de marca
 * (logo), descubrimiento (buscador) y acceso rápido a cuenta/carrito.
 *
 * El estado de carrito y de sesión NO vive acá — se lee de Redux
 * (useCart) y de Firebase Auth (useAuth) respectivamente. Esto evita
 * tener que pasar `usuario` o `totalItems` como props desde App.jsx,
 * que es justamente el problema que tenía la versión vieja del proyecto.
 */
import './Navbar.css'
import { Link } from 'react-router-dom'
import useCart from '../../hooks/useCart'
import useAuth from '../../hooks/useAuth'

const Navbar = ({ busqueda, setBusqueda }) => {
  const { totalItems, toggle } = useCart()

  // estaLogueado es un booleano derivado (!!usuario) que ya viene
  // resuelto desde el hook — acá no repetimos esa lógica, solo la usamos.
  const { usuario, estaLogueado } = useAuth()

  return (
    <nav className="navbar">

      {/* Logo: es un <Link to="/"> en vez de un <a href="/">
          para que la navegación sea SPA (sin recargar toda la página) */}
      <Link to="/" className="navbar-logo">
        🐾 hércules<span>petshop</span>
      </Link>

      {/* Buscador controlado: el valor y el setter vienen de App.jsx
          (vía useSearch), así que cualquier cambio acá filtra los
          productos en tiempo real sin que Navbar sepa cómo funciona el filtro */}
      <div className="navbar-search">
        <span className="navbar-search-icon">🔍</span>
        <input
          type="text"
          placeholder="Buscar productos, juguetes, accesorios..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="navbar-search-input"
        />
      </div>

      <div className="navbar-actions">

        {/* Ruta condicional: si hay sesión activa vamos directo a /cuenta,
            si no, mandamos a /login. Evita un clic extra innecesario
            para el usuario que ya está logueado. */}
        <Link to={estaLogueado ? '/cuenta' : '/login'} className="navbar-btn">
          <span className="navbar-btn-icon">👤</span>
          <span className="navbar-btn-label">
            {/* Fallback en cadena: si está logueado pero no cargó
                displayName todavía (o nunca lo puso), mostramos
                "Mi cuenta" en vez de undefined o un hueco vacío. */}
            {estaLogueado ? (usuario.displayName || 'Mi cuenta') : 'Ingresar'}
          </span>
        </Link>

        {/* El carrito NO navega a ninguna ruta — abre el CartDrawer
            que vive flotando por encima de toda la app (ver App.jsx).
            Por eso es <button onClick> y no <Link>. */}
        <button className="navbar-btn navbar-btn--carrito" onClick={toggle}>
          <span className="navbar-btn-icon">🛒</span>
          <span className="navbar-btn-label">Carrito</span>
          {/* Renderizado condicional: el badge solo ocupa espacio
              visual cuando realmente hay algo que mostrar */}
          {totalItems > 0 && (
            <span className="navbar-badge">{totalItems}</span>
          )}
        </button>

      </div>
    </nav>
  )
}

export default Navbar