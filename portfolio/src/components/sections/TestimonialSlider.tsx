import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Testimonial } from '../../types'
import { SectionHeading } from '../ui/SectionHeading'

interface TestimonialSliderProps {
  items: Testimonial[]
}

export function TestimonialSlider({ items }: TestimonialSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = items[activeIndex]
  const hasMultipleItems = items.length > 1

  if (!activeItem) {
    return null
  }

  const showPrevious = () => setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1))
  const showNext = () => setActiveIndex((current) => (current + 1) % items.length)

  return (
    <section className="section-padding bg-surface/25">
      <div className="container-shell">
        <SectionHeading eyebrow="Testimonials" title="Client notes and collaboration feedback." />
        <article className="panel mt-10 p-6 sm:p-8">
          <p className="text-xl leading-9 text-text-primary">"{activeItem.quote}"</p>
          <div className="mt-6 flex items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-text-primary">{activeItem.name}</h3>
              <p className="mt-1 text-sm text-text-secondary">{activeItem.role}</p>
            </div>

            {hasMultipleItems ? (
              <div className="flex gap-2">
                <button
                  type="button"
                  className="focus-ring inline-flex size-10 items-center justify-center rounded-lg border border-border text-text-primary"
                  aria-label="Previous testimonial"
                  onClick={showPrevious}
                >
                  <ChevronLeft aria-hidden="true" size={18} />
                </button>
                <button
                  type="button"
                  className="focus-ring inline-flex size-10 items-center justify-center rounded-lg border border-border text-text-primary"
                  aria-label="Next testimonial"
                  onClick={showNext}
                >
                  <ChevronRight aria-hidden="true" size={18} />
                </button>
              </div>
            ) : null}
          </div>
        </article>
      </div>
    </section>
  )
}
