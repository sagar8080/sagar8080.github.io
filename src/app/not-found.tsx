import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-start justify-center gap-6 px-6 py-24">
      <p className="eyebrow">
        <span className="eyebrow-rule" aria-hidden />
        404 · not found
      </p>
      <h1 className="font-display text-display-md font-semibold tracking-tight text-ink sm:text-display-lg">
        Page not found.
      </h1>
      <p className="text-[15px] leading-[1.7] text-ink-2 md:text-[16px]">
        The page you&apos;re looking for either doesn&apos;t exist, has moved, or was
        never on this site to begin with. Try one of the routes below.
      </p>

      <ul className="flex flex-wrap gap-2 pt-2">
        {[
          { href: '/', label: 'Home' },
          { href: '/projects', label: 'Projects' },
          { href: '/products/pulseql', label: 'PulseQL', accent: true },
          { href: '/writing', label: 'Writing' },
          { href: '/contact', label: 'Contact' },
        ].map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className={`btn btn--md ${it.accent ? 'btn--accent' : 'btn--ghost'}`}
            >
              {it.label} →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
