// Formatage des nombres et des prix.

// Sépare les milliers par une espace fine insécable visuelle (espace simple) :
// 1590 -> "1 590".
export function formatNumber(n) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

// Texte du prix, en respectant l'option `showPrices` de la config.
export function priceText(price, showPrices = true) {
  return showPrices === false ? 'Prix sur demande' : formatNumber(price) + ' Dh'
}
