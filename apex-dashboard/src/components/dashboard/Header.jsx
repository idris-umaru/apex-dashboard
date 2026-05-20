const Header = ({ dark, setDarkMood }) => {
  return (
    <header
      className={
        dark
          ? 'flex flex-col gap-4 border-b border-slate-800 bg-slate-900 px-6 py-5 md:flex-row md:items-center md:justify-between'
          : 'flex flex-col gap-4 border-b border-slate-200 bg-white px-6 py-5 md:flex-row md:items-center md:justify-between'
      }
    >
      <div>
        <p className={dark ? 'text-sm font-medium text-slate-400' : 'text-sm font-medium text-slate-500'}>Dashboard</p>
        <h1 className={dark ? 'text-2xl font-semibold text-white' : 'text-2xl font-semibold text-slate-950'}>
          Financial Overview
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <input
          className={
            dark
              ? 'w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-emerald-400 md:w-64'
              : 'w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-emerald-500 md:w-64'
          }
          placeholder="Search transactions"
          type="search"
        />
        <button
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={dark}
          className={
            dark
              ? 'flex h-10 w-16 items-center rounded-full border border-slate-700 bg-slate-950 p-1 transition'
              : 'flex h-10 w-16 items-center rounded-full border border-slate-200 bg-slate-100 p-1 transition'
          }
          onClick={() => setDarkMood((current) => !current)}
          type="button"
        >
          <span
            className={
              dark
                ? 'ml-6 h-7 w-7 rounded-full bg-emerald-400 transition'
                : 'h-7 w-7 rounded-full bg-white shadow-sm transition'
            }
          />
        </button>
        <button className={dark ? 'rounded-lg bg-emerald-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-emerald-300' : 'rounded-lg bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800'}>
          Add Transaction
        </button>
      </div>
    </header>
  )
}

export default Header
