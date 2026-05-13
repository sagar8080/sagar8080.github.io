'use client'

import { useRef, useCallback, type ReactNode, type CSSProperties } from 'react'

// Wraps any block with a cursor-tracking soft accent glow on hover. The
// underlying CSS lives in `.spotlight` (globals.css); this component just
// updates the --mx and --my custom properties on mousemove. One JS handler
// per card, GPU-friendly, no rerenders.
//
// Renders as a <div> by default; pass `as="article"` to render as an
// <article> wrapper instead. Keeps polymorphism narrow and TypeScript happy.
export default function Spotlight({
  as = 'div',
  className = '',
  style,
  children,
}: {
  as?: 'div' | 'article' | 'section'
  className?: string
  style?: CSSProperties
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }, [])

  const sharedProps = {
    ref,
    onMouseMove: onMove,
    className: `spotlight ${className}`,
    style,
  }

  if (as === 'article') {
    return <article {...sharedProps}>{children}</article>
  }
  if (as === 'section') {
    return <section {...sharedProps}>{children}</section>
  }
  return <div {...sharedProps}>{children}</div>
}
