import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BiUser } from 'react-icons/bi'
import logo from '/ChurchLogo.png'
import DateTime from './DateTime'

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="border-bottom">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand as={Link} to="/" className="me-2 d-flex align-items-center">
          <img src={logo} alt="Church Logo" height={32} className="me-2" />
          PGF
        </Navbar.Brand>
        <Navbar.Collapse id="main-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/service-live">Service Live</Nav.Link>
            <Nav.Link as={Link} to="/edit-images">Edit Images</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center">
          <Nav>
            <Nav.Link as={Link} to="/login" title="Login" className="d-flex align-items-center">
              <BiUser size={20} className="me-1" /> Login
            </Nav.Link>
          </Nav>
          <div className="ms-3 text-end">
            <DateTime className="small" />
          </div>
          <Navbar.Toggle aria-controls="main-nav" className="ms-2" />
        </div>
      </Container>
    </Navbar>
  )
}

export default Header