'use client'

import { motion } from 'framer-motion'
import { capabilityDomains } from '@/lib/content'
import { CapabilityDiagram } from './CapabilityDiagram'

export function CapabilitiesGrid() {
  return (
    <section id="capabilities" className="relative px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-vint-cyan/80">
            // capabilities.grid
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
            <span className="text-vint-cyan">::</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vint-cyan to-vint-pink">
              CORE_CAPABILITIES
            </span>
          </h2>
          <p className="mt-3 max-w-2xl font-mono text-sm text-zinc-400">
            Three domains where I build production systems — each backed by the patterns sketched below.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {capabilityDomains.map((domain, i) => (
            <motion.article
              key={domain.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="group relative flex flex-col rounded-sm border border-vint-cyan/25 bg-black/55 p-5 backdrop-blur-sm transition-all hover:border-vint-cyan/60 hover:shadow-[0_0_22px_rgba(34,211,238,0.18)] md:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-vint-cyan/70">
                  DOMAIN_{domain.index}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-phosphor shadow-[0_0_6px_rgba(171,218,220,0.6)]" />
              </div>

              <h3 className="mt-3 font-display text-lg font-semibold text-white md:text-xl">
                {domain.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-zinc-400">{domain.subtitle}</p>

              <div className="mt-5 rounded-sm border border-vint-cyan/10 bg-black/40 p-3">
                <CapabilityDiagram variant={domain.diagram} />
              </div>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {domain.tools.map((t) => (
                  <li
                    key={t}
                    className="rounded-sm border border-vint-cyan/20 bg-vint-cyan/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-vint-cream/90"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
