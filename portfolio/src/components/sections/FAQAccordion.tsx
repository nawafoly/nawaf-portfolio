import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function FAQAccordion() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
  const { content } = useLanguage()
  const faqItems = content.faq.items

  return (
    <section className="mobile-faq-section section-padding">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow={content.faq.eyebrow}
          title={content.faq.title}
          description={content.faq.description}
        />

        <div className="grid gap-3">
          {faqItems.map((item, index) => {
            const open = index === activeQuestionIndex

            return (
              <Reveal key={item.question}>
                <article className="panel overflow-hidden">
                  <button
                    type="button"
                    className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-start"
                    aria-expanded={open}
                    onClick={() => setActiveQuestionIndex(open ? -1 : index)}
                  >
                    <span className="font-semibold text-text-primary">{item.question}</span>
                    <ChevronDown
                      aria-hidden="true"
                      size={19}
                      className={`shrink-0 text-accent transition ${open ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {open ? (
                    <p className="border-t border-border px-5 pb-5 pt-4 leading-7 text-text-secondary">
                      {item.answer}
                    </p>
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
