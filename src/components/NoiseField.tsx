"use client"

import { useEffect, useRef } from "react"

const CELL_PX = 10
const TICK_MS = 150
const FADE_RATE = 0.82
const NOISE_CHANCE = 0.002
const SEED_INTERVAL = 2500
const SEED_DENSITY = 0.08
const MOUSE_RADIUS = 3

// Site palette
const DEAD_R = 245, DEAD_G = 255, DEAD_B = 242
const LIVE_R = 220, LIVE_G = 242, LIVE_B = 232

export function NoiseField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1, y: -1 })

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const cols = Math.ceil(window.innerWidth / CELL_PX)
    const rows = Math.ceil(window.innerHeight / CELL_PX)
    canvas.width = cols
    canvas.height = rows

    let grid = new Uint8Array(cols * rows)
    let next = new Uint8Array(cols * rows)
    const glow = new Float32Array(cols * rows)

    // Sparse random init
    for (let i = 0; i < grid.length; i++) {
      grid[i] = Math.random() < 0.12 ? 1 : 0
      glow[i] = grid[i] ? 1.0 : 0.0
    }

    function idx(x: number, y: number) {
      return ((y + rows) % rows) * cols + ((x + cols) % cols)
    }

    function step() {
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          let n = 0
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              if (dx === 0 && dy === 0) continue
              n += grid[idx(x + dx, y + dy)]
            }
          }
          const i = y * cols + x
          next[i] = (grid[i] && (n === 2 || n === 3)) || (!grid[i] && n === 3) ? 1 : 0
        }
      }

      const tmp = grid
      grid = next
      next = tmp

      // Phosphor persistence + CRT noise flicker
      for (let i = 0; i < grid.length; i++) {
        if (grid[i]) {
          glow[i] = 1.0
        } else {
          glow[i] *= FADE_RATE
          if (glow[i] < 0.01) glow[i] = 0
        }
        if (Math.random() < NOISE_CHANCE) {
          glow[i] = Math.min(glow[i] + 0.3, 1.0)
        }
      }
    }

    function seedNearMouse() {
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      if (mx < 0) return

      const gx = Math.floor((mx / window.innerWidth) * cols)
      const gy = Math.floor((my / window.innerHeight) * rows)

      for (let dy = -MOUSE_RADIUS; dy <= MOUSE_RADIUS; dy++) {
        for (let dx = -MOUSE_RADIUS; dx <= MOUSE_RADIUS; dx++) {
          if (dx * dx + dy * dy > MOUSE_RADIUS * MOUSE_RADIUS) continue
          if (Math.random() < 0.15) {
            const i = idx(gx + dx, gy + dy)
            grid[i] = 1
            glow[i] = 1.0
          }
        }
      }
    }

    let lastSeed = 0
    function maybeReseed(time: number) {
      if (time - lastSeed < SEED_INTERVAL) return
      lastSeed = time
      const sx = Math.floor(Math.random() * (cols - 20))
      const sy = Math.floor(Math.random() * (rows - 15))
      for (let y = sy; y < sy + 15; y++) {
        for (let x = sx; x < sx + 20; x++) {
          if (Math.random() < SEED_DENSITY) {
            const i = idx(x, y)
            grid[i] = 1
            glow[i] = 1.0
          }
        }
      }
    }

    const imageData = ctx.createImageData(cols, rows)

    function draw() {
      const data = imageData.data
      for (let i = 0; i < glow.length; i++) {
        const g = glow[i]
        const px = i * 4
        data[px] = DEAD_R + (LIVE_R - DEAD_R) * g
        data[px + 1] = DEAD_G + (LIVE_G - DEAD_G) * g
        data[px + 2] = DEAD_B + (LIVE_B - DEAD_B) * g
        data[px + 3] = 255
      }
      ctx!.putImageData(imageData, 0, 0)
    }

    let lastTick = 0
    let raf = 0
    let hidden = false

    function loop(time: number) {
      if (hidden) return
      if (time - lastTick >= TICK_MS) {
        seedNearMouse()
        maybeReseed(time)
        step()
        draw()
        lastTick = time
      }
      raf = requestAnimationFrame(loop)
    }

    draw()
    raf = requestAnimationFrame(loop)

    const onMouse = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const onVis = () => {
      hidden = document.hidden
      if (!hidden) raf = requestAnimationFrame(loop)
    }

    window.addEventListener("mousemove", onMouse, { passive: true })
    document.addEventListener("visibilitychange", onVis)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMouse)
      document.removeEventListener("visibilitychange", onVis)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ imageRendering: "pixelated" }}
      />
      {/* CRT scanlines */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.015) 3px, rgba(0,0,0,0.015) 4px)",
        }}
      />
      {/* CRT vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.04) 100%)",
        }}
      />
    </div>
  )
}
