import Card from '../common/Card'
import { budgets } from '../../data/mockData'

const BudgetChart = ({ dark }) => {
  return (
    <Card dark={dark} title="Budget Usage">
      <div className="space-y-4">
        {budgets.map((budget) => (
          <div key={budget.category}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className={dark ? 'font-medium text-slate-200' : 'font-medium text-slate-700'}>
                {budget.category}
              </span>
              <span className={dark ? 'text-slate-400' : 'text-slate-500'}>{budget.used}%</span>
            </div>
            <div className={dark ? 'h-2 rounded-full bg-slate-800' : 'h-2 rounded-full bg-slate-100'}>
              <div className="h-2 rounded-full bg-emerald-500" style={{ width: `${budget.used}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default BudgetChart
