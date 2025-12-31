import React from 'react'
import { Card } from 'react-bootstrap'

type Props = { videoId: string }

const YouTubeLive: React.FC<Props> = ({ videoId }) => {
  return (
    <Card className="shadow-sm">
      <Card.Header>Live Stream</Card.Header>
      <Card.Body className="p-2">
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            title="YouTube Live"
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0
            }}
          />
        </div>
      </Card.Body>
    </Card>
  )
}

export default YouTubeLive