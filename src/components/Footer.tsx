import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-light border-top text-center py-1 fixed-bottom">
      <small>© {new Date().getFullYear()} PGF Church • All rights reserved</small>
    </footer>
  )
}

export default Footer