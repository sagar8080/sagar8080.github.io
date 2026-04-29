'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

type TerminalTextProps = {
  text: string
  /** ms per character */
  speed?: number
  className?: string
  onComplete?: () => void
  cursor?: boolean
}

export function TerminalText({
  text,
  speed = 42,
  className = '',
  onComplete,
  cursor = true,
}: TerminalTextProps) {
  const [shown, setShown] = useState(0)
  const doneRef = useRef(false)

  useEffect(() => {
    if (shown >= text.length) {
      if (!doneRef.current) {
        doneRef.current = true
        onComplete?.()
      }
      return
    }
    const t = window.setTimeout(() => setShown((s) => s + 1), speed)
    return () => window.clearTimeout(t)
  }, [shown, text, speed, onComplete])

  return (
    <span className={`font-mono text-phosphor ${className}`}>
      {text.slice(0, shown)}
      {cursor && shown < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
          className="inline-block w-2 h-4 bg-phosphor align-middle ml-0.5"
          aria-hidden
        />
      )}
    </span>
  )
}
