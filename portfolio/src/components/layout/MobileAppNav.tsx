import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Award,
  BriefcaseBusiness,
  Home,
  Mail,
  Menu,
  UserRound,
  Wrench,
  X,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { profile } from '../../data/profile'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useLanguage } from '../../i18n/LanguageContext'
import { sectionIds } from '../../lib/constants'

interface NavItem {
  id: string
  icon: LucideIcon
}

const primaryItems: NavItem[] = [
  { id: 'home', icon: Home },
  { id: 'work-showcase', icon: BriefcaseBusiness },
  { id: 'credentials', icon: Award },
  { id: 'about', icon: UserRound },
]

const moreItems: NavItem[] = [
  { id: 'experience', icon: BriefcaseBusiness },
  { id: 'services', icon: Wrench },
  { id: 'contact', icon: Mail },
]

export function MobileAppNav() {
  const [moreOpen, setMoreOpen] = useState(false)
  const location = useLocation()
  const activeSection = useScrollSpy(sectionIds)
  const { content, language } = useLanguage()
  const onHomePage = location.pathname === '/'
  const moreLabel = language === 'ar' ? 'المزيد' : 'More'
  const quickTitle = language === 'ar' ? 'وصول سريع' : 'Quick access'
  const resumeLabel = language === 'ar' ? 'السيرة الذاتية' : 'Resume'

  useEffect(() => {
    if (!moreOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [moreOpen])

  const destination = (id: string) => ({
    pathname: '/',
    hash: `#${id}`,
  })

  const isPrimaryActive = (id: string) => onHomePage && activeSection === id
  const isMoreActive = onHomePage && moreItems.some((item) => item.id === activeSection)

  return (
    <>
      <nav
        className="mobile-app-bottom-nav fixed inset-x-0 bottom-0 z-50 md:hidden"
        aria-label={language === 'ar' ? 'التنقل الرئيسي' : 'Primary navigation'}
      >
        <div className="mobile-app-bottom-nav__inner">
          {primaryItems.map((item) => {
            const Icon = item.icon
            const active = isPrimaryActive(item.id)

            return (
              <Link
                key={item.id}
                to={destination(item.id)}
                className={`mobile-app-bottom-nav__item focus-ring ${active ? 'is-active' : ''}`}
                aria-current={active ? 'page' : undefined}
              >
                <Icon aria-hidden="true" size={20} strokeWidth={active ? 2.5 : 2} />
                <span>{content.nav[item.id]}</span>
              </Link>
            )
          })}

          <button
            type="button"
            className={`mobile-app-bottom-nav__item focus-ring ${isMoreActive || moreOpen ? 'is-active' : ''}`}
            aria-expanded={moreOpen}
            aria-controls="mobile-more-sheet"
            onClick={() => setMoreOpen(true)}
          >
            <Menu aria-hidden="true" size={20} strokeWidth={isMoreActive || moreOpen ? 2.5 : 2} />
            <span>{moreLabel}</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {moreOpen ? (
          <motion.div
            className="mobile-more-backdrop fixed inset-0 z-[70] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setMoreOpen(false)}
          >
            <motion.section
              id="mobile-more-sheet"
              role="dialog"
              aria-modal="true"
              aria-label={moreLabel}
              className="mobile-more-sheet"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 360, damping: 34 }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="mobile-more-sheet__handle" aria-hidden="true" />
              <div className="mobile-more-sheet__header">
                <div>
                  <p>{quickTitle}</p>
                  <h2>{profile.name}</h2>
                </div>
                <button
                  type="button"
                  className="focus-ring mobile-more-sheet__close"
                  aria-label={content.common.closeMenu}
                  onClick={() => setMoreOpen(false)}
                >
                  <X aria-hidden="true" size={19} />
                </button>
              </div>

              <div className="mobile-more-sheet__grid">
                {moreItems.map((item) => {
                  const Icon = item.icon

                  return (
                    <Link
                      key={item.id}
                      to={destination(item.id)}
                      className="focus-ring mobile-more-sheet__link"
                      onClick={() => setMoreOpen(false)}
                    >
                      <Icon aria-hidden="true" size={21} />
                      <span>{content.nav[item.id]}</span>
                    </Link>
                  )
                })}
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mobile-more-sheet__link"
                  onClick={() => setMoreOpen(false)}
                >
                  <Award aria-hidden="true" size={21} />
                  <span>{resumeLabel}</span>
                </a>
              </div>
            </motion.section>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
