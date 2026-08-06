import BatteryCard from './BatteryCard.jsx'
import SearchIcon from './icons/SearchIcon.jsx'
import { openWhatsapp } from '../lib/whatsapp.js'
import config from '../config.js'

// Contenu du catalogue partagé par la feuille mobile (2a) et le panneau
// desktop (2b) : en-tête (titre + compteur + fermer), recherche, chips prix,
// grille de cartes et état vide.
export default function Catalogue({ variant, catalogue }) {
  const { vehicle, title, countText, query, setQuery, chips, list, isEmpty, close } = catalogue

  return (
    <>
      <div className="cat__header">
        <div className="cat__heading">
          <span className="cat__title">{title}</span>
          <span className="cat__count">{countText}</span>
        </div>
        <button type="button" className="cat__close" onClick={close} aria-label="Fermer">
          ×
        </button>
      </div>

      <div className="cat__filters">
        <div className="searchbox">
          <span className="searchbox__icon">
            <SearchIcon size={16} />
          </span>
          <input
            className="cat__search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Marque, modèle ou véhicule…"
          />
        </div>
        <div className="cat__chips">
          {chips.map((c) => (
            <button
              key={c.key}
              type="button"
              className={`chip${c.active ? ' chip--active' : ''}`}
              onClick={c.onClick}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="cat__grid">
        {list.map((b) => (
          <BatteryCard
            key={b.id}
            battery={b}
            variant={variant}
            onOrder={() => openWhatsapp(b, vehicle.name, config)}
          />
        ))}
      </div>

      {isEmpty && (
        <div className="cat__empty">
          Aucune batterie ne correspond. Essaie un autre filtre de prix ou envoie-nous le modèle du
          véhicule sur WhatsApp.
        </div>
      )}
    </>
  )
}
