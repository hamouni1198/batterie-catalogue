// Statut d'ouverture calculé dans le fuseau horaire du magasin, quel que soit
// le fuseau du visiteur.

const DAY_LABELS = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']

function toMinutes(hhmm) {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

// Jour (0=dim..6=sam) et minutes depuis minuit, dans le fuseau donné.
function nowInZone(timeZone) {
  const now = new Date()
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(now)
  const get = (t) => parts.find((p) => p.type === t)?.value
  const wdMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }
  const day = wdMap[get('weekday')] ?? now.getDay()
  let hour = parseInt(get('hour'), 10)
  if (hour === 24) hour = 0 // certains environnements renvoient 24 à minuit
  const minutes = hour * 60 + parseInt(get('minute'), 10)
  return { day, minutes }
}

// Renvoie { open: boolean, label, detail } d'après config.shop.openingHours.
export function getOpenStatus(openingHours) {
  const { days, open, close, timeZone } = openingHours
  const { day, minutes } = nowInZone(timeZone || 'Africa/Casablanca')
  const openMin = toMinutes(open)
  const closeMin = toMinutes(close)
  const isOpen = days.includes(day) && minutes >= openMin && minutes < closeMin

  if (isOpen) {
    const [h] = close.split(':')
    return { open: true, label: 'Ouvert', detail: `ferme à ${parseInt(h, 10)}h` }
  }

  // Fermé : trouver le prochain jour d'ouverture.
  for (let i = 0; i < 7; i++) {
    const d = (day + i) % 7
    if (!days.includes(d)) continue
    const openingLater = i === 0 && minutes < openMin
    if (i === 0 && minutes >= openMin) continue // aujourd'hui déjà fermé
    const [h, m] = open.split(':')
    const when = openingLater ? `aujourd'hui` : i === 1 ? 'demain' : DAY_LABELS[d]
    const hm = parseInt(m, 10) ? `${parseInt(h, 10)}h${m}` : `${parseInt(h, 10)}h`
    return { open: false, label: 'Fermé', detail: `ouvre ${when} à ${hm}` }
  }
  return { open: false, label: 'Fermé', detail: '' }
}
