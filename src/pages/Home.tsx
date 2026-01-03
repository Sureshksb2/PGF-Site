import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ImageCarousel from '../components/ImageCarousel'
import MapEmbed from '../components/MapEmbed'
import ContactForm from '../components/ContactForm'
import ContactSection from '../components/ContactSection'
import ChurchServiceTimings from '../components/ChurchServiceTimings';
import ServiceLive from '../components/ServiceLive';
import YouTubeHighlights from '../components/YouTubeHighlights';
import SpecialEvents from '../components/SpecialEvents';
import '../styles/ServiceTimings.css';
const Home: React.FC = () => {

  // ✅ Easy-to-edit data structure
  const timings = {
    Sunday: [
      { time: "9:00 AM - 11:00 AM", service: "Telugu Service" },
      { time: "11:00 AM - 1:00 PM", service: "Telugu Service" },
      { time: "6:30 PM - 8:00 PM", service: "English Service" },
    ],
    Saturday: [
      { time: "Fasting Prayer", service: "" },
      { time: "1st Saturday", service: "Youth Meeting" },
    ],
    Wednesday: [
      { time: "Bible Study", service: "Zoom / Google Meet" },
    ],
  };

  return (
    <Container className="mt-5 pt-4">
       <section id="gallery" className="card rounded mb-4" style={{ minHeight: "500px" }}>
      <div className="card-body h-100">
        <h2 className="mb-3">Peniel Church Bangalore</h2>
        <Row className="gy-4 h-100">
          {/* Left side: Image Carousel */}
          <Col lg={8} className="d-flex">
            <div style={{ width: "100%", minHeight: "400px" }}>
              <ImageCarousel />
            </div>
          </Col>

          {/* Right side: Unified Service Timings Box */}
          <Col lg={4} className="d-flex">
            <div className="service-timings-box w-100">
              <h3 className="mb-3">⛪ Worship Timings</h3>
              {Object.entries(timings).map(([day, services], index) => (
                <div key={index} className={`service-section section-${day.toLowerCase()}`}>
                  <h4>{day}</h4>
                  <ul className="list-unstyled">
                    {services.map((item, i) => (
                      <li key={i}>
                        <strong>{item.time}</strong> {item.service && `– ${item.service}`}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>


      {/* Church Service Timings Section */}
      <section className="card rounded mb-4">
        <div className="card-body">
          <ChurchServiceTimings />
        </div>
      </section>


      {/* Service Live Section */}
      <section className="card rounded mb-4">
        <div className="card-body">
          <ServiceLive />
        </div>
      </section>

      {/* Special Event Highlights Section */}
      <section className="card rounded mb-4">
        <div className="card-body">
          <YouTubeHighlights />
        </div>
      </section>

      {/* Special Events Section */}
      <section className="card rounded mb-4">
        <div className="card-body">
          <SpecialEvents />
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
      <section className="card rounded mb-4">
        <div className="card-body">
          <ContactSection />
        </div>
      </section>
    </Container>
  )
}

export default Home