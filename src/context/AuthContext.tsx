import React, { createContext, useContext, useEffect, useState } from 'react'

type AuthContextType = {
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    const saved = localStorage.getItem('auth')
    setIsAuthenticated(saved === 'true')
  }, [])

  const login = async (username: string, password: string) => {
    // Replace with your own simple credentials or hook into an external provider
    const ok = username === 'admin' && password === 'pass@123'
    if (ok) {
      localStorage.setItem('auth', 'true')
      setIsAuthenticated(true)
    }
    return ok
  }

  const logout = () => {
    localStorage.removeItem('auth')
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}