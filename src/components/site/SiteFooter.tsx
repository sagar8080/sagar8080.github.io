import Link from 'next/link'
import type { ReactNode } from 'react'

export default function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-line bg-paper">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="inline-flex items-baseline gap-[2px] font-display text-[17px] font-semibold leading-none tracking-tight text-ink">
            Sagar Das
            <span
              aria-hidden
              className="mb-[3px] ml-[2px] h-[5px] w-[5px] self-end rounded-full bg-terracotta"
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
          <FooterLink href="/resume">Resume</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="https://github.com/sagar8080" external>
            GitHub
          </FooterLink>
        </nav>

        <p className="font-mono text-[11px] tracking-wide text-ink-4">
          © {new Date().getFullYear()}
        </p>
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
