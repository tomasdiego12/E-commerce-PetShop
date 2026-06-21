// Valida que el email tenga formato correcto
const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const validateEmail = (email) => patron.test(email);

// Valida que la contraseña tenga al menos 6 caracteres
export const validatePassword = (password) => password.length >= 6;

// Valida que un campo no esté vacío
export const validateRequired = (value) => value?.trim()?.length > 0 ;

//formulario de checkout completo
export const validateCheckoutForm = ({ nombre, email, direccion, telefono }) => {
    const errores = {}

    if (!validateRequired(nombre))    errores.nombre    = 'El nombre es requerido'
    if (!validateEmail(email))         errores.email     = 'El email no es válido'
    if (!validateRequired(direccion)) errores.direccion = 'La dirección es requerida'
    if (!validateRequired(telefono))  errores.telefono  = 'El teléfono es requerido'

    return {
        esValido: Object.keys(errores).length === 0,
        errores,
    }
}
