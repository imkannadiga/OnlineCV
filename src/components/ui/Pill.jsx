import React from 'react'

/**
 * Outlined tag pill used for stacks, skills, and status badges.
 */
export function Pill({ children, className = '', tone = 'default', ...props }) {
  const tones = {
    default: 'border-border text-text-muted',
    ok: 'border-ok/40 text-ok',
    accent: 'border-accent/40 text-accent',
  }
  return (
    <span
      className={`inline-flex items-center gap-1.5 border font-mono text-xs px-2.5 py-1 whitespace-nowrap ${tones[tone]} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  )
}
