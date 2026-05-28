import { navItems } from '../../data/navigation'

const Sidebar = ({ dark }) => {
  return (
    <aside
      className={
        dark
          ? 'hidden min-h-screen w-64 border-r border-slate-800 bg-slate-950 px-4 py-6 text-white lg:block'
          : 'hidden min-h-screen w-64 border-r border-slate-200 bg-slate-950 px-4 py-6 text-white lg:block'
      }
    >
      <div className="mb-8 px-2">
        <h2 className="text-xl font-semibold">apex-dashboard</h2>
        <p className="text-sm text-slate-400">Personal finance</p>
      </div>
      <nav className="space-y-1">
        {navItems.map(({ icon: Icon, label }) => (
          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            href="#"
            key={label}
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
