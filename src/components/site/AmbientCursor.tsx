'use client'

import { useEffect } from 'react'

// Page-level cursor ambient halo. Tracks the mouse across the viewport and
// updates the --pmx/--pmy custom properties on the document root. The CSS
// (.ambient-cursor) paints a soft accent radial at that position. One global
// listener, throttled via rAF, no rerenders.
export default function AmbientCursor() {
  useEffect(() => {
    const root = document.documentElement
    let raf = 0
    let lastX = 0
    let lastY = 0

    function apply() {
      raf = 0
      root.style.setProperty('--pmx', `${lastX}px`)
      root.style.setProperty('--pmy', `${lastY}px`)
    }

    function onMove(e: MouseEvent) {
      lastX = e.clientX
      lastY = e.clientY
      if (raf) return
      raf = window.requestAnimationFrame(apply)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  return <div className="ambient-cursor" aria-hidden />
}
