import { motion, MotionConfig, useScroll, useSpring } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import CursorFollower from './components/CursorFollower'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-accent"
      />
      <CursorFollower />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <Contact />
    </MotionConfig>
  )
}