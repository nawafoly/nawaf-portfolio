import { techs } from '../../lib/constants'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function TechMarquee() {
  const reduceMotion = useReducedMotion()
  const repeatedTechs = [...techs, ...techs]

  return (
    <section aria-label="Technology stack" className="mobile-tech-marquee overflow-hidden border-y border-border py-6">
      <div className="flex">
        <div
          className={`flex min-w-max gap-12 px-6 ${reduceMotion ? '' : 'animate-marquee'}`}
          aria-hidden="true"
        >
          {repeatedTechs.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="whitespace-nowrap text-lg font-semibold text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
