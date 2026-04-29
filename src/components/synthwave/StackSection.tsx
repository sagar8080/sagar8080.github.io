'use client'

import { CoreStack } from './CoreStack'
import { MethodsMatrix } from './MethodsMatrix'

export function StackSection() {
  return (
    <section id="stack" className="relative px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-vint-cyan/80">
            // skills.matrix
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
            <span className="text-vint-cyan">::</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vint-cyan to-vint-pink">
              TECHNICAL_DEPTH
            </span>
          </h2>
          <p className="mt-3 max-w-2xl font-mono text-sm text-zinc-400">
            Primitives I reach for when wiring pipelines, hardening platforms, and shipping retrieval-heavy AI.
          </p>
        </header>

        <div className="space-y-10 md:space-y-12">
          <CoreStack />
          <MethodsMatrix />
        </div>
      </div>
    </section>
  )
}
