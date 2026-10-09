import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Keyboard } from 'swiper/modules'
import { motion } from 'motion/react'
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import 'swiper/css'
import 'swiper/css/pagination'
import { projects } from '../data/content'
import Reveal from './Reveal'

export default function Projects() {
  const [swiper, setSwiper] = useState(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const arrow =
    'flex h-10 w-10 items-center justify-center rounded-full border border-line text-lg transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30'

  return (
    <section id="proyek" className="scroll-mt-16 border-t border-line bg-card/40 py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold">Karya saya</h2>
          <div className="flex gap-2">
            <button aria-label="Proyek sebelumnya" disabled={atStart} onClick={() => swiper?.slidePrev()} className={arrow}>
              <FiChevronLeft />
            </button>
            <button aria-label="Proyek berikutnya" disabled={atEnd} onClick={() => swiper?.slideNext()} className={arrow}>
              <FiChevronRight />
            </button>
          </div>
        </Reveal>

        <Swiper
          modules={[Pagination, Keyboard]}
          onSwiper={(s) => {
            setSwiper(s)
            setAtStart(s.isBeginning)
            setAtEnd(s.isEnd)
          }}
          onSlideChange={(s) => {
            setAtStart(s.isBeginning)
            setAtEnd(s.isEnd)
          }}
          speed={500}
          grabCursor
          keyboard
          pagination={{ el: '.projects-pagination', clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="projects-swiper mt-10 pt-2"
        >
          {projects.map((p, i) => (
            <SwiperSlide key={p.title} className="h-auto!">
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card"
              >
                <div className="relative h-40 bg-linear-to-br from-accent/40 to-brand/10">
                  {p.image && (
                    <img
                      src={p.image}
                      alt={`Tampilan ${p.title}`}
                      loading="lazy"
                      draggable="false"
                      className="h-full w-full object-cover"
                    />
                  )}
                  <span className="absolute left-3 top-3 text-sm font-medium">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{p.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li key={t} className="rounded bg-accent/15 px-2 py-0.5 text-xs text-accent">{t}</li>
                    ))}
                  </ul>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-accent hover:underline"
                  >
                    Lihat proyek <FiArrowUpRight />
                  </a>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="projects-pagination static! mt-8 flex justify-center" />
      </div>
    </section>
  )
}