'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { greetings } from '@/lib/content'

const LANGUAGES = [
  'en',
  'es',
  'fr',
  'de',
  'it',
  'pt',
  'ru',
  'ja',
  'zh',
  'ko',
  'ar',
  'hi',
  'or',
  'ta',
  'bn',
  'pa',
  'gu',
  'kn',
  'te',
  'sv',
  'no',
  'fi',
  'is',
  'da',
  'pl',
  'hu',
  'cs',
  'hr',
  'bg',
  'el',
]
const HELLOS = greetings.slice(0, 30)

export default function GreetingCycle() {
  const root = useRef<HTMLDivElement>(null)
  const text = useRef<HTMLSpanElement>(null)
  const [index, setIndex] = useState(0)
  const [reduced, setReduced] = useState(false)
  const [visible, setVisible] = useState(true)
  const [tabVisible, setTabVisible] = useState(true)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMotion = () => setReduced(media.matches)
    const onVisibility = () => setTabVisible(!document.hidden)
    onMotion()
    onVisibility()
    media.addEventListener('change', onMotion)
    document.addEventListener('visibilitychange', onVisibility)
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    )
    if (root.current) observer.observe(root.current)
    return () => {
      observer.disconnect()
      media.removeEventListener('change', onMotion)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  const running = !reduced && visible && tabVisible
  useEffect(() => {
    if (!running) return
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % HELLOS.length),
      1000,
    )
    return () => window.clearInterval(timer)
  }, [running])

  useLayoutEffect(() => {
    const word = text.current
    const stage = word?.parentElement
    if (!word || !stage) return
    let disposed = false
    const fit = () => {
      if (disposed) return
      word.style.fontSize = ''
      const available = stage.clientWidth - 24
      const size = parseFloat(getComputedStyle(word).fontSize)
      if (word.scrollWidth > available)
        word.style.fontSize = `${(size * available) / word.scrollWidth}px`
    }
    fit()
    const observer = new ResizeObserver(fit)
    observer.observe(stage)
    void document.fonts.ready.then(fit)
    return () => {
      disposed = true
      observer.disconnect()
    }
  }, [index])

  const greeting = HELLOS[index]
  const word = greeting.native ?? greeting.greeting
  return (
    <div
      className={`greeting-cycle ${running ? 'is-running' : 'is-still'}`}
      ref={root}
    >
      <span className="sr-only">Hello, and welcome to my portfolio.</span>
      <div className="greeting-stage" aria-hidden="true">
        <span
          key={index}
          ref={text}
          className={`greeting-word ${word.length > 10 ? 'greeting-long' : ''}`}
          lang={LANGUAGES[index]}
          dir="auto"
        >
          {word}
        </span>
      </div>
      <div className="greeting-caption" aria-hidden="true">
        {greeting.language}
      </div>
    </div>
  )
}
