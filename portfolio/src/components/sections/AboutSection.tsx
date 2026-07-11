import { Code2, Layers, MapPin } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function AboutSection() {
  const { content } = useLanguage()
  const icons = [Code2, Layers, MapPin]
  const focusItems = [
    ...content.about.cards,
  ]

  return (
    <section id="about" className="section-padding bg-bg">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow={content.about.eyebrow}
            title={content.about.title}
            description={content.about.description}
          />
        </Reveal>

        <div className="grid gap-4">
          {focusItems.map((item, index) => {
            const Icon = icons[index] ?? Code2

            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="panel p-6">
                  <div className="flex gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-elevated text-accent">
                      <Icon aria-hidden="true" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">{item.title}</h3>
                      <p className="mt-2 leading-7 text-text-secondary">{item.text}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
