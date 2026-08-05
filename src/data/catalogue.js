// ---------------------------------------------------------------------------
// Catalogue des batteries — Battery Dynamic
// ---------------------------------------------------------------------------
// 9 engins × 3–5 batteries (32 références). Schéma d'une batterie :
//   { id, brand, model, ah, v, cca, dim, price, fits }
//   - cca = courant de démarrage (A). Mettre 0 pour une batterie à décharge
//     lente (solaire) : la ligne CCA est alors omise dans le message WhatsApp
//     et la puce affiche « Décharge lente ».
//   - price = prix en dirhams (Dh).
//
// ⚠️ PLACEHOLDERS : les prix et références ci-dessous sont des exemples
// plausibles (voir handoff § Fidelity). À valider / remplacer par les vraies
// données du client. Les photos produits sont absentes : ajouter un champ
// `photo` (URL/import) puis l'afficher dans BatteryCard.
// ---------------------------------------------------------------------------

// Chaque engin : key (clé technique), name (nom complet — titres, pastille,
// message WhatsApp), labelMobile / labelDesktop (libellés sous l'icône du
// cercle, courts en mobile, longs en desktop).
export const vehicles = [
  {
    key: 'voiture',
    name: 'Voiture',
    labelMobile: 'Voiture',
    labelDesktop: 'Voiture',
    batteries: [
      { id: 'v3', brand: 'FOX', model: 'Premium 70', ah: 70, v: 12, cca: 600, dim: '261 × 175 × 220 mm', price: 950, fits: 'Duster, Kangoo, Partner' },
      // VARTA — données réelles (specs constructeur ; prix source à valider avec tes marges)
      { id: 'vc14', brand: 'VARTA', model: 'Dynamic SLI C14', ah: 56, v: 12, cca: 480, dim: '242 × 175 × 175 mm', price: 950, fits: 'Clio, 208, Corsa, Polo · L2', photo: '/batteries/vc14.webp' },
      { id: 've13', brand: 'VARTA', model: 'Dynamic SLI E13', ah: 70, v: 12, cca: 640, dim: '278 × 175 × 175 mm', price: 1000, fits: 'Mégane, Focus, Passat · L3', photo: '/batteries/ve13.webp' },
      { id: 'vf17', brand: 'VARTA', model: 'Dynamic SLI F17', ah: 80, v: 12, cca: 740, dim: '315 × 175 × 175 mm', price: 1450, fits: 'Passat, Qashqai, C4 · L4', photo: '/batteries/vf17.webp' },
      { id: 'vh3', brand: 'VARTA', model: 'Dynamic SLI H3', ah: 100, v: 12, cca: 830, dim: '353 × 175 × 175 mm', price: 1900, fits: 'Touareg, X5, Transporter · L5', photo: '/batteries/vh3.webp' },
      { id: 'va7', brand: 'VARTA', model: 'Dynamic AGM A7', ah: 70, v: 12, cca: 760, dim: '278 × 175 × 190 mm', price: 2400, fits: 'Start-Stop — Golf, A3, Série 3 · L3', photo: '/batteries/va7.webp' },
      { id: 'va6', brand: 'VARTA', model: 'Dynamic AGM A6', ah: 80, v: 12, cca: 800, dim: '315 × 175 × 190 mm', price: 2500, fits: 'Start-Stop — Passat, X1, 3008 · L4', photo: '/batteries/va6.webp' },
      // BOSCH — données réelles (specs constructeur ; prix source maisondebatterie.ma, à valider avec tes marges)
      { id: 'bs3005', brand: 'BOSCH', model: 'S3 005', ah: 56, v: 12, cca: 480, dim: '242 × 175 × 175 mm', price: 900, fits: 'Clio, 208, Corsa, Polo · L2', photo: '/batteries/bs3005.webp' },
      { id: 'bs3007', brand: 'BOSCH', model: 'S3 007', ah: 70, v: 12, cca: 640, dim: '278 × 175 × 175 mm', price: 1050, fits: 'Mégane, Focus, Golf, Astra · L3', photo: '/batteries/bs3007.webp' },
      { id: 'bs4010', brand: 'BOSCH', model: 'S4 010', ah: 80, v: 12, cca: 740, dim: '315 × 175 × 175 mm', price: 1370, fits: 'Passat, 3008, Qashqai, C4 · L4', photo: '/batteries/bs4010.webp' },
      { id: 'bs5013', brand: 'BOSCH', model: 'S5 013', ah: 100, v: 12, cca: 830, dim: '353 × 175 × 175 mm', price: 1850, fits: 'Touareg, X5, Espace, Transporter · L5', photo: '/batteries/bs5013.webp' },
      { id: 'bs5a11', brand: 'BOSCH', model: 'S5 A11 AGM', ah: 80, v: 12, cca: 800, dim: '315 × 175 × 190 mm', price: 2700, fits: 'Start-Stop — Golf 7, A3, Série 1 · L4', photo: '/batteries/bs5a11.webp' },
      { id: 'bs5a15', brand: 'BOSCH', model: 'S5 A15 AGM', ah: 105, v: 12, cca: 950, dim: '394 × 175 × 190 mm', price: 3000, fits: 'Start-Stop — X5, Q7, Touareg, Série 5 · L6', photo: '/batteries/bs5a15.webp' },
      // VOLTAGE — données réelles (V/Ah/prix depuis le catalogue) ; CCA et
      // dimensions estimés d'après le format standard (à confirmer, surtout E1/E2/M10/M11)
      { id: 'volte1', brand: 'VOLTAGE', model: 'E1 40Ah', ah: 40, v: 12, cca: 330, dim: '187 × 127 × 227 mm', price: 650, fits: 'Petites voitures (NS40)', photo: '/batteries/volte1.webp' },
      { id: 'voltl1', brand: 'VOLTAGE', model: 'L1 46Ah', ah: 46, v: 12, cca: 400, dim: '207 × 175 × 175 mm', price: 600, fits: 'Citadines · L1', photo: '/batteries/voltl1.webp' },
      { id: 'voltl2', brand: 'VOLTAGE', model: 'L2 60Ah', ah: 60, v: 12, cca: 540, dim: '242 × 175 × 175 mm', price: 750, fits: 'Compactes · L2', photo: '/batteries/voltl2.webp' },
      { id: 'volte2', brand: 'VOLTAGE', model: 'E2 60Ah', ah: 60, v: 12, cca: 480, dim: '232 × 173 × 225 mm', price: 700, fits: 'Berlines (format asiatique)', photo: '/batteries/volte2.webp' },
      { id: 'voltm10', brand: 'VOLTAGE', model: 'M10 70Ah', ah: 70, v: 12, cca: 600, dim: '260 × 173 × 225 mm', price: 850, fits: 'SUV (format asiatique)', photo: '/batteries/voltm10.webp' },
      { id: 'voltl3', brand: 'VOLTAGE', model: 'L3 75Ah', ah: 75, v: 12, cca: 640, dim: '278 × 175 × 175 mm', price: 800, fits: 'Berlines · L3', photo: '/batteries/voltl3.webp' },
      { id: 'voltl4', brand: 'VOLTAGE', model: 'L4 80Ah', ah: 80, v: 12, cca: 740, dim: '315 × 175 × 175 mm', price: 1000, fits: 'Break, SUV · L4', photo: '/batteries/voltl4.webp' },
      { id: 'voltm11', brand: 'VOLTAGE', model: 'M11 95Ah', ah: 95, v: 12, cca: 830, dim: '306 × 173 × 225 mm', price: 1050, fits: '4x4, diesel · M11 (D31)', photo: '/batteries/voltm11.webp' },
      { id: 'voltl5', brand: 'VOLTAGE', model: 'L5 100Ah', ah: 100, v: 12, cca: 830, dim: '353 × 175 × 175 mm', price: 1100, fits: 'Grosses cylindrées · L5', photo: '/batteries/voltl5.webp' },
      { id: 'voltl6', brand: 'VOLTAGE', model: 'L6 110Ah', ah: 110, v: 12, cca: 920, dim: '353 × 175 × 190 mm', price: 1500, fits: 'Utilitaires, minibus · L6', photo: '/batteries/voltl6.webp' },
    ],
  },
  {
    key: 'moto',
    name: 'Moto / Scooter',
    labelMobile: 'Moto',
    labelDesktop: 'Moto / Scooter',
    batteries: [
      { id: 'm1', brand: 'SP', model: 'Moto YTX7A-BS', ah: 7, v: 12, cca: 105, dim: '150 × 87 × 94 mm', price: 240, fits: 'SYM, Kymco, Docker' },
      { id: 'm2', brand: 'SP', model: 'Moto YTX9-BS', ah: 8, v: 12, cca: 120, dim: '150 × 87 × 105 mm', price: 280, fits: 'CB500, MT-03, Z400' },
      { id: 'm3', brand: 'LONG', model: 'YTZ12S Gel', ah: 11, v: 12, cca: 210, dim: '150 × 87 × 110 mm', price: 420, fits: 'Honda Forza, X-ADV' },
      { id: 'vytx20l', brand: 'VARTA', model: 'Powersports AGM YTX20L-BS', ah: 18, v: 12, cca: 250, dim: '175 × 87 × 155 mm', price: 1350, fits: 'Moto, quad, jet-ski (YTX20L-4)', photo: '/batteries/vytx20l.webp' },
      // VARTA Powersports AGM Active — specs réelles (V/Ah/A depuis l'étiquette produit) ; PRIX À CONFIRMER (placeholders).
      { id: 'vytx14', brand: 'VARTA', model: 'Powersports AGM YTX14-4', ah: 12, v: 12, cca: 200, dim: '150 × 87 × 145 mm', price: 700, fits: 'Moto, quad, jet-ski, motoneige (YTX14-BS)', photo: '/batteries/vytx14.webp' },
      { id: 'vytz14s', brand: 'VARTA', model: 'Powersports AGM YTZ14S-4', ah: 11, v: 12, cca: 230, dim: '150 × 87 × 110 mm', price: 650, fits: 'Moto (YTZ14S-BS / TTZ14S-BS)', photo: '/batteries/vytz14s.webp' },
      { id: 'vytz10s', brand: 'VARTA', model: 'Powersports AGM YTZ10S-4', ah: 8, v: 12, cca: 150, dim: '150 × 87 × 93 mm', price: 500, fits: 'Moto sportive (YTZ10S-BS / TTZ10S-BS)', photo: '/batteries/vytz10s.webp' },
    ],
  },
  {
    key: 'camion',
    name: 'Camion / Poids lourd',
    labelMobile: 'Camion',
    labelDesktop: 'Camion',
    batteries: [
      { id: 'bt5077', brand: 'BOSCH', model: 'T5 077', ah: 180, v: 12, cca: 1000, dim: '513 × 223 × 223 mm', price: 3200, fits: 'Camions, poids lourds, tracteurs routiers', photo: '/batteries/bt5077.webp' },
      { id: 'c2', brand: 'FOX', model: 'Truck 150', ah: 150, v: 12, cca: 1000, dim: '513 × 189 × 223 mm', price: 2350, fits: 'Actros, TGX, Renault T' },
    ],
  },
  {
    key: 'bateau',
    name: 'Bateau / Jet-ski',
    labelMobile: 'Bateau',
    labelDesktop: 'Bateau / Jet-ski',
    batteries: [
      { id: 'b1', brand: 'SP', model: 'Jet-ski YTX20-BS', ah: 18, v: 12, cca: 270, dim: '175 × 87 × 155 mm', price: 590, fits: 'Sea-Doo, Yamaha WaveRunner' },
      { id: 'b3', brand: 'LONG', model: 'Marine Gel 100', ah: 100, v: 12, cca: 700, dim: '330 × 171 × 220 mm', price: 2450, fits: 'Semi-rigide, barque pêche' },
      { id: 'b4', brand: 'FOX', model: 'Marine 120', ah: 120, v: 12, cca: 850, dim: '410 × 176 × 227 mm', price: 2190, fits: 'Hors-bord, chalutier' },
    ],
  },
  {
    key: 'quad',
    name: 'Quad / Buggy',
    labelMobile: 'Quad',
    labelDesktop: 'Quad / Buggy',
    batteries: [
      { id: 'q2', brand: 'LONG', model: 'Gel YTX16-BS', ah: 14, v: 12, cca: 230, dim: '150 × 87 × 161 mm', price: 480, fits: 'Buggy 800, SSV' },
      { id: 'q3', brand: 'SP', model: 'Quad YTX20L-BS', ah: 18, v: 12, cca: 270, dim: '175 × 87 × 155 mm', price: 560, fits: 'Polaris, Can-Am, Kymco' },
    ],
  },
  {
    key: 'camping',
    name: 'Camping-car',
    labelMobile: 'Camping-car',
    labelDesktop: 'Camping-car',
    batteries: [
      { id: 'k1', brand: 'LONG', model: 'Deep Cycle 105', ah: 105, v: 12, cca: 650, dim: '330 × 171 × 220 mm', price: 2350, fits: 'Cellule, frigo, éclairage' },
      { id: 'k3', brand: 'FOX', model: 'Camper AGM 100', ah: 100, v: 12, cca: 800, dim: '353 × 175 × 190 mm', price: 2690, fits: 'Van 4x4, fourgon' },
    ],
  },
  {
    key: 'groupe',
    name: 'Groupe électrogène',
    labelMobile: 'Groupe',
    labelDesktop: 'Groupe électrogène',
    batteries: [
      { id: 'g1', brand: 'SP', model: 'Start 60', ah: 60, v: 12, cca: 480, dim: '242 × 175 × 190 mm', price: 780, fits: 'Groupe 5 – 10 kVA' },
      { id: 'g2', brand: 'FOX', model: 'Genset 100', ah: 100, v: 12, cca: 750, dim: '353 × 175 × 190 mm', price: 1490, fits: 'Groupe 15 – 30 kVA' },
    ],
  },
  {
    key: 'solaire',
    name: 'Solaire / Onduleur',
    labelMobile: 'Solaire',
    labelDesktop: 'Solaire / Onduleur',
    batteries: [
      { id: 's1', brand: 'LONG', model: 'Gel Solar 100', ah: 100, v: 12, cca: 0, dim: '330 × 171 × 220 mm', price: 2590, fits: 'Kit 1 kW, pompage' },
      { id: 's3', brand: 'SP', model: 'Solar Tubulaire 200', ah: 200, v: 12, cca: 0, dim: '518 × 276 × 242 mm', price: 4190, fits: 'Site isolé, ferme' },
    ],
  },
  {
    key: 'fauteuil',
    name: 'Fauteuil roulant',
    labelMobile: 'Fauteuil',
    labelDesktop: 'Fauteuil roulant',
    batteries: [
      { id: 'f1', brand: 'SP', model: 'Gel 12-22', ah: 22, v: 12, cca: 0, dim: '181 × 76 × 167 mm', price: 420, fits: 'Fauteuil électrique, scooter PMR' },
      { id: 'f2', brand: 'LONG', model: 'AGM 12-35', ah: 35, v: 12, cca: 0, dim: '195 × 130 × 168 mm', price: 620, fits: 'Fauteuil lourd, scooter 4 roues' },
    ],
  },
  {
    key: 'industriel',
    name: 'Industriel',
    labelMobile: 'Industriel',
    labelDesktop: 'Industriel / Levage',
    batteries: [
      { id: 'in1', brand: 'FOX', model: 'Traction T105', ah: 105, v: 12, cca: 0, dim: '330 × 172 × 240 mm', price: 1990, fits: 'Transpalette élec., nacelle' },
      { id: 'in3', brand: 'LONG', model: 'Industrial 200', ah: 200, v: 12, cca: 0, dim: '522 × 240 × 224 mm', price: 3490, fits: 'Balayeuse, autolaveuse' },
    ],
  },
  {
    key: 'memoire',
    name: 'Mémoire / Backup',
    labelMobile: 'Mémoire',
    labelDesktop: 'Mémoire / Backup',
    batteries: [
      { id: 'me1', brand: 'SP', model: 'Backup 12-1.2', ah: 1.2, v: 12, cca: 0, dim: '97 × 43 × 52 mm', price: 120, fits: 'Sauvegarde calculateur / radio' },
      { id: 'me2', brand: 'LONG', model: 'Gel Backup 12-2.3', ah: 2.3, v: 12, cca: 0, dim: '178 × 34 × 64 mm', price: 160, fits: 'Maintien mémoire au changement' },
    ],
  },
]

export default vehicles
