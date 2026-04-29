'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { experience } from '@/lib/content'

export function ExperienceLog() {
  return (
    <section id="log" className="relative px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-vint-cyan/80">
            // experience.log
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
            <span className="text-vint-cyan">::</span> A track record of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vint-cyan to-vint-pink">
              shipping under scale
            </span>
          </h2>
          <p className="mt-3 max-w-2xl font-mono text-sm text-zinc-400">
            From vendor floors to research labs — same through-line: make the data path observable before you optimize it.
          </p>
        </header>

        <ol className="relative space-y-5">
          <span
            aria-hidden
            className="pointer-events-none absolute left-3.5 top-3 bottom-3 w-px bg-gradient-to-b from-vint-cyan/50 via-vint-pink/30 to-transparent md:left-4"
          />

          {experience.map((exp, i) => (
            <RoleCard key={exp.id} exp={exp} index={i} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function RoleCard({ exp, index }: { exp: typeof experience[number]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.li
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="relative pl-12 md:pl-16"
    >
      <span
        aria-hidden
        className="absolute left-1.5 top-2 flex h-5 w-5 items-center justify-center rounded-full border border-vint-cyan/60 bg-void shadow-[0_0_8px_rgba(34,211,238,0.4)] md:left-2"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-phosphor" />
      </span>

      <div className="rounded-sm border border-vint-cyan/20 bg-black/45 backdrop-blur-sm transition-colors hover:border-vint-cyan/45">
        <div className="p-5 md:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-vint-cyan/70">
              ROLE_{exp.index} · {exp.location}
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              {exp.duration}
            </span>
          </div>
          <h3 className="mt-2 font-display text-xl font-bold leading-tight text-white md:text-2xl">
            {exp.position}
          </h3>
          <p className="mt-1 font-mono text-sm text-vint-cream/90">{exp.company}</p>

          {exp.metrics && exp.metrics.length > 0 && (
            <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {exp.metrics.map((m, i) => (
                <li
                  key={m.value + i}
                  className="rounded-sm border border-vint-cyan/15 bg-gradient-to-br from-vint-cyan/5 to-transparent p-3 transition-colors hover:border-vint-cyan/40"
                >
                  <div className="font-display text-xl font-bold tabular-nums text-vint-cream md:text-2xl">
                    {m.value}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                    {m.caption}
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-1.5">
            {exp.technologies.map((t) => (
              <span
                key={t}
                className="rounded-sm border border-zinc-700/70 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-zinc-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="group flex w-full items-center justify-between border-t border-vint-cyan/10 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:bg-vint-cyan/5 hover:text-vint-cyan md:px-6"
        >
          <span>{open ? 'collapse_log' : 'expand_log'}</span>
          <ChevronDown
            size={14}
            className={`transition-transform ${open ? 'rotate-180' : ''}`}
            aria-hidden
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="overflow-hidden border-t border-vint-cyan/10"
            >
              <div className="space-y-3 px-5 pb-5 pt-4 md:px-6 md:pb-6">
                <p className="font-mono text-sm leading-relaxed text-zinc-400">
                  {exp.summary}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((a) => (
                    <li
                      key={a}
                      className="flex gap-3 font-mono text-sm leading-relaxed text-zinc-300"
                    >
                      <span className="mt-0.5 shrink-0 text-phosphor/80">{'>'}</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  )
}
