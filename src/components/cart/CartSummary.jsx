/**
 * CartSummary
 * ------------------------------------------------------------------
 * Resumen de totales + CTA de checkout. Lo separamos de CartDrawer
 * para que sea reutilizable también dentro de CheckoutPage, donde
 * vamos a necesitar mostrar el mismo resumen sin el drawer alrededor.
 */
import './CartSummary.css'
import Button from '../ui/Button'
import { Link } from 'react-router-dom'

const CartSummary = ({ totalPrecio, onCerrarDrawer }) => {
  return (
    <div className="cart-summary">
      <div className="cart-summary-fila">
        <span>Subtotal</span>
        <span>${totalPrecio}</span>
      </div>
      <div className="cart-summary-fila cart-summary-fila--envio">
        <span>Envío</span>
        <span>Se calcula en el checkout</span>
      </div>
      <div className="cart-summary-total">
        <span>Total</span>
        <span>${totalPrecio}</span>
      </div>

      {/* onClick cierra el drawer ANTES de navegar — evita que el
          usuario vuelva atrás y se encuentre con el drawer abierto
          tapando el checkout */}
      <Link to="/checkout" onClick={onCerrarDrawer} style={{ width: '100%' }}>
        <Button variant="primary" fullWidth>
          Finalizar compra
        </Button>
      </Link>
    </div>
  )
}

export default CartSummary