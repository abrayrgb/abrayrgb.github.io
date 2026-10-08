import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import { FiCalendar, FiCode, FiUsers, FiAward } from 'react-icons/fi'

export const profile = {
  name: 'Abdul Raihan',
  firstName: 'Rean',
  role: 'Frontend Developer',
  headline: 'I build modern, fast, and user-friendly web interfaces.',
  tagline:
    'Frontend developer junior yang fokus membuat antarmuka modern, cepat, dan nyaman dipakai di ponsel.',
  about:
    'Saya lulusan [jurusan/bootcamp] yang senang mengubah desain menjadi kode yang rapi. Saya terus belajar lewat proyek nyata dan siap berkontribusi di tim.',
  photo: '/reypicts.png', // contoh: '/foto.png' (taruh file di folder public/). Kosong = tampil inisial.
  email: 'abdulraihan.abray@gmail.com',
  phone: '+62 821 1561 3609',
  github: 'https://github.com/username',
  linkedin: 'https://linkedin.com/in/username',
  instagram: 'https://instagram.com/username',
  cv: '/cv.pdf',
}

export const techs = [FaHtml5, FaCss3Alt, FaJs, SiTypescript, FaReact, FaNodeJs, FaGitAlt]

export const stats = [
  { icon: FiCalendar, value: '1+', label: 'Tahun belajar' },
  { icon: FiCode, value: '6', label: 'Proyek selesai' },
  { icon: FiUsers, value: '1', label: 'Proyek tim' },
  { icon: FiAward, value: '2', label: 'Sertifikat' },
]

export const skills = [
  { name: 'HTML', icon: FaHtml5, level: 90 },
  { name: 'CSS', icon: FaCss3Alt, level: 85 },
  { name: 'JavaScript', icon: FaJs, level: 75 },
  { name: 'React.js', icon: FaReact, level: 70 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 80 },
  { name: 'Git', icon: FaGitAlt, level: 70 },
]

export const projects = [
  {
    title: 'Dashboard Penjualan UMKM',
    description: 'Grafik interaktif, filter tanggal, dan ekspor CSV untuk memantau penjualan harian.',
    tech: ['React', 'Tailwind', 'Recharts'],
    image: '', // contoh: '/proyek1.png'
    demo: 'https://contoh.com',
  },
  {
    title: 'Aplikasi Cuaca Kota',
    description: 'Cari kota, lihat prakiraan 5 hari, dan simpan kota favorit. Ringan dan cepat.',
    tech: ['React', 'REST API'],
    image: '',
    demo: 'https://contoh.com',
  },
  {
    title: 'Katalog Produk',
    description: 'Katalog dengan pencarian, filter kategori, dan halaman detail. Proyek tim 3 orang.',
    tech: ['React', 'React Router'],
    image: '',
    demo: 'https://contoh.com',
  },
]

export const testimonial = {
  quote: 'Cepat belajar, teliti, dan mudah diajak bekerja sama. Hasil kodenya rapi.',
  name: 'Nama Mentor',
  title: 'Mentor Magang, Nama Perusahaan',
}