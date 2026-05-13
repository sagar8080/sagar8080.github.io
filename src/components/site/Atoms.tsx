// Shared design atoms for the portfolio + product pages.
// All visual primitives live here so spacing, type, and color stay consistent
// across the editorial portfolio and the product-led PulseQL page.
//
// This file is wired to the light editorial design system (paper + ink +
// terracotta). All references to text-white / bg-white / text-zinc-* in
// downstream components resolve to the new palette via the Tailwind token
// remap in tailwind.config.js, but anything Atoms ships uses ink/paper
// directly to keep the design system clean.

import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import type { ReactNode, HTMLAttributes } from 'react'

// ─── Eyebrow ───────────────────────────────────────────────────────────────
// A small caps caption above section titles. Leads with the terracotta
// `eyebrow-rule` (CSS draws it in on mount, see globals.css).
export function Eyebrow({
  label,
  withRule = true,
  align = 'left',
}: {
  label: string
  withRule?: boolean
  align?: 'left' | 'center'
}) {
  if (align === 'center') {
    return (
      <div className="flex items-center justify-center gap-3">
        {withRule && <div className="h-px w-12 bg-line" />}
        <p className="eyebrow">{label}</p>
        {withRule && <div className="h-px w-12 bg-line" />}
      </div>
    )
  }
  return (
    <p className="eyebrow">
      <span className="eyebrow-rule" aria-hidden />
      {label}
    </p>
  )
}

// ─── SectionHeader ─────────────────────────────────────────────────────────
export function SectionHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string
  title: ReactNode
  lede?: ReactNode
}) {
  return (
    <div className="space-y-4">
      <Eyebrow label={eyebrow} />
      <h2 className="section-title">{title}</h2>
      {lede && <p className="section-lede">{lede}</p>}
    </div>
  )
}

// ─── PageHeader ────────────────────────────────────────────────────────────
export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string
  title: ReactNode
  lede?: ReactNode
}) {
  return (
    <header className="space-y-5">
      <Eyebrow label={eyebrow} />
      <h1 className="font-display text-display-md font-semibold leading-[1.05] tracking-tight text-ink sm:text-[44px] lg:text-display-lg">
        {title}
      </h1>
      {lede && <p className="section-lede">{lede}</p>}
    </header>
  )
}

// ─── Tag (mono chip) ───────────────────────────────────────────────────────
export function Tag({ children }: { children: ReactNode }) {
  return <span className="chip">{children}</span>
}

// ─── StatusPill ────────────────────────────────────────────────────────────
//
// Three variants. `live` and `in-development` use the warm ochre dot; `shipped`
// uses sage; `draft` is muted ink. The dot itself is shipped via .status-dot
// in globals.css; here we just pick the variant class.
type StatusKind = 'live' | 'shipped' | 'draft' | 'in-development'
export function StatusPill({ kind, children }: { kind: StatusKind; children?: ReactNode }) {
  const cls =
    kind === 'live' || kind === 'in-development'
      ? 'pill-live'
      : kind === 'shipped'
        ? 'pill-shipped'
        : 'pill-draft'
  const label =
    children ??
    (kind === 'live'
      ? 'Active'
      : kind === 'shipped'
        ? 'Shipped'
        : kind === 'in-development'
          ? 'In development'
          : 'Draft')
  return (
    <span className={`pill ${cls}`}>
      <span className="status-dot" aria-hidden />
      {label}
    </span>
  )
}

// ─── Buttons ───────────────────────────────────────────────────────────────
//
// Three variants from the design system: ink-on-paper primary, terracotta
// accent, paper ghost. Plus a low-key TextLink and a small GhostButton with
// arrow affordance.
type ButtonProps = {
  href: string
  children: ReactNode
  external?: boolean
  className?: string
}

const baseBtn = 'btn btn--md'

export function PrimaryButton({ href, children, external, className = '' }: ButtonProps) {
  const cls = `group ${baseBtn} btn--primary ${className}`
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
      <Arrow />
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
      <Arrow />
    </Link>
  )
}

export function AccentButton({ href, children, external, className = '' }: ButtonProps) {
  const cls = `group ${baseBtn} btn--accent ${className}`
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
      <Arrow />
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
      <Arrow />
    </Link>
  )
}

export function SecondaryButton({ href, children, external, className = '' }: ButtonProps) {
  const cls = `group ${baseBtn} btn--ghost ${className}`
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}

export function GhostButton({ href, children, external, className = '' }: ButtonProps) {
  const cls = `inline-flex h-11 items-center gap-2 px-2 text-[13px] font-medium text-ink-2 transition-colors hover:text-terracotta ${className}`
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
      <ExternalLink aria-hidden size={14} strokeWidth={1.8} />
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
      <ArrowRight aria-hidden size={14} strokeWidth={1.8} />
    </Link>
  )
}

function Arrow() {
  return (
    <ArrowRight
      aria-hidden
      size={15}
      strokeWidth={1.8}
      className="transition-transform group-hover:translate-x-0.5"
    />
  )
}

