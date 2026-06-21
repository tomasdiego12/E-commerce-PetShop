/**
 * CartPage
 * ------------------------------------------------------------------
 * Vista de carrito a pantalla completa. Es un complemento al
 * CartDrawer, no un reemplazo: el drawer es para revisar rápido,
 * esta página es para cuando el usuario quiere ver todo con calma
 * (ej: llega acá desde un link directo /carrito).
 */
import useCart from '../hooks/useCart'
import CartItem from '../components/cart/CartItem'
import CartSummary from '../components/cart/CartSummary'
import { Link } from 'react-router-dom'
import './CartPage.css'

const CartPage = () => {
  const { items, totalPrecio, carritoVacio, cambiar, eliminar } = useCart()

  if (carritoVacio) {
    return (
      <div style={{ padding: '80px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: '40px', marginBottom: '12px' }}>🐾</p>
        <p style={{ fontWeight: 600, marginBottom: '16px' }}>Tu carrito está vacío</p>
        <Link to="/productos" style={{ color: '#2D6A4F', fontWeight: 700 }}>
          Ver productos →
        </Link>
      </div>
    )
  }

  return (
    
    <div className= "cart-page">
      <h1 className="cart-page-title">Tu carrito</h1>
      <div className="cart-items-container">
        {items.map((item) => (
          <CartItem key={item.id} item={item} onCambiarCantidad={cambiar} onEliminar={eliminar} />
        ))}
      </div>
      <CartSummary totalPrecio={totalPrecio} onCerrarDrawer={() => {}} />
    </div>
    
    
    
    
  )
}
    
export default CartPage