import './Badge.css'

const Badge = ({ children, tipo = 'descuento' }) => {
  return (
    <span className={`badge badge--${tipo}`}>
      {children}
    </span>
  )
}

export default Badge