import { useEffect, useState } from 'react'
import { budgets, moneyFlow, savingGoals, stats, transactions } from '../data/mockData'

const getInitialDarkMood = () => {
  if (typeof window === 'undefined') return false

  const savedMood = window.localStorage.getItem('apex-dashboard-dark-mood')

  if (savedMood) return savedMood === 'dark'

  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const useDashboard = () => {
  const [dark, setDarkMood] = useState(getInitialDarkMood)

  useEffect(() => {
    window.localStorage.setItem('apex-dashboard-dark-mood', dark ? 'dark' : 'light')
  }, [dark])

  return {
    budgets,
    dark,
    moneyFlow,
    savingGoals,
    setDarkMood,
    stats,
    transactions,
  }
}
