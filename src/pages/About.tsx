import React from 'react'
import { Container } from 'react-bootstrap'

const About: React.FC = () => {
  return (
    <Container className="mt-5 pt-4">
      <section className="py-3">
      <div className="container">
        <div className="about-head text-center py-3" style={{ color: '#040231ff' }}>
        <h2>About <span>PGF Church</span></h2>
        </div>
        <div className="about-cnt text-left" style={{ color: '#170869ff' }}>
        <p>Peniel Church fellowship is a renowned church with a legacy of over four decades of excellence and innovation. As a leading church in the community, PGF Church has been driving spiritual development across the nation. We started our journey with the flagship grey cement plant in Nimbahera, Rajasthan, in 1975. Since then, we have grown into a leading cement company in India.</p>
        <p>With an installed grey cement capacity of 24 MnTPA and a global presence in over 43 countries, PGF stands out as a trusted name in quality and reliability. We are also among the world's leading producers of white cement, with an installed capacity of 1.20 MnTPA, supported by cutting-edge technology and a commitment to sustainability.</p>
        <p>Driven by a vision to empower nation-building and a mission to innovate, PGF combines integrity, trust, and customer-centric values to set industry benchmarks. Explore PGF, a global leader and a preferred choice among cement manufacturers in India.</p>
        </div>
      </div>
      </section>
    </Container>
  )
}

export default About