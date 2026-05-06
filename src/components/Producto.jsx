// Definimos el componente Producto.
// Usamos "desestructuración" (las llaves { }) en los parámetros.
// Esto nos permite extraer las variables directamente del paquete de props
// para no tener que escribir "props.img" o "props.titulo" en cada renglón.
const Producto = ({img, titulo, precio, agregarAlCarrito}) => {

    return (
        // Contenedor principal de la tarjeta individual del producto
        <div className="product-Card">
            
            {/* Mostramos la imagen. 
                Tip de yapa: Es buena práctica poner {titulo} adentro del "alt" 
                para que los lectores de pantalla sepan de qué es la foto */}
            <img src={img} alt={titulo} />
            
            {/* Mostramos la información del producto */}
            <h3>{titulo}</h3>
            <p>${precio}</p>
            
            {/* El botón clave: 
                Al hacer clic, ejecuta la función mágica que le mandó el Padre (App.jsx)
                Esa función es la que suma la plata al total y mete el objeto al array del carrito.
            */}
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}

// Exportamos el componente para que App.jsx lo pueda importar y dibujar
export default Producto;