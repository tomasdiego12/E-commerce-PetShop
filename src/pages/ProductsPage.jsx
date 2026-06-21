/**
 * ProductsPage
 * ------------------------------------------------------------------
 * Catálogo completo con filtros. Acá SÍ usamos categoriaActiva real
 * (a diferencia de HomePage que solo muestra destacados), porque
 * esta es la pantalla pensada para "encontrar exactamente lo que busco".
 */
import { useState, useMemo } from 'react'
import ProductFilters from '../components/products/ProductFilters'
import ProductGrid from '../components/products/ProductGrid'
import './ProductsPage.css'

const ProductsPage = ({ productos, cargando }) => {
  const [categoriaActiva, setCategoriaActiva] = useState('todos')
  const [orden, setOrden] = useState('relevancia')

  // useMemo evita recalcular el filtrado/ordenamiento en CADA render
  // de ProductsPage — solo se recalcula si cambian sus dependencias.
  // Con pocos productos no se nota, pero es el hábito correcto.
  const productosVisibles = useMemo(() => {
    let resultado = [...productos]

    if (categoriaActiva !== 'todos') {
      resultado = resultado.filter((p) => p.categoria === categoriaActiva)
    }

    if (orden === 'menor-precio') {
      resultado.sort((a, b) => a.precio - b.precio)
    } else if (orden === 'mayor-precio') {
      resultado.sort((a, b) => b.precio - a.precio)
    }
    // 'relevancia' no ordena: respeta el orden que viene de Firebase

    return resultado
  }, [productos, categoriaActiva, orden])

  return (

    <div className="products-page">
      <h1 className="products-page-title">Todos los productos</h1>
      <ProductFilters
        categoriaActiva={categoriaActiva}
        setCategoriaActiva={setCategoriaActiva}
        orden={orden}
        setOrden={setOrden}
        totalResultados={productosVisibles.length}
      />
      <ProductGrid productos={productosVisibles} cargando={cargando} />
    </div>
  )
}

export default ProductsPage