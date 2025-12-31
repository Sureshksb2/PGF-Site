import React, { useEffect, useState } from 'react'

type Props = { className?: string }

const DateTime: React.FC<Props> = ({ className }) => {
  const [now, setNow] = useState<Date>(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={className ?? 'd-flex align-items-center'}>
      <span className="me-2 text-secondary">{now.toLocaleDateString()}</span>
      <span className="text-success">{now.toLocaleTimeString()}</span>
    </div>
  )
}

export default DateTime