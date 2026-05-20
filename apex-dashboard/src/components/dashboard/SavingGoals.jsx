import Card from '../common/Card'
import { savingGoals } from '../../data/mockData'

const SavingGoals = () => {
  return (
    <Card title="Saving Goals">
      <div className="space-y-4">
        {savingGoals.map((goal) => (
          <div key={goal.name}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-slate-700">{goal.name}</span>
              <span className="text-slate-500">{goal.progress}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-100">
              <div className="h-2 rounded-full bg-sky-500" style={{ width: `${goal.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default SavingGoals
