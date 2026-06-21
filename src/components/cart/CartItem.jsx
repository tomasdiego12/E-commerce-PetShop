/**
 * CartItem
 * ------------------------------------------------------------------
 * Una fila del carrito. Es "tonto" a propósito: no sabe de Redux,
 * solo recibe el item y dos funciones. Esto lo hace fácil de testear
 * y de reutilizar (ej: en un resumen de orden post-compra).
 */
import './CartItem.css'

const CartItem = ({ item, onCambiarCantidad, onEliminar }) => {
  const subtotal = item.precio * item.cantidad

  return (
    <div className="cart-item">
      <img src={item.img} alt={item.titulo} className="cart-item-img" />

      <div className="cart-item-info">
        <p className="cart-item-titulo">{item.titulo}</p>
        <p className="cart-item-precio">${item.precio} c/u</p>

        <div className="cart-item-control">
          <button onClick={() => onCambiarCantidad(item.id, item.cantidad - 1)}>−</button>
          <span>{item.cantidad}</span>
          <button onClick={() => onCambiarCantidad(item.id, item.cantidad + 1)}>+</button>
        </div>
      </div>

      <div className="cart-item-derecha">
        <p className="cart-item-subtotal">${subtotal}</p>
        <button className="cart-item-eliminar" onClick={() => onEliminar(item.id)} aria-label="Eliminar producto">
          🗑️
        </button>
      </div>
    </div>
  )
}

export default CartItem