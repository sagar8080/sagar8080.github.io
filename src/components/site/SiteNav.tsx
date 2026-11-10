'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const NAV = [
  { href: '/projects', label: 'Work' },
  { href: '/writing', label: 'Writing' },
  { href: '/#photographs', label: 'Photos' },
  { href: '/resume', label: 'Résumé' },
]

export default function SiteNav() {
  const pathname = usePathname() || '/'
  const isHome = pathname === '/'
  const [open, setOpen] = useState(false)
  return (
    <header
      onKeyDown={(event) => {
        if (open && event.key === 'Escape') {
          setOpen(false)
          event.currentTarget
            .querySelector<HTMLButtonElement>('.nav-toggle')
            ?.focus()
        }
      }}
      className="folio-nav"
    >
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="folio-shell folio-nav-inner">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Sagar Das. Home"
          className="folio-wordmark"
        >
          SD<span aria-hidden="true">.</span>
        </Link>
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
              href={isHome && item.href === '/projects' ? '#selected-work' : item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              data-active={pathname.startsWith(`${item.href}/`) || (item.href === '/projects' && pathname.startsWith('/products/')) ? '' : undefined}
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
            Contact <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
