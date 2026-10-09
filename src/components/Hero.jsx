import { motion } from 'motion/react'
import { FiArrowUpRight, FiDownload } from 'react-icons/fi'
import { profile, techs } from '../data/content'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 md:grid-cols-2 md:pt-20">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="inline-block rounded bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
          Saya seorang {profile.role}
        </motion.p>
        <motion.h1 variants={item} className="mt-5 font-display text-4xl font-extrabold leading-tight md:text-6xl">
          Hi, i'm <span className="text-sun">{profile.firstName}</span>
          <br />
          {profile.headline}
        </motion.h1>
        <motion.p variants={item} className="mt-5 max-w-md text-mute">{profile.tagline}</motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          <a href="#proyek" className="inline-flex items-center gap-2 rounded-md bg-sun px-6 py-3 font-semibold text-bg hover:bg-accent hover:text-white transition duration-200 hover:scale-105 active:scale-95">
            Lihat karya saya <FiArrowUpRight />
          </a>
          <a href={profile.cv} download className="inline-flex items-center gap-2 rounded-md border border-ink/70 px-6 py-3 font-medium hover:border-sun hover:bg-sun hover:text-bg transition duration-200 hover:scale-105 active:scale-95">
            Unduh CV <FiDownload />
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-10">
          <p className="mb-3 text-xs text-mute">Framework yang saya pakai</p>
          <ul className="flex gap-4 text-2xl text-mute">
            {techs.map((Icon, i) => (
              <li key={i}><Icon /></li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mx-auto h-80 w-full max-w-md md:h-[26rem]"
      >
        <div className="absolute inset-x-8 top-0 aspect-square rounded-full bg-linear-to-b from-accent to-brand/30" />
        {profile.photo ? (
          <img src={profile.photo} alt={profile.name} className="absolute bottom-0 left-1/2 h-[140%] w-auto max-w-none -translate-x-1/2 object-contain" />
        ) : (
          <div className="absolute inset-x-8 top-0 flex aspect-square items-center justify-center font-display text-8xl font-bold text-white/90">
            {profile.firstName.charAt(0)}
          </div>
        )}

        <motion.pre
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          className="absolute -bottom-10 right-12 rounded-lg border border-line bg-card/95 p-4 font-mono text-xs leading-relaxed text-mute shadow-xl"
        >
{`const developer = {
  name: "${profile.firstName}",
  skills: ["HTML", "CSS",
    "JavaScript", "React"],
}`}
        </motion.pre>
      </motion.div>
    </section>
  )
}