import Header from '../dashboard/Header'
import Sidebar from '../dashboard/Sidebar'
import StatCard from '../dashboard/StatCard'
import MoneyFlowChart from '../dashboard/MoneyFlowChart'
import BudgetChart from '../dashboard/BudgetChart'
import RecentTransactions from '../dashboard/RecentTransactions'
import SavingGoals from '../dashboard/SavingGoals'
import WidgetManager from '../dashboard/WidgetManager'
import { stats } from '../../data/mockData'

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="flex">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <Header />
          <main className="space-y-6 p-4 md:p-6">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </section>
            <section className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
              <MoneyFlowChart />
              <BudgetChart />
            </section>
            <section className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
              <RecentTransactions />
              <div className="space-y-6">
                <SavingGoals />
                <WidgetManager />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
