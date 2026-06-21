import { auth } from '../firebase.js'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'

// Registrar usuario nuevo
export const registrar = async (email, password, nombre) => {
  const credencial = await createUserWithEmailAndPassword(auth, email, password)
  await updateProfile(credencial.user, { displayName: nombre })
  return credencial.user
}

// Iniciar sesión
export const login = async (email, password) => {
  const credencial = await signInWithEmailAndPassword(auth, email, password)
  return credencial.user
}

// Cerrar sesión
export const logout = async () => {
  await signOut(auth)
}