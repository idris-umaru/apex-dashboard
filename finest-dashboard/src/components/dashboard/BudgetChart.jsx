import Card from '../common/Card'
import { budgets } from '../../data/mockData'

const BudgetChart = () => {
  return (
    <Card title="Budget Usage">
      <div className="space-y-4">
        {budgets.map((budget) => (
          <div key={budget.category}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-slate-700">{budget.category}</span>
              <span className="text-slate-500">{budget.used}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-100">
              <div className="h-2 rounded-full bg-emerald-500" style={{ width: `${budget.used}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default BudgetChart
