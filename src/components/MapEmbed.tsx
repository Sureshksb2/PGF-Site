import React from 'react'
import { Card } from 'react-bootstrap'

type Props = { placeQuery: string }

const MapEmbed: React.FC<Props> = ({ placeQuery }) => {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(placeQuery)}&output=embed`
  return (
    <Card className="shadow-sm">
      <Card.Header>Find Us</Card.Header>
      <Card.Body className="p-0">
        <div style={{ position: 'relative', height: '340px' }}>
          <iframe
            title="Church Map"
            src={src}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Card.Body>
    </Card>
  )
}

export default MapEmbed