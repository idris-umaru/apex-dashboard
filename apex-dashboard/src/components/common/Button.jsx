const variants = {
  light: {
    primary: 'bg-slate-950 text-white hover:bg-slate-800',
    secondary: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50',
  },
  dark: {
    primary: 'bg-emerald-400 text-slate-950 hover:bg-emerald-300',
    secondary: 'border border-slate-700 bg-slate-950 text-slate-200 hover:bg-slate-800',
  },
}

const Button = ({ children, className = '', dark, type = 'button', variant = 'primary', ...props }) => {
  const mood = dark ? 'dark' : 'light'

  return (
    <button
      className={`rounded-lg px-4 py-2 text-sm font-medium transition ${variants[mood][variant]} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
