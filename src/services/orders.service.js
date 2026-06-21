import { db } from '../firebase.js'
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
} from 'firebase/firestore'

// Crea una orden nueva en Firestore
export const crearOrden = async ({ items, total, usuario, datosEnvio }) => {
  const orden = {
    items,
    total,
    usuarioId: usuario?.uid || 'anonimo',
    usuarioEmail: usuario?.email || '',
    datosEnvio,
    estado: 'pendiente',
    creadaEn: serverTimestamp(),
  }
  const docRef = await addDoc(collection(db, 'ordenes'), orden)
  return docRef.id
}

// Trae las órdenes de un usuario
export const getOrdenesPorUsuario = async (usuarioId) => {
  const q = query(
    collection(db, 'ordenes'),
    where('usuarioId', '==', usuarioId)
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}