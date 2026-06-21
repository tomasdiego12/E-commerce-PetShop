import './Modal.css'

const Modal = ({ isOpen, onClose, titulo, children }) => {
  if (!isOpen) return null

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />

      <div className="modal-contenido">
        <div className="modal-header">
          <h3 className="modal-titulo">{titulo}</h3>
          <button className="modal-cerrar" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal