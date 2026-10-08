import { motion } from 'motion/react'
import { FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../data/content'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="proyek" className="scroll-mt-16 border-t border-line bg-card/40 py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold">Karya terbaru saya</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12} className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card"
              >
                <div className="relative h-40 bg-linear-to-br from-accent/40 to-brand/10">
                  {p.image && <img src={p.image} alt={`Tampilan ${p.title}`} loading="lazy" className="h-full w-full object-cover" />}
                  <span className="absolute left-3 top-3 text-sm font-medium">0{i + 1}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{p.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li key={t} className="rounded bg-accent/15 px-2 py-0.5 text-xs text-accent">{t}</li>
                    ))}
                  </ul>
                  <a href={p.demo} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-accent hover:underline">
                    Lihat proyek <FiArrowUpRight />
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}