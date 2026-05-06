// Definimos el componente Header.
// Este es un componente "presentacional" (solo muestra información, no maneja lógica ni estados).
// Es una excelente práctica tenerlo separado de App.jsx para que el archivo principal no se llene de HTML.
import Buscador from './Buscador.jsx';

function Header ({totalItems, busqueda, setBusqueda}) {

    return (
        <header className="header">
            {/* Logo */}
            <div className="header-logo">
                <img src="/logoPetShopHercules.png" alt=" Hercules PetShop" />
            </div>
            {/* Buscador en el centro */}
        <Buscador
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        />
            {/* Carrito */}
            <div className="header-carrito">
                🛒<span className="header-contador">{totalItems}</span>
            </div>
        </header>
    )
}
// Lo exportamos para usarlo en App.jsx
export default Header;