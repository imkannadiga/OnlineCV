import React from 'react'

/**
 * Semantic section wrapper with optional title and spacing.
 * Use for major content blocks (Experience, Education, etc.).
 */
export function Section({ children, title, id, className = '', as: Component = 'section', ...props }) {
  return (
    <Component
      id={id}
      className={`section py-10 sm:py-12 ${className}`.trim()}
      aria-labelledby={title ? `${id || 'section'}-heading` : undefined}
      {...props}
    >
      {title && (
        <h2
          id={`${id || 'section'}-heading`}
          className="section__title text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400"
        >
          {title}
        </h2>
      )}
      {children}
    </Component>
  )
}
