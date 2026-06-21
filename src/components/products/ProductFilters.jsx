/**
 * ProductFilters
 * ------------------------------------------------------------------
 * Barra de filtros para la página de catálogo completo.
 * Es "controlado": no guarda estado propio, recibe todo por props
 * y avisa los cambios hacia arriba (lifting state up). Esto permite
 * que ProductsPage decida qué hacer con cada filtro sin que este
 * componente necesite saber nada del resto de la app.
 */
import './ProductFilters.css'
import { CATEGORIAS } from '../../constants/categories'

const ORDENES = [
  { id: 'relevancia', label: 'Más relevantes' },
  { id: 'menor-precio', label: 'Menor precio' },
  { id: 'mayor-precio', label: 'Mayor precio' },
]

const ProductFilters = ({
  categoriaActiva,
  setCategoriaActiva,
  orden,
  setOrden,
  totalResultados,
}) => {
  return (
    <div className="product-filters">

      {/* Chips de categoría — el mismo patrón visual que CategoryNav,
          pero acá vive DENTRO de la página, no en el layout global */}
      <div className="product-filters-categorias">
        {CATEGORIAS.map((cat) => (
          <button
            key={cat.id}
            // Template literal con clase condicional: patrón estándar
            // para estilos basados en estado en React sin librerías extra
            className={`product-filters-chip ${categoriaActiva === cat.id ? 'product-filters-chip--active' : ''}`}
            onClick={() => setCategoriaActiva(cat.id)}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      <div className="product-filters-derecha">
        <span className="product-filters-contador">
          {totalResultados} {totalResultados === 1 ? 'producto' : 'productos'}
        </span>

        {/* select nativo: cero dependencias, accesible por defecto,
            y para un dropdown simple no justifica un componente custom */}
        <select
          className="product-filters-orden"
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
        >
          {ORDENES.map((o) => (
            <option key={o.id} value={o.id}>{o.label}</option>
          ))}
        </select>
      </div>

    </div>
  )
}

export default ProductFilters