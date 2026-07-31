import { useState } from 'react'
import { WhatsappIcon } from './icons/SocialIcons.jsx'

// Carte produit — présentation « ligne compacte » : à gauche la photo du
// produit si disponible (sinon un badge capacité Ah), au centre marque + modèle
// + specs, à droite prix + CTA WhatsApp.
export default function BatteryCard({ battery, variant = 'mobile', onOrder, context }) {
  const [imgOk, setImgOk] = useState(true)
  const hasPhoto = Boolean(battery.photo) && imgOk

  return (
    <article className={`card card--${variant}`}>
      <div className={`card__badge${hasPhoto ? ' card__badge--photo' : ''}`}>
        {hasPhoto ? (
          <img
            className="card__photo-img"
            src={battery.photo}
            alt={`${battery.brand} ${battery.model}`}
            loading="lazy"
            onError={() => setImgOk(false)}
          />
        ) : (
          <>
            <b>{battery.ah}</b>
            <i>Ah</i>
          </>
        )}
      </div>

      <div className="card__mid">
        <span className="card__brand">{battery.brand}</span>
        <span className="card__model">{battery.model}</span>
        <div className="card__specs">
          {context && <span className="card__spec card__spec--ctx">{context}</span>}
          <span className="card__spec">{battery.ahText}</span>
          <span className="card__spec">{battery.vText}</span>
          <span className="card__spec">{battery.ccaText}</span>
        </div>
        <span className="card__dim">{battery.dim}</span>
      </div>

      <div className="card__right">
        <span className="card__price">{battery.priceText}</span>
        <button type="button" className="card__cta" onClick={onOrder}>
          <WhatsappIcon size={variant === 'desktop' ? 15 : 14} />
          Commander
        </button>
      </div>
    </article>
  )
}
