import { Calendar } from 'lucide-react'
import { experience } from '../../data/experience'
import { useLanguage } from '../../i18n/LanguageContext'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function ExperienceTimeline() {
  const { content } = useLanguage()
  const timelineItems = content.experience.items.length ? content.experience.items : experience

  return (
    <section id="experience" className="section-padding bg-surface/25">
      <div className="container-shell">
        <SectionHeading
          eyebrow={content.experience.eyebrow}
          title={content.experience.title}
          description={content.experience.description}
        />

        <div className="mt-12 border-l border-accent/30 pl-6">
          {timelineItems.map((item, index) => (
            <Reveal key={`${item.company}-${item.title}`} delay={index * 0.06}>
              <article className="relative mb-7 last:mb-0">
                <span className="absolute -left-[31px] top-1 size-3 rounded-full border border-accent bg-bg" />
                <div className="panel p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary">{item.title}</h3>
                      <p className="mt-1 text-text-secondary">{item.company}</p>
                    </div>
                    <p className="inline-flex items-center gap-2 text-sm text-accent">
                      <Calendar aria-hidden="true" size={15} />
                      {item.date}
                    </p>
                  </div>

                  <p className="mt-4 leading-7 text-text-secondary">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
