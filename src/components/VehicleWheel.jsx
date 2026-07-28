import VehicleIcon from './icons/VehicleIcon.jsx'
import BrandLockup from './BrandLockup.jsx'

// Positions des 9 boutons autour du cercle (angle = −90° + i×40°, rayon 42 %),
// exprimées en % du conteneur. Même grille pour mobile et desktop.
const POSITIONS = [
  { left: '50%', top: '8%' }, // 0 voiture
  { left: '77%', top: '17.8%' }, // 1 moto
  { left: '91.4%', top: '42.7%' }, // 2 camion
  { left: '86.4%', top: '71%' }, // 3 bateau
  { left: '64.4%', top: '89.5%' }, // 4 quad
  { left: '35.6%', top: '89.5%' }, // 5 tracteur
  { left: '13.6%', top: '71%' }, // 6 camping
  { left: '8.6%', top: '42.7%' }, // 7 groupe
  { left: '23%', top: '17.8%' }, // 8 solaire
]

// Réglages par variante (tailles/épaisseurs propres à chaque écran).
const VARIANTS = {
  mobile: { icon: 25, strokeWidth: 1.6, labelKey: 'labelMobile' },
  desktop: { icon: 34, strokeWidth: 1.5, labelKey: 'labelDesktop' },
}

// Le cercle : logo au centre, engins autour, anneau rotatif.
// - `spinning` pilote la rotation d'attente (running/paused).
// - À la sélection, l'anneau tourne de −40°×index et les icônes contre-tournent
//   de +40°×index pour rester droites (transition gérée en CSS par variante).
export default function VehicleWheel({
  variant = 'mobile',
  vehicles,
  selected,
  index,
  hasSelection,
  onSelect,
  spinning,
}) {
  const cfg = VARIANTS[variant]
  const ringDeg = hasSelection ? -40 * index : 0
  const iconDeg = hasSelection ? 40 * index : 0
  const playState = spinning ? 'running' : 'paused'
  const selectedVehicle = vehicles[index]

  return (
    <div className={`wheel wheel--${variant}`}>
      <div className="wheel__halo" />
      <div className="wheel__marker" />

      <div className="wheel__orbit" style={{ animationPlayState: playState }}>
        <div className="wheel__ring" style={{ transform: `rotate(${ringDeg}deg)` }}>
          <div className="wheel__dashed" />

          {vehicles.map((v, i) => {
            const isActive = selected === v.key
            return (
              <button
                key={v.key}
                type="button"
                className="engine"
                style={POSITIONS[i]}
                onClick={() => onSelect(v.key)}
                aria-pressed={isActive}
                aria-label={v[cfg.labelKey]}
              >
                <span className="engine__counter" style={{ animationPlayState: playState }}>
                  <span className="engine__stack" style={{ transform: `rotate(${iconDeg}deg)` }}>
                    <span className={`engine__pill${isActive ? ' engine__pill--active' : ''}`}>
                      <VehicleIcon name={v.key} size={cfg.icon} strokeWidth={cfg.strokeWidth} />
                    </span>
                    <span className="engine__label">{v[cfg.labelKey]}</span>
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="wheel__center">
        <BrandLockup variant={variant} />
      </div>

      {hasSelection && <div className="wheel__sel-pill">{selectedVehicle.name}</div>}
    </div>
  )
}
