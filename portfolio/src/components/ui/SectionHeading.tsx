interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-3 text-sm font-semibold uppercase text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-text-primary sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-text-secondary sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
