import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { Eyebrow, Tag, StatusPill } from '@/components/site/Atoms'
import { mdxComponents } from '@/components/site/MdxComponents'
import ReadingProgress from '@/components/site/ReadingProgress'
import SectionMarkers from '@/components/site/SectionMarkers'
import { getAllPosts, getPostBySlug, getPostSlugs } from '@/lib/writing'

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} · Sagar Das`,
    description: post.excerpt,
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const all = await getAllPosts()
  const idx = all.findIndex((p) => p.slug === slug)
  const prev = idx > 0 ? all[idx - 1] : null
  const next = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null

  const isDraft = post.status === 'draft'
  const isArchive = post.status === 'archive'
  const statusKind = isDraft ? 'draft' : isArchive ? 'shipped' : 'live'
  const statusLabel = isDraft ? 'Draft' : isArchive ? 'Archive' : 'Published'

  return (
    <article className="mx-auto max-w-[980px] px-6 pb-24 pt-12 md:pt-16">
      <ReadingProgress />
      <SectionMarkers />
      <Link
        href="/writing"
        className="inline-flex items-center gap-2 text-[13px] text-zinc-500 transition-colors hover:text-white"
      >
        ← All writing
      </Link>

      <header className="mt-10 space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <p className="eyebrow">{formatDate(post.date)}</p>
          <StatusPill kind={statusKind}>{statusLabel}</StatusPill>
          {post.readingTime && (
            <span className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-600">
              {post.readingTime} min read
            </span>
          )}
        </div>
        <h1 className="font-display text-display-md font-semibold leading-[1.08] tracking-tight text-white sm:text-[44px] lg:text-display-lg">
          {post.title}
        </h1>
        <p className="text-[16px] leading-[1.7] text-zinc-400 md:text-[17px]">
          {post.excerpt}
        </p>
        {post.tags && post.tags.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 pt-1">
            {post.tags.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        )}
      </header>

      {post.mediumUrl && (
        <aside className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-hairline bg-surface-1 px-5 py-4">
          <div>
            <p className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-500">
              Originally on Medium
            </p>
            <p className="mt-1 text-[13px] text-zinc-300">
              Edited and re-published here. Diagrams added inline.
            </p>
          </div>
          <a
            href={post.mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-md border border-hairline bg-surface-2 px-3.5 text-[12.5px] font-medium text-zinc-200 transition-colors hover:border-hairline-strong hover:text-white"
          >
            View on Medium ↗
          </a>
        </aside>
      )}

      {isDraft && (
        <aside className="mt-8 rounded-xl border border-hairline bg-surface-1 p-5 md:p-6">
          <p className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-500">
            Status · Draft
          </p>
          <p className="mt-2 text-[14px] leading-[1.7] text-zinc-300">
            Outline is public; full body still being written. To get a one-line note
            when this ships,{' '}
            <a
              href={`mailto:sagardas.work@gmail.com?subject=Writing%20update%20-%20${encodeURIComponent(
                post.title
              )}`}
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-white hover:decoration-accent"
            >
              email me
            </a>
            .
          </p>
        </aside>
      )}

      <div className="prose-host drop-cap prose mt-12 max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-ink prose-h2:mt-14 prose-h2:text-[26px] md:prose-h2:text-[30px] prose-h3:text-[19px] prose-p:text-[16px] md:prose-p:text-[17px] prose-p:leading-[1.78] prose-p:text-ink-2 prose-a:text-terracotta prose-a:underline prose-a:decoration-terracotta/40 prose-a:underline-offset-[3px] hover:prose-a:text-terracotta-2 hover:prose-a:decoration-terracotta prose-strong:text-ink prose-strong:font-semibold prose-li:text-[15px] md:prose-li:text-[16px] prose-li:text-ink-2 prose-li:leading-[1.75] prose-code:rounded prose-code:border prose-code:border-line prose-code:bg-paper-2 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[13px] prose-code:font-mono prose-code:text-ink prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-md prose-pre:border prose-pre:border-line prose-pre:bg-paper-2 prose-pre:text-ink prose-blockquote:border-l-terracotta prose-blockquote:not-italic prose-blockquote:text-ink prose-hr:border-line">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </div>

      {(prev || next) && (
        <nav className="mt-16 space-y-4 border-t border-hairline pt-8">
          <Eyebrow label="More writing" />
          <div className="grid gap-3 sm:grid-cols-2">
            {prev ? (
              <Link href={`/writing/${prev.slug}`} className="surface group block p-5">
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-zinc-500">
                  ← Previous
                </p>
                <p className="mt-2 text-[14px] font-medium text-zinc-200 transition-colors group-hover:text-accent">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/writing/${next.slug}`}
                className="surface group block p-5 text-right"
              >
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-zinc-500">
                  Next →
                </p>
                <p className="mt-2 text-[14px] font-medium text-zinc-200 transition-colors group-hover:text-accent">
                  {next.title}
                </p>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </nav>
      )}
    </article>
  )
}

function formatDate(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
