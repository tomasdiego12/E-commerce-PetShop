/**
 * AccountPage
 * ------------------------------------------------------------------
 * Pantalla protegida: si no hay usuario logueado, redirige a /login.
 * Este patrón de "guard adentro del componente" es simple y suficiente
 * para un proyecto de este tamaño — en apps más grandes esto se
 * resuelve con un <ProtectedRoute> wrapper en el router.
 */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { logout } from '../services/auth.service'
import Button from '../components/ui/Button'
import toast from 'react-hot-toast'
import './AccountPage.css'

const AccountPage = () => {
  const { usuario, cargando, estaLogueado } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    // Esperamos a que useAuth termine de chequear (cargando === false)
    // antes de decidir si redirigir — si no, redirigiría SIEMPRE al
    // inicio porque `usuario` arranca en null mientras Firebase responde.
    if (!cargando && !estaLogueado) {
      navigate('/login')
    }
  }, [cargando, estaLogueado, navigate])

  const manejarLogout = async () => {
    await logout()
    toast.success('Sesión cerrada')
    navigate('/')
  }

  if (cargando) return null // evita parpadeo mientras Firebase resuelve la sesión

  return (

    <div className="account-page">
      <h1 className="account-titulo">Mi cuenta</h1>
      <p className="account-email">{usuario?.email}</p>
      <Button variant="secondary" onClick={manejarLogout} fullWidth>
        Cerrar sesión
      </Button>
    </div>
  )
}

export default AccountPage