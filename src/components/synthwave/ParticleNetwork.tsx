'use client'

import { useEffect, useRef } from 'react'

const CYAN = '#22d3ee'
const PINK = '#ec4899'
const NODE_COUNT = 88
const MAX_EDGE_DIST = 148
const REPEL_RADIUS = 128
const CONNECT_RADIUS = 165
const REPEL_FORCE = 0.52

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  dvx: number  // base drift velocity
  dvy: number
  r: number
  color: string
  phase: number
}

export function ParticleNetwork({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let nodes: Node[] = []
    let t = 0

    function resize() {
      const dpr = window.devicePixelRatio || 1
      canvas!.width = canvas!.offsetWidth * dpr
      canvas!.height = canvas!.offsetHeight * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function init() {
      const W = canvas!.offsetWidth
      const H = canvas!.offsetHeight
      nodes = Array.from({ length: NODE_COUNT }, () => {
        const speed = 0.1 + Math.random() * 0.22
        const angle = Math.random() * Math.PI * 2
        const dvx = Math.cos(angle) * speed
        const dvy = Math.sin(angle) * speed
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          vx: dvx,
          vy: dvy,
          dvx,
          dvy,
          r: 1.2 + Math.random() * 2,
          color: Math.random() < 0.18 ? PINK : CYAN,
          phase: Math.random() * Math.PI * 2,
        }
      })
    }

    function frame() {
      const W = canvas!.offsetWidth
      const H = canvas!.offsetHeight
      const m = mouse.current
      t += 0.016

      ctx!.clearRect(0, 0, W, H)

      // Update nodes
      for (const n of nodes) {
        if (m) {
          const dx = n.x - m.x
          const dy = n.y - m.y
          const d = Math.hypot(dx, dy)
          if (d < REPEL_RADIUS && d > 0) {
            const f = (1 - d / REPEL_RADIUS) * REPEL_FORCE
            n.vx += (dx / d) * f
            n.vy += (dy / d) * f
          }
        }

        // Ease back toward base drift velocity
        n.vx += (n.dvx - n.vx) * 0.016
        n.vy += (n.dvy - n.vy) * 0.016

        // Speed cap
        const spd = Math.hypot(n.vx, n.vy)
        if (spd > 2.8) {
          n.vx = (n.vx / spd) * 2.8
          n.vy = (n.vy / spd) * 2.8
        }

        n.x += n.vx
        n.y += n.vy

        // Wrap around edges
        if (n.x < -20) n.x = W + 20
        else if (n.x > W + 20) n.x = -20
        if (n.y < -20) n.y = H + 20
        else if (n.y > H + 20) n.y = -20
      }

      // Draw node–node edges
      ctx!.lineWidth = 0.6
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d > MAX_EDGE_DIST) continue
          const alpha = (1 - d / MAX_EDGE_DIST) * 0.28
          const hot = a.color === PINK || b.color === PINK
          ctx!.strokeStyle = hot
            ? `rgba(236,72,153,${alpha})`
            : `rgba(34,211,238,${alpha})`
          ctx!.beginPath()
          ctx!.moveTo(a.x, a.y)
          ctx!.lineTo(b.x, b.y)
          ctx!.stroke()
        }
      }

      // Draw cursor→node connection lines
      if (m) {
        ctx!.lineWidth = 0.6
        for (const n of nodes) {
          const d = Math.hypot(n.x - m.x, n.y - m.y)
          if (d > CONNECT_RADIUS) continue
          const alpha = (1 - d / CONNECT_RADIUS) * 0.6
          ctx!.strokeStyle = `rgba(236,72,153,${alpha})`
          ctx!.beginPath()
          ctx!.moveTo(m.x, m.y)
          ctx!.lineTo(n.x, n.y)
          ctx!.stroke()
        }
      }

      // Draw nodes with glow + pulse
      ctx!.shadowBlur = 10
      for (const n of nodes) {
        const pulse = 0.82 + Math.sin(t * 1.4 + n.phase) * 0.18
        ctx!.shadowColor = n.color
        ctx!.fillStyle = n.color === CYAN
          ? 'rgba(34,211,238,0.88)'
          : 'rgba(236,72,153,0.88)'
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.r * pulse, 0, Math.PI * 2)
        ctx!.fill()
      }
      ctx!.shadowBlur = 0

      // Cursor dot
      if (m) {
        ctx!.shadowBlur = 18
        ctx!.shadowColor = PINK
        ctx!.fillStyle = 'rgba(236,72,153,0.72)'
        ctx!.beginPath()
        ctx!.arc(m.x, m.y, 3, 0, Math.PI * 2)
        ctx!.fill()
        ctx!.shadowBlur = 0
      }

      animId = requestAnimationFrame(frame)
    }

    // Listen on window so cursor works even when hovering page content above canvas
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouse.current = { x, y }
      } else {
        mouse.current = null
      }
    }
    const onResize = () => { resize(); init() }

    resize()
    init()
    animId = requestAnimationFrame(frame)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} />
}
