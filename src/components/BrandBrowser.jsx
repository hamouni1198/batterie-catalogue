import { useEffect, useState } from 'react'
import BatteryCard from './BatteryCard.jsx'
import { allBrands, batteriesOfBrand } from '../lib/battery.js'
import { openWhatsapp } from '../lib/whatsapp.js'
import config from '../config.js'

// Navigateur par marque : liste toutes les marques du catalogue ; au clic sur
// une marque, affiche toutes ses batteries (tous engins confondus).
export default function BrandBrowser({ vehicles, onClose }) {
  const [brand, setBrand] = useState(null)
  const brands = allBrands(vehicles)
  const list = brand ? batteriesOfBrand(vehicles, brand, config.showPrices) : []

  // Fermeture au clavier (Échap).
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (brand) setBrand(null)
        else onClose()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [brand, onClose])

  return (
    <div className="finder finder--brands" role="dialog" aria-modal="true" aria-label="Marques">
      <div className="finder__backdrop" onClick={onClose} />
      <div className="finder__panel">
        <div className="finder__head">
          <div className="finder__heading">
            <span className="finder__eyebrow">Marques</span>
            <span className="finder__title">{brand || 'Toutes les marques'}</span>
          </div>
          <button type="button" className="finder__close" onClick={onClose} aria-label="Fermer">
            ×
          </button>
        </div>

        {!brand && (
          <div className="brandgrid">
            {brands.map((b) => (
              <button
                key={b.brand}
                type="button"
                className="brandcard"
                onClick={() => setBrand(b.brand)}
              >
                <span className="brandcard__name">{b.brand}</span>
                <span className="brandcard__count">
                  {b.count} modèle{b.count > 1 ? 's' : ''}
                </span>
              </button>
            ))}
          </div>
        )}

        {brand && (
          <>
            <span className="brandlist__count">
              {list.length} batterie{list.length > 1 ? 's' : ''} · {brand}
            </span>
            <div className="brandlist">
              {list.map((b) => (
                <BatteryCard
                  key={b.id}
                  battery={b}
                  variant="mobile"
                  context={b.vehicleName}
                  onOrder={() => openWhatsapp(b, b.vehicleName, config)}
                />
              ))}
            </div>
            <button type="button" className="finder__back" onClick={() => setBrand(null)}>
              ← Toutes les marques
            </button>
          </>
        )}
      </div>
    </div>
  )
}
