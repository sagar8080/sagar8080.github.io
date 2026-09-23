'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const NAV = [
  { href: '/projects', label: 'Work' },
  { href: '/products/pulseql', label: 'PulseQL' },
  { href: '/writing', label: 'Writing' },
  { href: '/resume', label: 'Résumé' },
]

export default function SiteNav() {
  const pathname = usePathname() || '/'
  const [open, setOpen] = useState(false)
  return (
    <header
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setOpen(false)
          event.currentTarget
            .querySelector<HTMLButtonElement>('.nav-toggle')
            ?.focus()
        }
      }}
      className={`folio-nav ${pathname === '/' ? 'folio-nav-home' : ''}`}
    >
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="folio-nav-inner">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Sagar Das. Home"
          className="folio-wordmark"
        >
          sagar das<span>✳</span>
        </Link>
        <span className="nav-caption">
          ENGINEER BY TRADE.
          <br />
          CURIOUS BY DEFAULT.
        </span>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav
          aria-label="Primary"
          id="primary-navigation"
          className={`folio-nav-links ${open ? 'is-open' : ''}`}
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname.startsWith(item.href) ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="nav-contact"
            href="/contact"
            aria-current={pathname === '/contact' ? 'page' : undefined}
            onClick={() => setOpen(false)}
          >
            Let’s talk <ArrowUpRight size={15} />
          </Link>
        </nav>
      </div>
    </header>
  )
}
