# Battery Agadir — Catalogue-jeu interactif

Catalogue de batteries pour le magasin **Battery Agadir** (Agadir, Maroc).
Une page unique : une photo du magasin en fond, le logo au centre d'un cercle,
et tous les engins autour. Au clic sur un engin, le cercle tourne pour l'amener
sous le repère et la liste des **batteries compatibles** apparaît (fiche
technique, prix, bouton WhatsApp pré-rempli).

Implémentation **React + Vite** des designs **2a (mobile)** et **2b (desktop)**
du handoff (`design_handoff_catalogue_batteries/`), reproduits en haute
fidélité. La bascule desktop → mobile se fait automatiquement sous ~1100 px.

## Démarrer

```bash
npm install
npm run dev      # serveur de dev (http://localhost:5173)
npm run build    # build de production -> dist/
npm run preview  # prévisualiser le build
```

## Configuration (⚠️ placeholders à valider avec le client)

### `src/config.js` — boutique
- `whatsappNumber` — **placeholder** `212600000000`. Remplacer par le vrai
  numéro (format international, sans `+` ni espaces).
- `whatsappGreeting` — 1re ligne du message WhatsApp.
- `showPrices` — `false` → affiche « Prix sur demande » partout.
- `spinIdle` — rotation d'attente du cercle (coupée si `prefers-reduced-motion`).
- `shop` — horaires, adresse, liens Instagram / Google Maps.

### `src/data/catalogue.js` — batteries
Les 9 engins et leurs batteries (32 références). **Les prix sont des
placeholders** (exemples plausibles) : à valider / remplacer par les vraies
données. Schéma d'une batterie :
`{ id, brand, model, ah, v, cca, dim, price, fits }` — mettre `cca: 0` pour une
batterie à décharge lente (la ligne CCA est alors omise du message WhatsApp).

## À faire avant la mise en ligne
1. Vrai numéro WhatsApp (`config.js`).
2. Prix et références réels (`data/catalogue.js`).
3. **Photos produits** : chaque carte a un emplacement vide (`.card__photo`).
   Ajouter un champ `photo` aux batteries et l'afficher dans
   `components/BatteryCard.jsx`.
4. Vrais visuels haute résolution du magasin (`src/assets/fond-mobile.png`,
   `fond-ordi.png`) et idéalement un logo PNG transparent (`logo.jpg`).

## Structure

```
src/
├─ config.js              # config boutique (WhatsApp, horaires, liens)
├─ data/catalogue.js      # 9 engins × batteries (prix = placeholders)
├─ App.jsx                # bascule responsive 2b (desktop) / 2a (mobile)
├─ views/
│  ├─ Mobile.jsx          # design 2a — feuille de batteries qui remonte
│  └─ Desktop.jsx         # design 2b — panneau catalogue fixe à droite
├─ components/
│  ├─ VehicleWheel.jsx    # cercle rotatif (halo, anneau, contre-rotation)
│  ├─ Catalogue.jsx       # en-tête + recherche + filtres + grille (partagé)
│  ├─ BatteryCard.jsx     # carte produit + CTA WhatsApp
│  ├─ TopBar.jsx  InfoBar.jsx
│  └─ icons/              # 9 icônes engins + Instagram / Maps / WhatsApp
├─ hooks/
│  ├─ useCatalogue.js     # état (engin, recherche, filtre prix) + dérivés
│  └─ useMediaQuery.js    # bascule responsive + prefers-reduced-motion
├─ lib/
│  ├─ whatsapp.js         # construction du lien wa.me pré-rempli
│  └─ format.js           # formatage des prix
└─ styles/styles.css      # tokens & styles hi-fi (couleurs, typos, animations)
```

## Notes de design
- Typos : **Barlow Condensed** (titres, prix, wordmark) + **Archivo** (reste),
  via Google Fonts (`index.html`).
- Accent jaune `#f5d000`, thème sombre `#050b1a`.
- Animations : rotation d'attente `orbit` (46s mobile / 60s desktop) +
  contre-rotation des icônes, halo pulsé, `sheetUp` à l'ouverture (mobile).
  Toutes coupées si `prefers-reduced-motion: reduce`.
- Limite `wa.me` : un lien ne peut pas joindre de photo — elle s'envoie
  manuellement après l'ouverture de la conversation.

> Les fichiers `support.js` / `image-slot.js` du handoff sont le runtime du
> prototype ; ils **ne sont pas** portés ici (recréation propre en React).
