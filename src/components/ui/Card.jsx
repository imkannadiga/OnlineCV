import React from 'react'

/**
 * Card container with border, radius, and optional padding.
 * Reusable for experience items, education blocks, etc.
 */
export function Card({ children, className = '', as: Component = 'div', padding = true, ...props }) {
  return (
    <Component
      className={`card rounded-xl border border-border bg-bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/30 ${padding ? 'p-5 sm:p-6' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  )
}
