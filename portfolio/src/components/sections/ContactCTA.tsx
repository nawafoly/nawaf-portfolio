import { ArrowRight, ExternalLink, Mail, Phone } from 'lucide-react'
import { profile } from '../../data/profile'
import { useLanguage } from '../../i18n/LanguageContext'
import { PrimaryButton } from '../ui/PrimaryButton'
import { Reveal } from '../ui/Reveal'
import { SecondaryButton } from '../ui/SecondaryButton'

export function ContactCTA() {
  const cursorProfile = profile.social.find((item) => item.label === 'Cursor')
  const { content } = useLanguage()

  return (
    <section id="contact" className="mobile-contact-section section-padding">
      <div className="container-shell">
        <Reveal>
          <div className="mobile-contact-card rounded-lg border border-accent/30 bg-[linear-gradient(135deg,rgba(245,197,24,0.18),rgba(20,20,20,0.9)_42%,rgba(121,215,200,0.1))] p-6 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase text-accent">{content.contactCta.eyebrow}</p>
                <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-text-primary sm:text-5xl">
                  {content.contactCta.title}
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-text-secondary">
                  {content.contactCta.description}
                </p>
              </div>

              <div className="mobile-contact-actions flex flex-col gap-3 sm:flex-row lg:justify-end">
                <PrimaryButton href={`mailto:${profile.email}`} icon={Mail}>
                  {content.contactCta.email}
                </PrimaryButton>
                <SecondaryButton href={`tel:${profile.phone}`} icon={Phone}>
                  {content.contactCta.call}
                </SecondaryButton>
                <SecondaryButton href="#work-showcase" icon={ArrowRight}>
                  {content.contactCta.reviewWork}
                </SecondaryButton>
                <SecondaryButton href={cursorProfile?.href ?? '#'} icon={ExternalLink} target="_blank">
                  {content.contactCta.cursor}
                </SecondaryButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
