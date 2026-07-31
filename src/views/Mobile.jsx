import { useEffect, useRef, useState } from 'react'
import TopBar from '../components/TopBar.jsx'
import InfoBar from '../components/InfoBar.jsx'
import VehicleWheel from '../components/VehicleWheel.jsx'
import Catalogue from '../components/Catalogue.jsx'
import BatteryFinder from '../components/BatteryFinder.jsx'
import BrandBrowser from '../components/BrandBrowser.jsx'
import { useCatalogue } from '../hooks/useCatalogue.js'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery.js'
import config from '../config.js'
import fondMobile from '../assets/fond-mobile.webp'

// Vue 2a — Mobile. Fond plein écran, cercle centré ; au clic sur un engin,
// une feuille de batteries remonte du bas. La feuille est un « bottom sheet »
// que l'on peut glisser : vers le haut → plein écran, vers le bas → fermeture.
export default function Mobile() {
  const cat = useCatalogue(config.showPrices)
  const reducedMotion = usePrefersReducedMotion()
  const spinning = config.spinIdle && !cat.hasSelection && !reducedMotion
  const [finderOpen, setFinderOpen] = useState(false)
  const [brandOpen, setBrandOpen] = useState(false)

  // --- Bottom sheet : hauteur glissable + points d'accroche ---------------
  const [sheetH, setSheetH] = useState(null) // px pendant/après drag, null = défaut (peek)
  const [dragging, setDragging] = useState(false)
  const dragRef = useRef(null)

  const peekPx = () => Math.min(568, Math.round(window.innerHeight * 0.88))
  const fullPx = () => window.innerHeight

  // À chaque ouverture, revenir à la position « peek ».
  useEffect(() => {
    if (cat.hasSelection) setSheetH(null)
  }, [cat.hasSelection])

  // Nettoyage si le composant se démonte pendant un glissement.
  useEffect(() => () => dragRef.current?.cleanup?.(), [])

  // Glissement : on attache les écouteurs de façon synchrone au pointerdown
  // (fiable même pour un geste rapide), sur la poignée uniquement.
  const startDrag = (e) => {
    e.preventDefault()
    const startY = e.clientY
    const startH = sheetH ?? peekPx()
    const state = { lastH: startH }
    setDragging(true)

    const move = (ev) => {
      const h = Math.max(80, Math.min(fullPx(), startH + (startY - ev.clientY)))
      state.lastH = h
      setSheetH(h)
    }
    const up = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
      window.removeEventListener('pointercancel', up)
      dragRef.current = null
      setDragging(false)
      const peek = peekPx()
      const full = fullPx()
      if (state.lastH < peek * 0.6) cat.close() // glissé assez bas → fermeture
      else setSheetH(state.lastH > (peek + full) / 2 ? full : peek) // haut ou bas
    }
    dragRef.current = {
      cleanup: () => {
        window.removeEventListener('pointermove', move)
        window.removeEventListener('pointerup', up)
        window.removeEventListener('pointercancel', up)
      },
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    window.addEventListener('pointercancel', up)
  }

  return (
    <div className="screen screen--mobile">
      <img className="screen__bg" src={fondMobile} alt="" aria-hidden="true" />
      <div className="screen__veil screen__veil--mobile" />

      <div className="screen__content screen__content--mobile">
        <TopBar variant="mobile" />

        <VehicleWheel
          variant="mobile"
          vehicles={cat.vehicles}
          selected={cat.selected}
          index={cat.index}
          hasSelection={cat.hasSelection}
          onSelect={cat.select}
          spinning={spinning}
        />

        {!cat.hasSelection && (
          <div className="accueil-actions">
            <button type="button" className="finder-cta" onClick={() => setFinderOpen(true)}>
              <span className="finder-cta__icon" aria-hidden="true">✦</span>
              M'aider à choisir
            </button>
            <button type="button" className="brand-cta" onClick={() => setBrandOpen(true)}>
              <span className="brand-cta__icon" aria-hidden="true">▦</span>
              Par marque
            </button>
          </div>
        )}
        {!cat.hasSelection && <InfoBar />}
      </div>

      {cat.hasSelection && (
        <div
          className={`sheet${dragging ? ' sheet--dragging' : ''}`}
          style={sheetH != null ? { height: `${sheetH}px` } : undefined}
        >
          <div
            className="sheet__handle"
            onPointerDown={startDrag}
            role="button"
            aria-label="Glisser pour agrandir ou fermer"
            tabIndex={0}
          >
            <span />
          </div>
          <Catalogue variant="mobile" catalogue={cat} />
        </div>
      )}

      {finderOpen && (
        <BatteryFinder
          vehicles={cat.vehicles}
          onPick={(key, pf) => {
            cat.selectWithFilter(key, pf)
            setFinderOpen(false)
          }}
          onClose={() => setFinderOpen(false)}
        />
      )}

      {brandOpen && <BrandBrowser vehicles={cat.vehicles} onClose={() => setBrandOpen(false)} />}
    </div>
  )
}
