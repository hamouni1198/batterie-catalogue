# Handoff : Catalogue-jeu interactif — BATTERY DYNAMIC

## Overview
Page unique (mobile + desktop) qui sert de catalogue de batteries pour le magasin **Battery Dynamic** (Agadir, Maroc — vente en gros & détail).

Principe : un visuel rouge/noir en fond, le **logo au centre d'un cercle**, et **tous les engins autour du cercle** (voiture, moto, camion, bateau, quad, tracteur, camping-car, groupe électrogène, solaire). Au clic sur un engin, le cercle tourne pour amener l'engin choisi sous le repère, et la liste des **batteries compatibles** apparaît : photo, marque + modèle, capacité (Ah), tension (V), courant de démarrage (CCA), dimensions, prix en dirhams, et un bouton **WhatsApp** qui ouvre une conversation avec le message pré-rempli (fiche technique + prix).

## About the Design Files
Les fichiers de ce dossier sont des **références de design réalisées en HTML** — des prototypes qui montrent l'apparence et le comportement voulus. **Ce n'est pas du code de production à copier tel quel.**

Le travail attendu : **recréer ces designs dans l'environnement du projet cible** (React/Next, Vue, Astro, WordPress, natif…) en respectant les patterns et librairies déjà en place. S'il n'existe pas encore de codebase, choisir la stack la plus adaptée (une page statique + un peu de JS suffit : aucun backend n'est nécessaire) et implémenter les designs dedans.

Le prototype est écrit avec un petit runtime interne (`support.js`, balises `<x-dc>`, `<sc-for>`, `<sc-if>`) : **ne pas reproduire ce runtime**. Lire le fichier comme une maquette : markup + styles inline + une classe de logique JS (données, filtres, handlers).

## Fidelity
**High-fidelity (hifi).** Couleurs, typographies, espacements, rayons, ombres et animations sont définitifs — à reproduire au pixel près avec les librairies du codebase. Exceptions, à remplacer par de vraies données :
- le **numéro WhatsApp** est un placeholder (`212600000000`) ;
- le **lien Instagram** est un placeholder (`instagram.com/battery_dynamic`) ;
- les **prix et références de batteries** sont des exemples plausibles à valider avec le client ;
- les **photos de produits** sont des emplacements vides (`<image-slot>` dans la maquette), à remplacer par de vraies balises `<img>`.

## Identité de marque
- Nom : **BATTERY DYNAMIC** · baseline : « vente en gros & détail » · ville : Agadir.
- **Logo** : icône batterie **au-dessus** du texte, sur deux lignes « BATTERY » / « DYNAMIC ». **Aucun texte arabe** (retiré volontairement).
- L'icône est vectorielle, à reproduire tel quel (SVG, `viewBox="0 0 64 50"`, tout en rouge `#e11b22`) :
  - 2 bornes : `rect x=11 y=0 w=11 h=8` et `rect x=42 y=0 w=11 h=8` (remplies) ;
  - corps : `rect x=3 y=8 w=58 h=39 rx=2`, `fill:none`, `stroke-width:6` ;
  - signe − : `rect x=14 y=25 w=15 h=5` ;
  - signe + : `rect x=35 y=25 w=15 h=5` + `rect x=40 y=20 w=5 h=15`.
- Lockup : colonne centrée, `gap` 6–10px selon la taille ; wordmark en **Archivo Black**, `letter-spacing: .05em`, `line-height: 1`, blanc sur fond sombre / `#141013` sur fond clair.
- Tailles utilisées : mobile icône 42 × 33 + texte 12px · desktop icône 60 × 47 + texte 17px · variante claire icône 34 × 27 + texte 10px.

## Écrans / Vues

4 variantes dans le prototype. À implémenter en priorité : **2a (mobile)** et **2b (desktop)** — version validée « simple ». 1a et 1b sont l'historique d'exploration.

---

### 2a — Mobile (version retenue) · 430 × 900
**Purpose** : le client arrive depuis Instagram/WhatsApp, choisit son engin, voit les batteries compatibles, commande sur WhatsApp.

