import { priceText } from './format.js'

// Construit le lien wa.me avec le message pré-rempli pour une batterie donnée.
// `vehicleName` = nom complet de l'engin (ex. « Voiture », « Moto / Scooter »).
// La ligne CCA est omise pour les batteries à décharge lente (cca === 0).
// Limite connue : un lien wa.me ne peut pas joindre de photo ; elle s'envoie
// manuellement après (voir handoff § Interactions).
export function buildWhatsappLink(battery, vehicleName, config) {
  const number = String(config.whatsappNumber || '212600000000').replace(/[^0-9]/g, '')
  const greeting = config.whatsappGreeting || 'Bonjour Battery Agadir,'

  const lines = [
    greeting,
    '',
    'Je suis intéressé(e) par cette batterie :',
    'Modèle : ' + battery.brand + ' ' + battery.model,
    'Pour : ' + vehicleName,
    'Capacité : ' +
      battery.ah +
      ' Ah — ' +
      battery.v +
      ' V' +
      (battery.cca ? ' — ' + battery.cca + ' A (CCA)' : ''),
    'Dimensions : ' + battery.dim,
    'Prix catalogue : ' + priceText(battery.price, config.showPrices),
    '',
    'Est-elle disponible ? Et avec la pose ?',
  ]

  return 'https://wa.me/' + number + '?text=' + encodeURIComponent(lines.join('\n'))
}

// Ouvre WhatsApp dans un nouvel onglet.
export function openWhatsapp(battery, vehicleName, config) {
  window.open(buildWhatsappLink(battery, vehicleName, config), '_blank', 'noopener')
}
