import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { MobileAppNav } from '../components/layout/MobileAppNav'
import { PageTransition } from '../components/ui/PageTransition'
import { useLanguage } from '../i18n/LanguageContext'

export function MainLayout() {
  const location = useLocation()
  const { language } = useLanguage()

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1))
      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.hash, location.pathname])

  return (
    <>
      <a
        href="#main-content"
        className="focus-ring sr-only fixed left-4 top-4 z-[80] rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-bg focus:not-sr-only"
      >
        {language === 'ar' ? 'الانتقال إلى المحتوى الرئيسي' : 'Skip to main content'}
      </a>
      <Header />
      <main id="main-content">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <MobileAppNav />
    </>
  )
}
