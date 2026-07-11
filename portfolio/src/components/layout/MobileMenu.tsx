import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import type { NavLink } from '../../types'

interface MobileMenuProps {
  open: boolean
  links: NavLink[]
  activeId: string
  onClose: () => void
}

export function MobileMenu({ open, links, activeId, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLElement>(null)
  const { content } = useLanguage()

  useEffect(() => {
    if (!open) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) {
        return
      }

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      )

      if (focusable.length === 0) {
        return
      }

      const firstElement = focusable[0]
      const lastElement = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 bg-bg/70 backdrop-blur-sm lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.aside
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={content.common.menu}
            id="mobile-navigation"
            className="ml-auto flex h-full w-full max-w-sm flex-col border-l border-border bg-bg p-5 shadow-2xl outline-none"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase text-text-secondary">
                {content.common.menu}
              </span>
              <button
                type="button"
                className="focus-ring inline-flex size-10 items-center justify-center rounded-lg border border-border text-text-primary"
                aria-label={content.common.closeMenu}
                onClick={onClose}
              >
                <X aria-hidden="true" size={19} />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-2" aria-label="Mobile">
              {links.map((link) => {
                const id = link.href.replace('#', '')
                const active = id === activeId
                const label = content.nav[id] ?? link.label

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={`focus-ring rounded-lg px-4 py-4 text-lg font-semibold transition ${
                      active
                        ? 'bg-accent text-bg'
                        : 'border border-border bg-surface text-text-primary hover:border-accent'
                  }`}
                >
                    {label}
                  </a>
                )
              })}
            </nav>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
