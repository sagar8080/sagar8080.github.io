'use client'

import { motion } from 'framer-motion'
import { coreStack } from '@/lib/content'

export function CoreStack() {
  return (
    <div className="relative">
      <div className="mb-5 flex items-baseline justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-vint-cyan/80">
          // core_stack.lst
        </p>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
          {coreStack.length.toString().padStart(2, '0')} primitives
        </span>
      </div>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ visible: { transition: { staggerChildren: 0.025 } } }}
        className="grid grid-cols-2 gap-x-6 gap-y-2 rounded-sm border border-vint-cyan/15 bg-black/40 p-5 sm:grid-cols-3 md:grid-cols-5"
      >
        {coreStack.map((tool, i) => (
          <motion.li
            key={tool}
            variants={{
              hidden: { opacity: 0, x: -4 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-center gap-2 font-mono text-sm"
          >
            <span className="w-6 shrink-0 text-[10px] tabular-nums text-vint-cyan/60">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="truncate text-zinc-200">{tool}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
