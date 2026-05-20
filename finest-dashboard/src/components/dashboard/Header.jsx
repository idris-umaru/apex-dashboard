const Header = () => {
  return (
    <header className="flex flex-col gap-4 border-b border-slate-200 bg-white px-6 py-5 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">Dashboard</p>
        <h1 className="text-2xl font-semibold text-slate-950">Financial Overview</h1>
      </div>
      <div className="flex items-center gap-3">
        <input
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-emerald-500 md:w-64"
          placeholder="Search transactions"
          type="search"
        />
        <button className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
          Add Transaction
        </button>
      </div>
    </header>
  )
}

export default Header
