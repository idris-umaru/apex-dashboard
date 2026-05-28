import { useLocation } from 'react-router-dom'
import Header from '../dashboard/Header'
import Sidebar from '../dashboard/Sidebar'
import StatCard from '../dashboard/StatCard'
import MoneyFlowChart from '../dashboard/MoneyFlowChart'
import BudgetChart from '../dashboard/BudgetChart'
import RecentTransactions from '../dashboard/RecentTransactions'
import SavingGoals from '../dashboard/SavingGoals'
import WidgetManager from '../dashboard/WidgetManager'
import { useDashboard } from '../../hooks/useDashboard'

const DashboardLayout = ({ onLogout }) => {
  const { dark, setDarkMood, stats } = useDashboard()
  const location = useLocation()
  const notice = location.state?.notice

  return (
    <div className={dark ? 'min-h-screen bg-slate-950 text-slate-100' : 'min-h-screen bg-slate-50 text-slate-950'}>
      <div className="flex">
        <Sidebar dark={dark} />
        <div className="min-w-0 flex-1">
          <Header dark={dark} onLogout={onLogout} setDarkMood={setDarkMood} />
          <main className="space-y-6 p-4 md:p-6">
            {notice ? (
              <div
                className={
                  dark
                    ? 'rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm font-semibold text-emerald-200'
                    : 'rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700'
                }
              >
                {notice}
              </div>
            ) : null}
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <StatCard dark={dark} key={stat.label} {...stat} />
              ))}
            </section>
            <section className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
              <MoneyFlowChart dark={dark} />
              <BudgetChart dark={dark} />
            </section>
            <section className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
              <RecentTransactions dark={dark} />
              <div className="space-y-6">
                <SavingGoals dark={dark} />
                <WidgetManager dark={dark} />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
