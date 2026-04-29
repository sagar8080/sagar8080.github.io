'use client'

import { motion } from 'framer-motion'
import { telemetry } from '@/lib/content'

export function TelemetryStrip() {
  return (
    <section
      aria-label="Telemetry"
      className="relative border-y border-vint-cyan/10 bg-black/40 px-4 py-6 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 md:gap-x-8">
          {telemetry.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="relative md:border-l md:border-vint-cyan/10 md:pl-6 md:first:border-l-0 md:first:pl-0"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-vint-cyan/70">
                {t.label}
              </div>
              <div className="mt-2 flex items-baseline gap-1.5 font-display text-3xl font-bold text-white md:text-4xl">
                <span className="tabular-nums">{t.value}</span>
                <span className="font-mono text-base text-vint-cyan md:text-lg">{t.unit}</span>
              </div>
              <div className="mt-1 font-mono text-[11px] text-zinc-500">{t.caption}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
