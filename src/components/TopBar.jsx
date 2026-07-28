import { InstagramIcon, MapPinIcon } from './icons/SocialIcons.jsx'
import config from '../config.js'

// Barre du haut : wordmark + slogan à gauche, liens Instagram / Maps à droite.
// Le slogan diffère légèrement entre mobile et desktop (voir config.shop).
export default function TopBar({ variant = 'mobile' }) {
  const { shop } = config
  const tagline = variant === 'desktop' ? shop.taglineDesktop : shop.tagline

  return (
    <div className="topbar">
      <div className="topbar__brand">
        <span className="topbar__wordmark">{shop.name}</span>
        <span className="topbar__tagline">{tagline}</span>
      </div>
      <div className="topbar__links">
        <a
          className="iconlink"
          href={shop.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon size={18} />
        </a>
        <a
          className="iconlink"
          href={shop.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Maps"
        >
          <MapPinIcon size={18} />
        </a>
      </div>
    </div>
  )
}
