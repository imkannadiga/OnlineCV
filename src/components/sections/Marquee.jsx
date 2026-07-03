import React from 'react'

/**
 * Infinite scrolling ticker of tag words, duplicated for a seamless loop.
 */
export function Marquee({ items }) {
  if (!items?.length) return null
  const doubled = [...items, ...items]

  return (
    <div className="border-b border-border overflow-hidden bg-bg-alt">
      <div className="marquee-track py-4">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-text-muted pr-8">
            {item}
            <span className="text-accent" aria-hidden="true">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
