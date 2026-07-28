// Logo Battery Dynamic : icône batterie (rouge) au-dessus du wordmark sur deux
// lignes « BATTERY » / « DYNAMIC ». Repris tel quel de la maquette (SVG
// viewBox 0 0 64 50). Pas de texte arabe (retiré volontairement).
// `variant` ajuste les tailles (mobile : icône 42×33, texte 12px ·
// desktop : icône 60×47, texte 17px).
export default function BrandLockup({ variant = 'mobile' }) {
  const size = variant === 'desktop' ? { w: 60, h: 47 } : { w: 42, h: 33 }
  return (
    <div className={`lockup lockup--${variant}`}>
      <svg
        className="lockup__icon"
        viewBox="0 0 64 50"
        width={size.w}
        height={size.h}
        aria-hidden="true"
      >
        <rect x="11" y="0" width="11" height="8" fill="#e11b22" />
        <rect x="42" y="0" width="11" height="8" fill="#e11b22" />
        <rect x="3" y="8" width="58" height="39" rx="2" fill="none" stroke="#e11b22" strokeWidth="6" />
        <rect x="14" y="25" width="15" height="5" fill="#e11b22" />
        <rect x="35" y="25" width="15" height="5" fill="#e11b22" />
        <rect x="40" y="20" width="5" height="15" fill="#e11b22" />
      </svg>
      <div className="lockup__text">
        <span>BATTERY</span>
        <span>DYNAMIC</span>
      </div>
    </div>
  )
}
