import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Form, Button, Alert, Row, Col } from 'react-bootstrap'

const SERVICE_ID = 'your_service_id'
const TEMPLATE_ID = 'your_template_id'
const PUBLIC_KEY = 'your_public_key'

const ContactForm: React.FC = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle'|'success'|'error'|'sending'>('idle')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { firstName, lastName, email, subject, phone, message }, PUBLIC_KEY)
      setStatus('success')
      setFirstName(''); setLastName(''); setEmail(''); setSubject(''); setPhone(''); setMessage('')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="row">
      <div className="col-12 col-md-6 col-lg-5">
        <h2>Contact Us</h2>
        <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
        <p className="lead">It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
      </div>
      <div className="col-12 col-md-6 ml-auto pt-5 pt-md-0">
        <Form onSubmit={onSubmit}>
          <Row>
            <Col><Form.Control type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required /></Col>
            <Col><Form.Control type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required /></Col>
          </Row>
          <Row className="mt-4">
            <Col><Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required /></Col>
          </Row>
          <Row className="mt-4">
            <Col><Form.Control type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required /></Col>
          </Row>
          <Row className="mt-4">
            <Col className="text-center"><Form.Control type="tel" placeholder="Phone No." value={phone} onChange={(e) => setPhone(e.target.value)} required /></Col>
          </Row>
          <Row className="mt-4">
            <Col><Form.Control as="textarea" rows={3} placeholder="How can we help?" value={message} onChange={(e) => setMessage(e.target.value)} required /></Col>
          </Row>
          <Row className="mt-4">
            <Col><Button type="submit" className="btn btn-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Submit'}</Button></Col>
          </Row>
          <Row className="mt-4">
            {status === 'success' && <Col><Alert variant="success">Message sent successfully!</Alert></Col>}
            {status === 'error' && <Col><Alert variant="danger">Failed to send. Try again.</Alert></Col>}
          </Row>
        </Form>
      </div>
    </div>
  )
}

export default ContactForm