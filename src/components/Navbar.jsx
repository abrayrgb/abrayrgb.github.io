import { FiArrowUpRight } from 'react-icons/fi'
import { profile } from '../data/content'

const links = [
  ['Beranda', '#'],
  ['Tentang', '#tentang'],
  ['Keahlian', '#keahlian'],
  ['Proyek', '#proyek'],
  ['Kontak', '#kontak'],
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="font-display text-lg font-bold">
          {'</>'} {profile.name}
        </a>
        <ul className="hidden gap-7 text-sm text-mute md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="hover:text-ink">{label}</a>
            </li>
          ))}
        </ul>
        <a
          href="#kontak"
          className="inline-flex items-center gap-1 rounded-md border border-sun bg-sun px-4 py-2 text-sm font-semibold text-bg transition duration-200 hover:scale-105 hover:border-white hover:bg-transparent hover:text-white active:scale-95"
        >
          Hubungi saya <FiArrowUpRight />
        </a>
      </nav>
    </header>
  )
}