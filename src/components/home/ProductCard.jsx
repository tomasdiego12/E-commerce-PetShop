import './ProductCard.css'
import useCart from '../../hooks/useCart'
import toast from 'react-hot-toast'

const ProductCard = ({ producto }) => {
  const { agregar } = useCart()

  const manejarAgregar = () => {
    agregar(producto)
    toast.success(`${producto.titulo} agregado al carrito 🐾`)
  }

  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={producto.img} alt={producto.titulo} />
      </div>

      <div className="product-card-info">
        <h3 className="product-card-titulo">{producto.titulo}</h3>
        <p className="product-card-precio">${producto.precio}</p>

        <button className="product-card-btn" onClick={manejarAgregar}>
          🛒 Agregar
        </button>
      </div>
    </div>
  )
}

export default ProductCard