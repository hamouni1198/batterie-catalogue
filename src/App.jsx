import Mobile from './views/Mobile.jsx'
import Desktop from './views/Desktop.jsx'
import { useMediaQuery } from './hooks/useMediaQuery.js'

// Bascule 2b (desktop) → 2a (mobile) sous ~1100px de large (voir handoff
// § Responsive). Une seule vue est montée à la fois : chacune gère son propre
// état de catalogue.
export default function App() {
  const isMobile = useMediaQuery('(max-width: 1099px)')
  return isMobile ? <Mobile /> : <Desktop />
}
