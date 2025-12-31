import React from 'react'
import { Container } from 'react-bootstrap'
import ContactForm from '../components/ContactForm'
import MapEmbed from '../components/MapEmbed'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Contact: React.FC = () => {
  return (
    <Container className="mt-5 pt-4">
      {/* Combined Contact Us Section */}      
      <section className="card rounded mb-4">
        <div className="card-body">
          <button 
            className="btn btn-sm btn-outline-primary mb-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mapCollapse"
            aria-expanded="false"
            aria-controls="mapCollapse"
          >
            📍 Find Us
          </button>
          <div className="collapse" id="mapCollapse">
            <h2 className="mb-3">Find Us</h2>
            <MapEmbed placeQuery="Peniel Church - Bangalore (PGF) Telugu & English, 25, 2nd A Cross Rd, Lakshmi Layout, Rajeshwari Layout, Marathahalli, Munikollala, Bengaluru, Karnataka 560037" />
          </div>
        </div>        
        <div className="card-body">
          <ContactForm />
        </div>
        
      </section>
    </Container>
  )
}

export default Contact