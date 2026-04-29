'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { methodGroups } from '@/lib/content'

export function MethodsMatrix() {
  const [active, setActive] = useState(methodGroups[0].id)
  const current = methodGroups.find((g) => g.id === active) ?? methodGroups[0]

  return (
    <div className="relative">
      <div className="mb-5 flex items-baseline justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-vint-cream/75">
          // methods.matrix
        </p>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
          {methodGroups.length} groups · {methodGroups.reduce((n, g) => n + g.items.length, 0)} entries
        </span>
      </div>

      <div className="rounded-sm border border-vint-pink/20 bg-black/40 p-5 md:p-6">
        <div role="tablist" aria-label="Method groups" className="mb-5 flex flex-wrap gap-2">
          {methodGroups.map((g) => {
            const isActive = active === g.id
            return (
              <button
                key={g.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(g.id)}
                className={`rounded-sm border px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] transition-all ${
                  isActive
                    ? 'border-vint-pink bg-vint-pink/10 text-vint-cream shadow-[0_0_10px_rgba(236,72,153,0.25)]'
                    : 'border-zinc-700 text-zinc-500 hover:border-vint-pink/40 hover:text-zinc-300'
                }`}
              >
                [{g.title.toUpperCase()}]
              </button>
            )
          })}
        </div>

        <motion.ul
          key={current.id}
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.025 } } }}
          className="grid grid-cols-1 gap-2 sm:grid-cols-2"
        >
          {current.items.map((item, i) => (
            <motion.li
              key={item}
              variants={{
                hidden: { opacity: 0, y: 4 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-center gap-3 rounded-sm border border-zinc-800 bg-black/30 px-3 py-2 font-mono text-sm text-zinc-300 transition-colors hover:border-vint-pink/40 hover:text-zinc-100"
            >
              <span className="font-mono text-[10px] tabular-nums text-vint-cyan/80">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}
