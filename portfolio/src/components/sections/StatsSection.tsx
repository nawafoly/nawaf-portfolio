import { useLanguage } from '../../i18n/LanguageContext'
import { Reveal } from '../ui/Reveal'

export function StatsSection() {
  const { content } = useLanguage()

  return (
    <section aria-label="Portfolio stats" className="border-y border-border bg-surface/30 py-8">
      <div className="container-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {content.stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.06}>
            <article className="panel h-full p-5">
              <p className="text-4xl font-semibold text-accent">{stat.value}</p>
              <h3 className="mt-3 font-semibold text-text-primary">{stat.label}</h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{stat.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