// ─── TextLink ──────────────────────────────────────────────────────────────
export function TextLink({
  href,
  children,
  external,
  accent = false,
}: {
  href: string
  children: ReactNode
  external?: boolean
  accent?: boolean
}) {
  const cls = `inline-flex items-center gap-1.5 text-[13.5px] font-medium underline underline-offset-[3px] transition-colors ${
    accent
      ? 'text-terracotta decoration-terracotta hover:text-terracotta-2'
      : 'text-ink decoration-line-2 hover:text-terracotta hover:decoration-terracotta'
  }`
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
      <ExternalLink aria-hidden size={13} strokeWidth={1.8} />
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
      <ArrowRight aria-hidden size={13} strokeWidth={1.8} />
    </Link>
  )
}

// ─── Section wrapper ───────────────────────────────────────────────────────
export function Section({
  id,
  children,
  className = '',
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`space-y-8 ${className}`}>
      {children}
    </section>
  )
}

// ─── BentoCard ─────────────────────────────────────────────────────────────
export function BentoCard({
  index,
  title,
  body,
  children,
  span = 1,
}: {
  index?: string
  title: string
  body?: ReactNode
  children?: ReactNode
  span?: 1 | 2 | 3
}) {
  const colSpan =
    span === 3 ? 'lg:col-span-3' : span === 2 ? 'lg:col-span-2' : 'lg:col-span-1'
  return (
    <div className={`surface flex flex-col p-6 ${colSpan}`}>
      {index && (
        <span className="font-mono text-[10.5px] uppercase tracking-eyebrow text-terracotta">
          {index}
        </span>
      )}
      <h3 className="mt-3 font-display text-[18px] font-semibold text-ink md:text-[20px]">
        {title}
      </h3>
      {body && (
        <p className="mt-2.5 text-[13.5px] leading-[1.7] text-ink-2 md:text-[14.5px]">
          {body}
        </p>
      )}
      {children}
    </div>
  )
}

// ─── ProductPanel ──────────────────────────────────────────────────────────
//
// Light app-surface panel with a discreet window-chrome bar.
export function ProductPanel({
  chrome = 'pulseql · workspace',
  children,
  accent = true,
  className = '',
}: {
  chrome?: string
  children: ReactNode
  accent?: boolean
  className?: string
}) {
  return (
    <div
      className={`overflow-hidden ${
        accent ? 'panel-product' : 'surface-raised'
      } ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line bg-paper-3 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line-2" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-2" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-2" />
        <span className="ml-3 font-mono text-[11px] tracking-wide text-ink-3">
          {chrome}
        </span>
      </div>
      {children}
    </div>
  )
}

// ─── CodeBlock ─────────────────────────────────────────────────────────────
export function CodeBlock({
  language,
  children,
}: {
  language?: string
  children: ReactNode
}) {
  return (
    <div className="code-surface overflow-hidden">
      {language && (
        <div className="border-b border-line px-4 py-2 font-mono text-[10.5px] uppercase tracking-eyebrow text-ink-3">
          {language}
        </div>
      )}
      <pre className="overflow-x-auto px-4 py-4 text-[12.5px] leading-[1.75] text-ink-2">
        {children}
      </pre>
    </div>
  )
}

// ─── DiagramFlow ───────────────────────────────────────────────────────────
export type FlowStage = {
  label: string
  body?: string
  accent?: boolean
}

export function DiagramFlow({ stages }: { stages: FlowStage[] }) {
  return (
    <div className="surface-raised overflow-hidden p-6 md:p-8">
      {/* Mobile: vertical list with index + downward connectors */}
      <ol className="space-y-0 md:hidden">
        {stages.map((s, i) => (
          <li key={s.label} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full border font-mono text-[10px] ${
                  s.accent
                    ? 'border-terracotta bg-terracotta-3 text-terracotta-2'
                    : 'border-line-2 bg-paper-2 text-ink-2'
                }`}
              >
                {i + 1}
              </span>
              {i < stages.length - 1 && (
                <span aria-hidden className="my-1 w-px flex-1 bg-line" />
              )}
            </div>
            <div className="flex-1 pb-6">
              <p className="text-[14px] font-medium text-ink">{s.label}</p>
              {s.body && <p className="mt-0.5 text-[12.5px] text-ink-3">{s.body}</p>}
            </div>
          </li>
        ))}
      </ol>

      {/* Desktop: horizontal flow with thin-line connectors */}
      <div className="hidden md:block">
        <div className="flex items-stretch gap-3">
          {stages.map((s, i) => (
            <div key={s.label} className="flex flex-1 items-stretch">
              <div className="flex w-full flex-col gap-2">
                <div
                  className={`rounded-md border px-4 py-3 ${
                    s.accent
                      ? 'border-terracotta bg-terracotta-3'
                      : 'border-line bg-paper-2'
                  }`}
                >
                  <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-3">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-1.5 text-[13px] font-medium text-ink">{s.label}</p>
                  {s.body && (
                    <p className="mt-1 text-[11.5px] leading-[1.55] text-ink-3">
                      {s.body}
                    </p>
                  )}
                </div>
              </div>
              {i < stages.length - 1 && (
                <div
                  aria-hidden
                  className="flex w-6 shrink-0 items-center justify-center"
                >
                  <span className="font-mono text-[12px] text-line-2">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── HairlineDivider ───────────────────────────────────────────────────────
export function HairlineDivider({
  className = '',
}: HTMLAttributes<HTMLDivElement> & { className?: string }) {
  return <div className={`h-px w-full bg-line ${className}`} />
}
