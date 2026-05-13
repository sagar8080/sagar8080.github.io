import Link from 'next/link'
import { PageHeader, Eyebrow, Section, StatusPill, Tag } from '@/components/site/Atoms'
import { getAllPosts } from '@/lib/writing'

export default async function WritingIndex() {
  const posts = await getAllPosts()
  const published = posts.filter((p) => p.status === 'published')
  const drafts = posts.filter((p) => p.status === 'draft')
  const archive = posts.filter((p) => p.status === 'archive')

  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-12 md:pt-16 space-y-14">
      <PageHeader
        eyebrow="Writing"
        title="Notes on data and AI infrastructure."
        lede="Short technical notes on the decisions behind the systems I build."
      />

      {published.length > 0 && (
        <Section>
          <Eyebrow label="Published" />
          <ul>
            {published.map((p, i) => (
              <li
                key={p.slug}
                className={
                  i < published.length - 1 ? 'border-b border-hairline' : ''
                }
              >
                <Link
                  href={`/writing/${p.slug}`}
                  className="group grid items-baseline gap-2 py-6 sm:grid-cols-[1fr_auto] sm:gap-6"
                >
                  <div className="space-y-2">
                    <h2 className="font-display text-[18px] font-semibold text-white transition-colors group-hover:text-accent md:text-[20px]">
                      {p.title}
                    </h2>
                    <p className="text-[13.5px] leading-[1.7] text-zinc-400 md:text-[14.5px]">
                      {p.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {p.mediumUrl && (
                        <span className="font-mono text-[10px] uppercase tracking-eyebrow text-zinc-600">
                          orig. on Medium
                        </span>
                      )}
                      {p.tags && p.tags.length > 0 && (
                        <ul className="flex flex-wrap gap-1.5">
                          {p.tags.slice(0, 4).map((t) => (
                            <li key={t}>
                              <Tag>{t}</Tag>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <span className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-500 sm:text-right">
                    {formatDate(p.date)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {drafts.length > 0 && (
        <Section>
          <Eyebrow label="Drafts" />
          <p className="max-w-2xl text-[13.5px] leading-[1.7] text-zinc-500">
            Outlined, body in progress. Each draft links to working notes. They&apos;ll
            grow as the full posts ship.
          </p>
          <ul>
            {drafts.map((p, i) => (
              <li
                key={p.slug}
                className={i < drafts.length - 1 ? 'border-b border-hairline' : ''}
              >
                <Link
                  href={`/writing/${p.slug}`}
                  className="group grid items-baseline gap-2 py-5 sm:grid-cols-[1fr_auto] sm:gap-6"
                >
                  <div className="space-y-1.5">
                    <h2 className="font-display text-[15.5px] font-medium text-zinc-200 transition-colors group-hover:text-white md:text-[16px]">
                      {p.title}
                    </h2>
                    <p className="text-[12.5px] leading-[1.65] text-zinc-500">
                      {p.excerpt}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                    <StatusPill kind="draft" />
                    <span className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-600">
                      {formatDate(p.date)}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {archive.length > 0 && (
        <Section>
          <Eyebrow label="Archive" />
          <p className="max-w-2xl text-[13.5px] leading-[1.7] text-zinc-500">
            Earlier writing on Medium. Kept for context but not the work I&apos;d
            point to first. Each links out to the original.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {archive.map((p) => (
              <li key={p.slug}>
                <a
                  href={p.mediumUrl ?? `/writing/${p.slug}`}
                  target={p.mediumUrl ? '_blank' : undefined}
                  rel={p.mediumUrl ? 'noopener noreferrer' : undefined}
                  className="surface group flex h-full flex-col gap-2 p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-[15px] font-medium text-zinc-200 transition-colors group-hover:text-white md:text-[15.5px]">
                      {p.title}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-eyebrow text-zinc-600">
                      {formatDate(p.date)}
                    </span>
                  </div>
                  <p className="text-[12.5px] leading-[1.65] text-zinc-500">
                    {p.excerpt}
                  </p>
                  <span className="mt-auto pt-1 font-mono text-[10px] uppercase tracking-eyebrow text-zinc-500 transition-colors group-hover:text-accent">
                    {p.mediumUrl ? 'Read on Medium ↗' : 'Read →'}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <div className="surface p-6 md:p-7">
        <p className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-500">
          Notify
        </p>
        <p className="mt-2 text-[14px] leading-[1.7] text-zinc-300 md:text-[15px]">
          To get a heads-up when drafts publish,{' '}
          <a
            href="mailto:sagardas.work@gmail.com?subject=Writing%20updates"
            className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-white hover:decoration-accent"
          >
            email me
          </a>{' '}
          and I&apos;ll add you to a small list. No newsletter. Just a one-line note
          when a post ships.
        </p>
      </div>
    </div>
  )
}

function formatDate(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}
