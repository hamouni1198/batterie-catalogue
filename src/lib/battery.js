import { priceText } from './format.js'

// Enrichit une batterie avec les libellés d'affichage (Ah / V / CCA / prix).
export function enrichBattery(b, showPrices = true) {
  return {
    ...b,
    ahText: b.ah + ' Ah',
    vText: b.v + ' V',
    ccaText: b.cca ? b.cca + ' A' : 'Décharge lente',
    priceText: priceText(b.price, showPrices),
  }
}

// Clé d'unicité d'une batterie « physique » : une même référence peut être
// listée dans plusieurs engins (ex. LONG solaire + fauteuil + industriel).
function batteryKey(b) {
  return `${b.brand}|${b.model}|${b.ah}|${b.v}`
}

// Liste des marques présentes dans le catalogue, avec le nombre de modèles
// DISTINCTS (une réf. présente dans plusieurs engins n'est comptée qu'une fois).
export function allBrands(vehicles) {
  const map = new Map()
  vehicles.forEach((v) =>
    v.batteries.forEach((b) => {
      let entry = map.get(b.brand)
      if (!entry) {
        entry = { brand: b.brand, keys: new Set() }
        map.set(b.brand, entry)
      }
      entry.keys.add(batteryKey(b))
    }),
  )
  return [...map.values()]
    .map((e) => ({ brand: e.brand, count: e.keys.size }))
    .sort((a, b) => a.brand.localeCompare(b.brand))
}

// Toutes les batteries d'une marque, chaque référence n'apparaissant QU'UNE
// FOIS même si elle est présente dans plusieurs engins. On collecte alors la
// liste des engins compatibles (affichée en contexte + message WhatsApp).
export function batteriesOfBrand(vehicles, brand, showPrices = true) {
  const map = new Map()
  vehicles.forEach((v) =>
    v.batteries.forEach((b) => {
      if (b.brand !== brand) return
      const key = batteryKey(b)
      const existing = map.get(key)
      if (existing) {
        if (!existing.vehicleNames.includes(v.name)) existing.vehicleNames.push(v.name)
      } else {
        map.set(key, { ...enrichBattery(b, showPrices), vehicleNames: [v.name] })
      }
    }),
  )
  return [...map.values()].map((b) => ({
    ...b,
    vehicleName: b.vehicleNames.join(' · '),
  }))
}
