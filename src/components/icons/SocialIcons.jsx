// Icônes Instagram, Google Maps et WhatsApp — SVG inline repris de la maquette.

export function InstagramIcon({ size = 18 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" />
    </svg>
  )
}

export function MapPinIcon({ size = 18 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 21c4.5-5.2 7-8.4 7-11a7 7 0 10-14 0c0 2.6 2.5 5.8 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function WhatsappIcon({ size = 14 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1a12 12 0 01-5.9-5c-.4-.7-.6-1.4-.6-2 0-.6.3-1.2.6-1.5.3-.3.5-.4.8-.4h.5c.2 0 .4 0 .5.4l.8 1.8c.1.2 0 .4-.1.5l-.4.5c-.1.2-.2.3 0 .6a8 8 0 003.5 3c.3.1.4.1.6-.1l.7-.8c.2-.2.3-.2.6-.1l1.8.9c.3.1.3.3.3.5s0 .6-.1.9z" />
    </svg>
  )
}
