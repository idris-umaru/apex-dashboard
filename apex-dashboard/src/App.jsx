import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout'
import LoginPage from './components/auth/LoginPage'
import RegisterPage from './components/auth/RegisterPage'

const authStorageKey = 'apex-dashboard-auth-session-v2'
const usersStorageKey = 'apex-dashboard-users'

const getStoredUsers = () => {
  const storedUsers = window.localStorage.getItem(usersStorageKey)

  if (!storedUsers) {
    return []
  }

  try {
    return JSON.parse(storedUsers)
  } catch {
    return []
  }
}

const saveStoredUsers = (users) => {
  window.localStorage.setItem(usersStorageKey, JSON.stringify(users))
}

const AppRoutes = () => {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return window.sessionStorage.getItem(authStorageKey) === 'true'
  })

  const authenticateUser = (routeState) => {
    window.sessionStorage.setItem(authStorageKey, 'true')
    setIsAuthenticated(true)
    navigate('/dashboard', { replace: true, state: routeState })
  }

  const handleLogin = ({ email, password }) => {
    const normalizedEmail = email.toLowerCase()
    const user = getStoredUsers().find((storedUser) => storedUser.email === normalizedEmail)

    if (!user || user.password !== password) {
      return 'No account found for those login details. Create an account first.'
    }

    authenticateUser()
    return null
  }

  const handleRegister = (account) => {
    const normalizedEmail = account.email.toLowerCase()
    const users = getStoredUsers()
    const userExists = users.some((storedUser) => storedUser.email === normalizedEmail)

    if (userExists) {
      return 'An account already exists for this email. Sign in instead.'
    }

    saveStoredUsers([
      ...users,
      {
        email: normalizedEmail,
        fullName: account.fullName,
        password: account.password,
        role: account.role,
      },
    ])
    authenticateUser({ notice: 'Account created successfully.' })
    return null
  }

  const handleLogout = () => {
    window.sessionStorage.removeItem(authStorageKey)
    setIsAuthenticated(false)
    navigate('/login', { replace: true })
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage onLogin={handleLogin} />}
      />
      <Route
        path="/register"
        element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <RegisterPage onRegister={handleRegister} />}
      />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <DashboardLayout onLogout={handleLogout} /> : <Navigate to="/login" replace />}
      />
      <Route path="*" element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} replace />} />
    </Routes>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
