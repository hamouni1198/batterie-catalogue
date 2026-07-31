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

// Liste des marques présentes dans le catalogue, avec le nombre de modèles.
export function allBrands(vehicles) {
  const map = new Map()
  vehicles.forEach((v) =>
    v.batteries.forEach((b) => {
      const entry = map.get(b.brand) || { brand: b.brand, count: 0 }
      entry.count += 1
      map.set(b.brand, entry)
    }),
  )
  return [...map.values()].sort((a, b) => a.brand.localeCompare(b.brand))
}

// Toutes les batteries d'une marque, tous engins confondus (avec l'engin en
// contexte, utile pour le message WhatsApp et l'affichage).
export function batteriesOfBrand(vehicles, brand, showPrices = true) {
  const out = []
  vehicles.forEach((v) =>
    v.batteries.forEach((b) => {
      if (b.brand === brand) {
        out.push({ ...enrichBattery(b, showPrices), vehicleName: v.name })
      }
    }),
  )
  return out
}
