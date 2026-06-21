/**
 * ShippingForm
 * ------------------------------------------------------------------
 * Sub-formulario controlado. El estado real vive en CheckoutPage
 * (Fase 12) — este componente solo es la "vista" del formulario.
 * Esto evita duplicar estado y permite validar TODO el checkout
 * en un solo lugar antes de confirmar la compra.
 */
import Input from '../ui/Input'

const ShippingForm = ({ datos, setDatos, errores }) => {

  // Handler genérico: en vez de un onChange por campo, usamos
  // el atributo `name` del input para actualizar dinámicamente
  // la propiedad correspondiente en el objeto `datos`.
  const manejarCambio = (e) => {
    const { name, value } = e.target
    setDatos((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="checkout-seccion">
      <h3 className="checkout-seccion-titulo">📦 Datos de envío</h3>

      <Input
        label="Nombre completo"
        name="nombre"
        value={datos.nombre}
        onChange={manejarCambio}
        error={errores.nombre}
        placeholder="Tomás Pérez"
      />

      <Input
        label="Email"
        type="email"
        name="email"
        value={datos.email}
        onChange={manejarCambio}
        error={errores.email}
        placeholder="tomas@email.com"
      />

      <Input
        label="Teléfono"
        name="telefono"
        value={datos.telefono}
        onChange={manejarCambio}
        error={errores.telefono}
        placeholder="3794 000000"
      />

      <Input
        label="Dirección"
        name="direccion"
        value={datos.direccion}
        onChange={manejarCambio}
        error={errores.direccion}
        placeholder="Calle 123, Corrientes"
      />
    </div>
  )
}

export default ShippingForm