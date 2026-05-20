import Card from '../common/Card'
import { moneyFlow } from '../../data/mockData'

const MoneyFlowChart = () => {
  const maxValue = Math.max(...moneyFlow.map((item) => Math.max(item.income, item.expense)))

  return (
    <Card title="Money Flow">
      <div className="flex h-64 items-end gap-4">
        {moneyFlow.map((item) => (
          <div className="flex flex-1 flex-col items-center gap-2" key={item.month}>
            <div className="flex h-48 w-full items-end justify-center gap-1">
              <span
                className="w-4 rounded-t bg-emerald-500"
                style={{ height: `${(item.income / maxValue) * 100}%` }}
                title={`Income ${item.income}`}
              />
              <span
                className="w-4 rounded-t bg-rose-400"
                style={{ height: `${(item.expense / maxValue) * 100}%` }}
                title={`Expense ${item.expense}`}
              />
            </div>
            <span className="text-xs font-medium text-slate-500">{item.month}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default MoneyFlowChart
