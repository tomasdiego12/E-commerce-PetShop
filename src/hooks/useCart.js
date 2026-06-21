import { useDispatch, useSelector } from 'react-redux'
import {
  agregarItem,
  eliminarItem,
  cambiarCantidad,
  vaciarCarrito,
  abrirCarrito,
  cerrarCarrito,
  toggleCarrito,
} from '../store/cartSlice'

const useCart = () => {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector(state => state.cart)

  // Datos calculados
  const totalItems    = items.reduce((acc, item) => acc + item.cantidad, 0)
  const totalPrecio   = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
  const carritoVacio  = items.length === 0

  // Acciones
  const agregar    = (producto)        => dispatch(agregarItem(producto))
  const eliminar   = (id)              => dispatch(eliminarItem(id))
  const cambiar    = (id, cantidad)    => dispatch(cambiarCantidad({ id, cantidad }))
  const vaciar     = ()                => dispatch(vaciarCarrito())
  const abrir      = ()                => dispatch(abrirCarrito())
  const cerrar     = ()                => dispatch(cerrarCarrito())
  const toggle     = ()                => dispatch(toggleCarrito())

  return {
    // Estado
    items,
    isOpen,
    totalItems,
    totalPrecio,
    carritoVacio,
    // Acciones
    agregar,
    eliminar,
    cambiar,
    vaciar,
    abrir,
    cerrar,
    toggle,
  }
}

export default useCart