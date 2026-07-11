import type { Profile } from '../types'

export const profile: Profile = {
  name: 'Nawaf Ahmed Al-Olayan',
  title: 'Full-Stack Developer',
  tags: ['React', 'TypeScript', 'Firebase', 'Customer Service', 'Administration'],
  shortBio:
    'IT undergraduate and full-stack developer with experience across web development, customer service, accounting, reception, and data entry.',
  longBio:
    'I combine technical web development skills with a long operational background in hospitality, customer service, accounting, and administration. My work spans React interfaces, Firebase-backed products, responsive websites, and practical service workflows where communication and reliability matter.',
  location: 'Riyadh and Al-Madinah, Saudi Arabia',
  email: 'nawafaaa0@gmail.com',
  phone: '0546535404',
  resumeUrl: '/documents/nawaf-ahmed-al-olayan-cv.pdf',
  availability: 'Open to selected projects',
  currentFocus: 'React, TypeScript, Firebase, and practical business websites',
  heroImage: '/images/profile-avatar.png',
  stats: [
    {
      value: '4',
      label: 'Live Platforms',
      description: 'Madan App, Nooha, Queens Salon, and Maedin Decor.',
    },
    {
      value: '10+',
      label: 'Years of Experience',
      description: 'Customer service, reception, data entry, and accounting.',
    },
    {
      value: '3',
      label: 'Featured Certificates',
      description: 'Microsoft, Interparfums, and Arab Open University.',
    },
    {
      value: '120',
      label: 'AOU Credit Hours',
      description: 'Completed intensive English language course.',
    },
  ],
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work-showcase' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com/nawafoly' },
    { label: 'Cursor', href: 'https://cursor.com/@nawafoly' },
    { label: 'X', href: 'https://x.com/5zzll' },
  ],
}
