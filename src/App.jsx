/**
 * App.jsx
 * ------------------------------------------------------------------
 * Responsabilidad única: definir las rutas. Toda la lógica de negocio
 * (productos, búsqueda, carrito) vive en hooks; toda la presentación
 * vive en pages/ y components/. App.jsx es el "mapa", no el contenido.
 */
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Toast from './components/ui/Toast'
import CartDrawer from './components/cart/CartDrawer'
import useSearch from './hooks/useSearch'
import useProducts from './hooks/useProducts'

import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AccountPage from './pages/AccountPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  // Se traen UNA vez acá arriba y se reparten por props a las páginas
  // que los necesitan — evita pedirle a Firebase los mismos productos
  // de nuevo cada vez que cambia de ruta.
  const { productos, cargando } = useProducts()
  const {
    busqueda,
    setBusqueda,
    categoriaActiva,
    setCategoriaActiva,
    productosFiltrados,
  } = useSearch(productos)

  return (
    <>
      {/* Elementos que flotan SOBRE el layout, no dentro del flujo normal */}
      <Toast />
      <CartDrawer />

      <Layout
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        categoriaActiva={categoriaActiva}
        setCategoriaActiva={setCategoriaActiva}
      >
        <Routes>
          <Route path="/" element={<HomePage productos={productosFiltrados} cargando={cargando} />} />
          <Route path="/productos" element={<ProductsPage productos={productos} cargando={cargando} />} />
          <Route path="/producto/:id" element={<ProductDetailPage />} />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<RegisterPage />} />
          <Route path="/cuenta" element={<AccountPage />} />
          {/* path="*" captura cualquier ruta no definida arriba — SIEMPRE
              tiene que ir último, React Router evalúa las rutas en orden */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App