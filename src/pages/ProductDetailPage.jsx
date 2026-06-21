/**
 * ProductDetailPage
 * ------------------------------------------------------------------
 * Trae UN producto por id desde la URL (/producto/:id).
 * No reutilizamos el array `productos` que ya está en memoria porque
 * si el usuario entra DIRECTO a este link (compartido, favoritos, etc.)
 * sin pasar por Home, ese array podría estar vacío. Pedirlo de nuevo
 * a Firebase garantiza que siempre funcione, sin importar de dónde venga.
 */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/products.service'
import ProductDetail from '../components/products/ProductDetail'
import Spinner from '../components/ui/Spinner'

const ProductDetailPage = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const cargarProducto = async () => {
      setCargando(true)
      const data = await getProductById(id)
      setProducto(data)
      setCargando(false)
    }
    cargarProducto()
  }, [id]) // se vuelve a ejecutar si el usuario navega de un producto a otro

  if (cargando) return <Spinner texto="Cargando producto..." />

  if (!producto) {
    return (
      <div style={{ padding: '60px 24px', textAlign: 'center' }}>
        <p>🐾 No encontramos este producto</p>
      </div>
    )
  }

  return <ProductDetail producto={producto} />
}

export default ProductDetailPage