/**
 * ProductGrid
 * ------------------------------------------------------------------
 * Responsabilidad única: renderizar una grilla de ProductCard.
 * No sabe de dónde vienen los productos ni cómo se filtran —
 * eso es trabajo de quien lo use (ProductsPage). Esto lo hace
 * reutilizable: lo mismo sirve para "todos los productos" que
 * para "productos relacionados" o "resultados de búsqueda".
 */
import './ProductGrid.css'
import ProductCard from '../home/ProductCard'
import Spinner from '../ui/Spinner'

const ProductGrid = ({ productos, cargando }) => {

  // Estado de carga: lo resolvemos ANTES que el estado vacío,
  // porque mientras `cargando === true`, `productos` suele ser []
  // y no queremos mostrar "no hay productos" por error.
if (cargando) {
    return <Spinner texto="Cargando productos..." />
}

  // Guard clause: evita el .map() sobre undefined/null y
  // separa el caso "sin resultados" del caso "con resultados".
if (!productos || productos.length === 0) {
    return (
    <div className="product-grid-vacio">
        <p>🐾 No encontramos productos con esos filtros</p>
        <span>Probá con otra búsqueda o categoría</span>
    </div>
    )
}

    return (
    <div className="product-grid">
        {productos.map((producto) => (
            // key={producto.id} es obligatorio para que React optimice
            // el re-render cuando la lista cambia (filtros, búsqueda, etc.)
            <ProductCard key={producto.id} producto={producto} />
        ))}
    </div>
    )
}

export default ProductGrid