'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/projects', label: 'Projects', mobile: true },
  { href: '/products/pulseql', label: 'PulseQL', mobile: true },
  { href: '/writing', label: 'Writing', mobile: true },
  { href: '/resume', label: 'Resume', mobile: false },
  { href: '/contact', label: 'Contact', mobile: false },
]

export default function SiteNav() {
  const pathname = usePathname() || '/'

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[82rem] items-center justify-between px-6">
        {/* Monogram + name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          aria-label="Sagar Das. Home"
        >
          <Monogram />
          <span className="whitespace-nowrap font-display text-[14px] font-semibold tracking-normal text-white">
            Sagar Das
          </span>
        </Link>

        {/* Primary nav */}
        <div className="flex items-center gap-1 sm:gap-2">
          {NAV.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-2.5 py-1.5 text-[13px] transition-colors sm:px-3 ${
                  item.mobile ? '' : 'hidden sm:inline-block'
                } ${
                  isActive
                    ? 'text-accent'
                    : 'text-zinc-400 hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <a
            href="https://github.com/sagar8080"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hidden px-2.5 py-1.5 text-[13px] text-zinc-500 transition-colors hover:text-accent sm:inline-block"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </nav>
  )
}

// Compact data/AI mark: three system nodes connected by an execution path.
function Monogram() {
  return (
    <span
      aria-hidden
      className="grid h-7 w-7 place-items-center rounded-md border border-hairline bg-surface-1 text-accent transition-colors group-hover:border-accent/30"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.25 5.25h4.1c2 0 3.4 1.18 3.4 2.75s-1.4 2.75-3.4 2.75h-4.1"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
        <path
          d="M4.25 8h5.25"
          stroke="white"
          strokeOpacity="0.78"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
        <circle cx="3.25" cy="5.25" r="1.15" fill="currentColor" />
        <circle cx="3.25" cy="10.75" r="1.15" fill="currentColor" fillOpacity="0.72" />
        <circle cx="12.75" cy="8" r="1.15" fill="white" fillOpacity="0.9" />
      </svg>
    </span>
  )
}
