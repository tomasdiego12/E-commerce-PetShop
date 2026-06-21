/**
 * CartDrawer
 * ------------------------------------------------------------------
 * Panel lateral del carrito. Reemplaza al viejo <Carrito> que estaba
 * siempre visible al final de la página. Ahora vive "flotando" sobre
 * el resto de la UI y se controla 100% desde Redux (isOpen), así
 * que CUALQUIER componente de la app puede abrirlo con useCart().toggle()
 * sin pasar props manualmente por todo el árbol.
 */
import './CartDrawer.css'
import useCart from '../../hooks/useCart'
import CartItem from './CartItem'
import CartSummary from './CartSummary'

const CartDrawer = () => {
  const { items, isOpen, totalPrecio, carritoVacio, cerrar, cambiar, eliminar } = useCart()

  // Si está cerrado no renderizamos nada — evita un overlay invisible
  // bloqueando clics por accidente.
  if (!isOpen) return null

  return (
    <>
      {/* Fondo oscuro: clic afuera = cerrar. Patrón estándar de UX
          para no obligar al usuario a encontrar la X */}
      <div className="cart-drawer-overlay" onClick={cerrar} />

      <aside className="cart-drawer">
        <div className="cart-drawer-header">
          <h3>Tu carrito {!carritoVacio && `(${items.length})`}</h3>
          <button className="cart-drawer-cerrar" onClick={cerrar} aria-label="Cerrar carrito">✕</button>
        </div>

        <div className="cart-drawer-body">
          {carritoVacio ? (
            <div className="cart-drawer-vacio">
              <span>🐾</span>
              <p>Tu carrito está vacío</p>
              <small>Agregá productos para verlos acá</small>
            </div>
          ) : (
            items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onCambiarCantidad={cambiar}
                onEliminar={eliminar}
              />
            ))
          )}
        </div>

        {/* El resumen y el CTA solo tienen sentido si hay productos */}
        {!carritoVacio && (
          <CartSummary totalPrecio={totalPrecio} onCerrarDrawer={cerrar} />
        )}
      </aside>
    </>
  )
}

export default CartDrawer