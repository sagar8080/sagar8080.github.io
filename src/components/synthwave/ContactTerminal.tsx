'use client'

import { motion } from 'framer-motion'
import { contactCopy, contactLinks, profile } from '@/lib/content'

export function ContactTerminal() {
  return (
    <section id="connect" className="relative px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-vint-cream/75">
            // tty/connect
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vint-pink via-white to-vint-cream">
              {contactCopy.title}
            </span>
          </h2>
          <p className="mt-4 max-w-3xl font-mono text-sm leading-relaxed text-zinc-400 md:text-base">
            {contactCopy.body}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-sm border border-phosphor/40 bg-phosphor/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-phosphor">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-phosphor shadow-[0_0_8px_rgba(171,218,220,0.7)]"
            />
            STATUS: ONLINE · {profile.status.label}
          </div>
        </header>

        <div className="rounded-sm border border-vint-cyan/25 bg-black/55 p-5 backdrop-blur-sm md:p-6">
          <div className="mb-4 flex items-center justify-between border-b border-vint-cyan/15 pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            <span>
              <span className="text-vint-cyan">~/</span>connect
            </span>
            <span className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-zinc-700" />
              <span className="h-2 w-2 rounded-full bg-zinc-700" />
              <span className="h-2 w-2 rounded-full bg-vint-cyan/60" />
            </span>
          </div>

          <ul className="space-y-2">
            {contactLinks.map((link, i) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, x: -4 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.25, delay: i * 0.06 }}
              >
                <a
                  href={link.href}
                  target={link.id === 'phone' || link.id === 'email' ? undefined : '_blank'}
                  rel={link.id === 'phone' || link.id === 'email' ? undefined : 'noopener noreferrer'}
                  className="group flex flex-wrap items-center gap-x-3 gap-y-1 rounded-sm px-2 py-2 font-mono text-sm transition-colors hover:bg-vint-cyan/5"
                >
                  <span className="text-vint-cyan">$</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    {link.command}
                  </span>
                  <span className="text-vint-cyan/70">::</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                    {link.label}
                  </span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-vint-cream underline decoration-vint-cyan/30 underline-offset-4 transition-colors group-hover:text-vint-cyan group-hover:decoration-vint-pink/60">
                    {link.display}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
