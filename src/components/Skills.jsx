import { motion } from 'motion/react'
import { skills } from '../data/content'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="keahlian" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-16">
      <Reveal>
        <h2 className="text-center font-display text-3xl font-bold">Teknologi yang saya kuasai</h2>
      </Reveal>
      <div className="mt-10 grid gap-x-12 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ name, icon: Icon, level }) => (
          <div key={name}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="flex items-center gap-2"><Icon className="text-accent" /> {name}</span>
              <span className="text-mute">{level}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-line">
              <motion.div
                className="h-full rounded-full bg-sun"
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}