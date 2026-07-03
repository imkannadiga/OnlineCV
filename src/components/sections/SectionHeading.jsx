import React from 'react'

/**
 * Shared numbered section heading: "§ 0X" tag, big title, optional subtitle, hairline rule.
 */
export function SectionHeading({ index, title, subtitle }) {
  return (
    <div className="mb-10 sm:mb-12">
      <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">{`§ 0${index}`}</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text mb-3">{title}</h2>
      {subtitle && <p className="text-text-muted max-w-xl mb-8">{subtitle}</p>}
      <div className="border-t border-border" />
    </div>
  )
}
