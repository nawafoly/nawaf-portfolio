import { useEffect, useState } from 'react'

export function useScrollSpy(ids: string[]): string {
  const [activeId, setActiveId] = useState(ids[0] ?? '')
  const observedIds = ids.join('|')

  useEffect(() => {
    const targets = observedIds
      .split('|')
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))

    if (targets.length === 0) {
      return undefined
    }

    let frameId = 0

    const updateActiveSection = () => {
      frameId = 0

      const activationLine = Math.min(150, Math.max(88, window.innerHeight * 0.22))
      const nearPageBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8

      let nextActiveId = targets[0].id

      if (nearPageBottom) {
        nextActiveId = targets[targets.length - 1].id
      } else {
        for (const target of targets) {
          if (target.getBoundingClientRect().top <= activationLine) {
            nextActiveId = target.id
          } else {
            break
          }
        }
      }

      setActiveId((currentId) => (currentId === nextActiveId ? currentId : nextActiveId))
    }

    const scheduleUpdate = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(updateActiveSection)
    }

    scheduleUpdate()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    window.addEventListener('hashchange', scheduleUpdate)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      window.removeEventListener('hashchange', scheduleUpdate)

      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [observedIds])

  return activeId
}
