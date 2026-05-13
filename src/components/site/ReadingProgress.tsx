'use client'

import { useEffect } from 'react'

// Drives the .reading-progress fixed bar at the top of writing posts. Updates
// a CSS custom property (--reading-progress, 0..1) on the document root from
// scroll position, capped to the article's range. Single passive scroll
// listener; no rerenders.
export default function ReadingProgress() {
  useEffect(() => {
    let raf = 0

    function update() {
      raf = 0
      const article = document.querySelector('article')
      const root = document.documentElement
      if (!article || !root) return
      const rect = article.getBoundingClientRect()
      const articleTop = rect.top + window.scrollY
      const articleHeight = article.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, window.scrollY - articleTop)
      const progress = articleHeight > 0 ? Math.min(1, scrolled / articleHeight) : 0
      root.style.setProperty('--reading-progress', String(progress))
    }

    function onScroll() {
      if (raf) return
      raf = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) window.cancelAnimationFrame(raf)
      document.documentElement.style.setProperty('--reading-progress', '0')
    }
  }, [])

  return <div className="reading-progress" aria-hidden />
}
