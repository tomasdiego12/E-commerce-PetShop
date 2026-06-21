import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Columna 1 — Marca */}
        <div className="footer-marca">
          <div className="footer-logo">🐾 hércules<span>petshop</span></div>
          <p className="footer-tagline">
            Porque los animales también merecen una vida plena. Alimentos premium, juguetes y farmacia con entrega en el día.
          </p>
          <div className="footer-redes">
            <a href="#" className="footer-red">📸</a>
            <a href="#" className="footer-red">👍</a>
            <a href="#" className="footer-red">💬</a>
          </div>
        </div>

        {/* Columna 2 — Links */}
        <div className="footer-col">
          <h4>La tienda</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><a href="#">Quiénes somos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3 — Ayuda */}
        <div className="footer-col">
          <h4>Ayuda</h4>
          <ul>
            <li><a href="#">Preguntas frecuentes</a></li>
            <li><a href="#">Envíos y entregas</a></li>
            <li><a href="#">Devoluciones</a></li>
            <li><a href="#">Términos y condiciones</a></li>
          </ul>
        </div>

      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <p>© 2025 Hércules PetShop · Corrientes, Argentina</p>
        <div className="footer-pagos">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Mercado Pago</span>
        </div>
      </div>

    </footer>
  )
}