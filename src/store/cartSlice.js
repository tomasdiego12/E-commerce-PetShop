import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],       // los productos en el carrito
    isOpen: false,   // si el drawer está abierto o cerrado
  },
  reducers: {

    agregarItem: (state, action) => {
      const producto = action.payload
      const existente = state.items.find(item => item.id === producto.id)
      if (existente) {
        existente.cantidad += 1
      } else {
        state.items.push({ ...producto, cantidad: 1 })
      }
    },

    eliminarItem: (state, action) => {
      const id = action.payload
      state.items = state.items.filter(item => item.id !== id)
    },

    cambiarCantidad: (state, action) => {
      const { id, cantidad } = action.payload
      const item = state.items.find(item => item.id === id)
      if (item) {
        item.cantidad = cantidad
        if (item.cantidad <= 0) {
          state.items = state.items.filter(i => i.id !== id)
        }
      }
    },

    vaciarCarrito: (state) => {
      state.items = []
    },

    abrirCarrito: (state) => {
      state.isOpen = true
    },

    cerrarCarrito: (state) => {
      state.isOpen = false
    },

    toggleCarrito: (state) => {
      state.isOpen = !state.isOpen
    },

  },
})

export const {
  agregarItem,
  eliminarItem,
  cambiarCantidad,
  vaciarCarrito,
  abrirCarrito,
  cerrarCarrito,
  toggleCarrito,
} = cartSlice.actions

export default cartSlice.reducer