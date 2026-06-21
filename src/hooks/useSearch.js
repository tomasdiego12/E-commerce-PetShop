import { useState } from 'react'

const useSearch = (productos) => {
  const [busqueda, setBusqueda] = useState('')
  const [categoriaActiva, setCategoriaActiva] = useState('todos')

  const productosFiltrados = productos.filter(p => {
    const coincideBusqueda = p.titulo
      .toLowerCase()
      .includes(busqueda.toLowerCase())

    const coincideCategoria =
      categoriaActiva === 'todos' || p.categoria === categoriaActiva

    return coincideBusqueda && coincideCategoria
  })

  return {
    busqueda,
    setBusqueda,
    categoriaActiva,
    setCategoriaActiva,
    productosFiltrados,
  }
}

export default useSearch