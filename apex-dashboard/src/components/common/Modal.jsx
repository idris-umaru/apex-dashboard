const Modal = ({ children, onClose, open, title }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 p-4">
      <section className="w-full max-w-lg rounded-lg bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
          <button className="text-sm font-medium text-slate-500 hover:text-slate-950" onClick={onClose} type="button">
            Close
          </button>
        </div>
        {children}
      </section>
    </div>
  )
}

export default Modal
