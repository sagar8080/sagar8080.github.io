'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { TerminalText } from './TerminalText'
import { greetings, heroHighlights, profile } from '@/lib/content'

const bootLines = [
  '$ boot --target=portfolio',
  '> kernel_loaded · uptime_ok · session_active',
]

export function HeroTerminal() {
  const [bootStep, setBootStep] = useState(0)
  const [highlightIdx, setHighlightIdx] = useState(0)
  const [greetIdx, setGreetIdx] = useState(0)
  const bootDone = bootStep >= bootLines.length

  useEffect(() => {
    const id = window.setInterval(() => {
      setHighlightIdx((i) => (i + 1) % heroHighlights.length)
    }, 2600)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    const id = window.setInterval(() => {
      setGreetIdx((i) => (i + 1) % greetings.length)
    }, 1500)
    return () => window.clearInterval(id)
  }, [])

  const greeting = greetings[greetIdx]

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center px-4 pt-24 pb-24 md:px-8 md:pb-28"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-10 rounded-sm border border-vint-cyan/30 bg-black/55 p-4 font-mono text-sm text-phosphor/90 shadow-[inset_0_0_40px_rgba(34,211,238,0.06)] md:p-5">
          {bootLines.slice(0, bootStep + 1).map((line, i) => (
            <div key={line} className={i === 0 ? 'text-vint-cyan/90' : 'mt-2 text-phosphor/80 text-xs'}>
              {i === bootStep ? (
                <TerminalText
                  text={line}
                  speed={26}
                  cursor={i === bootLines.length - 1}
                  onComplete={() => setBootStep((s) => s + 1)}
                />
              ) : (
                <span>{line}</span>
              )}
            </div>
          ))}
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-vint-cyan/80">
          // {profile.eyebrow}
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: bootDone ? 0.05 : 1.6 }}
          whileHover={{ x: [0, -2, 2, -1, 1, 0], transition: { duration: 0.28 } }}
          className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span
            className="bg-clip-text text-transparent bg-[length:200%_auto] motion-safe:animate-name-shift"
            style={{
              backgroundImage:
                'linear-gradient(90deg,#22d3ee 0%,#F1E6C9 25%,#ec4899 50%,#F1E6C9 75%,#22d3ee 100%)',
              filter: 'drop-shadow(0 0 18px rgba(34,211,238,0.25))',
            }}
          >
            <ScrambleText target={profile.name} startAfter={bootDone ? 250 : 1850} />
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: bootDone ? 0.1 : 1.7 }}
          className="mt-3 flex items-baseline gap-3 font-mono text-sm text-zinc-400 md:text-base"
        >
          <span className="text-vint-cyan/70">&gt;</span>
          <span className="text-zinc-500 normal-case">{profile.role.toLowerCase()}</span>
          <span className="text-zinc-700">·</span>
          <span>
            <motion.span
              key={greetIdx}
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18 }}
              className="font-semibold text-vint-cream"
            >
              {greeting.greeting}
            </motion.span>{' '}
            <span className="text-zinc-600">·</span>{' '}
            <span className="text-zinc-500 normal-case">{greeting.language.toLowerCase()}</span>
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: bootDone ? 0.2 : 1.8 }}
          className="mt-10 font-display text-xl font-medium leading-tight text-zinc-100 md:whitespace-nowrap md:text-[1.6rem] lg:text-[1.85rem] xl:text-[2rem]"
        >
          {profile.tagline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: bootDone ? 0.3 : 1.9 }}
          className="mt-5 max-w-2xl font-mono text-sm leading-relaxed text-zinc-400 md:text-base"
        >
          {profile.subhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: bootDone ? 0.4 : 2.0 }}
          className="mt-8 inline-flex flex-wrap items-center gap-3 rounded-sm border border-vint-pink/25 bg-black/40 px-4 py-3 font-mono text-sm text-zinc-200"
        >
          <span className="text-vint-cyan">$</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">exec</span>
          <motion.span
            key={highlightIdx}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
          >
            {heroHighlights[highlightIdx]}
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: bootDone ? 0.5 : 2.1 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <CtaPrimary href="#connect" label="INITIALIZE_CONTACT" />
          <CtaSecondary href="#work" label="VIEW_WORK" />
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.18em] text-vint-cyan/80 underline decoration-vint-cyan/30 underline-offset-4 hover:text-vint-cream hover:decoration-vint-cream"
          >
            resume.pdf
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function CtaPrimary({ href, label }: { href: string; label: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ x: [0, -1, 1, 0], transition: { duration: 0.18 } }}
      className="group relative inline-flex items-center gap-2 rounded-sm border border-vint-cyan/70 bg-vint-cyan/10 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-vint-cream transition-all duration-200 hover:border-vint-pink hover:bg-vint-pink/10 hover:text-vint-cream hover:shadow-[0_0_18px_rgba(236,72,153,0.4)] md:text-sm"
      style={{ textShadow: '0 0 14px rgba(34,211,238,0.35)' }}
    >
      <span>[{label}]</span>
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
    </motion.a>
  )
}

function CtaSecondary({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-sm border border-zinc-700 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300 transition-colors hover:border-vint-cyan/60 hover:text-vint-cream md:text-sm"
    >
      [{label}]
    </a>
  )
}

const SCRAMBLE_CHARS = '▒▓█@#$%&*+=<>?/\\|0123456789'

function ScrambleText({ target, startAfter = 0 }: { target: string; startAfter?: number }) {
  const [display, setDisplay] = useState(() => target.replace(/\S/g, '·'))

  useEffect(() => {
    let intervalId: number | undefined
    const startId = window.setTimeout(() => {
      let frame = 0
      const settleStart = 5 // frames each letter scrambles before locking
      const totalFrames = target.length * 3 + settleStart + 2

      const tick = () => {
        let next = ''
        for (let i = 0; i < target.length; i++) {
          const ch = target[i]
          if (ch === ' ') {
            next += ' '
            continue
          }
          const startFrame = i * 3
          const endFrame = startFrame + settleStart
          if (frame < startFrame) next += '·'
          else if (frame >= endFrame) next += ch
          else next += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
        }
        setDisplay(next)
        frame++
        if (frame > totalFrames && intervalId !== undefined) {
          window.clearInterval(intervalId)
        }
      }

      tick()
      intervalId = window.setInterval(tick, 38)
    }, startAfter)

    return () => {
      window.clearTimeout(startId)
      if (intervalId !== undefined) window.clearInterval(intervalId)
    }
  }, [target, startAfter])

  return <>{display}</>
}
