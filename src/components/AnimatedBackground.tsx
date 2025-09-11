'use client'

import { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    let scaleFactor = 1
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Update scale factor on resize based on actual display size
      const minDimension = Math.min(window.innerWidth, window.innerHeight)
      scaleFactor = Math.max(0.5, Math.min(1.2, minDimension / 800))
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // 3D Solar System Simulation
    interface Planet {
      name: string
      distance: number // Distance from sun (AU)
      size: number // Planet radius
      color: string
      orbitSpeed: number // Radians per frame
      angle: number // Current angle in orbit
      tilt: number // Orbital tilt
      rotation: number // Planet rotation
      rotationSpeed: number
      moons?: Array<{
        distance: number
        size: number
        color: string
        angle: number
        orbitSpeed: number
      }>
    }

    const sun = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      size: 40 * scaleFactor,
      color: '#FDB813'
    }

    const planets: Planet[] = [
      {
        name: 'Mercury',
        distance: 120 * scaleFactor,
        size: 5 * scaleFactor,
        color: '#8C7853',
        orbitSpeed: 0.02,
        angle: 0,
        tilt: 0,
        rotation: 0,
        rotationSpeed: 0.05
      },
      {
        name: 'Venus',
        distance: 160 * scaleFactor,
        size: 7 * scaleFactor,
        color: '#FFC649',
        orbitSpeed: 0.015,
        angle: Math.PI / 3,
        tilt: 0,
        rotation: 0,
        rotationSpeed: -0.03
      },
      {
        name: 'Earth',
        distance: 200 * scaleFactor,
        size: 8 * scaleFactor,
        color: '#6B93D6',
        orbitSpeed: 0.012,
        angle: Math.PI / 2,
        tilt: 0,
        rotation: 0,
        rotationSpeed: 0.04,
        moons: [{
          distance: 20 * scaleFactor,
          size: 2 * scaleFactor,
          color: '#C0C0C0',
          angle: 0,
          orbitSpeed: 0.08
        }]
      },
      {
        name: 'Mars',
        distance: 260 * scaleFactor,
        size: 6 * scaleFactor,
        color: '#CD5C5C',
        orbitSpeed: 0.01,
        angle: Math.PI,
        tilt: 0,
        rotation: 0,
        rotationSpeed: 0.035
      },
      {
        name: 'Jupiter',
        distance: 350 * scaleFactor,
        size: 20 * scaleFactor,
        color: '#D8CA9D',
        orbitSpeed: 0.008,
        angle: 4 * Math.PI / 3,
        tilt: 0,
        rotation: 0,
        rotationSpeed: 0.02
      },
      {
        name: 'Saturn',
        distance: 450 * scaleFactor,
        size: 16 * scaleFactor,
        color: '#FAD5A5',
        orbitSpeed: 0.006,
        angle: 5 * Math.PI / 3,
        tilt: 0,
        rotation: 0,
        rotationSpeed: 0.018
      }
    ]

    // Background Stars
    const stars: Array<{x: number, y: number, brightness: number, twinkle: number}> = []
    for (let i = 0; i < 2000; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        brightness: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * Math.PI * 2
      })
    }

    // Asteroid Belt
    const asteroids: Array<{angle: number, distance: number, size: number, speed: number}> = []
    for (let i = 0; i < 150; i++) {
      asteroids.push({
        angle: Math.random() * Math.PI * 2,
        distance: (300 + Math.random() * 100) * scaleFactor, // Between Mars and Jupiter
        size: Math.random() * 2 + 0.5,
        speed: (Math.random() * 0.005 + 0.002)
      })
    }

    // Cosmic Features (replacing galaxies)
    const cosmicFeatures: Array<{
      x: number, y: number, size: number, type: string, rotation: number,
      color: string, secondaryColor?: string, animationSpeed: number, phase: number
    }> = [
      // Top-left: Pulsar
      { x: canvas.width * 0.15, y: canvas.height * 0.15, size: 25 * scaleFactor, type: 'pulsar', rotation: 0, color: '#00FFFF', secondaryColor: '#FFFFFF', animationSpeed: 0.1, phase: 0 },
      // Top-right: Black Hole with Accretion Disk
      { x: canvas.width * 0.85, y: canvas.height * 0.15, size: 35 * scaleFactor, type: 'blackhole', rotation: 0, color: '#FF4500', secondaryColor: '#FFD700', animationSpeed: 0.05, phase: 0 },
      // Bottom-left: Supernova Remnant
      { x: canvas.width * 0.15, y: canvas.height * 0.85, size: 40 * scaleFactor, type: 'supernova', rotation: 0, color: '#FF6B9D', secondaryColor: '#9370DB', animationSpeed: 0.02, phase: 0 },
      // Bottom-right: Planetary Nebula
      { x: canvas.width * 0.85, y: canvas.height * 0.85, size: 30 * scaleFactor, type: 'planetary', rotation: 0, color: '#32CD32', secondaryColor: '#00FFFF', animationSpeed: 0.03, phase: 0 },
      // Left edge: Star Cluster
      { x: canvas.width * 0.05, y: canvas.height * 0.5, size: 20 * scaleFactor, type: 'cluster', rotation: 0, color: '#FFD700', secondaryColor: '#FF6347', animationSpeed: 0.08, phase: 0 },
      // Right edge: Quasar
      { x: canvas.width * 0.95, y: canvas.height * 0.5, size: 28 * scaleFactor, type: 'quasar', rotation: 0, color: '#FF1493', secondaryColor: '#00BFFF', animationSpeed: 0.12, phase: 0 },
      // Top edge: Comet
      { x: canvas.width * 0.5, y: canvas.height * 0.05, size: 35 * scaleFactor, type: 'comet', rotation: 0, color: '#87CEEB', secondaryColor: '#FFFFFF', animationSpeed: 0.06, phase: 0 },
      // Bottom edge: Globular Cluster
      { x: canvas.width * 0.5, y: canvas.height * 0.95, size: 32 * scaleFactor, type: 'globular', rotation: 0, color: '#DDA0DD', secondaryColor: '#FF69B4', animationSpeed: 0.04, phase: 0 }
    ]

    // Nebulae
    const nebulae: Array<{x: number, y: number, width: number, height: number, color: string, opacity: number}> = [
      { x: canvas.width * 0.3, y: canvas.height * 0.2, width: 200 * scaleFactor, height: 150 * scaleFactor, color: '#FF6B9D', opacity: 0.1 },
      { x: canvas.width * 0.7, y: canvas.height * 0.3, width: 180 * scaleFactor, height: 120 * scaleFactor, color: '#4A90E2', opacity: 0.08 },
      { x: canvas.width * 0.2, y: canvas.height * 0.7, width: 220 * scaleFactor, height: 160 * scaleFactor, color: '#32CD32', opacity: 0.12 },
      { x: canvas.width * 0.8, y: canvas.height * 0.8, width: 190 * scaleFactor, height: 140 * scaleFactor, color: '#FFD700', opacity: 0.09 },
      { x: canvas.width * 0.1, y: canvas.height * 0.4, width: 160 * scaleFactor, height: 100 * scaleFactor, color: '#FF4500', opacity: 0.11 },
      { x: canvas.width * 0.9, y: canvas.height * 0.6, width: 170 * scaleFactor, height: 110 * scaleFactor, color: '#9370DB', opacity: 0.1 }
    ]

    // Interactive elements tracking
    let mouseX = 0
    let mouseY = 0
    let hoveredPlanet: string | null = null
    let clickEffects: Array<{x: number, y: number, radius: number, opacity: number}> = []

    // Mouse event handlers for interactivity
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      // Check if hovering over planets
      hoveredPlanet = null
      planets.forEach(planet => {
        const planetX = sun.x + Math.cos(planet.angle) * planet.distance
        const planetY = sun.y + Math.sin(planet.angle) * planet.distance
        const distance = Math.sqrt((mouseX - planetX) ** 2 + (mouseY - planetY) ** 2)
        
        if (distance < planet.size * 2) {
          hoveredPlanet = planet.name
        }
      })
    }

    const handleClick = (e: MouseEvent) => {
      const clickX = e.clientX
      const clickY = e.clientY
      
      // Add click ripple effect
      clickEffects.push({ x: clickX, y: clickY, radius: 0, opacity: 1 })
      
      // Find nearby stars and make them twinkle more
      stars.forEach(star => {
        const distance = Math.sqrt((clickX - star.x) ** 2 + (clickY - star.y) ** 2)
        if (distance < 50) {
          star.brightness = Math.min(1, star.brightness + 0.3)
        }
      })
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('click', handleClick)
    const project3D = (x: number, y: number, z: number, distance: number = 1000) => {
      const scale = distance / (distance + z)
      return {
        x: x * scale,
        y: y * scale,
        scale: scale
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw nebulae (background)
      nebulae.forEach((nebula, index) => {
        const pulse = Math.sin(Date.now() * 0.001 + index) * 0.1 + 0.9 // Subtle pulsing
        const currentOpacity = nebula.opacity * pulse
        
        const gradient = ctx.createRadialGradient(
          nebula.x, nebula.y, 0,
          nebula.x, nebula.y, Math.max(nebula.width, nebula.height) / 2
        )
        gradient.addColorStop(0, nebula.color + Math.floor(currentOpacity * 255).toString(16).padStart(2, '0'))
        gradient.addColorStop(0.5, nebula.color + Math.floor(currentOpacity * 128).toString(16).padStart(2, '0'))
        gradient.addColorStop(1, 'transparent')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.ellipse(nebula.x, nebula.y, nebula.width / 2, nebula.height / 2, 0, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw background stars
      stars.forEach(star => {
        star.twinkle += 0.02
        const twinkleFactor = 0.5 + 0.5 * Math.sin(star.twinkle)
        const brightness = star.brightness * twinkleFactor
        
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, 0.5, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw cosmic features
      cosmicFeatures.forEach(feature => {
        feature.rotation += feature.animationSpeed
        feature.phase += 0.02

        ctx.save()
        ctx.translate(feature.x, feature.y)

        if (feature.type === 'pulsar') {
          // Draw pulsar with beams
          ctx.rotate(feature.rotation)
          const beamIntensity = Math.sin(feature.phase * 5) * 0.5 + 0.5

          // Central pulsar
          ctx.fillStyle = feature.color
          ctx.beginPath()
          ctx.arc(0, 0, feature.size * 0.3, 0, Math.PI * 2)
          ctx.fill()

          // Pulsar beams
          for (let i = 0; i < 4; i++) {
            const angle = (i / 4) * Math.PI * 2
            ctx.strokeStyle = feature.secondaryColor + Math.floor(beamIntensity * 255).toString(16).padStart(2, '0')
            ctx.lineWidth = 2
            ctx.beginPath()
            ctx.moveTo(0, 0)
            ctx.lineTo(Math.cos(angle) * feature.size, Math.sin(angle) * feature.size)
            ctx.stroke()
          }

        } else if (feature.type === 'blackhole') {
          // Draw black hole with accretion disk
          const diskRotation = feature.rotation * 2

          // Accretion disk
          ctx.rotate(diskRotation)
          const diskGradient = ctx.createRadialGradient(0, 0, feature.size * 0.3, 0, 0, feature.size)
          diskGradient.addColorStop(0, 'transparent')
          diskGradient.addColorStop(0.5, feature.color)
          diskGradient.addColorStop(1, feature.secondaryColor || '#FFD700')

          ctx.fillStyle = diskGradient
          ctx.beginPath()
          ctx.ellipse(0, 0, feature.size, feature.size * 0.3, 0, 0, Math.PI * 2)
          ctx.fill()

          // Black hole core
          ctx.fillStyle = '#000000'
          ctx.beginPath()
          ctx.arc(0, 0, feature.size * 0.2, 0, Math.PI * 2)
          ctx.fill()

        } else if (feature.type === 'supernova') {
          // Draw supernova remnant with expanding rings
          const ringCount = 3
          for (let i = 0; i < ringCount; i++) {
            const ringSize = (feature.size * (0.3 + i * 0.3)) * (1 + Math.sin(feature.phase + i) * 0.2)
            const opacity = (1 - i * 0.3) * 0.6

            ctx.strokeStyle = feature.color + Math.floor(opacity * 255).toString(16).padStart(2, '0')
            ctx.lineWidth = 2
            ctx.beginPath()
            ctx.arc(0, 0, ringSize, 0, Math.PI * 2)
            ctx.stroke()
          }

          // Central remnant
          ctx.fillStyle = feature.secondaryColor || '#9370DB'
          ctx.beginPath()
          ctx.arc(0, 0, feature.size * 0.2, 0, Math.PI * 2)
          ctx.fill()

        } else if (feature.type === 'planetary') {
          // Draw planetary nebula with bipolar structure
          ctx.rotate(feature.rotation)

          // Bipolar lobes
          const lobeGradient = ctx.createRadialGradient(0, -feature.size * 0.5, 0, 0, -feature.size * 0.5, feature.size)
          lobeGradient.addColorStop(0, feature.color)
          lobeGradient.addColorStop(1, 'transparent')

          ctx.fillStyle = lobeGradient
          ctx.beginPath()
          ctx.ellipse(0, -feature.size * 0.5, feature.size * 0.3, feature.size * 0.8, 0, 0, Math.PI * 2)
          ctx.fill()

          ctx.beginPath()
          ctx.ellipse(0, feature.size * 0.5, feature.size * 0.3, feature.size * 0.8, 0, 0, Math.PI * 2)
          ctx.fill()

          // Central star
          ctx.fillStyle = feature.secondaryColor || '#00FFFF'
          ctx.beginPath()
          ctx.arc(0, 0, feature.size * 0.1, 0, Math.PI * 2)
          ctx.fill()

        } else if (feature.type === 'cluster') {
          // Draw star cluster
          ctx.rotate(feature.rotation * 0.5)
          for (let i = 0; i < 15; i++) {
            const angle = (i / 15) * Math.PI * 2
            const distance = feature.size * (0.3 + Math.random() * 0.7)
            const starSize = 1 + Math.random() * 2

            ctx.fillStyle = feature.color
            ctx.beginPath()
            ctx.arc(Math.cos(angle) * distance, Math.sin(angle) * distance, starSize, 0, Math.PI * 2)
            ctx.fill()
          }

        } else if (feature.type === 'quasar') {
          // Draw quasar with jets
          const jetLength = feature.size * (1 + Math.sin(feature.phase * 3) * 0.3)

          // Central quasar
          ctx.fillStyle = feature.color
          ctx.beginPath()
          ctx.arc(0, 0, feature.size * 0.2, 0, Math.PI * 2)
          ctx.fill()

          // Jets
          ctx.strokeStyle = feature.secondaryColor || '#00BFFF'
          ctx.lineWidth = 3
          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.lineTo(0, -jetLength)
          ctx.moveTo(0, 0)
          ctx.lineTo(0, jetLength)
          ctx.stroke()

        } else if (feature.type === 'comet') {
          // Draw comet with tail
          ctx.rotate(feature.rotation)

          // Comet head
          ctx.fillStyle = feature.color
          ctx.beginPath()
          ctx.arc(0, 0, feature.size * 0.2, 0, Math.PI * 2)
          ctx.fill()

          // Comet tail
          const tailGradient = ctx.createLinearGradient(0, 0, -feature.size * 2, 0)
          tailGradient.addColorStop(0, feature.secondaryColor || '#FFFFFF')
          tailGradient.addColorStop(1, 'transparent')

          ctx.fillStyle = tailGradient
          ctx.beginPath()
          ctx.ellipse(-feature.size, 0, feature.size * 1.5, feature.size * 0.3, 0, 0, Math.PI * 2)
          ctx.fill()

        } else if (feature.type === 'globular') {
          // Draw globular cluster
          ctx.rotate(feature.rotation * 0.3)
          for (let i = 0; i < 25; i++) {
            const angle = Math.random() * Math.PI * 2
            const distance = Math.random() * feature.size
            const starSize = 0.5 + Math.random() * 1.5

            ctx.fillStyle = feature.color
            ctx.beginPath()
            ctx.arc(Math.cos(angle) * distance, Math.sin(angle) * distance, starSize, 0, Math.PI * 2)
            ctx.fill()
          }
        }

        ctx.restore()
      })

      // Draw sun with glow
      const sunGradient = ctx.createRadialGradient(
        sun.x, sun.y, 0,
        sun.x, sun.y, sun.size * 3
      )
      sunGradient.addColorStop(0, sun.color)
      sunGradient.addColorStop(0.7, 'rgba(253, 184, 19, 0.3)')
      sunGradient.addColorStop(1, 'rgba(253, 184, 19, 0)')

      ctx.fillStyle = sunGradient
      ctx.beginPath()
      ctx.arc(sun.x, sun.y, sun.size * 3, 0, Math.PI * 2)
      ctx.fill()

      // Draw sun core
      ctx.fillStyle = sun.color
      ctx.beginPath()
      ctx.arc(sun.x, sun.y, sun.size, 0, Math.PI * 2)
      ctx.fill()

      // Draw planets
      planets.forEach((planet, index) => {
        // Update planet position
        planet.angle += planet.orbitSpeed

        // Calculate 3D position with slight depth variation
        const depth = Math.sin(planet.angle * 2) * 10
        const x = Math.cos(planet.angle) * planet.distance
        const y = Math.sin(planet.angle) * planet.distance * Math.cos(planet.tilt)

        // Project to 2D
        const projected = project3D(x, y, depth)
        const screenX = sun.x + projected.x
        const screenY = sun.y + projected.y
        const screenSize = planet.size * projected.scale

        // Draw orbital path (subtle)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(sun.x, sun.y, planet.distance, 0, Math.PI * 2)
        ctx.stroke()

        // Draw planet with shadow effect
        const planetGradient = ctx.createRadialGradient(
          screenX - screenSize * 0.3, screenY - screenSize * 0.3, 0,
          screenX, screenY, screenSize
        )
        planetGradient.addColorStop(0, planet.color)
        planetGradient.addColorStop(0.7, planet.color)
        planetGradient.addColorStop(1, 'rgba(0, 0, 0, 0.3)')

        ctx.fillStyle = planetGradient
        ctx.beginPath()
        ctx.arc(screenX, screenY, screenSize, 0, Math.PI * 2)
        ctx.fill()

        // Draw planet highlight
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
        ctx.beginPath()
        ctx.arc(screenX - screenSize * 0.3, screenY - screenSize * 0.3, screenSize * 0.4, 0, Math.PI * 2)
        ctx.fill()

        // Draw moons
        if (planet.moons) {
          planet.moons.forEach(moon => {
            moon.angle += moon.orbitSpeed
            const moonX = screenX + Math.cos(moon.angle) * moon.distance * projected.scale
            const moonY = screenY + Math.sin(moon.angle) * moon.distance * projected.scale
            const moonSize = moon.size * projected.scale

            ctx.fillStyle = moon.color
            ctx.beginPath()
            ctx.arc(moonX, moonY, moonSize, 0, Math.PI * 2)
            ctx.fill()
          })
        }

        // Update planet rotation
        planet.rotation += planet.rotationSpeed
      })

      // Draw asteroid belt
      asteroids.forEach(asteroid => {
        asteroid.angle += asteroid.speed
        
        const x = Math.cos(asteroid.angle) * asteroid.distance
        const y = Math.sin(asteroid.angle) * asteroid.distance
        const screenX = sun.x + x
        const screenY = sun.y + y

        // Only draw asteroids that are visible on screen
        if (screenX > -50 && screenX < canvas.width + 50 && screenY > -50 && screenY < canvas.height + 50) {
          ctx.fillStyle = 'rgba(139, 69, 19, 0.6)' // Brown color for asteroids
          ctx.beginPath()
          ctx.arc(screenX, screenY, asteroid.size, 0, Math.PI * 2)
          ctx.fill()
          
          // Add slight glow
          ctx.fillStyle = 'rgba(160, 82, 45, 0.2)'
          ctx.beginPath()
          ctx.arc(screenX, screenY, asteroid.size * 1.5, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // Draw click effects
      clickEffects.forEach((effect, index) => {
        effect.radius += 2
        effect.opacity -= 0.02
        
        if (effect.opacity <= 0) {
          clickEffects.splice(index, 1)
          return
        }
        
        ctx.strokeStyle = `rgba(255, 255, 255, ${effect.opacity})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(effect.x, effect.y, effect.radius, 0, Math.PI * 2)
        ctx.stroke()
      })

      // Draw interactive hover effects
      if (hoveredPlanet) {
        planets.forEach(planet => {
          if (planet.name === hoveredPlanet) {
            const planetX = sun.x + Math.cos(planet.angle) * planet.distance
            const planetY = sun.y + Math.sin(planet.angle) * planet.distance
            
            // Draw hover ring
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)'
            ctx.lineWidth = 2
            ctx.beginPath()
            ctx.arc(planetX, planetY, planet.size * 1.5, 0, Math.PI * 2)
            ctx.stroke()
            
            // Draw planet name
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
            ctx.font = '14px Arial'
            ctx.textAlign = 'center'
            ctx.fillText(planet.name, planetX, planetY - planet.size * 2)
          }
        })
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ opacity: 0.25 }}
    />
  )
}

export default AnimatedBackground
