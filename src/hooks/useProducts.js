import { useState, useEffect } from 'react'
import { db } from '../firebase.js'
import { collection, getDocs } from 'firebase/firestore'

const useProducts = () => {
  const [productos, setProductos]     = useState([])
  const [cargando, setCargando]       = useState(true)
  const [error, setError]             = useState(null)

  useEffect(() => {
    const traerProductos = async () => {
      try {
        setCargando(true)
        const productosRef = collection(db, 'productos')
        const snapshot = await getDocs(productosRef)
        const lista = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          img: doc.data().imagen,
        }))
        setProductos(lista)
      } catch (err) {
        console.error('Error al traer productos:', err)
        setError('No se pudieron cargar los productos.')
      } finally {
        setCargando(false)
      }
    }

    traerProductos()
  }, [])

  return { productos, cargando, error }
}

export default useProducts