import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ImageCarousel from '../components/ImageCarousel'
import YouTubeLive from '../components/YouTubeLive'
import MapEmbed from '../components/MapEmbed'
import ContactForm from '../components/ContactForm'

const Home: React.FC = () => {
  return (
    <Container className="mt-5 pt-4">
      <section id="gallery" className="card rounded mb-4" style={{ minHeight: '500px' }}>
        <div className="card-body h-100">
          <h2 className="mb-3">Peniel Church Bangalore</h2>
          <Row className="gy-4 h-100">
            <Col lg={8} className="d-flex">
              <div style={{ width: '100%', minHeight: '400px' }}>
                <ImageCarousel />
              </div>
            </Col>
            <Col lg={4} className="d-flex">
              <div style={{ width: '100%', minHeight: '400px' }}>
                <YouTubeLive videoId="00KzZWpiuYI" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Combined Contact Us Section */}
      <section id="contact" className="card rounded mb-4">
        <div className="card-body">
          <h2 className="mb-3">Find Us</h2>
          <MapEmbed placeQuery="Peniel Church - Bangalore (PGF) Telugu & English, 25, 2nd A Cross Rd, Lakshmi Layout, Rajeshwari Layout, Marathahalli, Munikollala, Bengaluru, Karnataka 560037" />
        </div>
        <div className="card-body">
          <ContactForm />
        </div>
      </section>
    </Container>
  )
}

export default Home