function Carrito(props) {
    return (
        <div className="carrito-contenedor">
            <h2>Carrito de compras</h2>
            
            {/* Arranca la condición del ternario */}
            {props.carrito.length === 0 ? (
                
                <p>Tu carrito está vacío</p>
                
            ) : (
                
                /* Abrimos el fragmento para agrupar los 3 elementos */
                <>
                    {/* 1. Recorremos el array "carrito" */}
                    {props.carrito.map((item, indice) => (
                        <div className="item-carrito" key={item.id}>
                            <p>{item.titulo} x{item.cantidad}- ${item.precio * item.cantidad }</p>
                            <button onClick={() => props.eliminarProducto(indice)}>
                                🗑️ Borrar
                            </button>
                        </div>
                    ))}

                    {/* 2. El total */}
                    <p>Total: ${props.totalAPagar}</p>

                    {/* 3. El botón */}
                    <button onClick={props.finalizarCompra}>
                        Finalizar compra
                    </button>
                </>
            )}
            {/* Termina la condición del ternario */}
            
        </div> 
    )
}

export default Carrito;