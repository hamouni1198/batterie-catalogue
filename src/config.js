// ---------------------------------------------------------------------------
// Configuration boutique — Battery Agadir
// ---------------------------------------------------------------------------
// ⚠️ VALEURS À VALIDER AVEC LE CLIENT AVANT MISE EN LIGNE.
// Le numéro WhatsApp ci-dessous est un PLACEHOLDER (voir handoff § Fidelity).
// Les prix des batteries sont eux aussi des placeholders : ils vivent dans
// `src/data/catalogue.js` (un prix par référence).
// ---------------------------------------------------------------------------

export const config = {
  // Numéro WhatsApp au format international, sans « + » ni espaces.
  // PLACEHOLDER — remplacer par le vrai numéro de la boutique (ex. 2126XXXXXXXX).
  whatsappNumber: '212600000000',

  // Première ligne du message WhatsApp pré-rempli.
  whatsappGreeting: 'Bonjour Battery Agadir,',

  // Afficher les prix (false → « Prix sur demande » partout).
  showPrices: true,

  // Rotation d'attente du cercle quand aucun engin n'est sélectionné.
  // (Coupée automatiquement si l'utilisateur a `prefers-reduced-motion`.)
  spinIdle: true,

  // Informations magasin (barre d'infos + liens).
  shop: {
    name: 'Battery Agadir',
    tagline: 'spécialiste de la batterie',
    taglineDesktop: '38 ans · spécialiste de la batterie',
    hours: 'Lun – Sam · 8h30 – 20h',
    address: 'Bd Hassan II, Agadir · pose sur place',
    instagramUrl: 'https://www.instagram.com/batterie_agadir/',
    mapsUrl: 'https://www.google.com/maps/search/battery+agadir',
  },
}

export default config
