import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

const StatCard = ({ dark, label, value, change }) => {
  const isPositive = change?.startsWith('+')

  return (
    <article
      className={
        dark
          ? 'rounded-lg border border-slate-800 bg-slate-900 p-5 shadow-sm'
          : 'rounded-lg border border-slate-200 bg-white p-5 shadow-sm'
      }
    >
      <p className={dark ? 'text-sm font-medium text-slate-400' : 'text-sm font-medium text-slate-500'}>{label}</p>
      <div className="mt-3 flex items-end justify-between gap-4">
        <strong className={dark ? 'text-2xl font-semibold text-white' : 'text-2xl font-semibold text-slate-950'}>
          {value}
        </strong>
        {change ? (
          <span
            className={
              isPositive
                ? 'inline-flex items-center gap-1 text-sm font-medium text-emerald-600'
                : 'inline-flex items-center gap-1 text-sm font-medium text-rose-600'
            }
          >
            {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
            {change}
          </span>
        ) : null}
      </div>
    </article>
  )
}

export default StatCard
