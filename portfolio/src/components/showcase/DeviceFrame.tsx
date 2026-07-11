import type { ReactNode } from 'react'
import type { DeviceType } from '../../types'

interface DeviceFrameProps {
  device: DeviceType
  title: string
  children: ReactNode
}

const frameClass: Record<DeviceType, string> = {
  desktop: 'aspect-[16/10] w-full',
  tablet: 'aspect-[4/5] w-full max-w-xl',
  mobile: 'aspect-[9/16] w-full max-w-xs',
}

export function DeviceFrame({ device, title, children }: DeviceFrameProps) {
  const isDesktop = device === 'desktop'

  return (
    <div
      className={`group mx-auto ${frameClass[device]} transition duration-300 hover:shadow-[0_0_36px_rgba(245,197,24,0.16)]`}
      aria-label={`${title} ${device} preview`}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-bg shadow-2xl">
        {isDesktop ? (
          <div className="flex h-9 shrink-0 items-center gap-2 border-b border-border bg-surface px-3">
            <span className="size-2.5 rounded-full bg-[#ff6b57]" />
            <span className="size-2.5 rounded-full bg-[#f5c518]" />
            <span className="size-2.5 rounded-full bg-[#67d18f]" />
            <span className="ml-3 h-4 flex-1 rounded bg-bg/80" />
          </div>
        ) : (
          <div className="flex h-7 shrink-0 items-center justify-center border-b border-border bg-surface">
            <span className="h-1.5 w-12 rounded-full bg-border" />
          </div>
        )}
        <div className="min-h-0 flex-1 overflow-hidden bg-bg">{children}</div>
      </div>
    </div>
  )
}
