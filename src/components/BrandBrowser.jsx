import { useEffect, useState } from 'react'
import BatteryCard from './BatteryCard.jsx'
import SearchIcon from './icons/SearchIcon.jsx'
import { allBrands, batteriesOfBrand } from '../lib/battery.js'
import { PRICE_FILTERS } from '../hooks/useCatalogue.js'
import { useDragSheet } from '../hooks/useDragSheet.js'
import { openWhatsapp } from '../lib/whatsapp.js'
import config from '../config.js'

// Filtre prix (mêmes seuils que la vue par engin). Les prix inconnus (« ?? »,
// null) n'apparaissent que sous « Tous ».
function matchesPrice(price, f) {
  if (f === 'all') return true
  if (price == null) return false
  if (f === 'low') return price <= 800
  if (f === 'mid') return price >= 800 && price <= 1500
  if (f === 'high') return price > 1500
  return true
}

// Navigateur par marque. Sur mobile : même feuille glissable que la vue par
// engin (glisser vers le haut = plein écran, vers le bas = fermer), mêmes
// cartes, recherche et filtres prix. Sur desktop : panneau modal élargi.
export default function BrandBrowser({ vehicles, onClose, variant = 'mobile' }) {
  const [brand, setBrand] = useState(null)
  const [query, setQuery] = useState('')
  const [priceFilter, setPriceFilter] = useState('all')
  const sheet = useDragSheet(onClose)

  const brands = allBrands(vehicles)
  const all = brand ? batteriesOfBrand(vehicles, brand, config.showPrices) : []
  const q = query.trim().toLowerCase()
  const list = all.filter((b) => {
    const hay = `${b.brand} ${b.model} ${b.vehicleName} ${b.ah} ${b.fits || ''} ${b.spec || ''}`.toLowerCase()
    if (q && !hay.includes(q)) return false
    return matchesPrice(b.price, priceFilter)
  })

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

  // ---- Morceaux réutilisés (mobile + desktop) ----------------------------
  const picker = brands.map((b) => (
    <button key={b.brand} type="button" className="brandcard" onClick={() => openBrand(b.brand)}>
      <span className="brandcard__name">{b.brand}</span>
      <span className="brandcard__count">
        {b.count} modèle{b.count > 1 ? 's' : ''}
      </span>
    </button>
  ))

  const filters = (
    <>
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
    </>
  )

  const cards = list.map((b) => (
    <BatteryCard
      key={b.id}
      battery={b}
      variant={variant}
      context={b.vehicleName}
      onOrder={() => openWhatsapp(b, b.vehicleName, config)}
    />
  ))

  // ---- Mobile : feuille glissable (identique à la vue par engin) ----------
  if (variant === 'mobile') {
    return (
      <div className={`sheet${sheet.dragging ? ' sheet--dragging' : ''}`} style={sheet.style}>
        <div
          className="sheet__handle"
          onPointerDown={sheet.startDrag}
          role="button"
          aria-label="Glisser pour agrandir ou fermer"
          tabIndex={0}
        >
          <span />
        </div>

        <div className="cat__header">
          <div className="cat__heading">
            <span className="cat__title">{brand || 'Marques'}</span>
            <span className="cat__count">
              {brand
                ? `${list.length} batterie${list.length > 1 ? 's' : ''} · ${brand}`
                : `${brands.length} marques · stock magasin`}
            </span>
          </div>
          <button type="button" className="cat__close" onClick={onClose} aria-label="Fermer">
            ×
          </button>
        </div>

        {!brand ? (
          <div className="cat__grid">{picker}</div>
        ) : (
          <>
            <div className="cat__filters">
              <button type="button" className="cat__back" onClick={reset}>
                ← Toutes les marques
              </button>
              {filters}
            </div>
            <div className="cat__grid">{cards}</div>
          </>
        )}
      </div>
    )
  }

  // ---- Desktop : panneau modal élargi ------------------------------------
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

        {!brand ? (
          <div className="brandgrid">{picker}</div>
        ) : (
          <>
            <div className="cat__filters cat__filters--brands">{filters}</div>
            <span className="brandlist__count">
              {list.length} batterie{list.length > 1 ? 's' : ''} · {brand}
            </span>
            <div className="brandlist">{cards}</div>
            <button type="button" className="finder__back" onClick={reset}>
              ← Toutes les marques
            </button>
          </>
        )}
      </div>
    </div>
  )
}
