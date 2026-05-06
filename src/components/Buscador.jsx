// aca creamos el componente buscador, que es un input de texto que recibe el valor de busqueda y la funcion setBusqueda para actualizar el estado del componente padre
function Buscador({ busqueda, setBusqueda }) {
    return (
        <input
            className="header-buscador"
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
        />
    )
}

export default Buscador;