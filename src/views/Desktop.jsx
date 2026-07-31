import { useState } from 'react'
import TopBar from '../components/TopBar.jsx'
import InfoBar from '../components/InfoBar.jsx'
import VehicleWheel from '../components/VehicleWheel.jsx'
import Catalogue from '../components/Catalogue.jsx'
import BatteryFinder from '../components/BatteryFinder.jsx'
import BrandBrowser from '../components/BrandBrowser.jsx'
import { useCatalogue } from '../hooks/useCatalogue.js'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery.js'
import config from '../config.js'
import fondOrdi from '../assets/fond-ordi.webp'

// Vue 2b — Desktop. Cercle à gauche, catalogue dans un panneau fixe à droite
// (état vide tant qu'aucun engin n'est choisi).
export default function Desktop() {
  const cat = useCatalogue(config.showPrices)
  const reducedMotion = usePrefersReducedMotion()
  const spinning = config.spinIdle && !cat.hasSelection && !reducedMotion
  const [finderOpen, setFinderOpen] = useState(false)
  const [brandOpen, setBrandOpen] = useState(false)

  return (
    <div className="screen screen--desktop">
      <img className="screen__bg" src={fondOrdi} alt="" aria-hidden="true" />
      <div className="screen__veil screen__veil--desktop" />

      <div className="screen__left">
        <TopBar variant="desktop" />

        <VehicleWheel
          variant="desktop"
          vehicles={cat.vehicles}
          selected={cat.selected}
          index={cat.index}
          hasSelection={cat.hasSelection}
          onSelect={cat.select}
          spinning={spinning}
        />

        <InfoBar />
      </div>

      <aside className="panel">
        {cat.hasSelection ? (
          <div className="panel__filled">
            <Catalogue variant="desktop" catalogue={cat} />
          </div>
        ) : (
          <div className="panel__empty">
            <span className="panel__eyebrow">Catalogue</span>
            <span className="panel__headline">Clique sur ton engin</span>
            <p className="panel__lead">
              Voiture, moto, camion, bateau, quad, camping-car, groupe électrogène, solaire,
              fauteuil roulant, matériel industriel ou batterie de sauvegarde : la liste des
              batteries compatibles s'affiche ici avec la fiche technique, le prix et l'envoi
              direct sur WhatsApp.
            </p>
            <div className="accueil-actions accueil-actions--desktop">
              <button type="button" className="finder-cta" onClick={() => setFinderOpen(true)}>
                <span className="finder-cta__icon" aria-hidden="true">✦</span>
                Aide-moi à choisir ma batterie
              </button>
              <button type="button" className="brand-cta" onClick={() => setBrandOpen(true)}>
                <span className="brand-cta__icon" aria-hidden="true">▦</span>
                Voir par marque
              </button>
            </div>
          </div>
        )}
      </aside>

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
