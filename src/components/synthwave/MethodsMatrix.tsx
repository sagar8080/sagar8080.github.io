'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { methodGroups } from '@/lib/content'

export function MethodsMatrix() {
  const [active, setActive] = useState(methodGroups[0].id)
  const current = methodGroups.find((g) => g.id === active) ?? methodGroups[0]

  return (
    <div className="relative">
      <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.28em] text-vint-cream/75">
        // methods.matrix
      </p>

      <div className="rounded-sm border border-vint-pink/20 bg-black/40 p-4 md:p-5">
        <div role="tablist" aria-label="Method groups" className="mb-4 flex flex-wrap gap-1.5">
          {methodGroups.map((g) => {
            const isActive = active === g.id
            return (
              <button
                key={g.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(g.id)}
                className={`rounded-sm border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] transition-all ${
                  isActive
                    ? 'border-vint-pink bg-vint-pink/10 text-vint-cream shadow-[0_0_10px_rgba(236,72,153,0.25)]'
                    : 'border-zinc-700 text-zinc-500 hover:border-vint-pink/40 hover:text-zinc-300'
                }`}
              >
                {g.title}
              </button>
            )
          })}
        </div>

        <motion.ul
          key={current.id}
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.018 } } }}
          className="flex flex-wrap gap-1.5"
        >
          {current.items.map((item) => (
            <motion.li
              key={item}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="rounded-sm border border-zinc-800 bg-black/30 px-2 py-1 font-mono text-[11px] text-zinc-300 transition-colors hover:border-vint-pink/40 hover:bg-vint-pink/5 hover:text-vint-cream"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}
