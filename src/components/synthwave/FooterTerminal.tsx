'use client'

import { footerCopy } from '@/lib/content'

export function FooterTerminal() {
  return (
    <footer className="relative border-t border-vint-cyan/15 bg-black/40 px-4 pb-10 pt-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 md:flex-row md:items-center">
        <span>{footerCopy.copyright}</span>
        <span className="flex flex-wrap items-center gap-2">
          <span className="text-vint-cyan/70">deps</span>
          <span className="text-zinc-700">::</span>
          <span className="text-zinc-400">{footerCopy.deps}</span>
        </span>
      </div>
    </footer>
  )
}
