import { useEffect, useState } from 'react'
import BatteryCard from './BatteryCard.jsx'
import SearchIcon from './icons/SearchIcon.jsx'
import { allBrands, batteriesOfBrand } from '../lib/battery.js'
import { PRICE_FILTERS } from '../hooks/useCatalogue.js'
import { openWhatsapp } from '../lib/whatsapp.js'
import config from '../config.js'

// Filtre prix (mêmes seuils que la vue par engin). Les prix inconnus (null,
// « ?? ») n'apparaissent que sous « Tous ».
function matchesPrice(price, f) {
  if (f === 'all') return true
  if (price == null) return false
  if (f === 'low') return price <= 800
  if (f === 'mid') return price >= 800 && price <= 1500
  if (f === 'high') return price > 1500
  return true
}

// Navigateur par marque : liste toutes les marques du catalogue ; au clic sur
// une marque, affiche toutes ses batteries (tous engins confondus) — même
// présentation que la vue par engin : recherche + filtres prix + grille.
export default function BrandBrowser({ vehicles, onClose }) {
  const [brand, setBrand] = useState(null)
  const [query, setQuery] = useState('')
  const [priceFilter, setPriceFilter] = useState('all')

  const brands = allBrands(vehicles)
  const all = brand ? batteriesOfBrand(vehicles, brand, config.showPrices) : []
  const q = query.trim().toLowerCase()
  const list = all.filter((b) => {
    const hay = `${b.brand} ${b.model} ${b.vehicleName} ${b.ah} ${b.fits || ''} ${b.spec || ''}`.toLowerCase()
    if (q && !hay.includes(q)) return false
    return matchesPrice(b.price, priceFilter)
  })

  // Fermeture au clavier (Échap).
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (brand) reset()
        else onClose()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [brand, onClose])

  function reset() {
    setBrand(null)
    setQuery('')
    setPriceFilter('all')
  }
  const openBrand = (b) => {
    setQuery('')
    setPriceFilter('all')
    setBrand(b)
  }

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
                onClick={() => openBrand(b.brand)}
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
            <div className="cat__filters cat__filters--brands">
              <div className="searchbox">
                <span className="searchbox__icon">
                  <SearchIcon size={16} />
                </span>
                <input
                  className="cat__search"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Modèle, engin ou capacité…"
                />
              </div>
              <div className="cat__chips">
                {PRICE_FILTERS.map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    className={`chip${f.key === priceFilter ? ' chip--active' : ''}`}
                    onClick={() => setPriceFilter(f.key)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
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
            <button type="button" className="finder__back" onClick={reset}>
              ← Toutes les marques
            </button>
          </>
        )}
      </div>
    </div>
  )
}
