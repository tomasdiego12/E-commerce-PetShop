import { useState, useEffect } from 'react'
import { auth } from '../firebase.js'
import { onAuthStateChanged } from 'firebase/auth'

const useAuth = () => {
  const [usuario, setUsuario]   = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user)
      setCargando(false)
    })

    // Limpiamos el listener cuando el componente se desmonta
    return () => unsuscribe()
  }, [])

  const estaLogueado = !!usuario

  return { usuario, cargando, estaLogueado }
}

export default useAuth