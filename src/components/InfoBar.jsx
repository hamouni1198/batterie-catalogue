import config from '../config.js'

// Bandeau infos : horaires + adresse à gauche, bouton « Itinéraire » à droite.
// Mobile : visible seulement à l'accueil (aucun engin choisi).
// Desktop : toujours visible, en bas de la colonne gauche.
export default function InfoBar() {
  const { shop } = config
  return (
    <div className="infobar">
      <div className="infobar__text">
        <span className="infobar__hours">{shop.hours}</span>
        <span className="infobar__address">{shop.address}</span>
      </div>
      <a
        className="infobar__cta"
        href={shop.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Itinéraire
      </a>
    </div>
  )
}
