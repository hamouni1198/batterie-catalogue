# Handoff : Catalogue-jeu interactif — Battery Agadir

## Overview
Page unique (mobile + desktop) qui sert de catalogue de batteries pour le magasin **Battery Agadir** (Agadir, Maroc — spécialiste de la batterie, 38 ans).

Principe : une photo du magasin en fond, le **logo au centre d'un cercle**, et **tous les engins autour du cercle** (voiture, moto, camion, bateau, quad, tracteur, camping-car, groupe électrogène, solaire). Au clic sur un engin, le cercle tourne pour amener l'engin choisi sous le repère, et la liste des **batteries compatibles** apparaît : photo, marque + modèle, capacité (Ah), tension (V), courant de démarrage (CCA), dimensions, prix en dirhams, et un bouton **WhatsApp** qui ouvre une conversation avec le message pré-rempli (fiche technique + prix).

## About the Design Files
Les fichiers de ce dossier sont des **références de design réalisées en HTML** — des prototypes qui montrent l'apparence et le comportement voulus. **Ce n'est pas du code de production à copier tel quel.**

Le travail attendu : **recréer ces designs dans l'environnement du projet cible** (React/Next, Vue, Astro, WordPress, natif…) en respectant les patterns et librairies déjà en place. S'il n'existe pas encore de codebase, choisir la stack la plus adaptée (une page statique + un peu de JS suffit ici : aucun backend n'est nécessaire) et implémenter les designs dedans.

Le prototype est écrit avec un petit runtime interne (`support.js`, balises `<x-dc>`, `<sc-for>`, `<sc-if>`) : **ne pas reproduire ce runtime**. Lire le fichier comme une maquette : markup + styles inline + une classe de logique JS (données, filtres, handlers).

## Fidelity
**High-fidelity (hifi).** Couleurs, typographies, espacements, rayons, ombres et animations sont définitifs — à reproduire au pixel près avec les librairies du codebase. Seules exceptions, à remplacer par de vraies données :
- le **numéro WhatsApp** est un placeholder (`212600000000`) ;
- les **prix et références de batteries** sont des exemples plausibles à valider avec le client ;
- les **photos de produits** sont des emplacements vides (`<image-slot>`), à remplacer par de vraies balises `<img>`.

## Écrans / Vues

Le prototype contient 4 variantes. Les deux à implémenter en priorité sont **2a (mobile)** et **2b (desktop)** — c'est la version validée « simple ». 1a et 1b sont conservées comme historique d'exploration.

---

### 2a — Mobile (version retenue) · 430 × 900
**Purpose** : le client arrive depuis Instagram/WhatsApp, choisit son engin, voit les batteries compatibles, commande sur WhatsApp.

