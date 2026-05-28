import Card from '../common/Card'
import { savingGoals } from '../../data/mockData'

const SavingGoals = ({ dark }) => {
  return (
    <Card dark={dark} title="Saving Goals">
      <div className="space-y-4">
        {savingGoals.map((goal) => (
          <div key={goal.name}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className={dark ? 'font-medium text-slate-200' : 'font-medium text-slate-700'}>{goal.name}</span>
              <span className={dark ? 'text-slate-400' : 'text-slate-500'}>{goal.progress}%</span>
            </div>
            <div className={dark ? 'h-2 rounded-full bg-slate-800' : 'h-2 rounded-full bg-slate-100'}>
              <div className="h-2 rounded-full bg-sky-500" style={{ width: `${goal.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default SavingGoals
