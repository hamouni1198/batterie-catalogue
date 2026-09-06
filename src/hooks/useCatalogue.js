import { useMemo, useState } from 'react'
import { vehicles } from '../data/catalogue.js'
import { enrichBattery } from '../lib/battery.js'

// Définition des filtres prix (en Dh). L'ordre est celui des chips.
export const PRICE_FILTERS = [
  { key: 'all', label: 'Tous' },
  { key: 'low', label: '≤ 800 Dh' },
  { key: 'mid', label: '800 – 1 500' },
  { key: 'high', label: '> 1 500 Dh' },
]

// Les prix inconnus (null -> « Sur demande ») n'apparaissent que sous « Tous » :
// sans ce garde-fou, `null <= 800` vaut true et les ferait tomber dans « Moins
// de 800 Dh ».
function matchesPrice(price, filter) {
  if (filter === 'all') return true
  if (price == null) return false
  if (filter === 'low') return price <= 800
  if (filter === 'mid') return price >= 800 && price <= 1500
  if (filter === 'high') return price > 1500
  return true
}

// Filtre : recherche insensible à la casse sur marque + modèle + véhicules
// compatibles + Ah, cumulée avec le filtre prix.
function filterBatteries(list, query, priceFilter) {
  const q = query.trim().toLowerCase()
  return list.filter((b) => {
    const haystack = (
      b.brand +
      ' ' +
      b.model +
      ' ' +
      b.fits +
      ' ' +
      b.ah +
      ' ' +
      (b.spec || '')
    ).toLowerCase()
    if (q && !haystack.includes(q)) return false
    return matchesPrice(b.price, priceFilter)
  })
}

// Gère l'état d'une vue (mobile OU desktop) : engin sélectionné, recherche,
// filtre prix — et tous les dérivés (liste filtrée, compteur, chips…).
export function useCatalogue(showPrices = true) {
  const [selected, setSelected] = useState(null) // clé de l'engin, ou null
  const [query, setQuery] = useState('')
  const [priceFilter, setPriceFilter] = useState('all')

  const index = useMemo(
    () => Math.max(0, vehicles.findIndex((v) => v.key === selected)),
    [selected],
  )
  const vehicle = vehicles[index]
  const hasSelection = selected != null

  const list = useMemo(
    () =>
      filterBatteries(vehicle.batteries, query, priceFilter).map((b) =>
        enrichBattery(b, showPrices),
      ),
    [vehicle, query, priceFilter, showPrices],
  )

  const count = list.length
  const countText =
    count + (count > 1 ? ' modèles compatibles' : ' modèle compatible') + ' · stock magasin'

  const chips = PRICE_FILTERS.map((f) => ({
    ...f,
    active: f.key === priceFilter,
    onClick: () => setPriceFilter(f.key),
  }))

  function select(key) {
    setSelected(key)
    // Les filtres se réinitialisent à chaque nouvelle sélection.
    setQuery('')
    setPriceFilter('all')
  }

  // Sélectionne un engin ET applique un filtre prix (utilisé par l'assistant).
  function selectWithFilter(key, pf = 'all') {
    setSelected(key)
    setQuery('')
    setPriceFilter(pf)
  }

  function close() {
    setSelected(null)
    setQuery('')
    setPriceFilter('all')
  }

  return {
    // état
    selected,
    hasSelection,
    query,
    setQuery,
    priceFilter,
    // dérivés
    vehicles,
    vehicle,
    index,
    list,
    count,
    countText,
    isEmpty: count === 0,
    title: vehicle.key === 'chargeurs' ? vehicle.name : 'Batteries ' + vehicle.name,
    chips,
    // actions
    select,
    selectWithFilter,
    close,
  }
}
