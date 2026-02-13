import React from 'react'

/**
 * Card container with border, radius, and optional padding.
 * Reusable for experience items, education blocks, etc.
 */
export function Card({ children, className = '', as: Component = 'div', padding = true, ...props }) {
  return (
    <Component
      className={`card rounded-xl border border-white/10 bg-bg-card shadow-md transition-shadow hover:shadow-lg ${padding ? 'p-5 sm:p-6' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  )
}
