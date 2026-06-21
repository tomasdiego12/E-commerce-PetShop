import './Layout.css'
import AnnouncementBar from './AnnouncementBar'
import Navbar from './Navbar'
import CategoryNav from './CategoryNav'
import Footer from './Footer'

export default function Layout({ children, busqueda, setBusqueda, categoriaActiva, setCategoriaActiva }) {
  return (
    <div className="layout">
      <AnnouncementBar />
      <Navbar busqueda={busqueda} setBusqueda={setBusqueda} />
      <CategoryNav categoriaActiva={categoriaActiva} setCategoriaActiva={setCategoriaActiva} />
      <main className="layout-main">
        {children}
      </main>
      <Footer />
    </div>
  )
}