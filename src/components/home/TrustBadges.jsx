import './TrustBadges.css'

const beneficios = [
  { icono: '🚚', titulo: 'Envío protegido', texto: 'Tus pedidos llegan seguros y a tiempo' },
  { icono: '🔒', titulo: 'Pago 100% seguro', texto: 'Mercado Pago y tarjetas sin riesgos' },
  { icono: '💬', titulo: 'Atención personalizada', texto: 'Te ayudamos a elegir el producto ideal' },
]

const TrustBadges = () => {
  return (
    <section className="trust-badges">
      {beneficios.map((b, i) => (
        <div className="trust-badges-item" key={i}>
          <div className="trust-badges-icono">{b.icono}</div>
          <h4>{b.titulo}</h4>
          <p>{b.texto}</p>
        </div>
      ))}
    </section>
  )
}

export default TrustBadges