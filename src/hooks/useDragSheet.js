import { useEffect, useRef, useState } from 'react'

// Feuille glissable (bottom sheet) : hauteur en px + points d'accroche.
// Glisser vers le haut → plein écran ; vers le bas → fermeture.
// `onClose` est appelé quand on glisse assez bas.
export function useDragSheet(onClose) {
  const [sheetH, setSheetH] = useState(null) // null = position « peek » par défaut
  const [dragging, setDragging] = useState(false)
  const dragRef = useRef(null)

  const peekPx = () => Math.min(568, Math.round(window.innerHeight * 0.88))
  const fullPx = () => window.innerHeight

  // Nettoyage si le composant se démonte pendant un glissement.
  useEffect(() => () => dragRef.current?.cleanup?.(), [])

  const startDrag = (e) => {
    e.preventDefault()
    const startY = e.clientY
    const startH = sheetH ?? peekPx()
    const state = { lastH: startH }
    setDragging(true)

    const move = (ev) => {
      const h = Math.max(80, Math.min(fullPx(), startH + (startY - ev.clientY)))
      state.lastH = h
      setSheetH(h)
    }
    const up = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
      window.removeEventListener('pointercancel', up)
      dragRef.current = null
      setDragging(false)
      const peek = peekPx()
      const full = fullPx()
      if (state.lastH < peek * 0.6) onClose()
      else setSheetH(state.lastH > (peek + full) / 2 ? full : peek)
    }
    dragRef.current = {
      cleanup: () => {
        window.removeEventListener('pointermove', move)
        window.removeEventListener('pointerup', up)
        window.removeEventListener('pointercancel', up)
      },
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    window.addEventListener('pointercancel', up)
  }

  return {
    dragging,
    startDrag,
    reset: () => setSheetH(null),
    style: sheetH != null ? { height: `${sheetH}px` } : undefined,
  }
}
