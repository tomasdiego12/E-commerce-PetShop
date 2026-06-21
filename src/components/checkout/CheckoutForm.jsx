/**
 * CheckoutForm
 * ------------------------------------------------------------------
 * Orquesta ShippingForm + PaymentForm + el resumen final.
 * Recibe TODO el estado desde CheckoutPage (Fase 12) porque la
 * lógica de "crear la orden en Firebase" necesita tanto los datos
 * de envío como los items del carrito — y CheckoutPage es quien
 * tiene acceso a useCart().
 */
import './CheckoutForm.css'
import ShippingForm from './ShippingForm'
import PaymentForm from './PaymentForm'
import Button from '../ui/Button'

const CheckoutForm = ({
  datos,
  setDatos,
  errores,
  metodoPago,
  setMetodoPago,
  items,
  totalPrecio,
  onConfirmar,
  enviando,
}) => {
  return (
    <div className="checkout-layout">

      {/* Columna izquierda: formularios */}
      <div>
        <ShippingForm datos={datos} setDatos={setDatos} errores={errores} />
        <PaymentForm metodoPago={metodoPago} setMetodoPago={setMetodoPago} />
      </div>

      {/* Columna derecha: resumen sticky, siempre visible al scrollear */}
      <div className="checkout-resumen">
        <h3 className="checkout-seccion-titulo">Resumen del pedido</h3>

        {items.map((item) => (
          <div className="checkout-resumen-item" key={item.id}>
            <span>{item.titulo} x{item.cantidad}</span>
            <span>${item.precio * item.cantidad}</span>
          </div>
        ))}

        <div className="checkout-resumen-total">
          <span>Total</span>
          <span>${totalPrecio}</span>
        </div>

        <Button
          variant="primary"
          fullWidth
          onClick={onConfirmar}
          disabled={enviando}
        >
          {enviando ? 'Procesando...' : '✅ Confirmar compra'}
        </Button>
      </div>

    </div>
  )
}

export default CheckoutForm