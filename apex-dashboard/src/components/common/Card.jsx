const Card = ({ children, className = '', dark, title }) => {
  return (
    <section
      className={`rounded-lg border p-5 shadow-sm ${
        dark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
      } ${className}`}
    >
      {title ? (
        <h2 className={dark ? 'mb-4 text-lg font-semibold text-white' : 'mb-4 text-lg font-semibold text-slate-950'}>
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  )
}

export default Card
