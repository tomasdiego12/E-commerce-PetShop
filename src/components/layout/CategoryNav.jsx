import './CategoryNav.css'
import { CATEGORIAS } from '../../constants/categories'

export default function CategoryNav({ categoriaActiva, setCategoriaActiva }) {
  return (
    <div className="category-nav">
      {CATEGORIAS.map(cat => (
        <button
          key={cat.id}
          className={`category-nav-item ${categoriaActiva === cat.id ? 'category-nav-item--active' : ''}`}
          onClick={() => setCategoriaActiva(cat.id)}
        >
          <span>{cat.emoji}</span>
          {cat.label}
        </button>
      ))}
    </div>
  )
}