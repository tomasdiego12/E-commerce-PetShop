import { Toaster } from 'react-hot-toast'

const Toast = () => {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 2500,
        style: {
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 600,
          fontSize: '14px',
          borderRadius: '12px',
        },
        success: {
          style: { background: '#2D6A4F', color: '#fff' },
        },
        error: {
          style: { background: '#e53e3e', color: '#fff' },
        },
      }}
    />
  )
}

export default Toast