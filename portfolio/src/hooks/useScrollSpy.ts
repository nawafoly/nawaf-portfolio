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

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-22% 0px -55% 0px',
        threshold: [0.16, 0.35, 0.6],
      },
    )

    targets.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [observedIds])

  return activeId
}
