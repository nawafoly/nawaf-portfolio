import { ArrowUpRight, UsersRound } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const teamSites = [
  {
    name: 'Red Sea Global',
    url: 'https://www.redseaglobal.com/ar/',
    domain: 'redseaglobal.com',
  },
  {
    name: 'Visit Red Sea',
    url: 'https://www.visitredsea.com/ar',
    domain: 'visitredsea.com',
  },
  {
    name: 'Masar Destination',
    url: 'https://www.masardestination.com.sa/en',
    domain: 'masardestination.com.sa',
  },
  {
    name: 'Midwam News',
    url: 'https://midwam.com/en/news',
    domain: 'midwam.com',
  },
]

const copy = {
  ar: {
    eyebrow: 'مساهمات ضمن فريق',
    title: 'مواقع ساهمت في العمل عليها مع فريق.',
    description:
      'هذه ليست مشاريع منفردة مثل المنصات الأربع المعروضة بالأعلى؛ هي مواقع شاركت في العمل عليها ضمن فريق، لذلك تظهر هنا بوضوح كمساهمات جماعية.',
    badge: 'عمل ضمن فريق',
    open: 'فتح الموقع',
  },
  en: {
    eyebrow: 'Team Contributions',
    title: 'Websites I contributed to with a team.',
    description:
      'These are not solo builds like the four featured platforms above. They are clearly marked here as team-based contributions.',
    badge: 'Team work',
    open: 'Open site',
  },
}

export function TeamContributionsSection() {
  const { language } = useLanguage()
  const text = copy[language]

  return (
    <section className="mobile-team-section section-padding border-y border-border bg-surface/20">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow={text.eyebrow}
            title={text.title}
            description={text.description}
          />
        </Reveal>

        <div className="mobile-team-grid mt-10 grid gap-4 md:grid-cols-2">
          {teamSites.map((site, index) => (
            <Reveal key={site.url} delay={index * 0.05}>
              <article className="mobile-team-card panel h-full p-5 transition hover:border-accent/60">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      <UsersRound aria-hidden="true" size={15} />
                      {text.badge}
                    </div>
                    <h3 className="text-2xl font-semibold text-text-primary">{site.name}</h3>
                    <p className="mt-2 text-sm text-text-secondary">{site.domain}</p>
                  </div>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-border text-text-primary transition hover:border-accent hover:text-accent"
                    aria-label={`${text.open}: ${site.name}`}
                  >
                    <ArrowUpRight aria-hidden="true" size={18} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
