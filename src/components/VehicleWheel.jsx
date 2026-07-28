import VehicleIcon from './icons/VehicleIcon.jsx'
import BrandLockup from './BrandLockup.jsx'

// Réglages par variante (tailles/épaisseurs propres à chaque écran).
const VARIANTS = {
  mobile: { icon: 25, strokeWidth: 1.6, labelKey: 'labelMobile' },
  desktop: { icon: 34, strokeWidth: 1.5, labelKey: 'labelDesktop' },
}

// Position d'un engin autour du cercle : angle = −90° + i × pas, rayon 42 %.
// Calculé dynamiquement selon le nombre d'engins (9, 12, …).
function positionFor(i, count) {
  const step = 360 / count
  const rad = ((-90 + i * step) * Math.PI) / 180
  return {
    left: `${(50 + 42 * Math.cos(rad)).toFixed(2)}%`,
    top: `${(50 + 42 * Math.sin(rad)).toFixed(2)}%`,
  }
}

// Le cercle : logo au centre, engins autour, anneau rotatif.
// - `spinning` pilote la rotation d'attente (running/paused).
// - À la sélection, l'anneau tourne de −pas×index et les icônes contre-tournent
//   de +pas×index pour rester droites (pas = 360 / nombre d'engins).
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
  const count = vehicles.length
  const step = 360 / count
  const ringDeg = hasSelection ? -step * index : 0
  const iconDeg = hasSelection ? step * index : 0
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
                style={positionFor(i, count)}
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
