import { ChevronLeft, ChevronRight, Monitor, Smartphone, Tablet } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import type { DeviceType } from '../../types'

interface ShowcaseControlsProps {
  device: DeviceType
  onDeviceChange: (device: DeviceType) => void
  onPrevious: () => void
  onNext: () => void
  projectName: string
}

const deviceOptions: Array<{ value: DeviceType; icon: LucideIcon }> = [
  { value: 'desktop', icon: Monitor },
  { value: 'tablet', icon: Tablet },
  { value: 'mobile', icon: Smartphone },
]

export function ShowcaseControls({
  device,
  onDeviceChange,
  onPrevious,
  onNext,
  projectName,
}: ShowcaseControlsProps) {
  const { content } = useLanguage()

  return (
    <div className="mobile-showcase-controls mt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="showcase-device-controls flex flex-wrap gap-2" aria-label={content.showcase.deviceControls}>
        {deviceOptions.map((option) => {
          const Icon = option.icon
          const active = option.value === device
          const label = content.common[option.value]

          return (
            <button
              key={option.value}
              type="button"
              className={`focus-ring inline-flex min-h-10 items-center gap-2 rounded-lg border px-3 text-sm font-semibold transition ${
                active
                  ? 'border-accent bg-accent text-bg'
                  : 'border-border bg-surface text-text-secondary hover:text-text-primary'
              }`}
              aria-pressed={active}
              onClick={() => onDeviceChange(option.value)}
            >
              <Icon aria-hidden="true" size={17} />
              {label}
            </button>
          )
        })}
      </div>

      <div className="showcase-project-arrows flex gap-2" dir="ltr">
        <button
          type="button"
          className="focus-ring inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-text-primary transition hover:border-accent hover:text-accent"
          aria-label={`${content.common.previousProject}: ${projectName}`}
          onClick={onPrevious}
        >
          <ChevronLeft aria-hidden="true" size={18} />
        </button>
        <button
          type="button"
          className="focus-ring inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-text-primary transition hover:border-accent hover:text-accent"
          aria-label={`${content.common.nextProject}: ${projectName}`}
          onClick={onNext}
        >
          <ChevronRight aria-hidden="true" size={18} />
        </button>
      </div>
    </div>
  )
}
