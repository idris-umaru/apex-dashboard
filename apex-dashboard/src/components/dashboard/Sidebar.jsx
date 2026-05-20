const navItems = ['Overview', 'Transactions', 'Budgets', 'Goals', 'Reports']

const Sidebar = () => {
  return (
    <aside className="hidden min-h-screen w-64 border-r border-slate-200 bg-slate-950 px-4 py-6 text-white lg:block">
      <div className="mb-8 px-2">
        <h2 className="text-xl font-semibold">apex-dashboard</h2>
        <p className="text-sm text-slate-400">Personal finance</p>
      </div>
      <nav className="space-y-1">
        {navItems.map((item) => (
          <a
            className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            href="#"
            key={item}
          >
            {item}
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
