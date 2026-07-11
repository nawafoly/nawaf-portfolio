import { useState } from 'react'
import { Menu } from 'lucide-react'
import { profile } from '../../data/profile'
import { useLanguage } from '../../i18n/LanguageContext'
import { sectionIds } from '../../lib/constants'
import { useHeaderScroll } from '../../hooks/useHeaderScroll'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const isScrolled = useHeaderScroll()
  const activeId = useScrollSpy(sectionIds)
  const { content, toggleLanguage } = useLanguage()

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition ${
          isScrolled ? 'border-b border-border bg-bg/84 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="mobile-app-topbar container-shell md:hidden">
          <a href="#home" className="focus-ring mobile-app-identity">
            <img src={profile.heroImage} alt="" className="mobile-app-identity__avatar" />
            <span className="mobile-app-identity__copy">
              <strong>{profile.name}</strong>
              <small>{content.hero.title}</small>
            </span>
          </a>

          <button
            type="button"
            className="focus-ring mobile-app-language-button"
            onClick={toggleLanguage}
          >
            {content.common.languageToggle}
          </button>
        </div>

        <div className="container-shell hidden h-20 items-center justify-between gap-4 md:flex">
          <a href="#home" className="focus-ring rounded-lg text-lg font-semibold text-text-primary">
            {profile.name}
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {profile.navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const active = id === activeId
              const label = content.nav[id] ?? link.label

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`focus-ring rounded-lg px-3 py-2 text-sm font-medium transition ${
                    active ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <span>{label}</span>
                  <span
                    className={`mt-1 block h-px transition ${active ? 'bg-accent' : 'bg-transparent'}`}
                  />
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="focus-ring inline-flex min-h-10 items-center justify-center rounded-lg border border-border bg-surface/80 px-3 text-sm font-semibold text-text-primary transition hover:border-accent hover:text-accent"
              onClick={toggleLanguage}
            >
              {content.common.languageToggle}
            </button>
            <button
              type="button"
              className="focus-ring inline-flex size-11 items-center justify-center rounded-lg border border-border bg-surface/80 text-text-primary lg:hidden"
              aria-label={content.common.openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(true)}
            >
              <Menu aria-hidden="true" size={20} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        links={profile.navLinks}
        activeId={activeId}
        onClose={() => setMenuOpen(false)}
      />
    </>
  )
}
