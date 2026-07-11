import { useEffect, useState } from 'react'
import { AboutSection } from '../components/sections/AboutSection'
import { ContactCTA } from '../components/sections/ContactCTA'
import { CredentialsSection } from '../components/sections/CredentialsSection'
import { EducationSection } from '../components/sections/EducationSection'
import { ExperienceTimeline } from '../components/sections/ExperienceTimeline'
import { FAQAccordion } from '../components/sections/FAQAccordion'
import { FeaturedProject } from '../components/sections/FeaturedProject'
import { HeroSection } from '../components/sections/HeroSection'
import { ServiceAccordion } from '../components/sections/ServiceAccordion'
import { StatsSection } from '../components/sections/StatsSection'
import { TeamContributionsSection } from '../components/sections/TeamContributionsSection'
import { TechMarquee } from '../components/sections/TechMarquee'
import { TestimonialSlider } from '../components/sections/TestimonialSlider'
import { WorkShowcase } from '../components/showcase/WorkShowcase'
import { featuredProject, getProjectBySlug } from '../data/projects'
import { testimonialsConfig } from '../data/testimonials'
import { siteMeta } from '../lib/seo'

export function HomePage() {
  const [activeProjectSlug, setActiveProjectSlug] = useState(featuredProject.slug)
  const activeProject = getProjectBySlug(activeProjectSlug) ?? featuredProject

  useEffect(() => {
    document.title = siteMeta.title
  }, [])

  return (
    <>
      <HeroSection />
      <StatsSection />
      <WorkShowcase activeSlug={activeProject.slug} onActiveSlugChange={setActiveProjectSlug} />
      <CredentialsSection />
      <FeaturedProject project={activeProject} />
      <AboutSection />
      <ExperienceTimeline />
      <TeamContributionsSection />
      <EducationSection />
      <TechMarquee />
      <ServiceAccordion />
      {testimonialsConfig.enabled ? <TestimonialSlider items={testimonialsConfig.items} /> : null}
      <FAQAccordion />
      <ContactCTA />
    </>
  )
}
