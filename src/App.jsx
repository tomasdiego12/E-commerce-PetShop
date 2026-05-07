import { useState, useEffect } from 'react'
import './App.css'
import {db} from './firebase.js'
import { Routes, Route } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import Header from './components/Header.jsx'
import Carrito from './components/Carrito.jsx'
import Producto from './components/Producto.jsx'
import Footer from './components/Footer.jsx'
import Catalogo from './components/Catalogo.jsx'

function App() {

  // ── 1. ESTADOS ──
  const [listaDeProductos, setListaDeProductos] = useState([])
  const [carrito, setCarrito] = useState([])
  const [busqueda, setBusqueda] = useState('')

  // ── 2. EFECTO (trae los productos de la API) ──
  useEffect (() => {
    const productosRef = collection(db, 'productos')
    getDocs(productosRef)
    .then(snapshot => {
      const productos = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        img:doc.data().imagen
      }))
      console.log('productos de firebase:', productos)
      setListaDeProductos(productos)
    })
  }, [])

  // ── 3. VARIABLES DERIVADAS ──
  const productosFiltrados = listaDeProductos.filter(p =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase())
  )
  const total = carrito.reduce((acumulador, item) => acumulador + item.precio * item.cantidad, 0)
  const totalItems = carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0)

  // ── 4. FUNCIONES ──
  const agregarAlCarrito = (productoClickeado) => {
    const indiceEncontrado = carrito.findIndex(item => item.id === productoClickeado.id)
    if (indiceEncontrado === -1) {
      setCarrito([...carrito, { ...productoClickeado, cantidad: 1 }])
    } else {
      const copiaCarrito = [...carrito]
      copiaCarrito[indiceEncontrado].cantidad += 1
      setCarrito(copiaCarrito)
    }
  }

  const eliminarProducto = (indice) => {
    const nuevoCarrito = carrito.filter((item, i) => i !== indice)
    setCarrito(nuevoCarrito)
  }

  const finalizarCompra = () => {
    alert(`Gracias por tu compra! Total a pagar: $${total}`)
    setCarrito([])
  }

  // ── 5. RENDERIZADO ──
  return (
    <div>
      <Header
        totalItems={totalItems}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      <Routes>
        <Route path="/" element={
          <Catalogo
          productos={productosFiltrados}
          agregarAlCarrito={agregarAlCarrito}
          />} /> 
      </Routes>

      <Carrito
        carrito={carrito}
        totalAPagar={total}
        eliminarProducto={eliminarProducto}
        finalizarCompra={finalizarCompra}
      />
      <Footer />
    </div>
  )
}

export default App