export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
  description: string
}

export interface SocialLink {
  label: string
  href: string
}

export interface Profile {
  name: string
  title: string
  tags: string[]
  shortBio: string
  longBio: string
  location: string
  email: string
  phone: string
  resumeUrl: string
  availability: string
  currentFocus: string
  heroImage: string
  stats: Stat[]
  navLinks: NavLink[]
  social: SocialLink[]
}

export interface Project {
  slug: string
  name: string
  category: string
  year: string
  liveUrl: string
  shortDescription: string
  tags: string[]
  featured?: boolean
  coverImage?: string
  media: ProjectMedia
  caseStudy: CaseStudy
}

export type DeviceType = 'desktop' | 'tablet' | 'mobile'

export interface ProjectMedia {
  video: string
  poster: string
  desktop: string
  tablet: string
  mobile: string
}

export interface CaseStudy {
  overview: string
  problem: string
  goals: string[]
  role: string
  stack: string[]
  architecture: string
  features: string[]
  designProcess: string
  challenges: string[]
  solutions: string[]
  gallery: string[]
  results: string[]
  lessons: string[]
  nextProjectSlug?: string
}

export interface ExperienceItem {
  title: string
  company: string
  date: string
  description: string
  technologies: string[]
}

export interface EducationItem {
  degree: string
  school: string
  date: string
  details: string[]
}

export interface Service {
  id: string
  title: string
  summary: string
  deliverables: string[]
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  avatar: string
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  summary: string
  image: string
  featured?: boolean
}
