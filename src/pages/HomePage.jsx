/**
 * HomePage
 * ------------------------------------------------------------------
 * Es exactamente lo que antes vivía pegado dentro de App.jsx.
 * Al moverlo a una página propia, App.jsx queda libre para definir
 * SOLO las rutas, que es su única responsabilidad real.
 */
import HeroBanner from '../components/home/HeroBanner'
import QuickCategories from '../components/home/QuickCategories'
import FeaturedProducts from '../components/home/FeaturedProducts'
import TrustBadges from '../components/home/TrustBadges'

const HomePage = ({ productos, cargando }) => {
  return (
    <>
      <HeroBanner />
      <QuickCategories />
      <FeaturedProducts productos={productos} cargando={cargando} />
      <TrustBadges />
    </>
  )
}

export default HomePage