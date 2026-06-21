import './QuickCategories.css'
import { SUBCATEGORIAS } from '../../constants/categories'

const QuickCategories = () => {
  return (
    <section className="quick-categories">
      <p className="quick-categories-titulo">Encontrá lo que necesitás</p>
      <div className="quick-categories-lista">
        {SUBCATEGORIAS.map((cat) => (
          <div className="quick-categories-item" key={cat.id}>
            <div className="quick-categories-icono">{cat.emoji}</div>
            <span>{cat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default QuickCategories