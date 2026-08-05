// ---------------------------------------------------------------------------
// Configuration boutique — Battery Dynamic
// ---------------------------------------------------------------------------
// ⚠️ VALEURS À VALIDER AVEC LE CLIENT AVANT MISE EN LIGNE.
// Le numéro WhatsApp, le téléphone et le lien Instagram ci-dessous sont des
// PLACEHOLDERS. Les prix des batteries sont dans `src/data/catalogue.js`.
// ---------------------------------------------------------------------------

export const config = {
  // Numéro WhatsApp officiel, au format international, sans « + » ni espaces.
  whatsappNumber: '212643388802',

  // Numéro d'appel officiel (bouton « Appeler »).
  phoneNumber: '+212643388802',

  // Première ligne du message WhatsApp pré-rempli.
  whatsappGreeting: 'Bonjour Battery Dynamic,',

  // Afficher les prix (false → « Prix sur demande » partout).
  showPrices: true,

  // Rotation d'attente du cercle quand aucun engin n'est sélectionné.
  // (Coupée automatiquement si l'utilisateur a `prefers-reduced-motion`.)
  spinIdle: true,

  // URL publique du site (pour les balises SEO / Open Graph / JSON-LD).
  // PLACEHOLDER — remplacer par ton vrai domaine une fois déployé.
  siteUrl: 'https://battery-dynamic.vercel.app',

  // Informations magasin.
  shop: {
    name: 'Battery Dynamic',
    tagline: 'vente en gros & détail',
    taglineDesktop: 'Vente en gros & détail · Agadir',
    hours: 'Lun – Sam · 8h30 – 20h',
    address: '9 Juillet, Khiam 1, Agadir · pose sur place',
    // Compte Instagram officiel.
    instagramUrl: 'https://www.instagram.com/battery_dynamic/',
    // Lien Google Maps officiel de la boutique (bouton « Itinéraire » + icône).
    mapsUrl: 'https://maps.app.goo.gl/ctkk5Vt1Noc7i6zAA',

    // Horaires structurés (pour le badge « Ouvert maintenant »). Jours :
    // 0 = dimanche … 6 = samedi. Heures au format 24h "HH:MM".
    // Calculé dans le fuseau du magasin (Agadir).
    openingHours: {
      days: [1, 2, 3, 4, 5, 6], // Lun → Sam
      open: '08:30',
      close: '20:00',
      timeZone: 'Africa/Casablanca',
    },

    // Coordonnées géo (JSON-LD). PLACEHOLDER — centre d'Agadir.
    geo: { lat: 30.4202, lng: -9.5982 },
  },
}

export default config
