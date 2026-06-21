// aca se van a hacer las consultas a la base de datos, y se van a exportar las funciones para que puedan ser usadas en los componentes
import {db} from '../firebase.js';
import {
    // funciones de firebase para hacer consultas a la base de datos
    collection, // para obtener una referencia a una colección
    getDocs, // para obtener los documentos de una colección
    getDoc, // para obtener un documento específico
    doc, // para obtener una referencia a un documento específico
    query, // para hacer consultas a la base de datos con condiciones
    where, // para agregar condiciones a las consultas
} from 'firebase/firestore'

// Trae todos los productos
export const getProducts = async () => {
    // Paso A: Guardás la ubicación del estante en una variable
    const productRef = collection(db, 'productos');
    
    // Paso B: Mandás a getDocs con un 'await' a buscar las cajas de ese estante
    const fireResponse = await getDocs(productRef);

    // Paso C: Por ahora, hacé un return de ese 'snapshot' para ver si llega
    return fireResponse.docs.map((doc) => {
        return {
            id:doc.id,
            ...doc.data().imagen
        }
    });
};
// Trae un producto específico por su id
export const getProductById  = async (id) => {
    // Paso A: Guardás la ubicación del producto específico en una variable
    const singleDocument = doc(db, 'productos', id);
    // Paso B: Mandás a getDoc con un 'await' a buscar la caja de ese producto específico
    const fireResponseDoc = await getDoc(singleDocument);
    // Paso C: Por ahora, hacé un return de ese 'snapshot' para ver si llega
    if (fireResponseDoc.exists()) {
    return {
        id: fireResponseDoc.id,
        ...fireResponseDoc.data(),
        img: fireResponseDoc.data().imagen
    }
} else {
    // Si el producto no existe, podés retornar un mensaje o un objeto vacío
        return null;
    }
};

// Trae los productos de una categoría específica
export const getProductsByCategory = async (categoryId) => {
    // Paso A: Guardás la ubicación del estante en una variable
    const productRef = collection(db, 'productos');

    // Paso B: Creo mi variable para armar la consulta usando query()
    const filteredQuery = query(productRef, where('categoria', '==', categoryId));

    // Paso C: Mandás a getDocs con un 'await' a buscar las cajas de ese estante
    const fireResponse = await getDocs(filteredQuery);

    // Paso D: Limpiar y retornar los datos
    return fireResponse.docs.map((doc) => {
        return {
            id:doc.id,
            ...doc.data().imagen
        }
    });
}