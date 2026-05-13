'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const NAV = [
  { href: '/projects', label: 'Projects', mobile: true },
  { href: '/products/pulseql', label: 'PulseQL', mobile: true },
  { href: '/writing', label: 'Writing', mobile: true },
  { href: '/resume', label: 'Resume', mobile: false },
  { href: '/contact', label: 'Contact', mobile: false },
]

export default function SiteNav() {
  const pathname = usePathname() || '/'
  const [scrolled, setScrolled] = useState(false)

  // Backdrop-blur engages once the user has scrolled past the hero. Matches
  // the design system's `.topnav.topnav--scrolled` behaviour.
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-line bg-paper/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[60px] max-w-[1240px] items-center justify-between gap-6 px-6">
        {/* Wordmark */}
        <Link
          href="/"
          aria-label="Sagar Das. Home"
          className="group inline-flex items-baseline gap-[2px] font-display text-[22px] font-semibold leading-none tracking-tight text-ink transition-opacity hover:opacity-90"
        >
          <span>Sagar Das</span>
          <span
            aria-hidden
            className="ml-[2px] mb-[3px] h-[6px] w-[6px] self-end rounded-full bg-terracotta"
          />
        </Link>

        {/* Primary nav */}
        <ul className="flex items-center gap-1 sm:gap-7">
          {NAV.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href))
            return (
              <li key={item.href} className={item.mobile ? '' : 'hidden sm:block'}>
                <Link
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative inline-block py-[6px] text-[14px] font-normal transition-colors ${
                    isActive
                      ? 'text-ink after:absolute after:inset-x-0 after:-bottom-[1px] after:h-[1px] after:bg-terracotta'
                      : 'text-ink-2 hover:text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* GitHub icon */}
        <a
          href="https://github.com/sagar8080"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hidden h-8 w-8 items-center justify-center rounded-md text-ink-2 transition-colors hover:bg-paper-2 hover:text-ink sm:inline-flex"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.39.97.01 1.95.14 2.86.39 2.19-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.07 0 4.39-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55 4.57-1.52 7.86-5.83 7.86-10.91C23.5 5.65 18.35.5 12 .5z" />
          </svg>
        </a>
      </div>
    </nav>
  )
}