**Layout** (frame 430 × 900, `border-radius: 44px` uniquement dans la maquette — en production c'est la page entière, plein écran, `100dvh`) :
1. **Fond plein écran** : image (`fond-mobile.png`, 860 × 1800 = 2×) en `object-fit: cover`, `position: absolute; inset: 0`.
2. **Voile** par-dessus, `pointer-events: none` :
   `linear-gradient(180deg, rgba(3,8,20,.26) 0%, rgba(3,8,20,.42) 38%, rgba(4,10,26,.82) 76%, #050b1a 100%)`
3. **Colonne de contenu** : `position: absolute; inset: 0; display: flex; flex-direction: column; padding: 24px 20px 0`.
   - **Barre du haut** (`justify-content: space-between`) :
     - gauche, colonne `gap: 3px` : « BATTERY AGADIR » — Barlow Condensed 700, 18px, `letter-spacing: .18em`, uppercase, `#fff` ; puis « spécialiste de la batterie » — Archivo 500, 10px, `.2em`, uppercase, `#f5d000`.
     - droite : 2 liens carrés 38 × 38, `border-radius: 13px`, `background: rgba(255,255,255,.1)`, `border: 1px solid rgba(255,255,255,.18)`, icône 18px `#fff` — Instagram (`https://www.instagram.com/batterie_agadir/`) et Google Maps (`https://www.google.com/maps/search/battery+agadir`). `gap: 8px`.
     - **Pas de titre HTML** : le slogan (« CHOISIS TON ENGIN », « 38 ANS · AGADIR », marques) est **intégré à l'image de fond**.
   - **Cercle** : bloc 330 × 330, `margin: auto` (centré verticalement dans l'espace restant).
   - **Bandeau infos** (visible seulement si aucun engin sélectionné) : `margin-bottom: 22px`, `padding: 14px 16px`, `border-radius: 20px`, `background: rgba(255,255,255,.055)`, `border: 1px solid rgba(255,255,255,.12)` ; à gauche « Lun – Sam · 8h30 – 20h » (Archivo 700, 12px, `.1em`, uppercase, `#fff`) + « Bd Hassan II, Agadir · pose sur place » (Archivo 400, 12px, `#a9b6ce`) ; à droite bouton « Itinéraire » (Archivo 700, 11px, `.1em`, uppercase, `padding: 9px 12px`, `border-radius: 11px`, `background: rgba(245,208,0,.14)`, `border: 1px solid rgba(245,208,0,.4)`).

**Le cercle (composant clé)** — conteneur `position: relative; width: 330px; height: 330px` :
- **Halo** : `inset: 26px`, `border-radius: 50%`, `background: radial-gradient(circle, rgba(245,208,0,.14), transparent 68%)`, animation `halo` 4.5s ease-in-out infinite (opacité .35 → .85, scale 1 → 1.06).
- **Repère** (fixe, 12 h) : triangle CSS, `left: 50%; top: -30px; margin-left: -9px`, `border-left/right: 9px solid transparent`, `border-top: 15px solid #f5d000`, `z-index: 4`.
- **Anneau rotatif** : deux couches imbriquées.
  1. couche extérieure = rotation d'attente : `animation: orbit 46s linear infinite` (0 → 360°), `animation-play-state: running` si rien n'est sélectionné, `paused` sinon.
  2. couche intérieure = rotation de sélection : `transform: rotate(-40deg × index)`, `transition: transform .95s cubic-bezier(.2,.85,.15,1)`. (9 engins → 40° par engin ; l'engin choisi arrive à 12 h sous le repère.)
- **Cercle pointillé** : `inset: 16px`, `border: 1px dashed rgba(245,208,0,.34)`.
- **9 boutons d'engin** : `position: absolute`, 76 × 76, `margin: -38px 0 0 -38px` (centrage sur le point), positions en % du conteneur (angle = −90° + i×40°, rayon 42 %) :

  | # | engin | left | top |
  |---|-------|------|-----|
  | 0 | Voiture | 50% | 8% |
  | 1 | Moto | 77% | 17.8% |
  | 2 | Camion | 91.4% | 42.7% |
  | 3 | Bateau | 86.4% | 71% |
  | 4 | Quad | 64.4% | 89.5% |
  | 5 | Tracteur | 35.6% | 89.5% |
  | 6 | Camping-car | 13.6% | 71% |
  | 7 | Groupe | 8.6% | 42.7% |
  | 8 | Solaire | 23% | 17.8% |

  Chaque bouton contient 2 wrappers de contre-rotation pour garder l'icône droite :
  - wrapper 1 : `animation: orbitRev 46s linear infinite` (0 → −360°), même `animation-play-state` que l'anneau ;
  - wrapper 2 : `transform: rotate(+40deg × index)`, même transition — colonne `flex-direction: column; align-items: center; gap: 4px` ;
  - dedans : la **pastille** 50 × 50, `border-radius: 17px`, `background: rgba(8,16,34,.74)`, `border: 1px solid rgba(255,255,255,.16)`, icône SVG 25px `stroke: #f5d000`, `stroke-width: 1.6` ;
  - sous la pastille : le **libellé** Archivo 600, 10px, `letter-spacing: .08em`, uppercase, `#c9d4e6`, `white-space: nowrap`, `text-shadow: 0 1px 3px rgba(0,0,0,.75)`.
- **Centre** : disque 134 × 134 centré (`left/top: 50%; transform: translate(-50%,-50%)`), `border-radius: 50%`, `background: radial-gradient(circle at 50% 28%, #14418f, #061631)`, `border: 2px solid rgba(245,208,0,.55)`, `box-shadow: 0 0 0 10px rgba(245,208,0,.06), 0 18px 40px rgba(0,0,0,.55)`, `z-index: 3` ; dedans le **logo** 106 × 106 en `border-radius: 50%; object-fit: cover`.
- **Pastille de sélection** (si un engin est choisi) : sous le cercle, `left: 50%; bottom: -4px; transform: translateX(-50%)`, `background: #f5d000`, texte Archivo 700, 12px, `.14em`, uppercase, `#08121f`, `padding: 7px 15px`, `border-radius: 999px`, `box-shadow: 0 10px 24px rgba(0,0,0,.4)`.

**Feuille des batteries** (apparaît au clic sur un engin) — `position: absolute; left/right/bottom: 0; height: 568px; z-index: 6` :
- `background: linear-gradient(180deg, #0b1a34, #060d1e 60%)`, `border-top: 2px solid #f5d000`, `border-radius: 30px 30px 0 0`, `box-shadow: 0 -24px 60px rgba(0,0,0,.6)`, `animation: sheetUp .5s cubic-bezier(.2,.9,.2,1) both` (translateY 100% → 0).
- **En-tête** (`padding: 16px 18px 12px`) : titre « Batteries {engin} » Barlow Condensed 700, 24px, `.08em`, uppercase, `#fff` ; sous-titre « N modèles compatibles · stock magasin » Archivo 400, 11px, `#8fa0bd` ; bouton « × » 36 × 36 à droite, `border-radius: 12px`, `background: rgba(255,255,255,.08)`, `border: 1px solid rgba(255,255,255,.16)`.
- **Recherche** : input pleine largeur, `padding: 11px 14px`, `border-radius: 13px`, `background: rgba(255,255,255,.06)`, `border: 1px solid rgba(255,255,255,.14)`, texte 13px `#fff`, placeholder `#7f8ea9` : « Marque, modèle ou véhicule… ».
- **Filtres prix** (chips, `gap: 7px`, `flex-wrap`) : « Tous », « ≤ 800 Dh », « 800 – 1 500 », « > 1 500 Dh ». Chip inactive : `background: rgba(255,255,255,.06)`, texte `#c3cee1`, `border: 1px solid rgba(255,255,255,.16)`. Chip active : `background: #f5d000`, texte `#0a1424`, `border-color: #f5d000`. Archivo 600, 11px, `.06em`, `padding: 7px 11px`, `border-radius: 999px`.
- **Grille de cartes** : `display: grid; grid-template-columns: 1fr 1fr; gap: 12px; align-content: start`, zone scrollable (`overflow: auto`), `padding: 6px 18px 24px`.
- **Carte** : colonne flex `gap: 7px`, `padding: 10px`, `border-radius: 18px`, `background: rgba(255,255,255,.05)`, `border: 1px solid rgba(255,255,255,.11)` :
  1. photo — hauteur 92px, `border-radius: 12px`, `overflow: hidden`, `object-fit: cover` ;
  2. marque — Archivo 600, 10px, `.18em`, uppercase, `#f5d000` ;
  3. modèle — Archivo 700, 15px/1.2, `#fff` ;
  4. 3 puces specs (`gap: 5px`) : « 44 Ah », « 12 V », « 420 A » — Archivo 600, 10px, `#cdd8ea`, `background: rgba(255,255,255,.08)`, `border-radius: 6px`, `padding: 3px 6px` ;
  5. dimensions — Archivo 400, 10px/1.4, `#7f8ea9` (ex. « 207 × 175 × 175 mm ») ;
  6. prix — Barlow Condensed 700, 21px, `#f5d000` (ex. « 690 Dh ») ;
  7. bouton **Commander** — `margin-top: auto` (aligne les CTA entre colonnes), pleine largeur, `padding: 10px 0`, `border-radius: 12px`, `background: #25d366`, texte Archivo 700, 12px, `#042a13`, icône WhatsApp 14px, `gap: 6px`.
- **État vide** : « Aucune batterie ne correspond. Essaie un autre filtre de prix ou envoie-nous le modèle du véhicule sur WhatsApp. » Archivo 400, 13px/1.6, `#8fa0bd`.

---

### 2b — Desktop (version retenue) · 1440 × 860
Même logique, disposition en deux colonnes ; le catalogue est un **panneau fixe à droite** au lieu d'une feuille qui remonte.

- **Fond** : `fond-ordi.png` (2160 × 1290 = 1.5×) en cover ; voile `linear-gradient(100deg, rgba(3,8,20,.62) 0%, rgba(3,8,20,.3) 45%, rgba(3,8,20,.72) 100%)`.
- **Colonne gauche** : `left: 0; top: 0; bottom: 0; width: 920px; padding: 28px 32px`, colonne flex.
  - barre du haut identique au mobile, en plus grand : wordmark Barlow Condensed 700, 22px, `.2em` ; sous-titre « 38 ans · spécialiste de la batterie » Archivo 500, 11px, `.22em`, `#f5d000` ; liens 40 × 40, `border-radius: 14px`.
  - **cercle 470 × 470**, `margin: auto` : halo `inset: 40px` ; repère `top: -32px`, triangle 11/17px ; anneau `animation: orbit 60s linear infinite` + contre-rotation `orbitRev 60s` ; transition de sélection `1s cubic-bezier(.2,.85,.15,1)` ; cercle pointillé `inset: 26px` ; boutons 104 × 104 (`margin: -52px 0 0 -52px`), pastille 68 × 68 `border-radius: 23px` + `box-shadow: 0 10px 26px rgba(0,0,0,.35)`, icône 34px, libellé Archivo 600, 11px, `.12em`, `#d3dcec` (libellés longs : « Moto / Scooter », « Bateau / Jet-ski », « Quad / Buggy », « Groupe électrogène », « Solaire / Onduleur ») ; centre 196 × 196 avec logo 160 × 160, `box-shadow: 0 0 0 14px rgba(245,208,0,.06), 0 22px 50px rgba(0,0,0,.55)` ; pastille de sélection `bottom: -14px`, Archivo 700, 14px, `.16em`, `padding: 9px 20px`.
  - **bandeau infos** en bas (toujours visible) : `width: max-content`, `gap: 22px`, `padding: 16px 22px`, `border-radius: 20px`, mêmes couleurs que le mobile ; horaires 13px, adresse 13px `#a9b6ce`, bouton « Itinéraire » 12px `padding: 11px 15px`.
- **Panneau droit** : `right: 0; top: 0; bottom: 0; width: 520px`, `background: linear-gradient(180deg, rgba(9,20,42,.94), rgba(5,11,26,.96))`, `border-left: 2px solid #f5d000`, `box-shadow: -24px 0 60px rgba(0,0,0,.5)`.
  - **État vide** (aucun engin choisi), centré verticalement, `padding: 0 40px`, `gap: 16px` : « CATALOGUE » Archivo 600, 12px, `.24em`, `#f5d000` ; « Clique sur ton engin » Barlow Condensed 700, 40px/1, `.04em`, uppercase, `#fff` ; paragraphe Archivo 400, 15px/1.7, `#a9b6ce` listant les engins.
  - **État rempli** : en-tête (titre Barlow Condensed 700, 30px + compteur 12px `#8fa0bd` + bouton « × » 40 × 40), recherche 14px, chips 12px, puis grille `1fr 1fr` `gap: 14px`, `padding: 8px 26px 28px` — cartes identiques au mobile en plus grand : photo 112px, modèle 16px, puces 11px, prix Barlow Condensed 24px, bouton 13px `padding: 11px 0`.

---

### 1a / 1b (explorations, non retenues)
- **1a** : identique à 2a mais avec le titre « CHOISIS TON ENGIN » en HTML au-dessus du cercle (cercle non centré).
- **1b** : variante **claire** — bandeau photo 236px en haut, cadran blanc dans une carte `border-radius: 30px` (`background: #fff`, `box-shadow: 0 22px 44px rgba(10,20,40,.16)`), pastilles 42 × 42 sur fond `#f4f1ea` avec libellés `#5d6a80`, puis **liste** (une ligne par batterie : photo 76 × 76 à gauche, specs au centre, prix + bouton à droite) sur fond crème `#f4f1ea`. Palette claire : texte `#101a2c`, secondaire `#5d6a80`, bordures `#e6e0d3`, accent navy `#0f2a63`.

## Interactions & Behavior
- **Clic sur un engin** : `selected = key`. L'anneau passe de la rotation d'attente à `rotate(-40° × index)` (transition .95s mobile / 1s desktop, `cubic-bezier(.2,.85,.15,1)`) ; les icônes contre-tournent de `+40° × index` pour rester droites ; la rotation d'attente est mise en `paused` ; la pastille du nom apparaît ; les filtres se réinitialisent ; la liste s'affiche (mobile : `sheetUp` .5s ; desktop : le panneau change d'état).
- **Fermeture (×)** : `selected = null`, recherche vidée, filtre prix = « Tous », la rotation d'attente reprend.
- **Recherche** : filtre insensible à la casse sur `marque + modèle + véhicules compatibles + Ah`.
- **Filtre prix** : `all` / `≤ 800` / `800–1500` / `> 1500` (en Dh), cumulatif avec la recherche.
- **Bouton WhatsApp** : ouvre `https://wa.me/<numéro>?text=<message encodé>` dans un nouvel onglet. Message :

  ```
  Bonjour Battery Agadir,

  Je suis intéressé(e) par cette batterie :
  Modèle : VARTA Blue Dynamic B18
  Pour : Voiture
  Capacité : 44 Ah — 12 V — 420 A (CCA)
  Dimensions : 207 × 175 × 175 mm
  Prix catalogue : 690 Dh

  Est-elle disponible ? Et avec la pose ?
  ```
  (`encodeURIComponent` sur l'ensemble ; sauts de ligne `\n`. La ligne CCA est omise pour les batteries à décharge lente.) **Limite connue** : un lien `wa.me` ne peut pas joindre de photo — la photo s'envoie manuellement après, ou on ajoute un lien vers la fiche produit.
- **Hover** (à ajouter en production, absent de la maquette) : pastille d'engin → `border-color: rgba(245,208,0,.6)` et léger `scale(1.06)` ; bouton WhatsApp → `#1fbe5b` ; carte → `background: rgba(255,255,255,.07)`.
- **Responsive** : basculer de 2b à 2a sous ~1100px de large. Sur mobile, le cercle doit rester à ≥ 320px de diamètre ; en dessous de 380px de large, réduire le cercle à 290px et les pastilles à 46px. Cibles tactiles ≥ 44px.
- **Rotation d'attente** : désactivable (option), et à couper si `prefers-reduced-motion: reduce`.
- **Aucun état de chargement / d'erreur** : les données sont statiques, embarquées dans la page.

## State Management
Trois variables suffisent (par vue) :
- `selected: string | null` — clé de l'engin (`voiture`, `moto`, `camion`, `bateau`, `quad`, `tracteur`, `camping`, `groupe`, `solaire`) ; `null` = écran d'accueil (mobile) / état vide du panneau (desktop).
- `query: string` — recherche.
- `priceFilter: 'all' | 'low' | 'mid' | 'high'`.

Dérivés : `index` de l'engin (pour les rotations), liste filtrée, compteur, état vide.
Données : un tableau statique de 9 engins × 3–5 batteries (voir `db` dans la classe de logique du fichier `.dc.html` — 32 entrées avec `brand, model, ah, v, cca, dim, price, fits`). Pas d'API ; si le client veut gérer son stock, prévoir un JSON/CMS avec le même schéma.

## Design Tokens
**Couleurs (thème sombre)**
| Rôle | Valeur |
|---|---|
| Fond page | `#050b1a` |
| Fond feuille / panneau | `linear-gradient(180deg,#0b1a34,#060d1e 60%)` · `rgba(9,20,42,.94) → rgba(5,11,26,.96)` |
| Bleu logo (centre du cercle) | `#14418f` → `#061631` |
| Accent jaune | `#f5d000` |
| Texte principal | `#ffffff` |
| Texte secondaire | `#a9b6ce` |
| Texte tertiaire / meta | `#8fa0bd`, `#7f8ea9` |
| Texte sur puces | `#cdd8ea` · libellés `#c9d4e6` / `#d3dcec` |
| Surface translucide | `rgba(255,255,255,.05)` → `.08` |
| Bordure translucide | `rgba(255,255,255,.11)` → `.18` |
| WhatsApp | `#25d366`, texte `#042a13` |

**Couleurs (thème clair, variante 1b)** : fond `#f4f1ea`, surface `#fff`, navy `#0f2a63`, texte `#101a2c`, secondaire `#5d6a80`, meta `#98a0ae`, bordures `#e6e0d3` / `#e2dbcb` / `#dcd5c6`.

**Typographie** — Google Fonts : **Barlow Condensed** (500/600/700) pour titres, prix et wordmark ; **Archivo** (400/500/600/700) pour le reste.
| Usage | Style |
|---|---|
| Titre feuille | Barlow Condensed 700, 24px (desktop 30px), `.08em`, uppercase |
| Prix | Barlow Condensed 700, 21px (desktop 24px), `.02em` |
| Wordmark | Barlow Condensed 700, 18px (desktop 22px), `.18em`–`.2em` |
| Modèle produit | Archivo 700, 15px/1.2 (desktop 16px) |
| Marque | Archivo 600, 10px, `.18em`, uppercase |
| Libellé d'engin | Archivo 600, 10px (desktop 11px), `.08em`–`.12em`, uppercase |
| Corps / infos | Archivo 400, 12–13px/1.5 (desktop 15px/1.7) |
| Meta / dimensions | Archivo 400, 10–11px/1.4 |
| Chips & boutons | Archivo 600–700, 11–13px, `.04em`–`.06em` |

**Espacements** : 3, 4, 5, 7, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 40 px.
**Rayons** : 6 (puce), 11–13 (bouton, input, lien), 17–19 (pastille d'engin), 18–20 (carte), 20 (bandeau infos), 30 (feuille, haut uniquement), 999 (chips, pastille de nom), 50 % (cercles).
**Ombres** : `0 10px 24px rgba(0,0,0,.4)` (pastille de nom) · `0 18px 40px rgba(0,0,0,.55)` + `0 0 0 10px rgba(245,208,0,.06)` (centre du cercle) · `0 -24px 60px rgba(0,0,0,.6)` (feuille) · `-24px 0 60px rgba(0,0,0,.5)` (panneau desktop) · `0 10px 26px rgba(0,0,0,.35)` (pastille desktop) · `0 22px 44px rgba(10,20,40,.16)` (carte claire 1b).
**Animations** : `orbit` 46s (desktop 60s) linear infinite 0→360° · `orbitRev` idem 0→−360° · `halo` 4.5s ease-in-out infinite (opacité .35↔.85, scale 1↔1.06) · `sheetUp` .5s `cubic-bezier(.2,.9,.2,1)` translateY 100%→0 · rotation de sélection .95s/1s `cubic-bezier(.2,.85,.15,1)`.

## Assets
- `logo.jpg` — logo officiel Battery Agadir (fourni par le client, carré, affiché en cercle). Idéalement redemander un **PNG transparent** au client pour la production.
- `fond-mobile.png` (860 × 1800) et `fond-ordi.png` (2160 × 1290) — fonds fabriqués à partir d'une photo du magasin (issue de l'ancien site), assombrie/teintée bleu nuit, avec slogan et logo en filigrane **intégrés à l'image**. **À remplacer** par de vrais visuels haute résolution créés par le client (la source était une capture basse résolution). Si le texte n'est plus dans l'image, le remettre en HTML.
- **Icônes engins** : 9 icônes SVG dessinées à la main (24 × 24, `fill: none`, `stroke: currentColor`, `stroke-width: 1.6`, `linecap/linejoin: round`) — récupérables tel quel dans le fichier `.dc.html` (ou remplaçables par un set de la librairie d'icônes du codebase).
- **Icônes Instagram, Google Maps, WhatsApp** : SVG inline dans le fichier.
- **Photos produits** : absentes. Chaque carte a un emplacement (`<image-slot>` dans la maquette) à remplacer par `<img>` + les photos du client.

## Files
- `Catalogue Battery Agadir.dc.html` — **la maquette** : les 4 variantes (2a, 2b, 1a, 1b), avec le markup, tous les styles inline, les 9 icônes SVG et la classe de logique (données `db`, filtres, message WhatsApp).
- `support.js`, `image-slot.js` — runtime du prototype et composant d'emplacement photo : **à ne pas porter en production**, présents seulement pour que le fichier s'ouvre dans un navigateur.
- `logo.jpg`, `fond-mobile.png`, `fond-ordi.png` — assets.

Pour visualiser : ouvrir `Catalogue Battery Agadir.dc.html` dans un navigateur (les 4 variantes sont côte à côte, badges 1A / 1B / 2A / 2B).

## À obtenir du client avant de coder
1. Numéro WhatsApp officiel (format international, ex. `2126XXXXXXXX`).
2. Prix et références réels (les 32 entrées actuelles sont des exemples).
3. Photos des batteries + photo du magasin en haute résolution.
4. Adresse exacte, horaires, lien Google Maps du magasin.
