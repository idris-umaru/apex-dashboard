import { Menu, Moon, Plus, Search, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { navItems } from './Sidebar'

const Header = ({ dark, setDarkMood }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className={
        dark
          ? 'relative flex flex-col gap-4 border-b border-slate-800 bg-slate-900 px-6 py-5 md:flex-row md:items-center md:justify-between'
          : 'relative flex flex-col gap-4 border-b border-slate-200 bg-white px-6 py-5 md:flex-row md:items-center md:justify-between'
      }
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={dark ? 'text-sm font-medium text-slate-400' : 'text-sm font-medium text-slate-500'}>Dashboard</p>
          <h1 className={dark ? 'text-2xl font-semibold text-white' : 'text-2xl font-semibold text-slate-950'}>
            Financial Overview
          </h1>
        </div>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className={
            dark
              ? 'grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-slate-700 bg-slate-950 text-slate-100 transition hover:bg-slate-800 lg:hidden'
              : 'grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 lg:hidden'
          }
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {menuOpen ? (
        <nav
          className={
            dark
              ? 'grid gap-1 rounded-lg border border-slate-800 bg-slate-950 p-2 shadow-xl lg:hidden'
              : 'grid gap-1 rounded-lg border border-slate-200 bg-white p-2 shadow-xl lg:hidden'
          }
        >
          {navItems.map(({ icon: Icon, label }) => (
            <a
              className={
                dark
                  ? 'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white'
                  : 'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950'
              }
              href="#"
              key={label}
              onClick={() => setMenuOpen(false)}
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </nav>
      ) : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative block">
          <Search
            className={dark ? 'pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-500' : 'pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400'}
          />
          <input
            className={
            dark
              ? 'w-full rounded-lg border border-slate-700 bg-slate-950 py-2 pl-9 pr-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-emerald-400 sm:w-64'
              : 'w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 sm:w-64'
          }
            placeholder="Search transactions"
            type="search"
          />
        </label>
        <button
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={dark}
          className={
            dark
              ? 'flex h-10 w-16 shrink-0 items-center rounded-full border border-slate-700 bg-slate-950 p-1 transition'
              : 'flex h-10 w-16 shrink-0 items-center rounded-full border border-slate-200 bg-slate-100 p-1 transition'
          }
          onClick={() => setDarkMood((current) => !current)}
          type="button"
        >
          <span
            className={
              dark
                ? 'ml-6 grid h-7 w-7 place-items-center rounded-full bg-emerald-400 text-slate-950 transition'
                : 'grid h-7 w-7 place-items-center rounded-full bg-white text-slate-700 shadow-sm transition'
            }
          >
            {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </span>
        </button>
        <button
          className={
            dark
              ? 'inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-emerald-300'
              : 'inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800'
          }
        >
          <Plus className="h-4 w-4" />
          Add Transaction
        </button>
      </div>
    </header>
  )
}

export default Header
