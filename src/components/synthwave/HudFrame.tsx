'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { greetings } from '@/lib/content'

function CornerBracket({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const map = {
    tl: 'top-3 left-3 border-t border-l',
    tr: 'top-3 right-3 border-t border-r',
    bl: 'bottom-3 left-3 border-b border-l',
    br: 'bottom-3 right-3 border-b border-r',
  } as const
  return (
    <span
      aria-hidden
      className={`pointer-events-none fixed z-40 h-3 w-3 border-vint-cyan/35 ${map[position]}`}
    />
  )
}

export function HudFrame() {
  const [greetIdx, setGreetIdx] = useState(0)
  const { scrollYProgress } = useScroll()
  const pct = useTransform(scrollYProgress, (v) => `${Math.round(v * 100).toString().padStart(3, '0')}`)

  useEffect(() => {
    const id = window.setInterval(() => {
      setGreetIdx((i) => (i + 1) % greetings.length)
    }, 1800)
    return () => window.clearInterval(id)
  }, [])

  const current = greetings[greetIdx]

  return (
    <>
      <CornerBracket position="tl" />
      <CornerBracket position="tr" />
      <CornerBracket position="bl" />
      <CornerBracket position="br" />

      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex h-7 items-center justify-between border-t border-vint-cyan/15 bg-void/80 px-4 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 backdrop-blur-md md:px-6"
      >
        <div className="flex items-center gap-4">
          <span className="text-vint-cyan/80">[scroll]</span>
          <motion.span className="text-phosphor/80">{pct}</motion.span>
          <span className="hidden sm:inline text-zinc-600">·</span>
          <span className="hidden sm:inline">
            <span className="text-vint-cyan/70">locale</span>{' '}
            <motion.span
              key={greetIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.18 }}
              className="text-zinc-300"
            >
              {current.greeting}
            </motion.span>{' '}
            <span className="text-zinc-600">// {current.language.toLowerCase()}</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline">crt:on · scanlines:0.045</span>
          <span className="text-zinc-600">·</span>
          <span className="text-phosphor/80">v.0.2</span>
        </div>
      </div>
    </>
  )
}
