// Importamos las funciones necesarias de Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Tu configuración personal de Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

// Inicializamos Firebase
const app = initializeApp(firebaseConfig)

// Inicializamos Firestore y lo exportamos para usarlo en toda la app
export const db = getFirestore(app)