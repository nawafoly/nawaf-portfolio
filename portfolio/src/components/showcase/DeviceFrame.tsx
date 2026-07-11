import type { ReactNode } from 'react'
import type { DeviceType } from '../../types'

interface DeviceFrameProps {
  device: DeviceType
  title: string
  children: ReactNode
}

const frameWidthClass: Record<DeviceType, string> = {
  desktop: 'w-full',
  tablet: 'w-full max-w-xl',
  mobile: 'w-full max-w-xs',
}

const viewportAspectClass: Record<DeviceType, string> = {
  desktop: 'aspect-[1440/900]',
  tablet: 'aspect-[820/1180]',
  mobile: 'aspect-[390/720]',
}

export function DeviceFrame({ device, title, children }: DeviceFrameProps) {
  const isDesktop = device === 'desktop'

  return (
    <div
      data-device={device}
      className={`device-frame group mx-auto ${frameWidthClass[device]} transition duration-300 hover:shadow-[0_0_36px_rgba(245,197,24,0.16)]`}
      aria-label={`${title} ${device} preview`}
    >
      <div className="overflow-hidden rounded-lg border border-border bg-bg shadow-2xl">
        {isDesktop ? (
          <div className="flex h-9 items-center gap-2 border-b border-border bg-surface px-3" dir="ltr">
            <span className="size-2.5 rounded-full bg-[#ff6b57]" />
            <span className="size-2.5 rounded-full bg-[#f5c518]" />
            <span className="size-2.5 rounded-full bg-[#67d18f]" />
            <span className="ml-3 h-4 flex-1 rounded bg-bg/80" />
          </div>
        ) : (
          <div className="flex h-7 items-center justify-center border-b border-border bg-surface">
            <span className="h-1.5 w-12 rounded-full bg-border" />
          </div>
        )}

        <div className={`device-frame__viewport relative w-full overflow-hidden bg-bg ${viewportAspectClass[device]}`}>
          {children}
        </div>
      </div>
    </div>
  )
}
