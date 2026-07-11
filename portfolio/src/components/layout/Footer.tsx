import { ArrowUp, ExternalLink } from 'lucide-react'
import { profile } from '../../data/profile'
import { useLanguage } from '../../i18n/LanguageContext'

export function Footer() {
  const year = new Date().getFullYear()
  const { content } = useLanguage()

  return (
    <footer className="mobile-app-footer border-t border-border bg-bg/70 py-10">
      <div className="container-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-text-secondary">
            Copyright {year} {profile.name}. {content.footer}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {profile.social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-1 rounded-lg px-2 py-2 text-sm text-text-secondary transition hover:text-accent"
            >
              <span>{item.label}</span>
              <ExternalLink aria-hidden="true" size={14} />
            </a>
          ))}
          <a
            href="#home"
            className="focus-ring inline-flex size-10 items-center justify-center rounded-lg border border-border text-text-primary transition hover:border-accent hover:text-accent"
            aria-label="Back to top"
          >
            <ArrowUp aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
