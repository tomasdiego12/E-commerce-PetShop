import './HeroBanner.css'
import perroFeliz from '../../assets/images/hero-dog.jpg'

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-banner-texto">
        <span className="hero-banner-badge">🌟 Ofertas de Junio</span>
        <h1>Tu mascota merece<br />lo <span>mejor</span> de todo</h1>
        <p>Alimentos premium, juguetes y farmacia veterinaria con envío en el día.</p>

        <div className="hero-banner-botones">
          {/* href="#productos" queda como ancla temporal.
              En la Fase 13 (router) lo reemplazamos por <Link to="/productos"> */}
          <a href="#productos" className="hero-banner-cta">🛍️ Comprar ahora</a>
        </div>

        {/* Micro-stats: generan confianza inmediata sin necesidad de leer todo el texto */}
        <div className="hero-banner-stats">
          <div className="hero-banner-stat">
            <strong>3.000+</strong>
            <span>Productos</span>
          </div>
          <div className="hero-banner-stat">
            <strong>24h</strong>
            <span>Envío</span>
          </div>
          <div className="hero-banner-stat">
            <strong>⭐ 4.9</strong>
            <span>Calificación</span>
          </div>
        </div>
      </div>

      <div className="hero-banner-visual">
        <img src={perroFeliz} alt="Perrito feliz con pañoleta" />
      </div>
    </section>
  )
}

export default HeroBanner