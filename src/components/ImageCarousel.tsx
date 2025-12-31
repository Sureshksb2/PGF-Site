import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useImages } from '../context/ImagesContext'

const ImageCarousel: React.FC = () => {
  const { images } = useImages()
  return (
    <Carousel interval={3000} pause="hover" className="shadow-sm">
      {images.map((src, idx) => (
        <Carousel.Item key={idx}>
          <img
            src={src}
            alt={`Slide ${idx + 1}`}
            className="d-block w-100"
            style={{ maxHeight: 400, objectFit: 'cover' }}
          />
            {/* <Carousel.Caption>
            <h5>Worship Moments {idx + 1}</h5>
            </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ImageCarousel