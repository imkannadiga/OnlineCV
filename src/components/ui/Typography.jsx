import React from 'react'

/**
 * Heading with level and optional gradient style.
 */
export function Heading({ level = 1, children, gradient, className = '', ...props }) {
  const Tag = `h${Math.min(Math.max(level, 1), 6)}`
  const gradientClass = gradient
    ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'
    : 'text-text'
  return (
    <Tag
      className={`font-bold tracking-tight ${gradientClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  )
}

/**
 * Paragraph with optional muted variant.
 */
export function Text({ children, muted, as: Component = 'p', className = '', ...props }) {
  return (
    <Component
      className={muted ? `text-text-muted ${className}`.trim() : `text-text ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  )
}

/**
 * Small label text (e.g. dates, role labels).
 */
export function Label({ children, className = '', ...props }) {
  return (
    <span className={`text-xs font-medium uppercase tracking-wider text-text-muted ${className}`.trim()} {...props}>
      {children}
    </span>
  )
}
