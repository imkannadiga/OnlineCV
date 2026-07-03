import { useEffect, useState } from 'react'

/**
 * Tracks which section id is currently most in view, for nav highlighting.
 */
export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b))
          setActiveId(topMost.target.id)
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}
