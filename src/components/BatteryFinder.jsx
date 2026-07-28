import { useEffect, useState } from 'react'
import VehicleIcon from './icons/VehicleIcon.jsx'

// Options de budget (mappées sur les filtres prix du catalogue).
const BUDGETS = [
  { key: 'all', label: 'Peu importe', hint: 'Voir tout' },
  { key: 'low', label: '≤ 800 Dh', hint: 'Petit budget' },
  { key: 'mid', label: '800 – 1 500 Dh', hint: 'Milieu de gamme' },
  { key: 'high', label: '> 1 500 Dh', hint: 'Haut de gamme' },
]

// Assistant « Quelle batterie pour mon véhicule ? » — 2 étapes (engin, budget)
// puis ouverture du catalogue filtré via onPick(vehicleKey, priceFilter).
export default function BatteryFinder({ vehicles, onPick, onClose }) {
  const [step, setStep] = useState(0)
  const [vehicle, setVehicle] = useState(null)

  // Fermeture au clavier (Échap).
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="finder" role="dialog" aria-modal="true" aria-label="Trouve ta batterie">
      <div className="finder__backdrop" onClick={onClose} />
      <div className="finder__panel">
        <div className="finder__head">
          <div className="finder__heading">
            <span className="finder__eyebrow">Assistant</span>
            <span className="finder__title">
              {step === 0 ? 'Quel est ton engin ?' : 'Ton budget ?'}
            </span>
          </div>
          <button type="button" className="finder__close" onClick={onClose} aria-label="Fermer">
            ×
          </button>
        </div>

        <div className="finder__steps" aria-hidden="true">
          <span className={`finder__dot${step >= 0 ? ' is-on' : ''}`} />
          <span className={`finder__dot${step >= 1 ? ' is-on' : ''}`} />
        </div>

        {step === 0 && (
          <div className="finder__grid">
            {vehicles.map((v) => (
              <button
                key={v.key}
                type="button"
                className="finder__veh"
                onClick={() => {
                  setVehicle(v.key)
                  setStep(1)
                }}
              >
                <span className="finder__vehicon">
                  <VehicleIcon name={v.key} size={26} strokeWidth={1.6} />
                </span>
                <span className="finder__vehlabel">{v.labelDesktop}</span>
              </button>
            ))}
          </div>
        )}

        {step === 1 && (
          <>
            <div className="finder__budgets">
              {BUDGETS.map((b) => (
                <button
                  key={b.key}
                  type="button"
                  className="finder__budget"
                  onClick={() => onPick(vehicle, b.key)}
                >
                  <span className="finder__budgetlabel">{b.label}</span>
                  <span className="finder__budgethint">{b.hint}</span>
                </button>
              ))}
            </div>
            <button type="button" className="finder__back" onClick={() => setStep(0)}>
              ← Changer d'engin
            </button>
          </>
        )}
      </div>
    </div>
  )
}
