import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Button, Alert } from 'react-bootstrap'

const Login: React.FC = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const ok = await login(username, password)
    if (ok) navigate('/edit-images')
    else setError('Invalid credentials')
  }

  return (
    <Container className="mt-5 pt-4" style={{ maxWidth: 480 }}>
      <h2 className="mb-3">Admin Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={onSubmit} className="shadow-sm p-3 bg-white rounded">
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  )
}

export default Login