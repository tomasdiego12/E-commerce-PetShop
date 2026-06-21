import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { registrar } from '../services/auth.service'
import './RegisterPage.css'
const RegisterPage = () => {
  const navigate = useNavigate()
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cargando, setCargando] = useState(false)

  const manejarSubmit = async (e) => {
    e.preventDefault()

    // Validación mínima en el front antes de pegarle a Firebase —
    // evita un viaje de red innecesario para un error obvio.
    if (password.length < 6) {
      toast.error('La contraseña debe tener al menos 6 caracteres')
      return
    }

    setCargando(true)
    try {
      await registrar(email, password, nombre)
      toast.success('¡Cuenta creada con éxito! 🐾')
      navigate('/')
    } catch (error) {
      // auth/email-already-in-use es el caso más común acá
      toast.error('No pudimos crear la cuenta. ¿El email ya está en uso?')
    } finally {
      setCargando(false)
    }
  }

  return (

    <div className="register-page">
      <h1 className="register-titulo">Crear cuenta</h1>
      <form onSubmit={manejarSubmit} className="register-form">
        {/* Por ahora el nombre es opcional, pero lo pedimos igual para que el perfil quede más completo. */}
        <Input label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre" />
        {/* El email y password son obligatorios, Firebase los necesita para crear la cuenta. */}
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@email.com" />
        {/* La contraseña debe tener mínimo 6 caracteres según Firebase, pero esa validación la hacemos en el front para dar feedback inmediato. */}
        <Input label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mínimo 6 caracteres" />
        <Button type="submit" variant="primary" fullWidth disabled={cargando}>
          {cargando ? 'Creando cuenta...' : 'Registrarme'}
        </Button>
      </form>
      <p className="register-login">
        ¿Ya tenés cuenta? <Link to="/login" className="register-link">Iniciá sesión</Link>
      </p>
    </div>
  )
}

export default RegisterPage