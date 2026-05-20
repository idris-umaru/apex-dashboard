import Button from '../common/Button'
import Card from '../common/Card'

const WidgetManager = ({ dark }) => {
  return (
    <Card dark={dark} title="Widgets">
      <p className={dark ? 'mb-4 text-sm text-slate-400' : 'mb-4 text-sm text-slate-500'}>
        Customize which finance widgets appear on your dashboard.
      </p>
      <div className="flex flex-wrap gap-2">
        <Button dark={dark} variant="secondary">
          Cash Flow
        </Button>
        <Button dark={dark} variant="secondary">
          Budgets
        </Button>
        <Button dark={dark} variant="secondary">
          Goals
        </Button>
      </div>
    </Card>
  )
}

export default WidgetManager
