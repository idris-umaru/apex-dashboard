const StatCard = ({ label, value, change }) => {
  const isPositive = change?.startsWith('+')

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-3 flex items-end justify-between gap-4">
        <strong className="text-2xl font-semibold text-slate-950">{value}</strong>
        {change ? (
          <span className={isPositive ? 'text-sm font-medium text-emerald-600' : 'text-sm font-medium text-rose-600'}>
            {change}
          </span>
        ) : null}
      </div>
    </article>
  )
}

export default StatCard