**Layout** (frame 430 × 900 ; en production c'est la page entière, `100dvh`) :
1. **Fond plein écran** : `fond-mobile.png` (860 × 1800 = 2×) en `object-fit: cover`, `position: absolute; inset: 0`.
2. **Voile** par-dessus, `pointer-events: none` :
   `linear-gradient(180deg, rgba(10,8,10,.26) 0%, rgba(10,8,10,.42) 38%, rgba(12,9,11,.82) 76%, #0a0a0c 100%)`
3. **Colonne de contenu** : `position: absolute; inset: 0; display: flex; flex-direction: column; padding: 24px 20px 0`.
   - **Barre du haut** (`justify-content: space-between`) :
     - gauche : « BATTERY DYNAMIC » — Archivo Black 900, 13px, `letter-spacing: .07em`, uppercase, `#fff` ; puis « vente en gros & détail » — Archivo 500, 10px, `.2em`, uppercase, `#e11b22`.
     - droite : 2 liens carrés 38 × 38, `border-radius: 13px`, `background: rgba(255,255,255,.1)`, `border: 1px solid rgba(255,255,255,.18)`, icône 18px `#fff` — Instagram et Google Maps. `gap: 8px`.
     - **Pas de titre HTML** : le slogan (« CHOISIS TON ENGIN », « VENTE EN GROS & DÉTAIL · AGADIR », marques) est **intégré à l'image de fond**.
   - **Cercle** : bloc 330 × 330, `margin: auto` (centré verticalement dans l'espace restant).
   - **Bandeau infos** (visible seulement si aucun engin sélectionné) : `margin-bottom: 22px`, `padding: 14px 16px`, `border-radius: 20px`, `background: rgba(255,255,255,.055)`, `border: 1px solid rgba(255,255,255,.12)` ; « Lun – Sam · 8h30 – 20h » (Archivo 700, 12px, `.1em`, uppercase, `#fff`) + « Bd Hassan II, Agadir · pose sur place » (Archivo 400, 12px, `#b7b1b4`) ; à droite bouton « Itinéraire » (Archivo 700, 11px, `.1em`, uppercase, `padding: 9px 12px`, `border-radius: 11px`, `background: rgba(225,27,34,.14)`, `border: 1px solid rgba(225,27,34,.4)`).

**Le cercle (composant clé)** — conteneur `position: relative; width: 330px; height: 330px` :
- **Halo** : `inset: 26px`, `border-radius: 50%`, `background: radial-gradient(circle, rgba(225,27,34,.14), transparent 68%)`, animation `halo` 4.5s ease-in-out infinite (opacité .35 → .85, scale 1 → 1.06).
- **Repère** (fixe, 12 h) : triangle CSS, `left: 50%; top: -30px; margin-left: -9px`, `border-left/right: 9px solid transparent`, `border-top: 15px solid #e11b22`, `z-index: 4`.
- **Anneau rotatif** : deux couches imbriquées.
  1. rotation d'attente : `animation: orbit 46s linear infinite` (0 → 360°), `animation-play-state: running` si rien n'est sélectionné, `paused` sinon.
  2. rotation de sélection : `transform: rotate(-40deg × index)`, `transition: transform .95s cubic-bezier(.2,.85,.15,1)` (9 engins → 40° par engin ; l'engin choisi arrive à 12 h sous le repère).
- **Cercle pointillé** : `inset: 16px`, `border: 1px dashed rgba(225,27,34,.34)`.
- **9 boutons d'engin** : `position: absolute`, 76 × 76, `margin: -38px 0 0 -38px`, positions en % (angle = −90° + i×40°, rayon 42 %) :

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
  - wrapper 2 : `transform: rotate(+40deg × index)`, même transition — colonne `align-items: center; gap: 4px` ;
  - **pastille** 50 × 50, `border-radius: 17px`, `background: rgba(24,18,21,.74)`, `border: 1px solid rgba(255,255,255,.16)`, icône SVG 25px `stroke: #e11b22`, `stroke-width: 1.6` ;
  - **libellé** sous la pastille : Archivo 600, 10px, `.08em`, uppercase, `#eae4e6`, `white-space: nowrap`, `text-shadow: 0 1px 3px rgba(0,0,0,.75)`.
- **Centre** : disque 134 × 134 centré, `border-radius: 50%`, `background: radial-gradient(circle at 50% 28%, #2b0c0f, #0a0a0c)`, `border: 2px solid rgba(225,27,34,.55)`, `box-shadow: 0 0 0 10px rgba(225,27,34,.06), 0 18px 40px rgba(0,0,0,.55)`, `z-index: 3` ; dedans le **lockup logo** (voir « Identité de marque »).
- **Pastille de sélection** (si un engin est choisi) : sous le cercle, `left: 50%; bottom: -4px; transform: translateX(-50%)`, `background: #e11b22`, texte Archivo 700, 12px, `.14em`, uppercase, `#fff`, `padding: 7px 15px`, `border-radius: 999px`, `box-shadow: 0 10px 24px rgba(0,0,0,.4)`.

**Feuille des batteries** (apparaît au clic sur un engin) — `position: absolute; left/right/bottom: 0; height: 568px; z-index: 6` :
- `background: linear-gradient(180deg, #1a1216, #0a0a0c 60%)`, `border-top: 2px solid #e11b22`, `border-radius: 30px 30px 0 0`, `box-shadow: 0 -24px 60px rgba(0,0,0,.6)`, `animation: sheetUp .5s cubic-bezier(.2,.9,.2,1) both` (translateY 100% → 0).
- **En-tête** (`padding: 16px 18px 12px`) : titre « Batteries {engin} » Archivo Black 900, 16px, `.03em`, uppercase, `#fff` ; sous-titre « N modèles compatibles · stock magasin » Archivo 400, 11px, `#9b9498` ; bouton « × » 36 × 36, `border-radius: 12px`, `background: rgba(255,255,255,.08)`, `border: 1px solid rgba(255,255,255,.16)`.
- **Recherche** : input pleine largeur, `padding: 11px 14px`, `border-radius: 13px`, `background: rgba(255,255,255,.06)`, `border: 1px solid rgba(255,255,255,.14)`, texte 13px `#fff`, placeholder `#8a8286` : « Marque, modèle ou véhicule… ».
- **Filtres prix** (chips, `gap: 7px`) : « Tous », « ≤ 800 Dh », « 800 – 1 500 », « > 1 500 Dh ». Inactive : `background: rgba(255,255,255,.06)`, texte `#d9d3d5`, `border: 1px solid rgba(255,255,255,.16)`. **Active : `background: #e11b22`, texte `#fff`, `border-color: #e11b22`.** Archivo 600, 11px, `.06em`, `padding: 7px 11px`, `border-radius: 999px`.
- **Grille de cartes** : `grid-template-columns: 1fr 1fr; gap: 12px; align-content: start`, zone scrollable, `padding: 6px 18px 24px`.
- **Carte** : colonne flex `gap: 7px`, `padding: 10px`, `border-radius: 18px`, `background: rgba(255,255,255,.05)`, `border: 1px solid rgba(255,255,255,.11)` :
  1. photo — hauteur 92px, `border-radius: 12px`, `object-fit: cover` ;
  2. marque — Archivo 600, 10px, `.18em`, uppercase, `#e11b22` ;
  3. modèle — Archivo 700, 15px/1.2, `#fff` ;
  4. 3 puces specs : « 44 Ah », « 12 V », « 420 A » — Archivo 600, 10px, `#e6e0e2`, `background: rgba(255,255,255,.08)`, `border-radius: 6px`, `padding: 3px 6px` ;
  5. dimensions — Archivo 400, 10px/1.4, `#8a8286` (ex. « 207 × 175 × 175 mm ») ;
  6. **prix — Archivo Black 900, 16px, `#ffd400`** (ex. « 690 Dh ») ;
  7. bouton **Commander** — `margin-top: auto`, pleine largeur, `padding: 10px 0`, `border-radius: 12px`, `background: #25d366`, texte Archivo 700, 12px, `#042a13`, icône WhatsApp 14px.
- **État vide** : « Aucune batterie ne correspond… » Archivo 400, 13px/1.6, `#9b9498`.

---

### 2b — Desktop (version retenue) · 1440 × 860
Même logique, deux colonnes ; le catalogue est un **panneau fixe à droite**.

- **Fond** : `fond-ordi.png` (2160 × 1290 = 1.5×) en cover ; voile `linear-gradient(100deg, rgba(10,8,10,.62) 0%, rgba(10,8,10,.3) 45%, rgba(10,8,10,.72) 100%)`.
- **Colonne gauche** : `width: 920px; padding: 28px 32px`.
  - barre du haut : wordmark Archivo Black 900, 16px, `.07em` ; sous-titre « Vente en gros & détail · Agadir » Archivo 500, 11px, `.22em`, `#e11b22` ; liens 40 × 40, `border-radius: 14px`.
  - **cercle 470 × 470**, `margin: auto` : halo `inset: 40px` ; repère `top: -32px`, triangle 11/17px ; anneau `orbit 60s` + contre-rotation `orbitRev 60s` ; transition de sélection `1s cubic-bezier(.2,.85,.15,1)` ; cercle pointillé `inset: 26px` ; boutons 104 × 104 (`margin: -52px 0 0 -52px`), pastille 68 × 68 `border-radius: 23px` + `box-shadow: 0 10px 26px rgba(0,0,0,.35)`, icône 34px, libellé Archivo 600, 11px, `.12em`, `#f0eaec` (libellés longs : « Moto / Scooter », « Bateau / Jet-ski », « Quad / Buggy », « Groupe électrogène », « Solaire / Onduleur ») ; centre 196 × 196 avec le lockup logo (icône 60 × 47 + texte 17px), `box-shadow: 0 0 0 14px rgba(225,27,34,.06), 0 22px 50px rgba(0,0,0,.55)` ; pastille de sélection `bottom: -14px`, Archivo 700, 14px, `.16em`, `padding: 9px 20px`.
  - **bandeau infos** en bas (toujours visible) : `width: max-content`, `gap: 22px`, `padding: 16px 22px`, `border-radius: 20px` ; horaires 13px, adresse 13px `#b7b1b4`, bouton « Itinéraire » 12px `padding: 11px 15px`.
- **Panneau droit** : `width: 520px`, `background: linear-gradient(180deg, rgba(24,16,19,.95), rgba(10,10,12,.97))`, `border-left: 2px solid #e11b22`, `box-shadow: -24px 0 60px rgba(0,0,0,.5)`.
  - **État vide** : centré verticalement, `padding: 0 40px`, `gap: 16px` : « CATALOGUE » Archivo 600, 12px, `.24em`, `#e11b22` ; « Clique sur ton engin » Archivo Black 900, 27px/1.05, uppercase, `#fff` ; paragraphe Archivo 400, 15px/1.7, `#b7b1b4`.
  - **État rempli** : en-tête (titre Archivo Black 900, 20px + compteur 12px `#9b9498` + bouton « × » 40 × 40), recherche 14px, chips 12px, grille `1fr 1fr` `gap: 14px`, `padding: 8px 26px 28px` — cartes identiques au mobile en plus grand : photo 112px, modèle 16px, puces 11px, **prix Archivo Black 18px `#ffd400`**, bouton 13px `padding: 11px 0`.

---

### 1a / 1b (explorations, non retenues)
- **1a** : identique à 2a mais avec le titre « CHOISIS TON ENGIN » en HTML au-dessus du cercle (Archivo Black 30px/1) — cercle non centré.
- **1b** : variante **claire** — bandeau photo 236px en haut, cadran blanc dans une carte `border-radius: 30px` (`background: #fff`, `box-shadow: 0 22px 44px rgba(20,10,12,.2)`), pastilles 42 × 42 sur `#f5f2f2` avec libellés `#6b6266`, puis **liste** (photo 76 × 76 à gauche, specs au centre, prix + bouton à droite) sur fond `#f5f2f2`. Palette claire : texte `#141013`, secondaire `#6b6266`, bordures `#e7dfdf`, accent rouge `#c1151c`.

## Interactions & Behavior
- **Clic sur un engin** : `selected = key`. L'anneau passe de la rotation d'attente à `rotate(-40° × index)` (transition .95s mobile / 1s desktop, `cubic-bezier(.2,.85,.15,1)`) ; les icônes contre-tournent de `+40° × index` ; la rotation d'attente passe en `paused` ; la pastille du nom apparaît ; les filtres se réinitialisent ; la liste s'affiche (mobile : `sheetUp` .5s ; desktop : le panneau change d'état).
- **Fermeture (×)** : `selected = null`, recherche vidée, filtre prix = « Tous », rotation d'attente reprise.
- **Recherche** : filtre insensible à la casse sur `marque + modèle + véhicules compatibles + Ah`.
- **Filtre prix** : `all` / `≤ 800` / `800–1500` / `> 1500` (Dh), cumulatif avec la recherche.
- **Bouton WhatsApp** : ouvre `https://wa.me/<numéro>?text=<message encodé>` dans un nouvel onglet :

  ```
  Bonjour Battery Dynamic,

  Je suis intéressé(e) par cette batterie :
  Modèle : VARTA Blue Dynamic B18
  Pour : Voiture
  Capacité : 44 Ah — 12 V — 420 A (CCA)
  Dimensions : 207 × 175 × 175 mm
  Prix catalogue : 690 Dh

  Est-elle disponible ? Et avec la pose ?
  ```
  (`encodeURIComponent` sur l'ensemble, sauts de ligne `\n` ; la ligne CCA est omise pour les batteries à décharge lente.) **Limite connue** : un lien `wa.me` ne peut pas joindre de photo — la photo s'envoie manuellement après, ou on ajoute un lien vers la fiche produit.
- **Hover** (à ajouter en production, absent de la maquette) : pastille d'engin → `border-color: rgba(225,27,34,.6)` + `scale(1.06)` ; bouton WhatsApp → `#1fbe5b` ; carte → `background: rgba(255,255,255,.07)`.
- **Responsive** : basculer de 2b à 2a sous ~1100px. Cercle ≥ 320px de diamètre sur mobile ; sous 380px de large, cercle 290px et pastilles 46px. Cibles tactiles ≥ 44px.
- **Rotation d'attente** : désactivable (option) et coupée si `prefers-reduced-motion: reduce`.
- Aucun état de chargement / d'erreur : données statiques embarquées.

## State Management
Trois variables par vue :
- `selected: string | null` — `voiture | moto | camion | bateau | quad | tracteur | camping | groupe | solaire` ; `null` = accueil (mobile) / état vide du panneau (desktop).
- `query: string`
- `priceFilter: 'all' | 'low' | 'mid' | 'high'`

Dérivés : `index` de l'engin (rotations), liste filtrée, compteur, état vide.
Données : tableau statique de 9 engins × 3–5 batteries (voir `db` dans la classe de logique du `.dc.html` — 32 entrées `brand, model, ah, v, cca, dim, price, fits`). Pas d'API ; pour une gestion de stock, prévoir un JSON/CMS au même schéma.

## Design Tokens
**Couleurs — thème sombre**
| Rôle | Valeur |
|---|---|
| Noir page | `#0a0a0c` |
| Feuille / panneau | `linear-gradient(180deg,#1a1216,#0a0a0c 60%)` · `rgba(24,16,19,.95) → rgba(10,10,12,.97)` |
| Centre du cercle | `radial-gradient(circle at 50% 28%,#2b0c0f,#0a0a0c)` |
| **Rouge (accent principal)** | `#e11b22` — bordures, repère, icônes, chips actives, marques, liserés |
| **Jaune (prix uniquement)** | `#ffd400` |
| Blanc | `#ffffff` |
| Texte secondaire | `#b7b1b4` |
| Texte tertiaire / meta | `#9b9498`, `#8a8286` |
| Texte sur puces / libellés | `#e6e0e2`, `#eae4e6`, `#f0eaec`, `#d9d3d5` |
| Surface translucide | `rgba(255,255,255,.05)` → `.08` |
| Bordure translucide | `rgba(255,255,255,.11)` → `.18` |
| Voile photo | `rgba(10,8,10,.26–.82)` · `rgba(12,9,11,.82)` |
| Pastille d'engin | `rgba(24,18,21,.74)` |
| Lueur rouge | `rgba(225,27,34,.06)` → `.55` |
| WhatsApp | `#25d366`, texte `#042a13` |

**Couleurs — thème clair (variante 1b)** : fond `#f5f2f2`, surface `#fff`, rouge `#c1151c`, texte `#141013`, secondaire `#6b6266`, meta `#9a9296`, bordures `#e7dfdf` / `#e5dddd` / `#ded6d6`, placeholder photo `#f1eded`.

**Typographie** — Google Fonts : **Archivo Black** (900) pour le logo, les titres et les prix ; **Archivo** (400/500/600/700) pour tout le reste. *(Aucune police condensée : la marque est large et massive.)*
| Usage | Style |
|---|---|
| Wordmark logo | Archivo Black 900, 12–17px, `.05em`, uppercase |
| Wordmark barre du haut | Archivo Black 900, 13px (desktop 16px), `.07em`, uppercase |
| Titre feuille / panneau | Archivo Black 900, 16px (desktop 20px), `.03em`, uppercase |
| Grand titre | Archivo Black 900, 27–30px/1–1.05, uppercase |
| Prix | Archivo Black 900, 16px (desktop 18px), `letter-spacing: 0`, `#ffd400` |
| Modèle produit | Archivo 700, 15px/1.2 (desktop 16px) |
| Marque | Archivo 600, 10px, `.18em`, uppercase, `#e11b22` |
| Libellé d'engin | Archivo 600, 10px (desktop 11px), `.08em`–`.12em`, uppercase |
| Corps / infos | Archivo 400, 12–13px/1.5 (desktop 15px/1.7) |
| Meta / dimensions | Archivo 400, 10–11px/1.4 |
| Chips & boutons | Archivo 600–700, 11–13px, `.04em`–`.06em` |

**Espacements** : 3, 4, 5, 7, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 40 px.
**Rayons** : 6 (puce), 11–13 (bouton, input, lien), 17–19 (pastille d'engin), 18–20 (carte), 20 (bandeau infos), 30 (feuille, haut uniquement), 999 (chips, pastille de nom), 50 % (cercles).
**Ombres** : `0 10px 24px rgba(0,0,0,.4)` · `0 18px 40px rgba(0,0,0,.55)` + `0 0 0 10px rgba(225,27,34,.06)` (centre du cercle) · `0 -24px 60px rgba(0,0,0,.6)` (feuille) · `-24px 0 60px rgba(0,0,0,.5)` (panneau desktop) · `0 10px 26px rgba(0,0,0,.35)` (pastille desktop) · `0 22px 44px rgba(20,10,12,.2)` (carte claire 1b).
**Animations** : `orbit` 46s (desktop 60s) linear infinite 0→360° · `orbitRev` idem 0→−360° · `halo` 4.5s ease-in-out infinite (opacité .35↔.85, scale 1↔1.06) · `sheetUp` .5s `cubic-bezier(.2,.9,.2,1)` translateY 100%→0 · rotation de sélection .95s/1s `cubic-bezier(.2,.85,.15,1)`.

## Assets
- **Logo** : entièrement vectoriel dans le HTML (voir « Identité de marque ») — aucun fichier image nécessaire. Demander au client le **fichier source du logo** (AI/SVG/PNG transparent) pour la production.
- `fond-mobile.png` (860 × 1800) et `fond-ordi.png` (2160 × 1290) — fonds rouge/noir composés à partir du visuel fourni par le client : bandeau photo rouge en haut, noir + lueur rouge au centre (là où se place le cercle), bandeau route en bas, slogan + icône batterie **intégrés à l'image**. **À remplacer** par les visuels définitifs du client (la source était une image compressée). Si le texte n'est plus dans l'image, le remettre en HTML.
- **Icônes engins** : 9 icônes SVG dessinées à la main (24 × 24, `fill: none`, `stroke: currentColor`, `stroke-width: 1.6`, `linecap/linejoin: round`) — à récupérer dans le `.dc.html`, ou à remplacer par un set de la librairie d'icônes du codebase.
- **Icônes Instagram, Google Maps, WhatsApp** : SVG inline dans le fichier.
- **Photos produits** : absentes — chaque carte a un emplacement à remplacer par `<img>` + les photos du client.

## Files
- `Catalogue Battery Agadir.dc.html` — **la maquette** : les 4 variantes (2a, 2b, 1a, 1b), markup + styles inline + les 9 icônes SVG + la classe de logique (données `db`, filtres, message WhatsApp). *(Le nom du fichier date de l'ancienne charte ; le contenu est bien Battery Dynamic.)*
- `support.js`, `image-slot.js` — runtime du prototype et composant d'emplacement photo : **à ne pas porter en production**, présents seulement pour que le fichier s'ouvre dans un navigateur.
- `fond-mobile.png`, `fond-ordi.png` — fonds.

Pour visualiser : ouvrir `Catalogue Battery Agadir.dc.html` dans un navigateur (les 4 variantes côte à côte, badges 1A / 1B / 2A / 2B).

## À obtenir du client avant de coder
1. Numéro WhatsApp officiel (format international, ex. `2126XXXXXXXX`) et vrai lien Instagram.
2. Prix et références réels (les 32 entrées actuelles sont des exemples).
3. Photos des batteries + visuel de fond en haute résolution + logo vectoriel.
4. Adresse exacte, horaires, lien Google Maps.
5. À décider : ajouter **fauteuil roulant** comme 10ᵉ engin du cercle (présent sur le panneau du magasin) — l'angle passerait alors de 40° à 36° par engin.
