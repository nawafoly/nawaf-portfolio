import { ArrowRight, Download, Mail, MapPin, Sparkles } from 'lucide-react'
import { profile } from '../../data/profile'
import { useLanguage } from '../../i18n/LanguageContext'
import { PrimaryButton } from '../ui/PrimaryButton'
import { Reveal } from '../ui/Reveal'
import { SecondaryButton } from '../ui/SecondaryButton'

export function HeroSection() {
  const { content } = useLanguage()

  return (
    <section id="home" className="mobile-app-hero min-h-screen pt-28 sm:pt-32">
      <div className="mobile-hero-grid container-shell grid min-h-[calc(100svh-8rem)] items-center gap-12 pb-16 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal className="mobile-hero-copy order-last lg:order-first">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-sm text-text-secondary">
              <Sparkles aria-hidden="true" size={16} className="text-accent" />
              <span>{content.hero.availability}</span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-text-primary sm:text-6xl lg:text-7xl">
                {profile.name}
                <span className="mt-4 block text-3xl text-text-secondary sm:text-4xl lg:text-5xl">
                {content.hero.title}
              </span>
            </h1>

            <div className="mobile-hero-tags mt-7 flex flex-wrap gap-2">
              {content.hero.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-text-secondary">
              {content.hero.shortBio}
            </p>

            <div className="mobile-hero-actions mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="#work-showcase" icon={ArrowRight}>
                {content.common.viewWork}
              </PrimaryButton>
              <SecondaryButton href={`mailto:${profile.email}`} icon={Mail}>
                {content.common.contact}
              </SecondaryButton>
              <SecondaryButton href={profile.resumeUrl} icon={Download} target="_blank">
                {content.common.downloadCv}
              </SecondaryButton>
            </div>

            <dl className="mobile-hero-meta mt-9 grid gap-3 sm:grid-cols-2">
              <div className="panel p-4">
                <dt className="flex items-center gap-2 text-sm text-text-secondary">
                  <MapPin aria-hidden="true" size={16} className="text-cool" />
                  {content.common.location}
                </dt>
                <dd className="mt-2 font-semibold text-text-primary">{content.hero.location}</dd>
              </div>
              <div className="panel p-4">
                <dt className="text-sm text-text-secondary">{content.common.currentFocus}</dt>
                <dd className="mt-2 font-semibold text-text-primary">{content.hero.currentFocus}</dd>
              </div>
            </dl>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mobile-hero-media order-first lg:order-last">
          <div className="mobile-hero-image-wrap relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-3 rounded-lg border border-accent/20" />
            <div className="mobile-hero-image-card relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-surface shadow-2xl">
              <img
                src={profile.heroImage}
                alt={`${profile.name} portrait`}
                className="h-full w-full object-cover object-[50%_30%]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/70 to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
