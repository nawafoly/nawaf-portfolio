import { AnimatePresence } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { PageTransition } from '../components/ui/PageTransition'

export function MainLayout() {
  const location = useLocation()

  return (
    <>
      <a
        href="#main-content"
        className="focus-ring sr-only fixed left-4 top-4 z-[60] rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-bg focus:not-sr-only"
      >
        Skip to main content
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
    </>
  )
}
