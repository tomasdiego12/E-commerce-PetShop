/**
 * ProductDetail
 * ------------------------------------------------------------------
 * Vista completa de UN producto. La diferencia clave con ProductCard
 * es que este componente SÍ maneja estado propio (cantidad a comprar)
 * porque es una decisión que solo tiene sentido en esta pantalla,
 * no en la grilla del catálogo.
 */
import { useState } from 'react'
import './ProductDetail.css'
import ProductImageGallery from './ProductImageGallery'
import Button from '../ui/Button'
import useCart from '../../hooks/useCart'
import toast from 'react-hot-toast'

const ProductDetail = ({ producto }) => {
  const { agregar } = useCart()
  const [cantidad, setCantidad] = useState(1)

  // Clamp manual: nunca dejamos bajar de 1 ni subir de un tope razonable.
  // Sin stock real en Firebase todavía, 20 es un límite arbitrario de seguridad.
  const restar = () => setCantidad((c) => Math.max(1, c - 1))
  const sumar  = () => setCantidad((c) => Math.min(20, c + 1))

  const manejarAgregar = () => {
    // agregarItem en cartSlice ya suma de a 1 por cada dispatch,
    // así que repetimos el dispatch `cantidad` veces en vez de
    // modificar el reducer — mantiene cartSlice simple y predecible.
    for (let i = 0; i < cantidad; i++) {
      agregar(producto)
    }
    toast.success(`${cantidad}x ${producto.titulo} agregado al carrito 🐾`)
  }

  return (
    <div className="product-detail">

      <ProductImageGallery imagenes={producto.img} titulo={producto.titulo} />

      <div className="product-detail-info">

        {producto.marca && (
          <span className="product-detail-marca">{producto.marca}</span>
        )}

        <h1 className="product-detail-titulo">{producto.titulo}</h1>

        <p className="product-detail-precio">${producto.precio}</p>

        {producto.descripcion && (
          <p className="product-detail-descripcion">{producto.descripcion}</p>
        )}

        {/* Selector de cantidad */}
        <div className="product-detail-cantidad">
          <span>Cantidad:</span>
          <div className="product-detail-cantidad-control">
            <button onClick={restar} aria-label="Restar cantidad">−</button>
            <span>{cantidad}</span>
            <button onClick={sumar} aria-label="Sumar cantidad">+</button>
          </div>
        </div>

        <Button variant="primary" fullWidth onClick={manejarAgregar}>
          🛒 Agregar al carrito
        </Button>

        {/* Mini trust-signals — reducen la fricción de compra justo
            en el momento de decisión, sin repetir todo TrustBadges */}
        <div className="product-detail-trust">
          <span>🚚 Envío en el día</span>
          <span>🔒 Pago seguro</span>
        </div>

      </div>
    </div>
  )
}

export default ProductDetail