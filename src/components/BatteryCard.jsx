import { WhatsappIcon } from './icons/SocialIcons.jsx'

// Carte produit — présentation « ligne compacte » : badge capacité (Ah) à
// gauche, marque + modèle + specs au centre, prix + CTA WhatsApp à droite.
// Pas de photo (évite l'emplacement vide) — la capacité sert de repère visuel.
export default function BatteryCard({ battery, variant = 'mobile', onOrder }) {
  return (
    <article className={`card card--${variant}`}>
      <div className="card__badge">
        <b>{battery.ah}</b>
        <i>Ah</i>
      </div>

      <div className="card__mid">
        <span className="card__brand">{battery.brand}</span>
        <span className="card__model">{battery.model}</span>
        <div className="card__specs">
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
