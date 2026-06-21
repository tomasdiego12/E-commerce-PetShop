/**
 * CheckoutPage
 * ------------------------------------------------------------------
 * Dueña del estado del checkout completo. CheckoutForm es solo vista;
 * acá vive la lógica real: validación, conexión con Firebase (orders.service)
 * y qué pasa después de confirmar la compra.
 */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import useCart from '../hooks/useCart'
import useAuth from '../hooks/useAuth'
import CheckoutForm from '../components/checkout/CheckoutForm'
import { crearOrden } from '../services/orders.service'
import { validateCheckoutForm } from '../utils/validators'

const CheckoutPage = () => {
  const { items, totalPrecio, vaciar, carritoVacio } = useCart()
  const { usuario } = useAuth()
  const navigate = useNavigate()

  const [datos, setDatos] = useState({ nombre: '', email: '', telefono: '', direccion: '' })
  const [errores, setErrores] = useState({})
  const [metodoPago, setMetodoPago] = useState('mercadopago')
  const [enviando, setEnviando] = useState(false)

  // Guard de ruta: si alguien entra a /checkout con el carrito vacío
  // (ej: refrescó la página después de comprar), lo mandamos de vuelta
  // antes de mostrarle un formulario inútil.
  if (carritoVacio) {
    navigate('/productos')
    return null
  }

  const manejarConfirmar = async () => {
    const { esValido, errores: erroresValidacion } = validateCheckoutForm(datos)

    if (!esValido) {
      setErrores(erroresValidacion)
      toast.error('Revisá los datos del formulario')
      return
    }

    setEnviando(true)
    try {
     
      await crearOrden({
        items,
        total: totalPrecio,
        usuario,
        datosEnvio: { ...datos, metodoPago },
      })

      toast.success('¡Compra confirmada! 🎉')
      vaciar()
      navigate('/')
    } catch (error) {
      console.error('Error al confirmar la compra:', error)
      toast.error('Hubo un error al procesar tu compra')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <CheckoutForm
      datos={datos}
      setDatos={setDatos}
      errores={errores}
      metodoPago={metodoPago}
      setMetodoPago={setMetodoPago}
      items={items}
      totalPrecio={totalPrecio}
      onConfirmar={manejarConfirmar}
      enviando={enviando}
    />
  )
}

export default CheckoutPage