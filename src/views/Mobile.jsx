import { useState } from 'react'
import TopBar from '../components/TopBar.jsx'
import InfoBar from '../components/InfoBar.jsx'
import VehicleWheel from '../components/VehicleWheel.jsx'
import Catalogue from '../components/Catalogue.jsx'
import BatteryFinder from '../components/BatteryFinder.jsx'
import { useCatalogue } from '../hooks/useCatalogue.js'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery.js'
import config from '../config.js'
import fondMobile from '../assets/fond-mobile.webp'

// Vue 2a — Mobile. Fond plein écran, cercle centré ; au clic sur un engin,
// une feuille de batteries remonte du bas (animation sheetUp).
export default function Mobile() {
  const cat = useCatalogue(config.showPrices)
  const reducedMotion = usePrefersReducedMotion()
  const spinning = config.spinIdle && !cat.hasSelection && !reducedMotion
  const [finderOpen, setFinderOpen] = useState(false)

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
          <button type="button" className="finder-cta" onClick={() => setFinderOpen(true)}>
            <span className="finder-cta__icon" aria-hidden="true">✦</span>
            Aide-moi à choisir ma batterie
          </button>
        )}
        {!cat.hasSelection && <InfoBar />}
      </div>

      {cat.hasSelection && (
        <div className="sheet">
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
    </div>
  )
}
