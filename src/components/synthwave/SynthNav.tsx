'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { navLinks, profile } from '@/lib/content'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useClock } from '@/hooks/useClock'

export function SynthNav() {
  const sectionIds = useMemo(() => navLinks.map((l) => l.href.replace('#', '')), [])
  const active = useActiveSection(sectionIds, 96)
  const time = useClock()

  return (
    <nav className="fixed left-0 right-0 top-0 z-[100] border-b border-vint-cyan/20 bg-void/85 backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-6xl items-center gap-4 px-4 md:h-14 md:px-8">
        <a
          href="#hero"
          className="font-mono text-xs font-semibold tracking-tight text-phosphor md:text-sm"
        >
          <span className="text-vint-cyan">~</span>/sagar
        </a>

        <span className="hidden text-zinc-700 md:inline" aria-hidden>·</span>

        <ul className="flex flex-1 items-center gap-2 overflow-x-auto md:gap-1.5">
          {navLinks.map((l) => {
            const id = l.href.replace('#', '')
            const isActive = active === id
            return (
              <li key={l.href} className="shrink-0">
                <a
                  href={l.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group relative inline-flex items-center px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors md:text-xs ${
                    isActive ? 'text-vint-cyan' : 'text-zinc-500 hover:text-zinc-200'
                  }`}
                >
                  <span className={isActive ? 'text-vint-cyan' : 'text-zinc-700 group-hover:text-vint-cyan/60'}>
                    {isActive ? '[' : ' '}
                  </span>
                  {l.label}
                  <span className={isActive ? 'text-vint-cyan' : 'text-zinc-700 group-hover:text-vint-cyan/60'}>
                    {isActive ? ']' : ' '}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 md:flex">
          <span className="flex items-center gap-1.5">
            <motion.span
              animate={profile.status.available ? { opacity: [1, 0.35, 1] } : { opacity: 1 }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className={`inline-block h-1.5 w-1.5 rounded-full ${
                profile.status.available ? 'bg-phosphor shadow-[0_0_6px_rgba(171,218,220,0.7)]' : 'bg-zinc-600'
              }`}
            />
            <span className="text-phosphor/80">online</span>
          </span>
          <span className="text-zinc-700">·</span>
          <span className="tabular-nums text-zinc-400">{time}</span>
        </div>
      </div>
    </nav>
  )
}
