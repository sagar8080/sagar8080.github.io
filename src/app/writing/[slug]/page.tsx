import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { mdxComponents } from '@/components/site/MdxComponents'
import ReadingProgress from '@/components/site/ReadingProgress'
import SectionMarkers from '@/components/site/SectionMarkers'
import { getAllPosts, getPostBySlug, getPostSlugs } from '@/lib/writing'
import { getArticleHeadings, remarkSectionIds } from '@/lib/writing-outline'

export async function generateStaticParams() {
  return (await getPostSlugs()).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return { title: `${post.title} · Sagar Das`, description: post.excerpt }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()
  const all = await getAllPosts()
  const index = all.findIndex(p => p.slug === slug)
  const newer = index > 0 ? all[index - 1] : null
  const older = index < all.length - 1 ? all[index + 1] : null
  const series = post.series ? all.filter(p => p.series === post.series).sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0)) : []
  const nextInSeries = series.find(p => p.seriesOrder === (post.seriesOrder ?? 0) + 1)
  const headings = getArticleHeadings(post.content)

  return (
    <article className="theme-page theme-article" id="article-top">
      <ReadingProgress />
      <div className="article-content">
        <Link href="/writing" className="reader-back">← All writing</Link>
        <header className="reader-header">
          <div className="reader-meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time><span>·</span><span>{post.readingTime} min read</span>
            {post.status !== 'published' && <span className="entry-status">{post.status === 'draft' ? 'Draft' : 'Archive'}</span>}
          </div>
          <h1>{post.title}</h1>
          <p className="reader-deck">{post.excerpt}</p>
          <div className="reader-byline"><span className="reader-author-mark" aria-hidden="true">sd.</span><span>Sagar Das<span>Notes from the work</span></span></div>
          {post.tags && <ul className="reader-tags">{post.tags.map(tag => <li key={tag}><Link href={`/writing/?q=${encodeURIComponent(tag)}`}>{tag.replace(/-/g, ' ')}</Link></li>)}</ul>}
          {series.length > 0 && (
            <details className="reader-series">
              <summary><span>{post.series}</span><span>{String(post.seriesOrder).padStart(2, '0')} / {series.length} <span aria-hidden="true">↓</span></span></summary>
              <ol>{series.map(p => <li key={p.slug}><Link href={`/writing/${p.slug}`} aria-current={p.slug === slug ? 'page' : undefined}><span>{String(p.seriesOrder).padStart(2, '0')}</span>{p.title}</Link></li>)}</ol>
            </details>
          )}
        </header>
        <div className={`reader-layout${headings.length < 2 ? ' reader-layout-solo' : ''}`}>
          <SectionMarkers headings={headings} />
          <div className="article-body">
            {post.mediumUrl && <aside className="reader-notice">{post.status === 'archive' ? 'From the archive.' : 'Originally published on Medium.'} <a href={post.mediumUrl} target="_blank" rel="noopener noreferrer">Read the original ↗</a></aside>}
            {post.status === 'draft' && <aside className="reader-notice">A working draft. The ideas and examples may change as the work develops.</aside>}
            <div className="prose prose-host reader-prose max-w-none">
              <MDXRemote source={post.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm, remarkSectionIds] } }} />
            </div>
            <footer className="reader-end">
              <span className="reader-end-mark" aria-hidden="true">✳</span>
              <p>Thanks for reading.</p>
              <a href={`mailto:sagardas.work@gmail.com?subject=${encodeURIComponent(post.title)}`}>Have a different take? Write to me ↗</a>
            </footer>
            {nextInSeries && <Link className="reader-next-series" href={`/writing/${nextInSeries.slug}`}><span>Continue the series · {String(nextInSeries.seriesOrder).padStart(2, '0')}</span><strong>{nextInSeries.title}</strong><span aria-hidden="true">Read next →</span></Link>}
            {((newer && newer.slug !== nextInSeries?.slug) || (older && older.slug !== nextInSeries?.slug)) && <nav className="reader-more" aria-label="More writing">
              {newer && newer.slug !== nextInSeries?.slug ? <Link href={`/writing/${newer.slug}`}><span>← Newer writing</span><strong>{newer.title}</strong></Link> : <span />}
              {older && older.slug !== nextInSeries?.slug && <Link href={`/writing/${older.slug}`}><span>Older writing →</span><strong>{older.title}</strong></Link>}
            </nav>}
          </div>
        </div>
      </div>
    </article>
  )
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
}
