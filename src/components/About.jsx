import { profile, stats } from '../data/content'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="tentang" className="scroll-mt-16 border-y border-line bg-card/40 py-16">
      <Reveal className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold">Saya senang membuat solusi digital</h2>
          <p className="mt-4 max-w-md leading-relaxed text-mute">{profile.about}</p>
        </div>
        <dl className="grid grid-cols-2 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 text-xl text-accent">
                <Icon />
              </span>
              <div>
                <dd className="font-display text-2xl font-bold">{value}</dd>
                <dt className="text-sm text-mute">{label}</dt>
              </div>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}