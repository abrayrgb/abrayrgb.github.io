import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaWordpress, FaPython } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import { FiCalendar, FiCode, FiUsers, FiAward } from 'react-icons/fi'
import { DiMysql } from 'react-icons/di'

export const profile = {
  name: 'Abdul Raihan',
  firstName: 'Rean',
  role: 'Frontend Developer',
  headline: 'I build modern, fast, and user-friendly web interfaces.',
  tagline:
    'Frontend developer junior yang fokus membuat antarmuka modern, cepat, dan nyaman dipakai digunakan.',
  about:
    'Saya lulusan Informatics Telkom University. Saya memiliki minat dalam membangun antarmuka yang responsif, intuitif, dan user-friendly. Saya terus belajar lewat proyek nyata dan siap berkontribusi di tim. Saya selalu berusaha memberikan solusi terbaik dan terus belajar untuk berkembang dalam dunia teknologi yang terus berkembang ini.',
  photo: '/reypicts.png', // contoh: '/foto.png' (taruh file di folder public/). Kosong = tampil inisial.
  email: 'abdulraihan.abray@gmail.com',
  phone: '+62 821 1561 3609',
  github: 'https://github.com/abrayrgb',
  linkedin: 'https://www.linkedin.com/in/abdul-raihan-01bb6a2b8/',
  instagram: 'https://instagram.com/reannnn.x?vrfl=emxreXJjZmppbzJp&utm_source=qr',
  cv: 'CV_AbdulRaihan.pdf', // contoh: '/cv.pdf' (taruh file di folder public/). Kosong = tidak tampil tombol unduh.
}

export const techs = [FaHtml5, FaCss3Alt, FaJs, DiMysql, FaReact, FaNodeJs, FaGitAlt, FaWordpress, FaPython, SiTailwindcss, SiNextdotjs]

export const stats = [
  { icon: FiCalendar, value: '3+', label: 'Tahun belajar' },
  { icon: FiCode, value: '6', label: 'Proyek selesai' },
  { icon: FiUsers, value: '2', label: 'Proyek tim' },
  { icon: FiAward, value: '2', label: 'Sertifikat' },
]

export const skills = [
  { name: 'HTML', icon: FaHtml5, level: 90 },
  { name: 'CSS', icon: FaCss3Alt, level: 85 },
  { name: 'JavaScript', icon: FaJs, level: 75 },
  { name: 'React.js', icon: FaReact, level: 70 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 80 },
  { name: 'Git', icon: FaGitAlt, level: 70 },
  { name: 'WordPress', icon: FaWordpress, color: '#3178C6', level: 90 },
  { name: 'Python', icon: FaPython, color: '#3178C6', level: 85 },
  { name: 'MySQL', icon: DiMysql, color: '#3178C6', level: 80 },

]

export const projects = [
  {
    title: 'Website Panti Al-Muminun',
    description: 'Website informasi panti yang dirancang untuk menyajikan profil, informasi kegiatan, dan informasi terkait panti secara terstruktur. Dikembangkan menggunakan WordPress dengan dukungan PHP dan MySQL untuk memudahkan pengelolaan konten website.',
    tech: ['WordPress', 'PHP', 'MySQL'],
    image: 'almuminun.jpeg', // contoh: '/proyek1.png'
    demo: 'https://contoh.com',
  },
  {
    title: 'Tools Open Layer Combat Machine PT.LEN Industri',
    description: 'Pengembangan antarmuka aplikasi berbasis desktop untuk mendukung penggunaan tools Open Layer Combat Machine. Dibangun menggunakan React, JavaScript, dan Tailwind CSS, dengan integrasi REST API serta Tauri.js untuk menghubungkan antarmuka web dengan lingkungan aplikasi desktop.',
    tech: ['React', 'REST API', 'Tailwind CSS', 'Tauri.js', 'JavaScript'],
    image: 'ol.png',
    demo: 'https://github.com/agus-wesly/fe-openlayer-practice',
  },
  {
    title: 'Website Company Profile PT. Padi Mas Prima',
    description: 'Website profil perusahaan yang dirancang untuk menyajikan informasi tentang perusahaan, produk, dan layanan yang ditawarkan. Dikembangkan menggunakan WordPress dengan dukungan PHP dan MySQL untuk memudahkan pengelolaan konten website.',
    tech: ['WordPress', 'PHP', 'MySQL'],
    image: 'padimas.png',
    demo: 'https://drive.google.com/drive/folders/1sL6kJLXq_Hsz3YKN9VZbCxeNRXgIVc3K?usp=sharing',
  },
  {
  title: 'Website Ecommerce Microfrontend React + Module Federation ',
  description: 'Pengembangan antarmuka website e-commerce menggunakan arsitektur microfrontend untuk memisahkan aplikasi menjadi modul-modul yang lebih terstruktur. Menggunakan React, Vite, dan Module Federation untuk mendukung integrasi antarbagian aplikasi serta mempermudah pengembangan dan pemeliharaan kode',
  tech: ['React', 'Tailwind', 'Module Federation', 'Microfrontend', 'Vite', 'node.js'],
  image: '/ecommerce.png',
  demo: 'https://github.com/INTERN-FE/len-ecommerce',
},
{
  title: 'Nongkies - Website CoffeShop Recommendation',
  description: 'Website rekomendasi coffee shop yang membantu pengguna menemukan referensi tempat untuk menikmati kopi sesuai kebutuhan mereka. Dikembangkan menggunakan WordPress, PHP, dan MySQL, dengan rancangan antarmuka yang berfokus pada kemudahan navigasi dan penyajian informasi coffee shop.',
  tech: ['WordPress', 'PHP', 'MySQL','figma'],
  image: 'nongkies.png',
  demo: 'https://tautan-proyek.com',
},
{
  title: 'Website Bakso Pala',
  description: 'Website untuk memperkenalkan usaha kuliner Bakso Pala melalui penyajian informasi produk, profil usaha, dan informasi yang dibutuhkan pelanggan. Dibangun menggunakan WordPress, PHP, dan MySQL untuk mendukung pengelolaan konten serta memberikan pengalaman menjelajah website yang sederhana dan mudah digunakan.',
  tech: ['WordPress', 'PHP', 'MySQL'],
  image: 'bakso.png',
  demo: 'https://tautan-proyek.com',
},
]

export const testimonial = {
  quote: 'Cepat belajar, teliti, dan mudah diajak bekerja sama. Hasil kodenya rapi.',
  name: 'Saeful Abdulloh Sayuti',
  title: 'Mentor Magang, PT. Len Industri (Persero)',
}