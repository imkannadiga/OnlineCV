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
          className="section__title relative inline-block text-2xl font-bold mb-8 pb-2 text-text"
        >
          {title}
          <span className="absolute -bottom-2 left-0 h-[3px] w-10 rounded-full bg-gradient-to-r from-primary to-accent" aria-hidden="true" />
        </h2>
      )}
      {children}
    </Component>
  )
}
