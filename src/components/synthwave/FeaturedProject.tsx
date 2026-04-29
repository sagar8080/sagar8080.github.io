'use client'

import { motion } from 'framer-motion'
import { featuredProject } from '@/lib/content'

export function FeaturedProject() {
  return (
    <section
      aria-label="Featured project"
      className="relative px-4 pb-20 md:px-8 md:pb-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-sm border border-vint-pink/40 bg-gradient-to-br from-black/70 via-black/55 to-vint-pink/15 p-6 backdrop-blur-sm md:p-10"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -top-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vint-pink/70 to-transparent"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.18),transparent_60%)]"
          />

          <div className="relative">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-sm border border-vint-pink/50 bg-vint-pink/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-vint-cream">
                FEATURED_PROJECT
              </span>
              <span className="rounded-sm border border-vint-cyan/40 bg-vint-cyan/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-vint-cream">
                {featuredProject.status}
              </span>
            </div>

            <h3 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-vint-pink via-white to-vint-cream">
                {featuredProject.title}
              </span>
            </h3>
            <p className="mt-2 font-mono text-sm text-zinc-400 md:text-base">
              {featuredProject.subtitle}
            </p>

            <p className="mt-6 max-w-3xl font-mono text-sm leading-relaxed text-zinc-300 md:text-base">
              {featuredProject.description}
            </p>

            <ul className="mt-6 space-y-2.5">
              {featuredProject.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3 font-mono text-sm leading-relaxed text-zinc-300"
                >
                  <span className="mt-0.5 shrink-0 text-vint-cyan">{'>'}</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-1.5">
              {featuredProject.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-sm border border-vint-pink/30 bg-vint-pink/5 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-vint-cream"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
