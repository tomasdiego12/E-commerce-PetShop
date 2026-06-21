export const formatPrice = (precio) => 
    new Intl.NumberFormat ('es-AR' , {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
    }).format(precio);


// Calcula el precio con descuento
// Ej: precioConDescuento(1000, 20) → 800
export const precioConDescuento = (precio, descuentoPorcentaje) => {
    return precio - (precio * descuentoPorcentaje) / 100
}

// Calcula cuánto ahorra el usuario
export const calcularAhorro = (precioOriginal, precioFinal) => {
    return precioOriginal - precioFinal
}