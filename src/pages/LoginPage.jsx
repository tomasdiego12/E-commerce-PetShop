/**
 * LoginPage
 * ------------------------------------------------------------------
 * Login simple con email/password contra Firebase Auth.
 * No usamos useAuth acá porque ese hook es para LEER el estado
 * de sesión (quién está logueado), no para ejecutar el login en sí
 * — esa acción vive en auth.service.js, separando "leer" de "hacer".
 */
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { login } from '../services/auth.service'
import './LoginPage.css'

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cargando, setCargando] = useState(false)

  const manejarSubmit = async (e) => {
    e.preventDefault() // evita el refresh de página default del <form>
    setCargando(true)
    try {
      await login(email, password)
      toast.success('¡Bienvenido de nuevo! 🐾')
      navigate('/')
    } catch (error) {
      // Firebase tira códigos de error específicos (auth/wrong-password,
      // auth/user-not-found, etc.) — por ahora damos un mensaje genérico,
      // se puede afinar más adelante mapeando error.code.
      toast.error('Email o contraseña incorrectos')
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="login-page">
      <h1 className="login-titulo">Iniciar sesión</h1>
      <form onSubmit={manejarSubmit} className="login-form">
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@email.com" />
        <Input label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />

        <Button type="submit" variant="primary" fullWidth disabled={cargando}>
          {cargando ? 'Ingresando...' : 'Ingresar'}
        </Button>
      </form>
      <p className="login-registro">
        ¿No tenés cuenta? <Link to="/registro" className="login-link">Registrate</Link>
      </p>
    </div>
  )
}

export default LoginPage