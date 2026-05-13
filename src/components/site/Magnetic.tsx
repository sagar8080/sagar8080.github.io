'use client'

import { useRef, useCallback, type ReactNode, type CSSProperties } from 'react'

// Subtle magnetic translate. The wrapped element pulls toward the cursor by
// a few pixels on hover and snaps back on leave. The pull strength is small
// on purpose. Discoverable, not performative.
export default function Magnetic({
  className = '',
  style,
  strength = 4,
  children,
}: {
  className?: string
  style?: CSSProperties
  strength?: number
  children: ReactNode
}) {
  const ref = useRef<HTMLSpanElement>(null)

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const dx = ((e.clientX - r.left) / r.width - 0.5) * 2
      const dy = ((e.clientY - r.top) / r.height - 0.5) * 2
      el.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`
    },
    [strength]
  )

  const onLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate3d(0, 0, 0)'
  }, [])

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`magnetic inline-block ${className}`}
      style={style}
    >
      {children}
    </span>
  )
}
