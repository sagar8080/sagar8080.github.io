'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import type { TouchEvent } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, RotateCcw, Trophy, Target, Zap } from 'lucide-react'

interface Enemy {
  id: number
  x: number
  y: number
  type: 'data' | 'bug' | 'virus'
  health: number
  speed: number
}

interface Bullet {
  id: number
  x: number
  y: number
  speed: number
}

interface PowerUp {
  id: number
  x: number
  y: number
  type: 'multishot' | 'shield' | 'rapidfire'
  speed: number
}

const DataDefenderGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [playerX, setPlayerX] = useState(250)
  const [keysPressed, setKeysPressed] = useState<Set<string>>(new Set())
  const [mouseX, setMouseX] = useState<number | null>(null)
  const [enemies, setEnemies] = useState<Enemy[]>([])
  const [bullets, setBullets] = useState<Bullet[]>([])
  const [powerUps, setPowerUps] = useState<PowerUp[]>([])
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [gameRunning, setGameRunning] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [lives, setLives] = useState(3)
  const [level, setLevel] = useState(1)
  const [shield, setShield] = useState(false)
  const [multishot, setMultishot] = useState(false)
  const [rapidfire, setRapidfire] = useState(false)
  const [lastShot, setLastShot] = useState(0)

  const canvasWidth = 600
  const canvasHeight = 400
  const playerWidth = 40
  const playerHeight = 30
  const enemyWidth = 30
  const enemyHeight = 25
  const bulletWidth = 4
  const bulletHeight = 8

  // Create enemy
  const createEnemy = useCallback((): Enemy => {
    const types: ('data' | 'bug' | 'virus')[] = ['data', 'data', 'bug', 'virus']
    const type = types[Math.floor(Math.random() * types.length)]

    return {
      id: Date.now() + Math.random(),
      x: Math.random() * (canvasWidth - enemyWidth),
      y: -enemyHeight,
      type,
      health: type === 'virus' ? 3 : type === 'bug' ? 2 : 1,
      speed: 1.2 + Math.random() * 1.2 + level * 0.25,
    }
  }, [level])

  // Create power-up
  const createPowerUp = useCallback((): PowerUp => {
    const types: ('multishot' | 'shield' | 'rapidfire')[] = ['multishot', 'shield', 'rapidfire']
    const type = types[Math.floor(Math.random() * types.length)]

    return {
      id: Date.now() + Math.random(),
      x: Math.random() * (canvasWidth - 20) + 10,
      y: -20,
      type,
      speed: 1.5
    }
  }, [])

  // Game loop
  useEffect(() => {
    if (!gameRunning) return

    const gameInterval = setInterval(() => {
      // Move enemies down
      setEnemies(prev => {
        const moved = prev.map(enemy => ({
          ...enemy,
          y: enemy.y + enemy.speed
        }))

        // Remove enemies that are off screen
        const filtered = moved.filter(enemy => {
          if (enemy.y > canvasHeight) {
            // Enemy reached bottom - lose life
            setLives(l => {
              const newLives = l - 1
              if (newLives <= 0) {
                setGameOver(true)
                setGameRunning(false)
              }
              return newLives
            })
            return false
          }
          return true
        })

        // Add new enemies occasionally
        if (Math.random() < 0.02 + level * 0.006) { // Adjusted for smaller canvas
          filtered.push(createEnemy())
        }

        return filtered
      })

      // Move bullets up
      setBullets(prev => {
        const moved = prev.map(bullet => ({
          ...bullet,
          y: bullet.y - bullet.speed
        }))

        // Remove bullets that are off screen
        return moved.filter(bullet => bullet.y > -bulletHeight)
      })

      // Move power-ups down
      setPowerUps(prev => {
        const moved = prev.map(powerUp => ({
          ...powerUp,
          y: powerUp.y + powerUp.speed
        }))

        // Remove power-ups that are off screen
        return moved.filter(powerUp => powerUp.y < canvasHeight + 20)
      })

      // Check bullet-enemy collisions
      setBullets(prevBullets => {
        return prevBullets.filter(bullet => {
          let bulletHit = false

          setEnemies(prevEnemies => {
            return prevEnemies.filter(enemy => {
              if (
                bullet.x < enemy.x + enemyWidth &&
                bullet.x + bulletWidth > enemy.x &&
                bullet.y < enemy.y + enemyHeight &&
                bullet.y + bulletHeight > enemy.y
              ) {
                // Hit!
                enemy.health -= 1
                bulletHit = true

                if (enemy.health <= 0) {
                  // Enemy destroyed
                  const points = enemy.type === 'virus' ? 30 : enemy.type === 'bug' ? 20 : 10
                  setScore(s => {
                    const newScore = s + points
                    if (newScore > highScore) {
                      setHighScore(newScore)
                      localStorage.setItem('dataDefenderHighScore', newScore.toString())
                    }
                    return newScore
                  })

                  // Chance to spawn power-up
                  if (Math.random() < 0.15) {
                    setPowerUps(p => [...p, createPowerUp()])
                  }
                } else {
                  // Enemy damaged but not destroyed
                  return true
                }
              } else {
                return true
              }
              return false
            })
          })

          return !bulletHit
        })
      })

      // Check player-powerup collisions
      setPowerUps(prev => {
        return prev.filter(powerUp => {
          if (
            playerX < powerUp.x + 20 &&
            playerX + playerWidth > powerUp.x &&
            canvasHeight - playerHeight < powerUp.y + 20 &&
            canvasHeight - playerHeight + playerHeight > powerUp.y
          ) {
            // Collected power-up
            switch (powerUp.type) {
              case 'multishot':
                setMultishot(true)
                setTimeout(() => setMultishot(false), 8000)
                break
              case 'shield':
                setShield(true)
                setTimeout(() => setShield(false), 10000)
                break
              case 'rapidfire':
                setRapidfire(true)
                setTimeout(() => setRapidfire(false), 6000)
                break
            }
            return false
          }
          return true
        })
      })

      // Check player-enemy collisions
      setEnemies(prev => {
        return prev.filter(enemy => {
          if (
            playerX < enemy.x + enemyWidth &&
            playerX + playerWidth > enemy.x &&
            canvasHeight - playerHeight < enemy.y + enemyHeight &&
            canvasHeight - playerHeight + playerHeight > enemy.y
          ) {
            if (shield) {
              // Shield protects
              setShield(false)
              return false
            } else {
              // Player hit
              setLives(l => {
                const newLives = l - 1
                if (newLives <= 0) {
                  setGameOver(true)
                  setGameRunning(false)
                }
                return newLives
              })
              return false
            }
          }
          return true
        })
      })

    }, 50)

    return () => clearInterval(gameInterval)
  }, [gameRunning, level, playerX, highScore, createEnemy, createPowerUp, shield])

  // Smooth movement system
  useEffect(() => {
    if (!gameRunning) return

    const movementInterval = setInterval(() => {
      const moveSpeed = 12 // Increased movement speed

      setPlayerX(prevX => {
        let newX = prevX
        let velocity = 0

        // Keyboard movement
        if (keysPressed.has('ArrowLeft')) {
          velocity -= moveSpeed
        }
        if (keysPressed.has('ArrowRight')) {
          velocity += moveSpeed
        }

        // Mouse/touch movement (smooth following)
        if (mouseX !== null) {
          const canvas = canvasRef.current
          if (canvas) {
            const rect = canvas.getBoundingClientRect()
            const canvasMouseX = mouseX - rect.left
            const centerX = prevX + playerWidth / 2
            const distance = canvasMouseX - centerX

            if (Math.abs(distance) > 5) {
              velocity = Math.sign(distance) * Math.min(moveSpeed, Math.abs(distance) * 0.1)
            }
          }
        }

        newX += velocity

        // Keep player within bounds
        return Math.max(0, Math.min(canvasWidth - playerWidth, newX))
      })
    }, 16) // ~60 FPS for smooth movement

    return () => clearInterval(movementInterval)
  }, [gameRunning, keysPressed, mouseX])

  // Handle keyboard input (continuous)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!gameRunning) return

      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault()
        setKeysPressed(prev => new Set(prev).add(e.key))
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault()
        setKeysPressed(prev => {
          const newSet = new Set(prev)
          newSet.delete(e.key)
          return newSet
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [gameRunning])

  // Handle mouse/touch movement
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!gameRunning) return
    setMouseX(e.clientX)
  }, [gameRunning])

  const handleMouseLeave = useCallback(() => {
    setMouseX(null)
  }, [])

  const handleTouchMove = useCallback((e: TouchEvent<HTMLCanvasElement>) => {
    if (!gameRunning) return
    const touch = e.touches[0]
    if (!touch) return
    setMouseX(touch.clientX)
  }, [gameRunning])

  // Handle shooting (separate from movement)
  useEffect(() => {
    if (!gameRunning) return

    const handleShoot = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        e.preventDefault()
        const now = Date.now()
        const fireRate = rapidfire ? 120 : 250

        if (now - lastShot > fireRate) {
          if (multishot) {
            // Triple shot
            setBullets(prev => [
              ...prev,
              { id: Date.now(), x: playerX + playerWidth / 2 - bulletWidth / 2, y: canvasHeight - playerHeight, speed: 12 },
              { id: Date.now() + 1, x: playerX + playerWidth / 2 - bulletWidth / 2 - 10, y: canvasHeight - playerHeight, speed: 12 },
              { id: Date.now() + 2, x: playerX + playerWidth / 2 - bulletWidth / 2 + 10, y: canvasHeight - playerHeight, speed: 12 }
            ])
          } else {
            // Single shot
            setBullets(prev => [
              ...prev,
              { id: Date.now(), x: playerX + playerWidth / 2 - bulletWidth / 2, y: canvasHeight - playerHeight, speed: 12 }
            ])
          }
          setLastShot(now)
        }
      }
    }

    window.addEventListener('keydown', handleShoot)
    return () => window.removeEventListener('keydown', handleShoot)
  }, [gameRunning, playerX, lastShot, multishot, rapidfire])

  // Draw game
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.fillStyle = 'rgba(0, 0, 0, 0.9)'
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)

    // Draw stars background
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
    for (let i = 0; i < 50; i++) {
      const x = (i * 37) % canvasWidth
      const y = (i * 23) % canvasHeight
      ctx.fillRect(x, y, 1, 1)
    }

    // Draw power-ups
    powerUps.forEach(powerUp => {
      let color: string
      switch (powerUp.type) {
        case 'multishot':
          color = '#ff6b6b'
          break
        case 'shield':
          color = '#4ecdc4'
          break
        case 'rapidfire':
          color = '#ffd93d'
          break
      }

      ctx.fillStyle = color
      ctx.fillRect(powerUp.x, powerUp.y, 20, 20)

      // Draw icon
      ctx.fillStyle = 'white'
      ctx.font = '12px Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      let icon = '⚡'
      if (powerUp.type === 'shield') icon = '🛡️'
      else if (powerUp.type === 'rapidfire') icon = '🔥'
      ctx.fillText(icon, powerUp.x + 10, powerUp.y + 10)
    })

    // Draw enemies
    enemies.forEach(enemy => {
      let color: string
      switch (enemy.type) {
        case 'data':
          color = '#10b981'
          break
        case 'bug':
          color = '#f59e0b'
          break
        case 'virus':
          color = '#ef4444'
          break
      }

      ctx.fillStyle = color
      ctx.fillRect(enemy.x, enemy.y, enemyWidth, enemyHeight)

      // Draw enemy icon
      ctx.fillStyle = 'white'
      ctx.font = '16px Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      let icon = '📄'
      if (enemy.type === 'bug') icon = '🐛'
      else if (enemy.type === 'virus') icon = '🦠'
      ctx.fillText(icon, enemy.x + enemyWidth / 2, enemy.y + enemyHeight / 2)

      // Health indicator for multi-health enemies
      if (enemy.health > 1) {
        ctx.fillStyle = 'white'
        ctx.font = '10px Arial'
        ctx.fillText(enemy.health.toString(), enemy.x + enemyWidth - 8, enemy.y + 8)
      }
    })

    // Draw bullets
    ctx.fillStyle = '#60a5fa'
    bullets.forEach(bullet => {
      ctx.fillRect(bullet.x, bullet.y, bulletWidth, bulletHeight)
    })

    // Draw player
    if (shield) {
      // Shield effect
      ctx.strokeStyle = '#4ecdc4'
      ctx.lineWidth = 3
      ctx.strokeRect(playerX - 5, canvasHeight - playerHeight - 5, playerWidth + 10, playerHeight + 10)
    }

    ctx.fillStyle = '#3b82f6'
    ctx.fillRect(playerX, canvasHeight - playerHeight, playerWidth, playerHeight)

    // Draw player ship design
    ctx.fillStyle = 'white'
    ctx.fillRect(playerX + playerWidth / 2 - 2, canvasHeight - playerHeight, 4, playerHeight)
    ctx.fillRect(playerX + 8, canvasHeight - playerHeight + 8, playerWidth - 16, 4)

  }, [enemies, bullets, powerUps, playerX, shield])

  // Load high score
  useEffect(() => {
    const savedHighScore = localStorage.getItem('dataDefenderHighScore')
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore))
    }
  }, [])

  const startGame = () => {
    if (gameOver) {
      setEnemies([])
      setBullets([])
      setPowerUps([])
      setScore(0)
      setLives(3)
      setLevel(1)
      setShield(false)
      setMultishot(false)
      setRapidfire(false)
      setGameOver(false)
    }
    setGameRunning(true)
  }

  const pauseGame = () => {
    setGameRunning(false)
  }

  const resetGame = () => {
    setEnemies([])
    setBullets([])
    setPowerUps([])
    setScore(0)
    setLives(3)
    setLevel(1)
    setShield(false)
    setMultishot(false)
    setRapidfire(false)
    setGameRunning(false)
    setGameOver(false)
  }

  // Level progression
  useEffect(() => {
    if (score > 0 && score % 200 === 0) {
      setLevel(l => l + 1)
    }
  }, [score])

  return (
    <motion.div
      className="flex flex-col items-center gap-6 w-full"
    >
      {/* Game Canvas */}
      <div className="relative w-full max-w-[600px]">
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          className="w-full h-auto rounded-xl border border-slate-300/60 dark:border-slate-600/50 shadow-sm bg-slate-950 cursor-crosshair ring-1 ring-slate-900/5 dark:ring-white/5"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleTouchMove}
        />

        {/* Game Over Overlay */}
        {gameOver && (
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center"
          >
            <Trophy className="w-12 h-12 text-yellow-400 mb-2" />
            <h3 className="text-xl font-bold text-white mb-2">Game Over!</h3>
            <p className="text-gray-300 mb-4">Final Score: {score}</p>
            <button
              onClick={resetGame}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Play Again
            </button>
          </motion.div>
        )}

        {/* Pause Overlay */}
        {!gameRunning && !gameOver && (
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center"
          >
            <div className="text-center">
              <Pause className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white">Use arrow keys to move, SPACEBAR to shoot!</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* HUD — single row, no extra panels */}
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 w-full max-w-[600px] text-sm text-slate-600 dark:text-slate-300">
        <span className="inline-flex items-center gap-1.5">
          <Target className="w-4 h-4 text-blue-500 shrink-0" />
          Score <span className="font-semibold text-slate-900 dark:text-slate-100 tabular-nums">{score}</span>
        </span>
        <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">·</span>
        <span className="inline-flex items-center gap-1.5">
          <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
          High <span className="font-semibold text-slate-900 dark:text-slate-100 tabular-nums">{highScore}</span>
        </span>
        <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">·</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="text-base leading-none" aria-hidden>❤️</span>
          Lives <span className="font-semibold text-rose-600 dark:text-rose-400 tabular-nums">{lives}</span>
        </span>
        <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">·</span>
        <span className="inline-flex items-center gap-1.5">
          <Zap className="w-4 h-4 text-violet-500 shrink-0" />
          Level <span className="font-semibold text-slate-900 dark:text-slate-100 tabular-nums">{level}</span>
        </span>
        {(multishot || shield || rapidfire) && (
          <>
            <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">·</span>
            <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
              {multishot && <span>🔫 Multi-shot</span>}
              {shield && <span>🛡️ Shield</span>}
              {rapidfire && <span>🔥 Rapid</span>}
            </span>
          </>
        )}
      </div>

      {/* Game Controls */}
      <div className="flex space-x-3">
        {!gameRunning && !gameOver ? (
          <motion.button
            onClick={startGame}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-4 h-4" />
            <span>{gameOver ? 'Restart' : 'Start'}</span>
          </motion.button>
        ) : gameRunning ? (
          <motion.button
            onClick={pauseGame}
            className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Pause className="w-4 h-4" />
            <span>Pause</span>
          </motion.button>
        ) : null}

        <motion.button
          onClick={resetGame}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset</span>
        </motion.button>
      </div>

      {/* Scoring legend — matches page typography */}
      <p className="text-center text-xs text-slate-500 dark:text-slate-400 max-w-md px-2 leading-relaxed">
        <span className="text-emerald-600 dark:text-emerald-400">📄 Data 10</span>
        <span className="mx-1.5 text-slate-300 dark:text-slate-600">·</span>
        <span className="text-amber-600 dark:text-amber-400">🐛 Bug 20</span>
        <span className="mx-1.5 text-slate-300 dark:text-slate-600">·</span>
        <span className="text-rose-600 dark:text-rose-400">🦠 Virus 30</span>
      </p>
    </motion.div>
  )
}

export default DataDefenderGame
