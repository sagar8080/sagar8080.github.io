'use client'

import Lenis from 'lenis'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useBackdropMotion } from '@/components/site/SiteBackdrop'

const nativeWheelTargets = 'dialog, textarea, select, [contenteditable]'
const nativeScrollKeys = new Set(['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Tab', 'Enter'])

export default function SmoothScroll() {
  const { paused } = useBackdropMotion()
  const pathname = usePathname()

  useEffect(() => {
    if (paused) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const listeners = new AbortController()
    const { signal } = listeners
    let lenis: Lenis | null = null

    function stopInertia() {
      if (lenis?.isScrolling !== 'smooth') return
      lenis.stop()
      lenis.start()
    }

    function syncMotion() {
      if (reducedMotion.matches) {
        lenis?.destroy()
        lenis = null
        return
      }

      lenis ??= new Lenis({
        autoRaf: true,
        lerp: 0.16,
        syncTouch: false,
        // Keep fragment history, focus and scroll margins in the browser.
        anchors: false,
        allowNestedScroll: true,
        virtualScroll: ({ deltaX, deltaY, event }) => {
          if (!(event instanceof WheelEvent)) return true
          const nativeInput =
            !event.cancelable || event.defaultPrevented || event.ctrlKey || event.shiftKey ||
            Math.abs(deltaX) >= Math.abs(deltaY) ||
            event.composedPath().some((node) => node instanceof Element && node.matches(nativeWheelTargets))

          if (nativeInput) {
            stopInertia()
            return false
          }

          if (!lenis || lenis.limit <= 0) return false
          if (lenis.isScrolling === 'smooth') return true
          return deltaY < 0 ? lenis.actualScroll > 0 : lenis.actualScroll < lenis.limit - 1
        },
      })
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (nativeScrollKeys.has(event.key)) stopInertia()
    }

    function handleFocusIn(event: FocusEvent) {
      if (event.target instanceof Element && event.target.closest('dialog[open]')) stopInertia()
    }

    syncMotion()
    reducedMotion.addEventListener('change', syncMotion, { signal })
    window.addEventListener('pointerdown', stopInertia, { capture: true, signal })
    window.addEventListener('click', stopInertia, { capture: true, signal })
    window.addEventListener('keydown', handleKeyDown, { capture: true, signal })
    window.addEventListener('focusin', handleFocusIn, { capture: true, signal })
    window.addEventListener('popstate', stopInertia, { signal })
    window.addEventListener('hashchange', stopInertia, { signal })
    window.addEventListener('pagehide', stopInertia, { signal })

    return () => {
      listeners.abort()
      lenis?.destroy()
    }
  }, [paused, pathname])

  return null
}
