'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, type PointerEvent, type ReactNode } from 'react'
import { useBackdropMotion } from './SiteBackdrop'

/** A small change of viewing angle gives the printed artwork a physical surface. */
export default function ProjectCover({ href, title, children }: {
  href: string
  title: string
  children: ReactNode
}) {
  const cover = useRef<HTMLAnchorElement>(null)
  const frame = useRef(0)
  const { paused } = useBackdropMotion()

  const reset = useCallback(() => {
    cancelAnimationFrame(frame.current)
    cover.current?.style.removeProperty('--cover-x')
    cover.current?.style.removeProperty('--cover-y')
  }, [])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    reduced.addEventListener('change', reset)
    reset()
    return () => {
      cancelAnimationFrame(frame.current)
      reduced.removeEventListener('change', reset)
    }
  }, [paused, reset])

  const follow = (event: PointerEvent<HTMLAnchorElement>) => {
    if (paused || event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - .5) * 5
    const y = ((event.clientY - bounds.top) / bounds.height - .5) * -5
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      cover.current?.style.setProperty('--cover-x', `${x.toFixed(2)}deg`)
      cover.current?.style.setProperty('--cover-y', `${y.toFixed(2)}deg`)
    })
  }

  return (
    <Link ref={cover} href={href} className="work-cover" aria-label={`Explore ${title}`}
      onPointerMove={follow} onPointerLeave={reset} onBlur={reset}>
      {children}
    </Link>
  )
}
