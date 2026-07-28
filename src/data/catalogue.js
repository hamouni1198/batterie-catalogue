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
      { id: 'v1', brand: 'VARTA', model: 'Blue Dynamic B18', ah: 44, v: 12, cca: 420, dim: '207 × 175 × 175 mm', price: 690, fits: 'Clio, Sandero, 208, Picanto' },
      { id: 'v2', brand: 'BOSCH', model: 'S4 005', ah: 60, v: 12, cca: 540, dim: '242 × 175 × 190 mm', price: 890, fits: 'Logan, Golf, Fiesta, Ibiza' },
      { id: 'v3', brand: 'FOX', model: 'Premium 70', ah: 70, v: 12, cca: 600, dim: '261 × 175 × 220 mm', price: 950, fits: 'Duster, Kangoo, Partner' },
      { id: 'v4', brand: 'VARTA', model: 'Blue Dynamic E11', ah: 74, v: 12, cca: 680, dim: '278 × 175 × 190 mm', price: 1190, fits: 'Passat, Mégane, Focus, C4' },
      { id: 'v5', brand: 'VOLTAGE', model: 'Silver 100', ah: 100, v: 12, cca: 800, dim: '353 × 175 × 190 mm', price: 1590, fits: 'Prado, Hilux, Touareg, X5' },
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
      { id: 'm4', brand: 'VARTA', model: 'Powersports YTX14', ah: 12, v: 12, cca: 200, dim: '150 × 87 × 145 mm', price: 520, fits: 'BMW GS, Africa Twin' },
    ],
  },
  {
    key: 'camion',
    name: 'Camion / Poids lourd',
    labelMobile: 'Camion',
    labelDesktop: 'Camion',
    batteries: [
      { id: 'c1', brand: 'BOSCH', model: 'T4 077', ah: 140, v: 12, cca: 850, dim: '513 × 189 × 223 mm', price: 2190, fits: 'Sprinter, Daily, Atego' },
      { id: 'c2', brand: 'FOX', model: 'Truck 150', ah: 150, v: 12, cca: 1000, dim: '513 × 189 × 223 mm', price: 2350, fits: 'Actros, TGX, Renault T' },
      { id: 'c3', brand: 'VARTA', model: 'Promotive M18', ah: 180, v: 12, cca: 1100, dim: '513 × 223 × 223 mm', price: 3150, fits: 'Volvo FH, Scania R' },
      { id: 'c4', brand: 'VOLTAGE', model: 'Heavy 200', ah: 200, v: 12, cca: 1150, dim: '518 × 276 × 242 mm', price: 3490, fits: 'Bennes, remorques, bus' },
    ],
  },
  {
    key: 'bateau',
    name: 'Bateau / Jet-ski',
    labelMobile: 'Bateau',
    labelDesktop: 'Bateau / Jet-ski',
    batteries: [
      { id: 'b1', brand: 'SP', model: 'Jet-ski YTX20-BS', ah: 18, v: 12, cca: 270, dim: '175 × 87 × 155 mm', price: 590, fits: 'Sea-Doo, Yamaha WaveRunner' },
      { id: 'b2', brand: 'VARTA', model: 'Professional DC 90', ah: 90, v: 12, cca: 800, dim: '353 × 175 × 190 mm', price: 1890, fits: 'Servitude, sondeur, guindeau' },
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
      { id: 'q1', brand: 'VARTA', model: 'Powersports AGM YTX12', ah: 10, v: 12, cca: 200, dim: '152 × 88 × 131 mm', price: 460, fits: 'Raptor, Outlander' },
      { id: 'q2', brand: 'LONG', model: 'Gel YTX16-BS', ah: 14, v: 12, cca: 230, dim: '150 × 87 × 161 mm', price: 480, fits: 'Buggy 800, SSV' },
      { id: 'q3', brand: 'SP', model: 'Quad YTX20L-BS', ah: 18, v: 12, cca: 270, dim: '175 × 87 × 155 mm', price: 560, fits: 'Polaris, Can-Am, Kymco' },
    ],
  },
  {
    key: 'tracteur',
    name: 'Tracteur / Agricole',
    labelMobile: 'Tracteur',
    labelDesktop: 'Tracteur',
    batteries: [
      { id: 't1', brand: 'VARTA', model: 'Promotive H3', ah: 100, v: 12, cca: 720, dim: '413 × 175 × 220 mm', price: 1750, fits: 'Massey 290, Kubota' },
      { id: 't2', brand: 'FOX', model: 'Agri 143', ah: 143, v: 12, cca: 900, dim: '513 × 189 × 223 mm', price: 2250, fits: 'New Holland, Deutz' },
      { id: 't3', brand: 'VOLTAGE', model: 'Agri 180', ah: 180, v: 12, cca: 1000, dim: '513 × 223 × 223 mm', price: 2950, fits: 'John Deere, Case IH' },
    ],
  },
  {
    key: 'camping',
    name: 'Camping-car',
    labelMobile: 'Camping-car',
    labelDesktop: 'Camping-car',
    batteries: [
      { id: 'k1', brand: 'LONG', model: 'Deep Cycle 105', ah: 105, v: 12, cca: 650, dim: '330 × 171 × 220 mm', price: 2350, fits: 'Cellule, frigo, éclairage' },
      { id: 'k2', brand: 'VARTA', model: 'Professional DC 115', ah: 115, v: 12, cca: 760, dim: '353 × 175 × 190 mm', price: 2490, fits: 'Ducato, Boxer aménagé' },
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
      { id: 'g3', brand: 'VOLTAGE', model: 'Genset 150', ah: 150, v: 12, cca: 950, dim: '513 × 189 × 223 mm', price: 2290, fits: 'Groupe 40 kVA et +' },
    ],
  },
  {
    key: 'solaire',
    name: 'Solaire / Onduleur',
    labelMobile: 'Solaire',
    labelDesktop: 'Solaire / Onduleur',
    batteries: [
      { id: 's1', brand: 'LONG', model: 'Gel Solar 100', ah: 100, v: 12, cca: 0, dim: '330 × 171 × 220 mm', price: 2590, fits: 'Kit 1 kW, pompage' },
      { id: 's2', brand: 'VOLTAGE', model: 'Solar AGM 150', ah: 150, v: 12, cca: 0, dim: '483 × 170 × 240 mm', price: 3390, fits: 'Kit 2 kW, onduleur 24V' },
      { id: 's3', brand: 'SP', model: 'Solar Tubulaire 200', ah: 200, v: 12, cca: 0, dim: '518 × 276 × 242 mm', price: 4190, fits: 'Site isolé, ferme' },
    ],
  },
]

export default vehicles
