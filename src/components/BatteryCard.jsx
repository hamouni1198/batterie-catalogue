import { useState } from 'react'
import { WhatsappIcon } from './icons/SocialIcons.jsx'

// Carte produit — présentation « photo en avant » : grande image du produit en
// haut (ou badge capacité Ah si pas de photo), prix en pastille, puis marque,
// modèle, specs, dimensions et bouton Commander (WhatsApp).
// Gère aussi les chargeurs / boosters (battery.charger) : specs adaptées.
export default function BatteryCard({ battery, variant = 'mobile', onOrder, context }) {
  const [imgOk, setImgOk] = useState(true)
  const hasPhoto = Boolean(battery.photo) && imgOk
  const isCharger = Boolean(battery.charger)
  const priceLabel = isCharger && !battery.price ? 'Sur demande' : battery.priceText

  return (
    <article className={`card card--${variant}`}>
      <div className={`card__photo${hasPhoto ? ' card__photo--img' : ''}`}>
        {hasPhoto ? (
          <img
            className="card__photo-img"
            src={battery.photo}
            alt={`${battery.brand} ${battery.model}`}
            loading="lazy"
            onError={() => setImgOk(false)}
          />
        ) : isCharger ? (
          <div className="card__ah">
            <b>⚡</b>
            <i>Chargeur</i>
          </div>
        ) : (
          <div className="card__ah">
            <b>{battery.ah}</b>
            <i>Ah</i>
          </div>
        )}
        <span className="card__price-tag">{priceLabel}</span>
      </div>

      <div className="card__body">
        <span className="card__brand">{battery.brand}</span>
        <span className="card__model">{battery.model}</span>
        <div className="card__specs">
          {context && <span className="card__spec card__spec--ctx">{context}</span>}
          {isCharger ? (
            battery.spec && <span className="card__spec">{battery.spec}</span>
          ) : (
            <>
              <span className="card__spec">{battery.ahText}</span>
              <span className="card__spec">{battery.vText}</span>
              <span className="card__spec">{battery.ccaText}</span>
            </>
          )}
        </div>
        {(isCharger ? battery.fits : battery.dim) && (
          <span className="card__dim">{isCharger ? battery.fits : battery.dim}</span>
        )}
        <button type="button" className="card__cta" onClick={onOrder}>
          <WhatsappIcon size={14} />
          Commander
        </button>
      </div>
    </article>
  )
}
