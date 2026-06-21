import './Spinner.css'

const Spinner = ({ texto = 'Cargando...' }) => {
  return (
    <div className="spinner-wrapper">
      <div className="spinner-circulo" />
      <p className="spinner-texto">{texto}</p>
    </div>
  )
}

export default Spinner