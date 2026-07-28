// Les 9 icônes engins, récupérées telles quelles depuis la maquette
// (viewBox 24×24, fill:none, stroke:currentColor, linecap/linejoin round).
// La couleur vient de `currentColor`, la taille et l'épaisseur sont passées
// en props (mobile : 25 / 1.6 · desktop : 34 / 1.5).
const PATHS = {
  voiture:
    'M4 13l1.8-4.6A2 2 0 017.7 7h8.6a2 2 0 011.9 1.4L20 13v4h-2.5M6.5 17H4v-4m2.5 4a2 2 0 104 0 2 2 0 10-4 0m7 0a2 2 0 104 0 2 2 0 10-4 0M4 13h16',
  moto: 'M5.5 18.5a3 3 0 100-6 3 3 0 000 6m13 0a3 3 0 100-6 3 3 0 000 6M5.5 15h5.2l3-6h2.6l-1.9-2.6M9.4 9h4.3',
  camion:
    'M2.5 6.5h11v9h-11zM13.5 9.5h3.6l2.9 3v3h-6.5M5.5 16.5a2 2 0 104 0 2 2 0 10-4 0m8.5 0a2 2 0 104 0 2 2 0 10-4 0',
  bateau: 'M3.5 15h17l-2.4 4.5H5.9zM7 15V6.5l9.5 4.2L10 13M10 6.5V3.5',
  quad: 'M4 9.6a2 2 0 104 0 2 2 0 10-4 0m12 0a2 2 0 104 0 2 2 0 10-4 0M4 17.6a2 2 0 104 0 2 2 0 10-4 0m12 0a2 2 0 104 0 2 2 0 10-4 0M8.4 9.6h7.2M8.4 17.6h7.2M9.4 11.9h5.2l-.5 3.4H9.9zM10.6 11.9V8.2h2.8v3.7M9.4 6.6h5.2',
  tracteur:
    'M6.5 18.5a4 4 0 100-8 4 4 0 000 8m11.5 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5M10.5 14h4M9.5 12V7h4.6l1.9 5M14.1 7h3.4',
  camping:
    'M2.5 6.5h14v9h-14zM16.5 9.5h3l2 2.6v3.4h-5M6.5 16.5a2 2 0 104 0 2 2 0 10-4 0m7 0a2 2 0 104 0 2 2 0 10-4 0M5.5 9h4.5v3.2H5.5z',
  groupe:
    'M3.5 9.8h12.5v8.7H3.5zM16 12.6h3.5v5.9H16M6.2 9.8V6.6h4.3v3.2M10.2 11.8l-2.5 3.5h2.2l-.5 2.3 2.7-3.6h-2.2z',
  solaire: 'M4 14.5h13.5l2.2-8.5H6.2zM9 6v8.5M13 6v8.5M5.2 10.2h13M2.5 18.5h16',
  // Fauteuil roulant (symbole accessibilité / handicap)
  fauteuil:
    'M17 4a1 1 0 10-2 0 1 1 0 102 0M18 19l1-7-6 1M5 8l3-3 5.5 3-2.4 3.5M4.3 14.5a5 5 0 006.9 6M13.8 17.5a5 5 0 00-6.9-6',
  // Industriel (chariot élévateur / transpalette)
  industriel:
    'M15 19a2 2 0 10-4 0 2 2 0 104 0M7 19a2 2 0 10-4 0 2 2 0 104 0M12 12H5a2 2 0 00-2 2v5M8 19h3M16 2v17h5M6 12V7c0-1.1.9-2 2-2h3l5 5',
  // Mémoire / backup (puce mémoire)
  memoire:
    'M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zM9 9h6v6H9zM15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2',
}

export default function VehicleIcon({ name, size = 25, strokeWidth = 1.6 }) {
  const d = PATHS[name]
  if (!d) return null
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}
