'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { projectFilters, projects, type ProjectCategory } from '@/lib/content'

type Filter = ProjectCategory | 'ALL'

export function ProjectsGrid() {
  const [filter, setFilter] = useState<Filter>('ALL')

  const visible = useMemo(
    () => (filter === 'ALL' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <section id="work" className="relative px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-vint-cyan/80">
            // ls /work
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
            <span className="text-vint-cyan">::</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vint-cyan to-vint-pink">
              SHIPPED_PROJECTS
            </span>
          </h2>
          <p className="mt-3 max-w-2xl font-mono text-sm text-zinc-400">
            Public slice of builds — same patterns recur under NDA elsewhere: ingestion, quality gates, and shipping with receipts.
          </p>
        </header>

        <div
          role="tablist"
          aria-label="Project category"
          className="mb-8 flex flex-wrap gap-2"
        >
          {projectFilters.map((f) => {
            const active = f.id === filter
            return (
              <button
                key={f.id}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.id)}
                className={`rounded-sm border px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] transition-all ${
                  active
                    ? 'border-vint-cyan bg-vint-cyan/10 text-vint-cream shadow-[0_0_10px_rgba(34,211,238,0.25)]'
                    : 'border-zinc-700 text-zinc-500 hover:border-vint-cyan/40 hover:text-zinc-300'
                }`}
              >
                [{f.label}]
              </button>
            )
          })}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: (i % 6) * 0.05 }}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-vint-cyan/20 bg-black/55 backdrop-blur-sm transition-all hover:border-vint-cyan/60 hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(34,211,238,0.2)]"
            >
              <div className="flex items-center justify-between border-b border-vint-cyan/15 bg-black/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                <span>
                  <span className="text-vint-cyan">~/</span>
                  {p.id}
                </span>
                <span className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-zinc-700" />
                  <span className="h-2 w-2 rounded-full bg-zinc-700" />
                  <span className="h-2 w-2 rounded-full bg-vint-cyan/60" />
                </span>
              </div>

              <div className="relative h-40 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={400}
                  height={200}
                  className="h-full w-full object-cover grayscale contrast-90 saturate-50 transition-all duration-500 group-hover:grayscale-0 group-hover:saturate-100"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute left-2 top-2 rounded-sm border border-vint-pink/40 bg-black/70 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-vint-cream">
                  {p.categoryLabel}
                </div>
                <div className="absolute right-2 bottom-2 rounded-sm border border-vint-cyan/40 bg-black/70 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-vint-cream">
                  {p.impact}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-base font-semibold text-white md:text-lg">
                  <span className="text-vint-cyan/70">{p.index} · </span>
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 font-mono text-xs leading-relaxed text-zinc-400">
                  {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-zinc-700 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-zinc-800 pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  <span className="inline-flex items-center gap-1.5 text-vint-cream/80 transition-colors group-hover:text-vint-cyan">
                    <FaGithub size={12} />
                    source
                  </span>
                  <span className="inline-flex items-center gap-1 transition-colors group-hover:text-vint-cyan">
                    open
                    <ExternalLink size={11} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
