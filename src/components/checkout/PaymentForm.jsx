/**
 * PaymentForm
 * ------------------------------------------------------------------
 * Selector de método de pago. Por ahora es solo UI — la integración
 * real con Mercado Pago la conectás más adelante usando la public key
 * que ya dejamos en .env.example (VITE_MP_PUBLIC_KEY). De momento
 * solo guarda qué método eligió el usuario.
 */
const METODOS = [
  { id: 'mercadopago', label: 'Mercado Pago', icono: '💳' },
  { id: 'transferencia', label: 'Transferencia bancaria', icono: '🏦' },
  { id: 'efectivo', label: 'Efectivo al retirar', icono: '💵' },
]

const PaymentForm = ({ metodoPago, setMetodoPago }) => {
  return (
    <div className="checkout-seccion">
      <h3 className="checkout-seccion-titulo">💳 Método de pago</h3>

      <div className="payment-form-opciones">
        {METODOS.map((m) => (
          <label
            key={m.id}
            className={`payment-form-opcion ${metodoPago === m.id ? 'payment-form-opcion--active' : ''}`}
          >
            <input
              type="radio"
              name="metodoPago"
              value={m.id}
              checked={metodoPago === m.id}
              onChange={(e) => setMetodoPago(e.target.value)}
            />
            <span className="payment-form-icono">{m.icono}</span>
            <span>{m.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default PaymentForm