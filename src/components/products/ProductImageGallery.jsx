/**
 * ProductImageGallery
 * ------------------------------------------------------------------
 * Por ahora tus productos en Firebase solo traen UNA imagen
 * (el campo `imagen`), así que esta galería soporta tanto un
 * string único como un array de imágenes — sin romper nada si
 * más adelante cargás varias fotos por producto.
 */
import { useState } from 'react'
import './ProductImageGallery.css'

const ProductImageGallery = ({ imagenes, titulo }) => {
  // Normalizamos: si viene un string, lo convertimos en array de 1.
  // Esto evita tener que tocar el resto del componente si Firebase
  // sigue mandando un solo campo `imagen` por ahora.
  const listaImagenes = Array.isArray(imagenes) ? imagenes : [imagenes]

  const [imagenActiva, setImagenActiva] = useState(0)

  return (
    <div className="product-gallery">

      {/* Imagen grande principal */}
      <div className="product-gallery-principal">
        <img src={listaImagenes[imagenActiva]} alt={titulo} />
      </div>

      {/* Miniaturas — solo se muestran si hay más de una imagen,
          así no ocupamos espacio vacío con productos que tienen 1 sola foto */}
      {listaImagenes.length > 1 && (
        <div className="product-gallery-miniaturas">
          {listaImagenes.map((img, indice) => (
            <button
              key={indice}
              className={`product-gallery-mini ${indice === imagenActiva ? 'product-gallery-mini--active' : ''}`}
              onClick={() => setImagenActiva(indice)}
            >
              <img src={img} alt={`${titulo} vista ${indice + 1}`} />
            </button>
          ))}
        </div>
      )}

    </div>
  )
}

export default ProductImageGallery