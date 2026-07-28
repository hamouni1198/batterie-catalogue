import { useEffect, useState } from 'react'
import { getOpenStatus } from '../lib/hours.js'
import config from '../config.js'

// Badge « Ouvert / Fermé » recalculé chaque minute (fuseau du magasin).
export default function OpenBadge() {
  const [status, setStatus] = useState(() => getOpenStatus(config.shop.openingHours))

  useEffect(() => {
    const tick = () => setStatus(getOpenStatus(config.shop.openingHours))
    tick()
    const id = setInterval(tick, 60 * 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className={`openbadge${status.open ? ' openbadge--open' : ''}`}>
      <span className="openbadge__dot" aria-hidden="true" />
      <span className="openbadge__label">{status.label}</span>
      {status.detail && <span className="openbadge__detail"> · {status.detail}</span>}
    </span>
  )
}
