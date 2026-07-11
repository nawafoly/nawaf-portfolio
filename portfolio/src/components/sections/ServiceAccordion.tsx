import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { services } from '../../data/services'
import { useLanguage } from '../../i18n/LanguageContext'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function ServiceAccordion() {
  const [activeId, setActiveId] = useState(services[0]?.id ?? '')
  const { content } = useLanguage()

  return (
    <section id="services" className="mobile-services-section section-padding bg-surface/25">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow={content.services.eyebrow}
            title={content.services.title}
            description={content.services.description}
          />
        </Reveal>

        <div className="grid gap-3">
          {services.map((service) => {
            const open = service.id === activeId
            const text = content.services.items[service.id] ?? service

            return (
              <Reveal key={service.id}>
                <article className="panel overflow-hidden">
                  <button
                    type="button"
                    className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-start"
                    aria-expanded={open}
                    aria-controls={`${service.id}-panel`}
                    onClick={() => setActiveId(open ? '' : service.id)}
                  >
                    <span className="font-semibold text-text-primary">{text.title}</span>
                    <ChevronDown
                      aria-hidden="true"
                      size={19}
                      className={`shrink-0 text-accent transition ${open ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {open ? (
                    <div id={`${service.id}-panel`} className="border-t border-border px-5 pb-5 pt-4">
                      <p className="leading-7 text-text-secondary">{text.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {text.deliverables.map((deliverable) => (
                          <span key={deliverable} className="chip">
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
