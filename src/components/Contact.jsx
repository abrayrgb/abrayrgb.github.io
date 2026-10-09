import { FaGithub, FaLinkedinIn, FaInstagram, FaQuoteLeft } from 'react-icons/fa'
import { FiMail, FiPhone, FiArrowUpRight } from 'react-icons/fi'
import { profile, testimonial } from '../data/content'
import Reveal from './Reveal'

const socials = [
  [FaGithub, profile.github, 'GitHub'],
  [FaLinkedinIn, profile.linkedin, 'LinkedIn'],
  [FaInstagram, profile.instagram, 'Instagram'],
]

export default function Contact() {
  return (
    <section id="kontak" className="scroll-mt-16 border-t border-line">
      <Reveal className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <h2 className="font-display text-3xl font-bold">Punya proyek atau lowongan?</h2>
          <p className="mt-3 text-sm leading-relaxed text-mute">
            Saya terbuka untuk posisi frontend developer junior dan senang berdiskusi.
          </p>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1 rounded-md bg-sun px-4 py-2 text-sm font-semibold text-bg transition-colors duration-200 hover:bg-accent hover:text-white">
            Hubungi saya <FiArrowUpRight />
          </a>
        </div>

        <figure className="rounded-xl border border-line bg-card p-6">
          <FaQuoteLeft className="text-2xl text-accent" />
          <blockquote className="mt-3 text-sm leading-relaxed text-mute">{testimonial.quote}</blockquote>
          <figcaption className="mt-4 text-sm">
            <span className="font-semibold">{testimonial.name}</span>
            <span className="block text-xs text-mute">{testimonial.title}</span>
          </figcaption>
        </figure>

        <div>
          <h3 className="text-sm font-semibold text-accent">Ikuti saya</h3>
          <ul className="mt-4 flex gap-4 text-xl">
            {socials.map(([Icon, href, label]) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-mute hover:text-accent">
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 flex items-center gap-2 text-sm text-mute"><FiMail className="text-accent" /> {profile.email}</p>
          <p className="mt-2 flex items-center gap-2 text-sm text-mute"><FiPhone className="text-accent" /> {profile.phone}</p>
        </div>
      </Reveal>

      <p className="border-t border-line py-5 text-center text-xs text-mute">
        © {new Date().getFullYear()} {profile.name}. Hak cipta dilindungi.
      </p>
    </section>
  )
}