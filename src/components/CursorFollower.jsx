import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export default function CursorFollower() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  // Titik inti: cepat. Halo cahaya: lebih lambat sehingga terasa menyusul.
  const coreX = useSpring(x, { stiffness: 500, damping: 30, mass: 0.4 })
  const coreY = useSpring(y, { stiffness: 500, damping: 30, mass: 0.4 })
  const glowX = useSpring(x, { stiffness: 140, damping: 20, mass: 0.6 })
  const glowY = useSpring(y, { stiffness: 140, damping: 20, mass: 0.6 })

  const [enabled, setEnabled] = useState(false)
  const [big, setBig] = useState(false)

  useEffect(() => {
    const hasMouse = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!hasMouse || reduce) return

    setEnabled(true)

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setBig(Boolean(e.target.closest?.('a, button')))
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      {/* Halo cahaya besar yang menyusul */}
      <motion.div
        aria-hidden="true"
        style={{ x: glowX, y: glowY }}
        animate={{ scale: big ? 1.6 : 1 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none fixed left-0 top-0 z-99 -ml-10 -mt-10 h-20 w-20 rounded-full bg-accent/40 blur-xl"
      />

      {/* Lingkaran inti dengan glow berlapis */}
      <motion.div
        aria-hidden="true"
        style={{
          x: coreX,
          y: coreY,
          boxShadow:
            '0 0 12px 2px rgba(124,92,255,0.9), 0 0 32px 8px rgba(124,92,255,0.55), 0 0 64px 16px rgba(79,107,255,0.35)',
        }}
        animate={{ scale: big ? 1.8 : 1 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none fixed left-0 top-0 z-100 -ml-2.5 -mt-2.5 h-5 w-5 rounded-full bg-accent"
      />
    </>
  )
}