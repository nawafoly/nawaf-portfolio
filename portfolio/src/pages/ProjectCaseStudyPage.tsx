import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Calendar, Check, Layers, UserRound } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import { DeviceFrame } from '../components/showcase/DeviceFrame'
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder'
import { Reveal } from '../components/ui/Reveal'

interface CaseSectionProps {
  eyebrow: string
  title: string
  children: ReactNode
}

function CaseSection({ eyebrow, title, children }: CaseSectionProps) {
  return (
    <Reveal>
      <section className="case-study-section border-t border-border py-10">
        <p className="text-sm font-semibold uppercase text-accent">{eyebrow}</p>
        <h2 className="mt-3 text-2xl font-semibold text-text-primary sm:text-3xl">{title}</h2>
        <div className="mt-5 text-base leading-8 text-text-secondary">{children}</div>
      </section>
    </Reveal>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Check aria-hidden="true" size={18} className="mt-1 shrink-0 text-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function ProjectCaseStudyPage() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined
  const { content, projectText } = useLanguage()

  useEffect(() => {
    if (project) {
      document.title = `${project.name} - ${content.common.caseStudy}`
    }
  }, [content.common.caseStudy, project])

  if (!project) {
    return <Navigate to="/" replace />
  }

  const text = projectText(project)
  const nextProject = project.caseStudy.nextProjectSlug
    ? getProjectBySlug(project.caseStudy.nextProjectSlug)
    : undefined
  const nextProjectText = nextProject ? projectText(nextProject) : undefined

  return (
    <article className="case-study-page pt-28">
      <div className="container-shell pb-20">
        <Link
          to="/"
          className="focus-ring inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-text-secondary transition hover:text-accent"
        >
          <ArrowLeft aria-hidden="true" size={17} />
          {content.caseStudyPage.back}
        </Link>

        <Reveal>
          <header className="case-study-hero py-12">
            <p className="text-sm font-semibold uppercase text-accent">{text.category}</p>
            <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight text-text-primary sm:text-6xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-text-secondary">
              {text.shortDescription}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="chip">
                <Calendar aria-hidden="true" size={14} />
                {project.year}
              </span>
              {text.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="chip focus-ring text-accent"
              >
                {content.common.liveSite}
                <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </div>
          </header>
        </Reveal>

        <Reveal>
          {project.coverImage ? (
            <img src={project.coverImage} alt="" className="case-study-cover aspect-[21/9] w-full rounded-lg object-cover" />
          ) : (
            <ImagePlaceholder aspect="21/9" label={`${project.name} cover image`} />
          )}
        </Reveal>

        <div className="case-study-content mx-auto mt-10 max-w-4xl">
          <CaseSection eyebrow={content.caseStudyPage.demoEyebrow} title={content.caseStudyPage.demoTitle}>
            <video
              className="aspect-video w-full rounded-lg border border-border bg-bg object-cover"
              src={project.media.video}
              poster={project.media.poster}
              controls
              muted
              loop
              playsInline
              preload="metadata"
            />
          </CaseSection>

          <CaseSection eyebrow={content.caseStudyPage.overviewEyebrow} title={content.caseStudyPage.overviewTitle}>
            <p>{project.caseStudy.overview}</p>
          </CaseSection>

          <CaseSection eyebrow={content.caseStudyPage.problemEyebrow} title={content.caseStudyPage.problemTitle}>
            <p>{project.caseStudy.problem}</p>
          </CaseSection>

          <CaseSection eyebrow={content.caseStudyPage.goalsEyebrow} title={content.caseStudyPage.goalsTitle}>
            <BulletList items={project.caseStudy.goals} />
          </CaseSection>

          <CaseSection eyebrow={content.caseStudyPage.roleEyebrow} title={content.caseStudyPage.roleTitle}>
            <div className="flex gap-4">
              <UserRound aria-hidden="true" size={22} className="mt-1 shrink-0 text-cool" />
              <p>{project.caseStudy.role}</p>
            </div>
          </CaseSection>

          <CaseSection eyebrow={content.caseStudyPage.stackEyebrow} title={content.caseStudyPage.stackTitle}>
            <div className="flex flex-wrap gap-2">
              {project.caseStudy.stack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </CaseSection>

          <CaseSection
            eyebrow={content.caseStudyPage.architectureEyebrow}
            title={content.caseStudyPage.architectureTitle}
          >
            <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
              <div className="flex gap-4">
                <Layers aria-hidden="true" size={22} className="mt-1 shrink-0 text-plum" />
                <p>{project.caseStudy.architecture}</p>
              </div>
              <ImagePlaceholder aspect="4/3" label="Architecture diagram placeholder" />
            </div>
          </CaseSection>

          <CaseSection eyebrow={content.caseStudyPage.featuresEyebrow} title={content.caseStudyPage.featuresTitle}>
            <BulletList items={project.caseStudy.features} />
          </CaseSection>

          <CaseSection eyebrow={content.caseStudyPage.designEyebrow} title={content.caseStudyPage.designTitle}>
            <p>{project.caseStudy.designProcess}</p>
          </CaseSection>

          <CaseSection eyebrow={content.caseStudyPage.challengesEyebrow} title={content.caseStudyPage.challengesTitle}>
            <BulletList items={project.caseStudy.challenges} />
          </CaseSection>

          <CaseSection eyebrow={content.caseStudyPage.solutionsEyebrow} title={content.caseStudyPage.solutionsTitle}>
            <BulletList items={project.caseStudy.solutions} />
          </CaseSection>

          <CaseSection eyebrow={content.caseStudyPage.galleryEyebrow} title={content.caseStudyPage.galleryTitle}>
            <div className="case-study-gallery grid gap-5">
              <DeviceFrame device="desktop" title={project.name}>
                <img
                  src={project.media.desktop}
                  alt={`${project.name} desktop view`}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </DeviceFrame>
              <div className="grid gap-5 sm:grid-cols-2">
                <DeviceFrame device="tablet" title={project.name}>
                  <img
                    src={project.media.tablet}
                    alt={`${project.name} tablet view`}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </DeviceFrame>
                <DeviceFrame device="mobile" title={project.name}>
                  <img
                    src={project.media.mobile}
                    alt={`${project.name} mobile view`}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </DeviceFrame>
              </div>
            </div>
          </CaseSection>

          <CaseSection eyebrow={content.caseStudyPage.resultsEyebrow} title={content.caseStudyPage.resultsTitle}>
            <BulletList items={project.caseStudy.results} />
          </CaseSection>

          <CaseSection eyebrow={content.caseStudyPage.lessonsEyebrow} title={content.caseStudyPage.lessonsTitle}>
            <BulletList items={project.caseStudy.lessons} />
          </CaseSection>

          {nextProject ? (
            <Reveal>
              <section className="case-study-next mt-10 rounded-lg border border-accent/30 bg-surface p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase text-accent">
                  {content.caseStudyPage.nextProject}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-text-primary">{nextProject.name}</h2>
                <p className="mt-3 leading-7 text-text-secondary">
                  {nextProjectText?.shortDescription ?? nextProject.shortDescription}
                </p>
                <Link
                  to={`/projects/${nextProject.slug}`}
                  className="focus-ring mt-6 inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-accent"
                >
                  <span>{content.caseStudyPage.openNext}</span>
                  <ArrowRight aria-hidden="true" size={17} />
                </Link>
              </section>
            </Reveal>
          ) : null}
        </div>
      </div>
    </article>
  )
}
