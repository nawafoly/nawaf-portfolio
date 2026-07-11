import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

interface PrimaryButtonProps {
  href: string
  children: ReactNode
  icon?: LucideIcon
  ariaLabel?: string
  target?: '_blank'
}

export function PrimaryButton({
  href,
  children,
  icon: Icon,
  ariaLabel,
  target,
}: PrimaryButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noreferrer' : undefined}
      aria-label={ariaLabel}
      className="focus-ring inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg transition hover:bg-accent-muted sm:w-auto"
    >
      <span>{children}</span>
      {Icon ? <Icon aria-hidden="true" size={18} strokeWidth={2.2} /> : null}
    </a>
  )
}
