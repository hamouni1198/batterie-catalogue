// ---------------------------------------------------------------------------
// Catalogue des batteries — Battery Dynamic
// ---------------------------------------------------------------------------
// Schéma d'une batterie :
//   { id, brand, model, ah, v, cca, dim, price, fits, photo }
//   - cca = courant de démarrage (A). Mettre 0 pour une batterie à décharge
//     lente (solaire, onduleur, fauteuil) : la ligne CCA est alors omise dans
//     le message WhatsApp et la puce affiche « Décharge lente ».
//   - price = prix en dirhams (Dh).
//
// Données réelles extraites du catalogue boutique (marques, modèles, V/Ah/CCA
// et prix). Les DIMENSIONS non fournies par la source sont estimées d'après le
// format standard (L1–L6, NS40, D26/D31, M14–M16) — à confirmer. Quelques
// batteries « polyvalentes » (quad, groupe électrogène) réutilisent une
// référence réelle adaptée à cet usage.
// ---------------------------------------------------------------------------

export const vehicles = [
  {
    key: 'voiture',
    name: 'Voiture',
    labelMobile: 'Voiture',
    labelDesktop: 'Voiture',
    batteries: [
      // BOSCH
      { id: 'b13', brand: 'BOSCH', model: 'S5 A13 L5 AGM Start-Stop', ah: 95, v: 12, cca: 850, dim: '353 × 175 × 190 mm', price: 3150, fits: 'Start-Stop AGM · L5', photo: '/batteries/catb13.webp' },
      { id: 'b14', brand: 'BOSCH', model: 'S5 A11 L4 AGM Start-Stop', ah: 80, v: 12, cca: 800, dim: '315 × 175 × 190 mm', price: 2650, fits: 'Start-Stop AGM · L4', photo: '/batteries/catb14.webp' },
      { id: 'b15', brand: 'BOSCH', model: 'S5 A08 L3 AGM Start-Stop', ah: 70, v: 12, cca: 760, dim: '278 × 175 × 190 mm', price: 2200, fits: 'Start-Stop AGM · L3', photo: '/batteries/catb15.webp' },
      { id: 'b11', brand: 'BOSCH', model: 'S5 013 L5', ah: 100, v: 12, cca: 830, dim: '353 × 175 × 175 mm', price: 1840, fits: 'Grosses cylindrées · L5', photo: '/batteries/catb11.webp' },
      { id: 'b1', brand: 'BOSCH', model: 'S4 029 M11', ah: 95, v: 12, cca: 830, dim: '306 × 173 × 225 mm', price: 1700, fits: '4x4, diesel · M11 (D31)', photo: '/batteries/catb1.webp' },
      { id: 'b8', brand: 'BOSCH', model: 'S4 010 L4', ah: 80, v: 12, cca: 740, dim: '315 × 175 × 175 mm', price: 1450, fits: 'Break, SUV · L4', photo: '/batteries/catb8.webp' },
      { id: 'b12', brand: 'BOSCH', model: 'S5 008 L3', ah: 77, v: 12, cca: 780, dim: '278 × 175 × 175 mm', price: 1420, fits: 'Berlines · L3', photo: '/batteries/catb12.webp' },
      { id: 'b9', brand: 'BOSCH', model: 'S4 008 L3', ah: 74, v: 12, cca: 680, dim: '278 × 175 × 175 mm', price: 1350, fits: 'Berlines, break · L3', photo: '/batteries/catb9.webp' },
      { id: 'b3', brand: 'BOSCH', model: 'S3 008 L3', ah: 70, v: 12, cca: 640, dim: '278 × 175 × 175 mm', price: 1100, fits: 'Berlines · L3', photo: '/batteries/catb3.webp' },
      { id: 'b2', brand: 'BOSCH', model: 'S4 005 L2', ah: 60, v: 12, cca: 540, dim: '242 × 175 × 175 mm', price: 1050, fits: 'Compactes · L2', photo: '/batteries/catb2.webp' },
      { id: 'b10', brand: 'BOSCH', model: 'S4 006 L2', ah: 60, v: 12, cca: 540, dim: '242 × 175 × 190 mm', price: 1000, fits: 'Compactes · L2', photo: '/batteries/catb10.webp' },
      { id: 'b4', brand: 'BOSCH', model: 'S3 005 L2', ah: 56, v: 12, cca: 480, dim: '242 × 175 × 175 mm', price: 840, fits: 'Clio, 208, Corsa, Polo · L2', photo: '/batteries/catb4.webp' },
      { id: 'b6', brand: 'BOSCH', model: 'S4 018 NS40', ah: 40, v: 12, cca: 330, dim: '187 × 127 × 227 mm', price: 780, fits: 'Petites voitures (NS40)', photo: '/batteries/catb6.webp' },
      { id: 'b5', brand: 'BOSCH', model: 'S3 002 L1', ah: 45, v: 12, cca: 400, dim: '207 × 175 × 190 mm', price: 779, fits: 'Citadines · L1', photo: '/batteries/catb5.webp' },
      { id: 'b7', brand: 'BOSCH', model: 'S4 030 NS40', ah: 40, v: 12, cca: 330, dim: '187 × 127 × 227 mm', price: 760, fits: 'Petites voitures (NS40)', photo: '/batteries/catb7.webp' },
      // VARTA
      { id: 'v1', brand: 'VARTA', model: 'H15 L6 AGM Start-Stop', ah: 105, v: 12, cca: 950, dim: '394 × 175 × 190 mm', price: 3700, fits: 'Start-Stop AGM · L6', photo: '/batteries/catv1.webp' },
      { id: 'v3', brand: 'VARTA', model: 'G14 L5 AGM Start-Stop', ah: 95, v: 12, cca: 850, dim: '353 × 175 × 190 mm', price: 3600, fits: 'Start-Stop AGM · L5', photo: '/batteries/catv3.webp' },
      { id: 'v5', brand: 'VARTA', model: 'A6 / F21 L4 AGM Start-Stop', ah: 80, v: 12, cca: 800, dim: '315 × 175 × 190 mm', price: 3000, fits: 'Start-Stop AGM · L4', photo: '/batteries/catv5.webp' },
      { id: 'v6', brand: 'VARTA', model: 'A7 L3 AGM Start-Stop', ah: 70, v: 12, cca: 760, dim: '278 × 175 × 190 mm', price: 2550, fits: 'Start-Stop AGM · L3', photo: '/batteries/catv6.webp' },
      { id: 'v10', brand: 'VARTA', model: 'I1 L6', ah: 110, v: 12, cca: 920, dim: '353 × 175 × 190 mm', price: 2000, fits: 'Utilitaires, minibus · L6', photo: '/batteries/catv10.webp' },
      { id: 'v11', brand: 'VARTA', model: 'H3 L5', ah: 100, v: 12, cca: 830, dim: '353 × 175 × 175 mm', price: 2000, fits: 'Grosses cylindrées · L5', photo: '/batteries/catv11.webp' },
      { id: 'v12', brand: 'VARTA', model: 'G8 D31R M11G', ah: 95, v: 12, cca: 830, dim: '306 × 173 × 225 mm', price: 1800, fits: '4x4, diesel · D31 (borne à droite)', photo: '/batteries/catv12.webp' },
      { id: 'v13', brand: 'VARTA', model: 'G7 D31 M11D', ah: 95, v: 12, cca: 830, dim: '306 × 173 × 225 mm', price: 1800, fits: '4x4, diesel · D31', photo: '/batteries/catv13.webp' },
      { id: 'v14', brand: 'VARTA', model: 'F6 L5', ah: 90, v: 12, cca: 720, dim: '353 × 175 × 175 mm', price: 1600, fits: 'Break, SUV · L5', photo: '/batteries/catv14.webp' },
      { id: 'v15', brand: 'VARTA', model: 'E44 L3', ah: 77, v: 12, cca: 780, dim: '278 × 175 × 175 mm', price: 1550, fits: 'Berlines · L3', photo: '/batteries/catv15.webp' },
      { id: 'v16', brand: 'VARTA', model: 'F17 LB4', ah: 80, v: 12, cca: 740, dim: '315 × 175 × 175 mm', price: 1460, fits: 'Break, SUV · L4', photo: '/batteries/catv16.webp' },
      // VOLTAGE
      { id: 'vo10', brand: 'VOLTAGE', model: 'L6 110Ah', ah: 110, v: 12, cca: 920, dim: '353 × 175 × 190 mm', price: 1500, fits: 'Utilitaires, minibus · L6', photo: '/batteries/catvo10.webp' },
      { id: 'vo9', brand: 'VOLTAGE', model: 'L5 100Ah', ah: 100, v: 12, cca: 830, dim: '353 × 175 × 175 mm', price: 1100, fits: 'Grosses cylindrées · L5', photo: '/batteries/catvo9.webp' },
      { id: 'vo8', brand: 'VOLTAGE', model: 'M11 95Ah', ah: 95, v: 12, cca: 830, dim: '306 × 173 × 225 mm', price: 1050, fits: '4x4, diesel · M11 (D31)', photo: '/batteries/catvo8.webp' },
      { id: 'vo6', brand: 'VOLTAGE', model: 'L4 80Ah', ah: 80, v: 12, cca: 740, dim: '315 × 175 × 175 mm', price: 1000, fits: 'Break, SUV · L4', photo: '/batteries/catvo6.webp' },
      { id: 'vo7', brand: 'VOLTAGE', model: 'M10 70Ah', ah: 70, v: 12, cca: 600, dim: '260 × 173 × 225 mm', price: 850, fits: 'SUV (format asiatique) · M10', photo: '/batteries/catvo7.webp' },
      { id: 'vo3', brand: 'VOLTAGE', model: 'L3 75Ah', ah: 75, v: 12, cca: 640, dim: '278 × 175 × 175 mm', price: 800, fits: 'Berlines · L3', photo: '/batteries/catvo3.webp' },
      { id: 'vo5', brand: 'VOLTAGE', model: 'L2 60Ah', ah: 60, v: 12, cca: 540, dim: '242 × 175 × 175 mm', price: 750, fits: 'Compactes · L2', photo: '/batteries/catvo5.webp' },
      { id: 'vo4', brand: 'VOLTAGE', model: 'E2 60Ah', ah: 60, v: 12, cca: 480, dim: '232 × 173 × 225 mm', price: 700, fits: 'Berlines (format asiatique) · E2', photo: '/batteries/catvo4.webp' },
      { id: 'vo2', brand: 'VOLTAGE', model: 'E1 40Ah', ah: 40, v: 12, cca: 330, dim: '187 × 127 × 227 mm', price: 650, fits: 'Petites voitures · E1 (NS40)', photo: '/batteries/catvo2.webp' },
      { id: 'vo1', brand: 'VOLTAGE', model: 'L1 46Ah', ah: 46, v: 12, cca: 400, dim: '207 × 175 × 175 mm', price: 600, fits: 'Citadines · L1', photo: '/batteries/catvo1.webp' },
      // ENERGIZER
      { id: 'e3', brand: 'ENERGIZER', model: 'Premium AGM EA95 L5', ah: 95, v: 12, cca: 850, dim: '353 × 175 × 190 mm', price: 2800, fits: 'Start-Stop AGM · L5', photo: '/batteries/cate3.webp' },
      { id: 'e2', brand: 'ENERGIZER', model: 'Premium AGM EA80 L4', ah: 80, v: 12, cca: 800, dim: '315 × 175 × 190 mm', price: 2400, fits: 'Start-Stop AGM · L4', photo: '/batteries/cate2.webp' },
      { id: 'e1', brand: 'ENERGIZER', model: 'Premium AGM EA70 L3', ah: 70, v: 12, cca: 760, dim: '278 × 175 × 190 mm', price: 1800, fits: 'Start-Stop AGM · L3', photo: '/batteries/cate1.webp' },
      { id: 'e8', brand: 'ENERGIZER', model: 'Plus EP95 L5', ah: 95, v: 12, cca: 800, dim: '353 × 175 × 175 mm', price: 1400, fits: 'Grosses cylindrées · L5', photo: '/batteries/cate8.webp' },
      { id: 'e6', brand: 'ENERGIZER', model: 'Plus EP74 L3', ah: 74, v: 12, cca: 680, dim: '278 × 175 × 190 mm', price: 1100, fits: 'Berlines · L3', photo: '/batteries/cate6.webp' },
      { id: 'e5', brand: 'ENERGIZER', model: 'EM63 L2 AGM', ah: 63, v: 12, cca: 610, dim: '242 × 175 × 190 mm', price: 850, fits: 'Compactes AGM · L2', photo: '/batteries/cate5.webp' },
      { id: 'e4', brand: 'ENERGIZER', model: 'Plus EP52 L1', ah: 52, v: 12, cca: 470, dim: '207 × 175 × 175 mm', price: 750, fits: 'Citadines · L1', photo: '/batteries/cate4.webp' },
      // JET
      { id: 'j3', brand: 'JET', model: 'Power+ L5 AGM Start-Stop', ah: 95, v: 12, cca: 850, dim: '353 × 175 × 190 mm', price: 2800, fits: 'Start-Stop AGM · L5 (grosses berlines diesel)', photo: '/batteries/catj3.webp' },
      { id: 'j2', brand: 'JET', model: 'Power+ L4 AGM Start-Stop', ah: 80, v: 12, cca: 800, dim: '315 × 175 × 190 mm', price: 2300, fits: 'Start-Stop AGM · L4', photo: '/batteries/catj2.webp' },
      { id: 'j1', brand: 'JET', model: 'Power+ L3 AGM Start-Stop', ah: 70, v: 12, cca: 760, dim: '278 × 175 × 190 mm', price: 1800, fits: 'Start-Stop AGM · L3', photo: '/batteries/catj1.webp' },
      // MONBAT
      { id: 'mo3', brand: 'MONBAT', model: 'L5 AGM Start-Stop', ah: 95, v: 12, cca: 860, dim: '353 × 175 × 190 mm', price: 2500, fits: 'Start-Stop AGM · L5', photo: '/batteries/catm3.webp' },
      { id: 'mo2', brand: 'MONBAT', model: 'L4 AGM Start-Stop', ah: 80, v: 12, cca: 800, dim: '315 × 175 × 190 mm', price: 2200, fits: 'Start-Stop AGM · L4', photo: '/batteries/catm2.webp' },
      { id: 'mo1', brand: 'MONBAT', model: 'L3 AGM Start-Stop', ah: 70, v: 12, cca: 760, dim: '278 × 175 × 190 mm', price: 1800, fits: 'Start-Stop AGM · L3', photo: '/batteries/catm1.webp' },
      // FOX
      { id: 'f6', brand: 'FOX', model: 'M11 95Ah', ah: 95, v: 12, cca: 830, dim: '306 × 173 × 225 mm', price: 1050, fits: '4x4, diesel · M11 (D31)', photo: '/batteries/catf6.webp' },
      { id: 'f4', brand: 'FOX', model: 'L4 80Ah', ah: 80, v: 12, cca: 740, dim: '315 × 175 × 175 mm', price: 1000, fits: 'Break, SUV · L4', photo: '/batteries/catf4.webp' },
      { id: 'f5', brand: 'FOX', model: 'L3 75Ah', ah: 75, v: 12, cca: 640, dim: '278 × 175 × 175 mm', price: 800, fits: 'Berlines · L3', photo: '/batteries/catf5.webp' },
      { id: 'f3', brand: 'FOX', model: 'L2 60Ah', ah: 60, v: 12, cca: 540, dim: '242 × 175 × 175 mm', price: 750, fits: 'Compactes · L2', photo: '/batteries/catf3.webp' },
      { id: 'f1', brand: 'FOX', model: 'E1 40Ah', ah: 40, v: 12, cca: 330, dim: '187 × 127 × 227 mm', price: 650, fits: 'Petites voitures · E1 (NS40)', photo: '/batteries/catf1.webp' },
      { id: 'f2', brand: 'FOX', model: 'L1 46Ah', ah: 46, v: 12, cca: 400, dim: '207 × 175 × 175 mm', price: 600, fits: 'Citadines · L1', photo: '/batteries/catf2.webp' },
      // TURBO
      { id: 't5', brand: 'TURBO', model: 'L5', ah: 95, v: 12, cca: 800, dim: '355 × 175 × 190 mm', price: 1100, fits: 'Grosses cylindrées · L5', photo: '/batteries/catt5.webp' },
      { id: 't3', brand: 'TURBO', model: 'L3', ah: 70, v: 12, cca: 640, dim: '278 × 175 × 190 mm', price: 800, fits: 'Berlines · L3', photo: '/batteries/catt3.webp' },
      { id: 't2', brand: 'TURBO', model: 'L2', ah: 57, v: 12, cca: 500, dim: '245 × 175 × 189 mm', price: 750, fits: 'Compactes · L2', photo: '/batteries/catt2.webp' },
      { id: 't1', brand: 'TURBO', model: 'L1', ah: 45, v: 12, cca: 400, dim: '207 × 175 × 190 mm', price: 650, fits: 'Citadines · L1', photo: '/batteries/catt1.webp' },
    ],
  },
  {
    key: 'moto',
    name: 'Moto / Scooter',
    labelMobile: 'Moto',
    labelDesktop: 'Moto / Scooter',
    batteries: [
      // SP
      { id: 'sp10', brand: 'SP', model: 'YTX30L-BS', ah: 30, v: 12, cca: 400, dim: '166 × 126 × 175 mm', price: 850, fits: 'Gros custom, jet-ski, motoneige', photo: '/batteries/catsp10.webp' },
      { id: 'sp12', brand: 'SP', model: 'YTX20L-BS MF', ah: 18, v: 12, cca: 270, dim: '175 × 87 × 155 mm', price: 750, fits: 'Gros custom, quad, jet-ski', photo: '/batteries/catsp12.webp' },
      { id: 'sp5', brand: 'SP', model: 'YTX16-BS MF', ah: 14, v: 12, cca: 230, dim: '150 × 87 × 161 mm', price: 600, fits: 'Moto, jet-ski', photo: '/batteries/catsp5.webp' },
      { id: 'sp9', brand: 'SP', model: 'BB10L-B2', ah: 11, v: 12, cca: 130, dim: '136 × 91 × 146 mm', price: 550, fits: 'Moto ancienne', photo: '/batteries/catsp9.webp' },
      { id: 'sp2', brand: 'SP', model: 'YTX14-BS MF', ah: 12, v: 12, cca: 200, dim: '150 × 87 × 145 mm', price: 520, fits: 'Moto, quad', photo: '/batteries/catsp2.webp' },
      { id: 'sp4', brand: 'SP', model: 'YTZ14S MF', ah: 11, v: 12, cca: 230, dim: '150 × 87 × 110 mm', price: 500, fits: 'Moto', photo: '/batteries/catsp4.webp' },
      { id: 'sp7', brand: 'SP', model: 'YTZ12S MF', ah: 11, v: 12, cca: 210, dim: '150 × 87 × 110 mm', price: 500, fits: 'Honda Forza, X-ADV', photo: '/batteries/catsp7.webp' },
      { id: 'sp3', brand: 'SP', model: 'YTX9-BS MF', ah: 8, v: 12, cca: 120, dim: '150 × 87 × 105 mm', price: 270, fits: 'Moto, scooter', photo: '/batteries/catsp3.webp' },
      { id: 'sp11', brand: 'SP', model: 'BTX9-BS', ah: 8, v: 12, cca: 120, dim: '150 × 87 × 105 mm', price: 270, fits: 'Moto, scooter', photo: '/batteries/catsp11.webp' },
      { id: 'sp13', brand: 'SP', model: 'YTX7L-BS', ah: 6, v: 12, cca: 100, dim: '114 × 71 × 131 mm', price: 270, fits: 'Scooter, moto', photo: '/batteries/catsp13.webp' },
      { id: 'sp1', brand: 'SP', model: 'YTX5L-BS MF', ah: 4, v: 12, cca: 70, dim: '114 × 71 × 106 mm', price: 200, fits: 'Scooter, petite moto', photo: '/batteries/catsp1.webp' },
      { id: 'sp8', brand: 'SP', model: 'YTX4L-BS', ah: 3, v: 12, cca: 50, dim: '114 × 71 × 86 mm', price: 170, fits: 'Petite moto, scooter', photo: '/batteries/catsp8.webp' },
      { id: 'sp6', brand: 'SP', model: '12N5L-BS MF', ah: 5, v: 12, cca: 60, dim: '120 × 60 × 130 mm', price: 150, fits: 'Petite moto (conventionnelle) · prix à confirmer', photo: '/batteries/catsp6.webp' },
      // YUASA
      { id: 'y6', brand: 'YUASA', model: 'YIX30L-BS', ah: 30, v: 12, cca: 385, dim: '166 × 126 × 175 mm', price: 1800, fits: 'Gros custom, motoneige, jet-ski (AGM MF)', photo: '/batteries/caty6.webp' },
      { id: 'y3', brand: 'YUASA', model: 'YTX12-BS', ah: 10, v: 12, cca: 180, dim: '150 × 87 × 130 mm', price: 800, fits: 'Moto route, gros scooter (AGM MF)', photo: '/batteries/caty3.webp' },
      { id: 'y5', brand: 'YUASA', model: 'YB12AL-A', ah: 12, v: 12, cca: 150, dim: '134 × 80 × 160 mm', price: 450, fits: 'Moto ancienne, BMW (conventionnelle)', photo: '/batteries/caty5.webp' },
      { id: 'y4', brand: 'YUASA', model: 'YTX7A-BS', ah: 6, v: 12, cca: 105, dim: '150 × 87 × 93 mm', price: 450, fits: 'SYM, Kymco, scooter 125 (AGM MF)', photo: '/batteries/caty4.webp' },
      { id: 'y2', brand: 'YUASA', model: 'YB5L-B', ah: 5, v: 12, cca: 60, dim: '121 × 61 × 131 mm', price: 250, fits: 'Scooter, moto 125', photo: '/batteries/caty2.webp' },
      { id: 'y1', brand: 'YUASA', model: 'YB4L-B', ah: 4, v: 12, cca: 50, dim: '120 × 70 × 92 mm', price: 250, fits: 'Scooter, petite moto (conventionnelle)', photo: '/batteries/caty1.webp' },
      // VARTA Powersports AGM
      { id: 'vytx20l', brand: 'VARTA', model: 'Powersports AGM YTX20L-BS', ah: 18, v: 12, cca: 250, dim: '175 × 87 × 155 mm', price: 1350, fits: 'Moto, quad, jet-ski (YTX20L-4)', photo: '/batteries/vytx20l.webp' },
      { id: 'vytx14', brand: 'VARTA', model: 'Powersports AGM YTX14-4', ah: 12, v: 12, cca: 200, dim: '150 × 87 × 145 mm', price: 1300, fits: 'Moto, quad, jet-ski (YTX14-BS)', photo: '/batteries/vytx14.webp' },
      { id: 'vytz14s', brand: 'VARTA', model: 'Powersports AGM YTZ14S-4', ah: 11, v: 12, cca: 230, dim: '150 × 87 × 110 mm', price: 1050, fits: 'Moto (YTZ14S-BS / TTZ14S-BS)', photo: '/batteries/vytz14s.webp' },
      { id: 'vytz10s', brand: 'VARTA', model: 'Powersports AGM YTZ10S-4', ah: 8, v: 12, cca: 150, dim: '150 × 87 × 93 mm', price: 950, fits: 'Moto sportive (YTZ10S-BS)', photo: '/batteries/vytz10s.webp' },
      // EXIDE — série ETX (AGM Powersports). Réf. croisées AGM 12-X / ETX##-BS / YTX##.
      { id: 'exetx20hl', brand: 'EXIDE', model: 'ETX20HL AGM', ah: 21, v: 12, cca: 350, dim: '205 × 87 × 162 mm', price: 1400, fits: 'YTX20HL / AGM 12-23 — gros custom, Harley (AGM)', photo: '/batteries/exagm23.webp' },
      { id: 'exetx16', brand: 'EXIDE', model: 'ETX16 AGM', ah: 16, v: 12, cca: 170, dim: '175 × 87 × 155 mm', price: 1200, fits: 'YTX16 / AGM 12-16 — moto, jet-ski (AGM)', photo: '/batteries/exagm16.webp' },
      { id: 'exetx14', brand: 'EXIDE', model: 'ETX14 AGM', ah: 12, v: 12, cca: 210, dim: '150 × 87 × 145 mm', price: 950, fits: 'YTX14 / AGM 12-14 — moto, quad (AGM)', photo: '/batteries/exagm14.webp' },
      { id: 'exetx12', brand: 'EXIDE', model: 'ETX12 AGM', ah: 12, v: 12, cca: 200, dim: '150 × 87 × 110 mm', price: 900, fits: 'YTX12 / AGM 12-12 — moto (AGM)', photo: '/batteries/exagm12.webp' },
      { id: 'exetx7', brand: 'EXIDE', model: 'ETX7 AGM', ah: 8.6, v: 12, cca: 145, dim: '150 × 87 × 93 mm', price: 600, fits: 'YTX7 / AGM 12-8 — scooter, moto (AGM)', photo: '/batteries/exagm8.webp' },
      { id: 'exetx9', brand: 'EXIDE', model: 'ETX9 AGM', ah: 9, v: 12, cca: 120, dim: '150 × 87 × 105 mm', price: 430, fits: 'YTX9-BS / AGM 12-9 — moto, scooter (AGM)', photo: '/batteries/exetx9c.webp' },
      // ZUNCI
      { id: 'z5', brand: 'ZUNCI', model: 'YTX12-BS', ah: 9, v: 12, cca: 180, dim: '150 × 87 × 130 mm', price: 500, fits: 'Moto route, scooter', photo: '/batteries/catz5.webp' },
      { id: 'z2', brand: 'ZUNCI', model: 'YTX7A-BS', ah: 6, v: 12, cca: 105, dim: '150 × 87 × 93 mm', price: 260, fits: 'Scooter 125', photo: '/batteries/catz2.webp' },
      { id: 'z3', brand: 'ZUNCI', model: '12N9-BS', ah: 9, v: 12, cca: 120, dim: '137 × 76 × 140 mm', price: 260, fits: 'Moto ancienne', photo: '/batteries/catz3.webp' },
      { id: 'z1', brand: 'ZUNCI', model: '12N5-BS', ah: 5, v: 12, cca: 45, dim: '120 × 60 × 130 mm', price: 180, fits: 'Petite moto, scooter', photo: '/batteries/catz1.webp' },
      { id: 'z4', brand: 'ZUNCI', model: 'YTX5L-BS', ah: 4, v: 12, cca: 70, dim: '114 × 71 × 106 mm', price: 180, fits: 'Scooter, petite moto', photo: '/batteries/catz4.webp' },
    ],
  },
  {
    key: 'camion',
    name: 'Camion / Poids lourd',
    labelMobile: 'Camion',
    labelDesktop: 'Camion',
    batteries: [
      { id: 'v2', brand: 'VARTA', model: 'N9 M16', ah: 225, v: 12, cca: 1150, dim: '518 × 276 × 242 mm', price: 3700, fits: 'Poids lourds, bus · M16', photo: '/batteries/catv2.webp' },
      { id: 'v4', brand: 'VARTA', model: 'M18 M15', ah: 180, v: 12, cca: 1000, dim: '513 × 223 × 223 mm', price: 3400, fits: 'Camions, poids lourds · M15', photo: '/batteries/catv4.webp' },
      { id: 'v7', brand: 'VARTA', model: 'K8 M14', ah: 140, v: 12, cca: 800, dim: '513 × 189 × 223 mm', price: 2390, fits: 'Camions, utilitaires lourds · M14', photo: '/batteries/catv7.webp' },
      { id: 'v9', brand: 'VARTA', model: 'H17 ProMotive', ah: 105, v: 12, cca: 800, dim: '345 × 172 × 235 mm', price: 2100, fits: 'Poids lourds, livraison (ProMotive)', photo: '/batteries/catv9.webp' },
      { id: 'v8', brand: 'VARTA', model: 'N70 ProMotive EFB Start-Stop', ah: 70, v: 12, cca: 720, dim: '306 × 173 × 225 mm', price: 2300, fits: 'Poids lourds, utilitaires (ProMotive EFB)', photo: '/batteries/catv8.webp' },
    ],
  },
  {
    key: 'bateau',
    name: 'Bateau / Jet-ski',
    labelMobile: 'Bateau',
    labelDesktop: 'Bateau / Jet-ski',
    batteries: [
      { id: 'v18', brand: 'VARTA', model: 'E23 D26 M10D Dual Purpose AGM', ah: 70, v: 12, cca: 570, dim: '260 × 173 × 225 mm', price: 1380, fits: 'Marine loisirs · D26', photo: '/batteries/catv18.webp' },
      { id: 'v19', brand: 'VARTA', model: 'E24 D26R M10G Starter', ah: 70, v: 12, cca: 570, dim: '260 × 173 × 225 mm', price: 1299, fits: 'Démarrage marine · D26 (borne à droite)', photo: '/batteries/catv19.webp' },
      { id: 'v20', brand: 'VARTA', model: 'D24 L2 Starter', ah: 60, v: 12, cca: 540, dim: '242 × 175 × 175 mm', price: 1135, fits: 'Démarrage marine · L2', photo: '/batteries/catv20.webp' },
      { id: 'v23', brand: 'VARTA', model: 'E13 L3 Starter', ah: 70, v: 12, cca: 640, dim: '278 × 175 × 175 mm', price: 1050, fits: 'Démarrage marine · L3', photo: '/batteries/catv23.webp' },
      { id: 'v22', brand: 'VARTA', model: 'C15 L2 Dual Purpose', ah: 56, v: 12, cca: 480, dim: '242 × 175 × 175 mm', price: 1060, fits: 'Marine loisirs · L2', photo: '/batteries/catv22.webp' },
      { id: 'v24', brand: 'VARTA', model: 'C14 L2 Starter', ah: 56, v: 12, cca: 480, dim: '242 × 175 × 175 mm', price: 990, fits: 'Démarrage marine · L2', photo: '/batteries/catv24.webp' },
      { id: 'v26', brand: 'VARTA', model: 'B32 NS60D Dual Purpose', ah: 45, v: 12, cca: 330, dim: '238 × 129 × 227 mm', price: 940, fits: 'Marine loisirs · NS60', photo: '/batteries/catv26.webp' },
      { id: 'v27', brand: 'VARTA', model: 'B23 E2D Starter', ah: 45, v: 12, cca: 300, dim: '232 × 127 × 225 mm', price: 910, fits: 'Démarrage marine · E2', photo: '/batteries/catv27.webp' },
      { id: 'v28', brand: 'VARTA', model: 'B19 L1 Starter', ah: 45, v: 12, cca: 400, dim: '207 × 175 × 175 mm', price: 850, fits: 'Démarrage marine · L1', photo: '/batteries/catv28.webp' },
    ],
  },
  {
    key: 'quad',
    name: 'Quad / Buggy',
    labelMobile: 'Quad',
    labelDesktop: 'Quad / Buggy',
    batteries: [
      { id: 'q_y6', brand: 'YUASA', model: 'YIX30L-BS', ah: 30, v: 12, cca: 385, dim: '166 × 126 × 175 mm', price: 1800, fits: 'Gros quad, SSV (AGM MF)', photo: '/batteries/caty6.webp' },
      { id: 'q_sp12', brand: 'SP', model: 'YTX20L-BS MF', ah: 18, v: 12, cca: 270, dim: '175 × 87 × 155 mm', price: 750, fits: 'Polaris, Can-Am, Kymco (YTX20L)', photo: '/batteries/catsp12.webp' },
      { id: 'q_sp5', brand: 'SP', model: 'YTX16-BS MF', ah: 14, v: 12, cca: 230, dim: '150 × 87 × 161 mm', price: 600, fits: 'Buggy, SSV (YTX16)', photo: '/batteries/catsp5.webp' },
    ],
  },
  {
    key: 'camping',
    name: 'Camping-car',
    labelMobile: 'Camping-car',
    labelDesktop: 'Camping-car',
    batteries: [
      { id: 'v17', brand: 'VARTA', model: 'E11 L3 Dual Purpose', ah: 74, v: 12, cca: 680, dim: '278 × 175 × 175 mm', price: 1430, fits: 'Cellule + démarrage (Dual Purpose) · L3', photo: '/batteries/catv17.webp' },
      { id: 'v21', brand: 'VARTA', model: 'E9 LB3 Dual Purpose', ah: 70, v: 12, cca: 640, dim: '278 × 175 × 175 mm', price: 1100, fits: 'Cellule, frigo, éclairage · LB3', photo: '/batteries/catv21.webp' },
      { id: 'v25', brand: 'VARTA', model: 'C11 LB2 Dual Purpose', ah: 53, v: 12, cca: 470, dim: '242 × 175 × 175 mm', price: 980, fits: 'Cellule van, fourgon · LB2', photo: '/batteries/catv25.webp' },
      { id: 'v29', brand: 'VARTA', model: 'A14 NS40 Dual Purpose', ah: 40, v: 12, cca: 330, dim: '187 × 127 × 227 mm', price: 790, fits: 'Petit camping-car, auxiliaire · NS40', photo: '/batteries/catv29.webp' },
    ],
  },
  {
    key: 'groupe',
    name: 'Groupe électrogène',
    labelMobile: 'Groupe',
    labelDesktop: 'Groupe électrogène',
    batteries: [
      { id: 'g_v7', brand: 'VARTA', model: 'K8 M14', ah: 140, v: 12, cca: 800, dim: '513 × 189 × 223 mm', price: 2390, fits: 'Groupe 30 – 60 kVA · M14', photo: '/batteries/catv7.webp' },
      { id: 'g_vo3', brand: 'VOLTAGE', model: 'L3 75Ah', ah: 75, v: 12, cca: 640, dim: '278 × 175 × 175 mm', price: 800, fits: 'Groupe 10 – 20 kVA · L3', photo: '/batteries/catvo3.webp' },
      { id: 'g_vo5', brand: 'VOLTAGE', model: 'L2 60Ah', ah: 60, v: 12, cca: 540, dim: '242 × 175 × 175 mm', price: 750, fits: 'Groupe 5 – 10 kVA · L2', photo: '/batteries/catvo5.webp' },
    ],
  },
  {
    key: 'solaire',
    name: 'Solaire / Onduleur',
    labelMobile: 'Solaire',
    labelDesktop: 'Solaire / Onduleur',
    batteries: [
      { id: 'l16', brand: 'LONG', model: 'AGM 12V 75Ah', ah: 75, v: 12, cca: 0, dim: '260 × 169 × 210 mm', price: 1900, fits: 'Kit solaire, onduleur (décharge lente)', photo: '/batteries/catl16.webp' },
      { id: 'l15', brand: 'LONG', model: 'AGM 12V 50Ah', ah: 50, v: 12, cca: 0, dim: '229 × 138 × 213 mm', price: 1250, fits: 'Kit solaire, onduleur (décharge lente)', photo: '/batteries/catl15.webp' },
      { id: 'l13', brand: 'LONG', model: 'AGM 12V 26Ah', ah: 26, v: 12, cca: 0, dim: '166 × 175 × 125 mm', price: 780, fits: 'Petit onduleur, éclairage solaire', photo: '/batteries/catl13.webp' },
    ],
  },
  {
    key: 'fauteuil',
    name: 'Fauteuil roulant',
    labelMobile: 'Fauteuil',
    labelDesktop: 'Fauteuil roulant',
    batteries: [
      { id: 'l12', brand: 'LONG', model: 'AGM 12V 20Ah', ah: 20, v: 12, cca: 0, dim: '181 × 77 × 167 mm', price: 680, fits: 'Fauteuil électrique, scooter PMR', photo: '/batteries/catl12.webp' },
      { id: 'l10', brand: 'LONG', model: 'AGM 12V 17Ah', ah: 17, v: 12, cca: 0, dim: '181 × 76 × 167 mm', price: 530, fits: 'Fauteuil électrique, scooter PMR', photo: '/batteries/catl10.webp' },
      { id: 'l9', brand: 'LONG', model: 'AGM 12V 15Ah', ah: 15, v: 12, cca: 0, dim: '181 × 76 × 167 mm', price: 420, fits: 'Fauteuil léger, scooter PMR', photo: '/batteries/catl9.webp' },
      { id: 'l7', brand: 'LONG', model: 'AGM 12V 12Ah', ah: 12, v: 12, cca: 0, dim: '151 × 98 × 95 mm', price: 340, fits: 'Petit fauteuil, mobilité', photo: '/batteries/catl7.webp' },
    ],
  },
  {
    key: 'industriel',
    name: 'Industriel',
    labelMobile: 'Industriel',
    labelDesktop: 'Industriel / Levage',
    batteries: [
      { id: 'l14', brand: 'LONG', model: 'AGM 12V 36Ah', ah: 36, v: 12, cca: 0, dim: '196 × 130 × 169 mm', price: 950, fits: 'Balayeuse, autolaveuse, levage', photo: '/batteries/catl14.webp' },
      { id: 'l17', brand: 'LONG', model: 'AGM 12V 30Ah', ah: 30, v: 12, cca: 0, dim: '166 × 175 × 125 mm', price: 950, fits: 'Nacelle, transpalette élec.', photo: '/batteries/catl17.webp' },
    ],
  },
  {
    key: 'memoire',
    name: 'Mémoire / Backup',
    labelMobile: 'Mémoire',
    labelDesktop: 'Mémoire / Backup',
    batteries: [
      { id: 'l6', brand: 'LONG', model: 'AGM 12V 9Ah', ah: 9, v: 12, cca: 0, dim: '151 × 65 × 94 mm', price: 240, fits: 'Onduleur, alarme, backup', photo: '/batteries/catl6.webp' },
      { id: 'l5', brand: 'LONG', model: 'AGM 12V 7.2Ah', ah: 7.2, v: 12, cca: 0, dim: '151 × 65 × 94 mm', price: 220, fits: 'Onduleur, alarme, backup', photo: '/batteries/catl5.webp' },
      { id: 'l4', brand: 'LONG', model: 'AGM 12V 4.5Ah', ah: 4.5, v: 12, cca: 0, dim: '90 × 70 × 101 mm', price: 160, fits: 'Alarme, jouet, backup', photo: '/batteries/catl4.webp' },
      { id: 'l18', brand: 'LONG', model: 'AGM 12V 1.2Ah', ah: 1.2, v: 12, cca: 0, dim: '97 × 43 × 59 mm', price: 150, fits: 'Sauvegarde mémoire, petit backup', photo: '/batteries/catl18.webp' },
      { id: 'l3', brand: 'LONG', model: 'AGM 6V 12Ah', ah: 12, v: 6, cca: 0, dim: '151 × 50 × 94 mm', price: 160, fits: 'Alarme 6V, éclairage secours', photo: '/batteries/catl3.webp' },
      { id: 'l2', brand: 'LONG', model: 'AGM 6V 7Ah', ah: 7, v: 6, cca: 0, dim: '151 × 34 × 94 mm', price: 140, fits: 'Alarme 6V, jouet', photo: '/batteries/catl2.webp' },
      { id: 'l1', brand: 'LONG', model: 'AGM 6V 4.5Ah', ah: 4.5, v: 6, cca: 0, dim: '70 × 47 × 101 mm', price: 80, fits: 'Alarme 6V, backup', photo: '/batteries/catl1.webp' },
    ],
  },
]

export default vehicles
