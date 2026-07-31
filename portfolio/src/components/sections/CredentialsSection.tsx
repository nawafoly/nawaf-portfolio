import { Award, ExternalLink } from 'lucide-react'
import { additionalTraining, featuredCertificates } from '../../data/certificates'
import { useLanguage } from '../../i18n/LanguageContext'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const arabicCertificateOverrides: Record<string, { title?: string; issuer?: string }> = {
  'microsoft-excel': {
    title: 'أخصائي معتمد في Microsoft Office - Excel 2019',
    issuer: 'مايكروسوفت',
  },
  interparfums: {
    title: 'أخصائي معتمد في علامات إنتر بارفامز',
    issuer: 'إنتر بارفامز',
  },
}

export function CredentialsSection() {
  const { content, certificateText, language } = useLanguage()

  return (
    <section id="credentials" className="mobile-credentials-section section-padding bg-bg">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow={content.credentials.eyebrow}
            title={content.credentials.title}
            description={content.credentials.description}
          />
        </Reveal>

        <div className="mobile-credentials-grid mt-10 grid gap-5 lg:grid-cols-3">
          {featuredCertificates.map((certificate, index) => {
            const sourceText = certificateText(certificate)
            const override = language === 'ar' ? arabicCertificateOverrides[certificate.id] : undefined
            const text = {
              ...sourceText,
              title: override?.title ?? sourceText.title,
              issuer: override?.issuer ?? sourceText.issuer,
            }

            return (
              <Reveal key={certificate.id} delay={index * 0.06}>
                <article className="mobile-certificate-card interactive-card panel h-full overflow-hidden">
                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring interactive-press block border-b border-border bg-white"
                    aria-label={`${content.common.viewCertificate}: ${text.title}`}
                  >
                    <img
                      src={certificate.image}
                      alt={text.title}
                      className="aspect-[16/10] w-full object-contain"
                      loading="lazy"
                    />
                  </a>

                  <div className="p-5">
                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase text-accent">
                      <Award aria-hidden="true" size={17} />
                      <span>{text.issuer}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary">{text.title}</h3>
                    <p className="mt-2 text-sm text-text-secondary">{text.date}</p>
                    <p className="mt-4 leading-7 text-text-secondary">{text.summary}</p>
                    <a
                      href={certificate.image}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring interactive-press mt-5 inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-accent"
                    >
                      {content.common.viewCertificate}
                      <ExternalLink aria-hidden="true" size={16} />
                    </a>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-8 border-t border-border pt-8">
            <div className="grid gap-6 lg:grid-cols-[0.42fr_1fr]">
              <div>
                <p className="text-sm font-semibold uppercase text-accent">
                  {content.credentials.additional}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-text-primary">
                  {content.credentials.additionalTitle}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {(content.credentials.training.length ? content.credentials.training : additionalTraining).map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
