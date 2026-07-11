import { useEffect, useRef, useState } from 'react'
import type { DeviceType, Project } from '../../types'

interface LivePreviewProps {
  project: Project
  device: DeviceType
}

const previewViewport: Record<DeviceType, { width: number; height: number }> = {
  desktop: { width: 1440, height: 900 },
  tablet: { width: 820, height: 1180 },
  mobile: { width: 390, height: 844 },
}

export function LivePreview({ project, device }: LivePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const viewport = previewViewport[device]

  useEffect(() => {
    const container = containerRef.current

    if (!container) {
      return undefined
    }

    const updateScale = () => {
      const rect = container.getBoundingClientRect()
      setScale(Math.min(rect.width / viewport.width, rect.height / viewport.height))
    }

    updateScale()
    const observer = new ResizeObserver(updateScale)
    observer.observe(container)

    return () => observer.disconnect()
  }, [viewport.height, viewport.width])

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden bg-bg">
      <iframe
        title={`${project.name} live preview`}
        src={project.liveUrl}
        className="absolute left-1/2 top-1/2 border-0 bg-bg"
        loading="lazy"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
        style={{
          width: viewport.width,
          height: viewport.height,
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: 'center',
        }}
      />
    </div>
  )
}
