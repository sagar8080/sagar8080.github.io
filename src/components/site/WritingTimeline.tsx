'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight, Search, X } from 'lucide-react'
import type { PostFrontmatter } from '@/lib/writing'

type Entry = PostFrontmatter & { slug: string; searchText: string }
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const periodLabel = (date: string) => new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })

export default function WritingTimeline({ posts }: { posts: Entry[] }) {
  const [query, setQuery] = useState('')
  const [zoom, setZoom] = useState<'year' | 'month'>('year')
  const [year, setYear] = useState<string | null>(null)
  const [month, setMonth] = useState<string | null>(null)
  useEffect(() => {
    function readLocation() {
      const params = new URLSearchParams(window.location.search)
      const selectedYear = params.get('year')
      const validYear = posts.some(p => p.date.slice(0, 4) === selectedYear) ? selectedYear : null
      const selectedMonth = params.get('month')
      setQuery(params.get('q') ?? '')
      setYear(validYear)
      setMonth(validYear && selectedMonth && /^(0[1-9]|1[0-2])$/.test(selectedMonth) ? selectedMonth : null)
      setZoom(validYear && params.get('zoom') === 'month' ? 'month' : 'year')
    }
    readLocation()
    window.addEventListener('popstate', readLocation)
    return () => window.removeEventListener('popstate', readLocation)
  }, [posts])
  const newestYear = posts[0]?.date.slice(0, 4) ?? String(new Date().getFullYear())
  const oldestYear = posts[posts.length - 1]?.date.slice(0, 4) ?? newestYear
  const years = Array.from({ length: Number(newestYear) - Number(oldestYear) + 1 }, (_, i) => String(Number(newestYear) - i))
  const matching = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
    return posts.filter(p => {
      const text = [p.title, p.excerpt, p.series, ...(p.tags ?? []), p.searchText].join(' ').toLowerCase()
      return terms.every(term => text.includes(term))
    })
  }, [posts, query])
  const filtered = matching.filter(p => (!year || p.date.startsWith(year)) && (!month || p.date.slice(5, 7) === month))
  const groups = filtered.reduce<Record<string, Entry[]>>((result, post) => {
    const key = post.date.slice(0, 7)
    ;(result[key] ??= []).push(post)
    return result
  }, {})
  const periods = zoom === 'year' ? years.map(value => ({
    value, label: value, count: matching.filter(p => p.date.startsWith(value)).length,
  })) : months.map((label, i) => {
    const value = String(i + 1).padStart(2, '0')
    return { value, label, count: matching.filter(p => p.date.startsWith(`${year}-${value}`)).length }
  }).reverse()
  const maxCount = Math.max(1, ...periods.map(p => p.count))

  function writeLocation(values: Record<string, string | null>) {
    const url = new URL(window.location.href)
    for (const [key, value] of Object.entries(values)) {
      if (value) url.searchParams.set(key, value)
      else url.searchParams.delete(key)
    }
    window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}`)
  }
  function changeQuery(value: string) { setQuery(value); writeLocation({ q: value }) }
  function changePeriod(nextYear: string | null, nextMonth: string | null, nextZoom: 'year' | 'month') {
    setYear(nextYear); setMonth(nextMonth); setZoom(nextZoom)
    writeLocation({ year: nextYear, month: nextMonth, zoom: nextZoom === 'month' ? 'month' : null })
  }
  function reset() { changeQuery(''); changePeriod(null, null, 'year') }

  return (
    <div className="writing-explorer">
      <div className="writing-search">
        <Search size={19} aria-hidden="true" />
        <label className="sr-only" htmlFor="writing-search">Search articles</label>
        <input id="writing-search" type="search" placeholder="Search ideas, topics, or a phrase…" value={query} onChange={e => changeQuery(e.target.value)} />
        {query && <button type="button" aria-label="Clear search" onClick={() => changeQuery('')}><X size={17} /></button>}
      </div>

      <section className="time-navigator" aria-label="Explore writing by date">
        <div className="time-toolbar">
          <div className="time-breadcrumb">
            <button type="button" aria-pressed={!year} onClick={() => changePeriod(null, null, 'year')}>All time</button>
            {year && <><span aria-hidden="true">/</span><button type="button" aria-pressed={!month} onClick={() => changePeriod(year, null, 'month')}>{year}</button></>}
            {month && <><span aria-hidden="true">/</span><span>{months[Number(month) - 1]}</span></>}
          </div>
          <div className="time-zoom" role="group" aria-label="Timeline zoom">
            <button type="button" aria-pressed={zoom === 'year'} onClick={() => changePeriod(year, null, 'year')}>Year</button>
            <button type="button" aria-pressed={zoom === 'month'} onClick={() => changePeriod(year ?? newestYear, month, 'month')}>Month</button>
          </div>
        </div>
        <div className="time-track" tabIndex={0} aria-label={zoom === 'year' ? 'Years, newest first' : `Months in ${year}, newest first`}>
          {periods.map(p => (
            <button key={p.value} type="button" className="time-period" disabled={!p.count}
              aria-label={`${zoom === 'month' ? `${p.label} ${year}` : p.label}: ${p.count} ${p.count === 1 ? 'article' : 'articles'}`}
              aria-pressed={zoom === 'year' ? year === p.value : month === p.value}
              onClick={() => zoom === 'year' ? changePeriod(year === p.value ? null : p.value, null, zoom) : changePeriod(year, month === p.value ? null : p.value, zoom)}>
              <span className="time-count">{p.count || '—'}</span>
              <span className="time-bar-area" aria-hidden="true"><span style={{ height: p.count ? `${Math.max(8, p.count / maxCount * 52)}px` : '2px' }} /></span>
              <span className="time-period-label">{p.label}</span>
            </button>
          ))}
        </div>
        <p className="time-hint">Choose a year to narrow the archive. Switch to Month for a closer look.</p>
      </section>

      <div className="writing-results-heading">
        <p role="status">{filtered.length} {filtered.length === 1 ? 'article' : 'articles'}{query.trim() && <> matching “{query.trim()}”</>}</p>
        <span><ArrowDown size={12} aria-hidden="true" /> Newest first</span>
        {(query || year) && <button type="button" onClick={reset}>Reset filters <X size={12} aria-hidden="true" /></button>}
      </div>
      {filtered.length === 0 ? (
        <div className="writing-empty">
          <h2>No articles in this view.</h2>
          <p>Try another phrase or widen the timeline.</p>
          <button type="button" className="btn btn--ghost btn--md" onClick={reset}>Show all writing</button>
        </div>
      ) : (
        <div className="writing-timeline">
          {Object.entries(groups).map(([period, entries]) => (
            <section className="writing-period" key={period} aria-labelledby={`period-${period}`}>
              <div className="writing-period-date"><h2 id={`period-${period}`}>{periodLabel(`${period}-01`)}</h2><span>{entries.length} {entries.length === 1 ? 'entry' : 'entries'}</span></div>
              <ol className="writing-entries">
                {entries.map(p => (
                  <li key={p.slug}>
                    <Link href={p.status === 'archive' && p.mediumUrl ? p.mediumUrl : `/writing/${p.slug}`} className="writing-entry" prefetch={false}>
                      <div className="writing-entry-meta">
                        <time dateTime={p.date}>{new Date(`${p.date}T12:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' })}</time>
                        <span>·</span><span>{p.readingTime} min read</span>
                        {p.status !== 'published' && <span className="entry-status">{p.status === 'archive' ? 'On Medium ↗' : 'Draft'}</span>}
                        {p.series && <span className="entry-series">Agentic architecture / {String(p.seriesOrder).padStart(2, '0')}</span>}
                      </div>
                      <div className="writing-entry-title"><h3>{p.title}</h3><ArrowUpRight size={20} aria-hidden="true" /></div>
                      <p>{p.excerpt}</p>
                      <div className="writing-entry-tags">{p.tags?.slice(0, 3).map(tag => <span key={tag}>{tag.replace(/-/g, ' ')}</span>)}</div>
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
