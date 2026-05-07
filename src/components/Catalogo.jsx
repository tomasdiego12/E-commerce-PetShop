import Producto from "./Producto"
function Catalogo ({productos, agregarAlCarrito}) {
    if (!productos) return <p>Cargando...</p>
    return (
        <div className="contenedor-Productos">
        {productos.map((prod) => (
            <Producto
            key={prod.id}
            img={prod.img}
            titulo={prod.titulo}
            precio={prod.precio}
            agregarAlCarrito={() => agregarAlCarrito(prod)}
            />
        ))}
    </div>
    )
}
export default Catalogo