'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  z: number
  radius: number
  speed: number
}

type NodePoint = {
  x: number
  y: number
  z: number
  radius: number
  driftX: number
  driftY: number
  phase: number
}

type Spark = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  ttl: number
}

type AnimatedBackgroundProps = {
  isDark?: boolean
}

const AnimatedBackground = ({ isDark = true }: AnimatedBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const prefersCoarsePointer = window.matchMedia('(pointer: coarse)')
    let width = window.innerWidth
    let height = window.innerHeight
    let particles: Particle[] = []
    let nodes: NodePoint[] = []
    let sparks: Spark[] = []
    let animationFrameId = 0
    let pointer = { x: 0, y: 0 }
    let tick = 0
    let frameCount = 0
    let lastFrameTime = 0
    let isPaused = false

    const setCanvasSize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const createParticles = () => {
      const baseDensity = Math.floor((width * height) / 22000)
      const density = prefersCoarsePointer.matches ? Math.min(70, Math.max(30, baseDensity)) : Math.min(110, Math.max(40, baseDensity))
      particles = Array.from({ length: density }).map(() => {
        const depth = Math.random() * 0.8 + 0.2
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          z: depth,
          radius: depth * 1.8 + 0.6,
          speed: depth * 0.55 + 0.25
        }
      })
    }

    const createNodes = () => {
      const baseCount = Math.floor((width * height) / 36000)
      const count = prefersCoarsePointer.matches ? Math.min(42, Math.max(16, baseCount)) : Math.min(60, Math.max(20, baseCount))
      nodes = Array.from({ length: count }).map(() => {
        const depth = Math.random() * 0.7 + 0.3
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          z: depth,
          radius: depth * 2.2 + 1.2,
          driftX: (Math.random() - 0.5) * (0.45 + depth * 0.4),
          driftY: (Math.random() - 0.5) * (0.45 + depth * 0.4),
          phase: Math.random() * Math.PI * 2
        }
      })
    }

    const drawBackground = () => {
      const gradient = context.createRadialGradient(
        width * 0.65,
        height * 0.18,
        60,
        width * 0.5,
        height * 0.55,
        Math.max(width, height)
      )
      if (isDark) {
        gradient.addColorStop(0, 'rgba(34, 76, 98, 0.5)')
        gradient.addColorStop(0.45, 'rgba(12, 18, 28, 0.95)')
        gradient.addColorStop(0.75, 'rgba(8, 12, 20, 0.98)')
        gradient.addColorStop(1, 'rgba(5, 8, 14, 1)')
      } else {
        gradient.addColorStop(0, 'rgba(210, 230, 245, 0.9)')
        gradient.addColorStop(0.45, 'rgba(235, 243, 250, 0.95)')
        gradient.addColorStop(0.75, 'rgba(245, 248, 252, 0.98)')
        gradient.addColorStop(1, 'rgba(250, 252, 255, 1)')
      }
      context.fillStyle = gradient
      context.fillRect(0, 0, width, height)
    }

    const drawTechTexture = () => {
      const spacing = 64
      context.save()
      context.globalAlpha = 0.12
      context.strokeStyle = isDark ? 'rgba(90, 220, 170, 0.35)' : 'rgba(60, 140, 200, 0.35)'
      context.lineWidth = 1
      for (let x = 0; x <= width; x += spacing) {
        context.beginPath()
        context.moveTo(x, 0)
        context.lineTo(x, height)
        context.stroke()
      }
      for (let y = 0; y <= height; y += spacing) {
        context.beginPath()
        context.moveTo(0, y)
        context.lineTo(width, y)
        context.stroke()
      }
      context.restore()
    }

    const spawnSparks = () => {
      if (nodes.length === 0) return
      if (Math.random() > (prefersCoarsePointer.matches ? 0.08 : 0.12)) return
      const origin = nodes[Math.floor(Math.random() * nodes.length)]
      const burst = Math.floor(Math.random() * 3) + 3
      for (let i = 0; i < burst; i += 1) {
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 1.3 + 0.7
        const ttl = Math.random() * 30 + 35
        sparks.push({
          x: origin.x,
          y: origin.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          ttl
        })
      }
    }

    const drawSparks = () => {
      sparks = sparks.filter((spark) => spark.life < spark.ttl)
      sparks.forEach((spark) => {
        const progress = 1 - spark.life / spark.ttl
        const alpha = 0.95 * progress
        context.beginPath()
        context.fillStyle = isDark ? `rgba(160, 255, 220, ${alpha})` : `rgba(90, 170, 230, ${alpha})`
        context.shadowColor = isDark ? 'rgba(140, 255, 210, 0.85)' : 'rgba(90, 170, 230, 0.7)'
        context.shadowBlur = 14
        context.arc(spark.x, spark.y, 2, 0, Math.PI * 2)
        context.fill()

        spark.x += spark.vx
        spark.y += spark.vy
        spark.life += 1
      })
    }

    const drawConnections = () => {
      const maxDistance = Math.min(220, Math.max(140, width * 0.18))
      const maxConnections = 6
      context.shadowColor = isDark ? 'rgba(90, 230, 180, 0.65)' : 'rgba(70, 150, 220, 0.55)'
      context.shadowBlur = 22
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i]
        let connectionCount = 0
        for (let j = i + 1; j < nodes.length; j += 1) {
          const other = nodes[j]
          const dx = node.x - other.x
          const dy = node.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < maxDistance) {
            const wave = 0.6 + 0.4 * Math.sin(tick * 0.04 + (i + j) * 0.35)
            const alpha = (1 - distance / maxDistance) * 0.45 * ((node.z + other.z) / 2) * wave
            context.strokeStyle = isDark ? `rgba(120, 235, 195, ${alpha})` : `rgba(80, 155, 220, ${alpha})`
            context.lineWidth = 1.6
            context.beginPath()
            context.moveTo(node.x, node.y)
            context.lineTo(other.x, other.y)
            context.stroke()
            connectionCount += 1
            if (connectionCount >= maxConnections) break
          }
        }
      }
      context.shadowBlur = 0
    }

    const drawNodes = () => {
      nodes.forEach((node) => {
        const parallaxX = pointer.x * (node.z * 12)
        const parallaxY = pointer.y * (node.z * 12)
        const x = node.x + parallaxX
        const y = node.y + parallaxY
        const pulse = 0.6 + Math.sin(tick * 0.03 + node.phase) * 0.4
        const radius = node.radius * (0.9 + pulse * 0.35)

        context.beginPath()
        context.fillStyle = isDark ? `rgba(170, 245, 210, ${0.4 + node.z * 0.45})` : `rgba(90, 150, 220, ${0.3 + node.z * 0.35})`
        context.shadowColor = isDark ? 'rgba(120, 240, 190, 0.75)' : 'rgba(90, 150, 220, 0.55)'
        context.shadowBlur = 22 * node.z
        context.arc(x, y, radius, 0, Math.PI * 2)
        context.fill()
      })
    }

    const render = (time: number) => {
      if (isPaused) {
        animationFrameId = window.requestAnimationFrame(render)
        return
      }
      if (time - lastFrameTime < 32) {
        animationFrameId = window.requestAnimationFrame(render)
        return
      }
      lastFrameTime = time
      tick += 2.1
      frameCount += 1
      drawBackground()
      if (frameCount % 2 === 0) {
        drawTechTexture()
      }

      drawConnections()
      drawNodes()
      spawnSparks()
      drawSparks()

      particles.forEach((particle) => {
        const parallaxX = pointer.x * (particle.z * 8)
        const parallaxY = pointer.y * (particle.z * 8)
        const x = (particle.x + parallaxX + width) % width
        const y = (particle.y + parallaxY + height) % height

        context.beginPath()
        context.fillStyle = isDark ? `rgba(135, 225, 200, ${0.35 + particle.z * 0.4})` : `rgba(80, 140, 210, ${0.3 + particle.z * 0.35})`
        context.shadowColor = isDark ? 'rgba(110, 225, 185, 0.6)' : 'rgba(70, 130, 200, 0.45)'
        context.shadowBlur = 12 * particle.z
        context.arc(x, y, particle.radius, 0, Math.PI * 2)
        context.fill()

        particle.y += particle.speed
        if (particle.y - particle.radius > height) {
          particle.y = -particle.radius
          particle.x = Math.random() * width
        }
      })

      nodes.forEach((node) => {
        node.x += node.driftX
        node.y += node.driftY
        if (node.x < -50) node.x = width + 50
        if (node.x > width + 50) node.x = -50
        if (node.y < -50) node.y = height + 50
        if (node.y > height + 50) node.y = -50
      })

      animationFrameId = window.requestAnimationFrame(render)
    }

    const handlePointerMove = (event: PointerEvent) => {
      const centerX = width / 2
      const centerY = height / 2
      pointer = {
        x: (event.clientX - centerX) / centerX,
        y: (event.clientY - centerY) / centerY
      }
    }

    const handleVisibilityChange = () => {
      isPaused = document.visibilityState === 'hidden'
    }

    const handleResize = () => {
      setCanvasSize()
      createParticles()
      createNodes()
    }

    setCanvasSize()
    createParticles()
    createNodes()

    if (!prefersReducedMotion.matches) {
      if (!prefersCoarsePointer.matches) {
        window.addEventListener('pointermove', handlePointerMove)
      }
      window.addEventListener('resize', handleResize)
      document.addEventListener('visibilitychange', handleVisibilityChange)
      render(0)
    } else {
      drawBackground()
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className={`absolute inset-0 ${isDark ? 'bg-black/65' : 'bg-white/40'}`} />
    </div>
  )
}

export default AnimatedBackground
