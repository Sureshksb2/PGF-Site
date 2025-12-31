import React, { useState } from 'react'
import { useImages } from '../context/ImagesContext'
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap'

const EditImages: React.FC = () => {
  const { images, setImages } = useImages()
  const [local, setLocal] = useState<string[]>(images)

  const onChange = (idx: number, value: string) => {
    const copy = [...local]
    copy[idx] = value
    setLocal(copy)
  }

  const onSave = () => {
    setImages(local)
    alert('Images updated (client-side).')
  }

  return (
    <Container className="mt-5 pt-4">
      <h2>Edit Slideshow Images</h2>
      <Row className="gy-3">
        {local.map((url, idx) => (
          <Col md={6} key={idx}>
            <Card className="p-3">
              <Form.Group>
                <Form.Label>Image {idx + 1} URL</Form.Label>
                <Form.Control value={url} onChange={(e) => onChange(idx, e.target.value)} />
              </Form.Group>
              <img src={url} alt={`Preview ${idx + 1}`} className="img-fluid mt-2 rounded" />
            </Card>
          </Col>
        ))}
      </Row>
      <div className="mt-3 d-flex gap-2">
        <Button onClick={onSave}>Save</Button>
        <Button variant="secondary" onClick={() => setLocal(images)}>Reset</Button>
      </div>
    </Container>
  )
}

export default EditImages