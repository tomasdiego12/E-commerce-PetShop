import './Input.css'

const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  label,
  error,
  name,
  fullWidth = true,
}) => {
  return (
    <div className={`input-wrapper ${fullWidth ? 'input-wrapper--full' : ''}`}>

      {label && (
        <label className="input-label">{label}</label>
      )}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input-field ${error ? 'input-field--error' : ''}`}
      />

      {error && (
        <span className="input-error">{error}</span>
      )}

    </div>
  )
}

export default Input