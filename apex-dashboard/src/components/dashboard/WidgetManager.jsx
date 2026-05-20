import Button from '../common/Button'
import Card from '../common/Card'

const WidgetManager = () => {
  return (
    <Card title="Widgets">
      <p className="mb-4 text-sm text-slate-500">Customize which finance widgets appear on your dashboard.</p>
      <div className="flex flex-wrap gap-2">
        <Button variant="secondary">Cash Flow</Button>
        <Button variant="secondary">Budgets</Button>
        <Button variant="secondary">Goals</Button>
      </div>
    </Card>
  )
}

export default WidgetManager
