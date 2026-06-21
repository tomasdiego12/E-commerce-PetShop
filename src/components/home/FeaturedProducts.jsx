import './FeaturedProducts.css'
import ProductCard from './ProductCard'
import Spinner from '../ui/Spinner'

const FeaturedProducts = ({ productos, cargando }) => {

  if (cargando) {
    return <Spinner texto="Cargando productos..." />
  }

  if (!productos || productos.length === 0) {
    return (
      <section className="featured-products">
        <p className="featured-products-vacio">No se encontraron productos 🐾</p>
      </section>
    )
  }

  return (
    <section className="featured-products">
      <p className="featured-products-titulo">Productos destacados</p>
      <p className="featured-products-subtitulo">Los más vendidos de la tienda</p>

      <div className="featured-products-grid">
        {productos.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts