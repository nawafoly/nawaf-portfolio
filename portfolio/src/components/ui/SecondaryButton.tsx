import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

interface SecondaryButtonProps {
  href: string
  children: ReactNode
  icon?: LucideIcon
  ariaLabel?: string
  target?: '_blank'
}

export function SecondaryButton({
  href,
  children,
  icon: Icon,
  ariaLabel,
  target,
}: SecondaryButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noreferrer' : undefined}
      aria-label={ariaLabel}
      className="app-secondary-button focus-ring inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-border bg-surface/80 px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-accent hover:text-accent sm:w-auto"
    >
      <span>{children}</span>
      {Icon ? <Icon aria-hidden="true" size={18} strokeWidth={2.2} /> : null}
    </a>
  )
}
