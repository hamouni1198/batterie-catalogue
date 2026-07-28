import { WhatsappIcon } from './icons/SocialIcons.jsx'

// Carte produit : photo (emplacement vide en attendant les vrais visuels),
// marque, modèle, 3 puces specs (Ah / V / CCA), dimensions, prix, CTA WhatsApp.
// `variant` ajuste quelques tailles (voir styles.css).
export default function BatteryCard({ battery, variant = 'mobile', onOrder }) {
  return (
    <article className={`card card--${variant}`}>
      {/* Emplacement photo — remplacer par <img src={battery.photo} …/> */}
      <div className="card__photo" aria-hidden="true" />

      <span className="card__brand">{battery.brand}</span>
      <span className="card__model">{battery.model}</span>

      <div className="card__specs">
        <span className="card__spec">{battery.ahText}</span>
        <span className="card__spec">{battery.vText}</span>
        <span className="card__spec">{battery.ccaText}</span>
      </div>

      <span className="card__dim">{battery.dim}</span>
      <span className="card__price">{battery.priceText}</span>

      <button type="button" className="card__cta" onClick={onOrder}>
        <WhatsappIcon size={variant === 'desktop' ? 15 : 14} />
        Commander
      </button>
    </article>
  )
}
