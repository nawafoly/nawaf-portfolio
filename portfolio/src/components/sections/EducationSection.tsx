import { GraduationCap } from 'lucide-react'
import { education } from '../../data/education'
import { useLanguage } from '../../i18n/LanguageContext'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function EducationSection() {
  const { content } = useLanguage()
  const educationItems = content.education.items.length ? content.education.items : education

  return (
    <section className="section-padding">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionHeading
          eyebrow={content.education.eyebrow}
          title={content.education.title}
          description={content.education.description}
        />

        <div className="grid gap-4">
          {educationItems.map((item) => (
            <Reveal key={item.degree}>
              <article className="panel p-6">
                <div className="flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border text-cool">
                    <GraduationCap aria-hidden="true" size={21} />
                  </div>
                  <div>
                    <p className="text-sm text-accent">{item.date}</p>
                    <h3 className="mt-1 text-xl font-semibold text-text-primary">{item.degree}</h3>
                    <p className="mt-1 text-text-secondary">{item.school}</p>
                    <ul className="mt-5 grid gap-3 text-sm leading-6 text-text-secondary">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex gap-3">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
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
