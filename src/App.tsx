import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import EditImages from './pages/EditImages'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import { ImagesProvider } from './context/ImagesContext'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ImagesProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/edit-images"
              element={
                <ProtectedRoute>
                  <EditImages />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </ImagesProvider>
    </AuthProvider>
  )
}

export default App