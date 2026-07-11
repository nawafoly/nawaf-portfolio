import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import { useLanguage } from '../../i18n/LanguageContext'
import type { DeviceType } from '../../types'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { DeviceFrame } from './DeviceFrame'
import { LivePreview } from './LivePreview'
import { ShowcaseControls } from './ShowcaseControls'

interface WorkShowcaseProps {
  activeSlug: string
  onActiveSlugChange: (slug: string) => void
}

export function WorkShowcase({ activeSlug, onActiveSlugChange }: WorkShowcaseProps) {
  const [device, setDevice] = useState<DeviceType>('desktop')
  const reduceMotion = useReducedMotion()
  const { content, projectText } = useLanguage()
  const activeIndex = Math.max(
    0,
    projects.findIndex((project) => project.slug === activeSlug),
  )
  const activeProject = projects[activeIndex] ?? projects[0]
  const activeProjectText = projectText(activeProject)

  const selectProject = (slug: string) => {
    onActiveSlugChange(slug)
  }

  const showPrevious = () => {
    const previousIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1
    selectProject(projects[previousIndex].slug)
  }

  const showNext = () => {
    const nextIndex = (activeIndex + 1) % projects.length
    selectProject(projects[nextIndex].slug)
  }

  return (
    <section id="work-showcase" className="section-padding border-b border-border bg-surface/20">
      <div className="mx-auto w-[calc(100%_-_2rem)] max-w-[1320px]">
        <Reveal>
          <SectionHeading
            eyebrow={content.showcase.eyebrow}
            title={content.showcase.title}
            description={content.showcase.description}
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div
            className="mt-8 flex gap-2 overflow-x-auto pb-2"
            role="tablist"
            aria-label={content.showcase.tabsLabel}
          >
            {projects.map((project) => {
              const active = project.slug === activeProject.slug

              return (
                <button
                  key={project.slug}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`focus-ring relative min-h-11 shrink-0 rounded-lg px-4 text-sm font-semibold transition ${
                    active ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                  }`}
                  onClick={() => selectProject(project.slug)}
                >
                  {project.name}
                  {active ? (
                    <motion.span
                      layoutId="work-showcase-active-tab"
                      className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-accent"
                    />
                  ) : null}
                </button>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start xl:grid-cols-[minmax(0,1fr)_20rem]">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeProject.slug}-${device}`}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                  animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                >
                  <DeviceFrame device={device} title={activeProject.name}>
                    <LivePreview project={activeProject} device={device} />
                  </DeviceFrame>
                </motion.div>
              </AnimatePresence>

              <ShowcaseControls
                device={device}
                onDeviceChange={setDevice}
                onPrevious={showPrevious}
                onNext={showNext}
                projectName={activeProject.name}
              />
            </div>

            <aside className="border-l border-border pl-6">
              <p className="text-sm font-semibold uppercase text-accent">{activeProjectText.category}</p>
              <h3 className="mt-3 text-3xl font-semibold text-text-primary">{activeProject.name}</h3>
              <p className="mt-4 leading-8 text-text-secondary">{activeProjectText.shortDescription}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {activeProjectText.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg transition hover:bg-accent-muted"
                >
                  {content.common.liveSite}
                  <ArrowUpRight aria-hidden="true" size={17} />
                </a>
                <Link
                  to={`/projects/${activeProject.slug}`}
                  className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-accent hover:text-accent"
                >
                  {content.common.caseStudy}
                  <ArrowUpRight aria-hidden="true" size={17} />
                </Link>
              </div>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
