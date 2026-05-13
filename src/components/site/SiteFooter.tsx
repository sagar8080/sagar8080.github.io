import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-hairline">
      <div className="mx-auto max-w-editorial px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:items-start">
          {/* Identity */}
          <div className="space-y-3">
            <p className="font-display text-[15px] font-semibold tracking-normal text-white">
              Sagar Das
            </p>
            <p className="max-w-sm text-[13px] leading-[1.7] text-zinc-500">
              Data &amp; AI Engineer building infrastructure for trusted AI workflows.
              Currently shipping{' '}
              <Link href="/products/pulseql" className="text-zinc-300 hover:text-white">
                PulseQL
              </Link>{' '}
              and{' '}
              <Link href="/projects/relay" className="text-zinc-300 hover:text-white">
                Relay
              </Link>
              .
            </p>
            <p className="flex items-center gap-2 pt-1 font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-600">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Open to consulting &amp; full-time
            </p>
          </div>

          {/* Sitemap */}
          <FooterCol
            label="Site"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/projects' },
              { label: 'Writing', href: '/writing' },
              { label: 'Resume', href: '/resume' },
              { label: 'Contact', href: '/contact' },
            ]}
          />

          <FooterCol
            label="Products"
            items={[
              { label: 'PulseQL', href: '/products/pulseql' },
              { label: 'Relay (case study)', href: '/projects/relay' },
              { label: 'Atrium', href: '/projects/atrium' },
            ]}
          />

          <FooterCol
            label="Elsewhere"
            items={[
              { label: 'GitHub', href: 'https://github.com/sagar8080', external: true },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/sagardas08', external: true },
              { label: 'Email', href: 'mailto:sagardas.work@gmail.com' },
            ]}
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-6">
          <p className="font-mono text-[11px] tracking-wide text-zinc-600">
            © {new Date().getFullYear()} Sagar Das · built with care
          </p>
          <p className="font-mono text-[11px] tracking-wide text-zinc-600">
            v2 · editorial-tech
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  label,
  items,
}: {
  label: string
  items: { label: string; href: string; external?: boolean }[]
}) {
  return (
    <div className="space-y-3">
      <p className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-500">
        {label}
      </p>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.href}>
            {it.external ? (
              <a
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-zinc-400 transition-colors hover:text-white"
              >
                {it.label} ↗
              </a>
            ) : (
              <Link
                href={it.href}
                className="text-[13px] text-zinc-400 transition-colors hover:text-white"
              >
                {it.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
