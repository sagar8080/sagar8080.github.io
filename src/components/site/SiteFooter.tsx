import Link from 'next/link'
import type { ReactNode } from 'react'
import { BackdropControl } from '@/components/site/SiteBackdrop'

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="folio-shell flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="inline-flex items-baseline gap-[2px] font-display text-[17px] font-semibold leading-none tracking-tight text-ink">
            Sagar Das
            <span
              aria-hidden
              className="mb-[3px] ml-[2px] h-[5px] w-[5px] self-end bg-terracotta"
            />
          </p>
          <p className="text-[12.5px] text-ink-3">Data &amp; AI Engineer</p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-medium text-ink-2"
        >
          <FooterLink href="/projects">Projects</FooterLink>
          <FooterLink href="/writing">Writing</FooterLink>
          <FooterLink href="/#photographs">Photos</FooterLink>
          <FooterLink href="/resume">Résumé</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="https://github.com/sagar8080" external>
            GitHub
          </FooterLink>
        </nav>

        {/* The year is intentionally always-current at view time. For static
            export the build-time HTML and the client render can disagree
            (different year, different timezone), so suppress the React
            hydration warning on this single element. */}
        <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] tracking-wide text-ink-4">
          <BackdropControl />
          <p suppressHydrationWarning>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({
  href,
  external,
  children,
}: {
  href: string
  external?: boolean
  children: ReactNode
}) {
  const className = "transition-colors hover:text-terracotta"

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children} ↗
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
