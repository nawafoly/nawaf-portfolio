import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import type { Project } from '../../types'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

interface FeaturedProjectProps {
  project: Project
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const { content, projectText } = useLanguage()
  const text = projectText(project)

  return (
    <section className="mobile-featured-project section-padding">
      <div className="container-shell">
        <SectionHeading
          eyebrow={content.featured.eyebrow}
          title={`${project.name} ${content.featured.titleSuffix}`}
          description={content.featured.description}
        />

        <Reveal>
          <motion.article
            className="panel mt-10 grid overflow-hidden lg:grid-cols-[1.1fr_0.9fr]"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="min-h-full">
              {project.coverImage ? (
                <img
                  src={project.coverImage}
                  alt=""
                  className="h-full min-h-80 w-full object-cover"
                />
              ) : (
                <ImagePlaceholder aspect="16/10" label={`${project.name} cover`} />
              )}
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase text-accent">
                  {text.category}
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-text-primary">
                  {project.name}
                </h3>
                <p className="mt-4 leading-8 text-text-secondary">
                  {text.shortDescription}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {text.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to={`/projects/${project.slug}`}
                  className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg transition hover:bg-accent-muted"
                >
                  <span>{content.common.readCaseStudy}</span>
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-accent hover:text-accent"
                >
                  <span>{content.common.liveSite}</span>
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              </div>
            </div>
          </motion.article>
        </Reveal>
      </div>
    </section>
  )
}
