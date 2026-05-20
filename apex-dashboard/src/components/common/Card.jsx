const Card = ({ children, className = '', title }) => {
  return (
    <section className={`rounded-lg border border-slate-200 bg-white p-5 shadow-sm ${className}`}>
      {title ? <h2 className="mb-4 text-lg font-semibold text-slate-950">{title}</h2> : null}
      {children}
    </section>
  )
}

export default Card
