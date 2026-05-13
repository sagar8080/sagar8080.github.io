'use client'

import { useEffect, useRef, useState } from 'react'
import { greetings } from '@/lib/content'

// Replaces the static hero schematic with a slow-cycling greeting in 40
// languages. Native script gets the display weight; the romanization and
// language label sit small underneath. Counter in the corner. Pause on
// hover. Crossfades between greetings via CSS opacity.
const INTERVAL_MS = 2400
const FADE_MS = 380

export default function HeroGreeting() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  const pausedRef = useRef(false)

  useEffect(() => {
    let fadeOut: number | undefined

    function tick() {
      if (pausedRef.current) return
      // Fade out, then advance + fade in.
      setVisible(false)
      fadeOut = window.setTimeout(() => {
        setIdx((n) => (n + 1) % greetings.length)
        setVisible(true)
      }, FADE_MS) as unknown as number
    }

    const advance = window.setInterval(tick, INTERVAL_MS) as unknown as number
    return () => {
      window.clearInterval(advance)
      if (fadeOut) window.clearTimeout(fadeOut)
    }
  }, [])

  const g = greetings[idx]
  const display = g.native ?? g.greeting
  const showRomanization = !!g.native && g.greeting !== g.native
  const counter = `${String(idx + 1).padStart(2, '0')} / ${String(greetings.length).padStart(2, '0')}`

  return (
    <div
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      className="surface-raised relative flex h-full min-h-[280px] flex-col overflow-hidden p-6 md:p-7"
    >
      {/* Soft accent glow at the bottom. Same vocabulary as the previous panel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(129,140,248,0.18),transparent_70%)]"
      />

      {/* Eyebrow row */}
      <div className="relative flex items-center justify-between">
        <p className="eyebrow">a small hello</p>
        <p className="font-mono text-[10px] tabular-nums tracking-wide text-zinc-600">
          {counter}
        </p>
      </div>

      {/* Greeting itself. Vertically centered in the remaining space */}
      <div className="relative flex flex-1 flex-col items-center justify-center gap-3 py-6">
        <span
          aria-live="polite"
          className="block text-center font-display text-[44px] font-semibold leading-[1.05] tracking-tight text-white transition-opacity duration-300 sm:text-[56px] md:text-[60px]"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {display}
        </span>
        <span
          className="font-mono text-[11px] uppercase tracking-eyebrow text-zinc-500 transition-opacity duration-300"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {showRomanization ? `${g.greeting} · ${g.language}` : g.language}
        </span>
      </div>

      {/* Footer rule + small caption */}
      <div className="relative mt-auto flex items-center justify-between border-t border-hairline pt-4">
        <p className="text-[12px] text-zinc-500">
          Forty ways to start a conversation.
        </p>
        <p className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-600">
          hover to pause
        </p>
      </div>
    </div>
  )
}
