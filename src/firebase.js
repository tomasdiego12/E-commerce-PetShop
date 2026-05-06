// Importamos las funciones necesarias de Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Tu configuración personal de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA3QrOPNGeOO1VJ9P_c41jkh--z6MCtGvQ",
  authDomain: "hercules-petshop.firebaseapp.com",
  projectId: "hercules-petshop",
  storageBucket: "hercules-petshop.firebasestorage.app",
  messagingSenderId: "504064026899",
  appId: "1:504064026899:web:43925beeb8e32e464e92e6",
  measurementId: "G-FP23RW7LMY"
}

// Inicializamos Firebase
const app = initializeApp(firebaseConfig)

// Inicializamos Firestore y lo exportamos para usarlo en toda la app
export const db = getFirestore(app)