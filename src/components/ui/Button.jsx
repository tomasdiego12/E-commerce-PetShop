import './Button.css'
export default function Button({
    children,
    type = 'button',
    variant = 'primary',
    fullWidth = false,
    ...props
}) {
    return (
        <button
            type={type}
            className={`btn btn--${variant} ${fullWidth ? 'btn--full' : ''}`}
            {...props}
        >
            {children}
        </button>
    )
}