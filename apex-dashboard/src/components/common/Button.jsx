const variants = {
  primary: 'bg-slate-950 text-white hover:bg-slate-800',
  secondary: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50',
}

const Button = ({ children, className = '', type = 'button', variant = 'primary', ...props }) => {
  return (
    <button
      className={`rounded-lg px-4 py-2 text-sm font-medium transition ${variants[variant]} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
