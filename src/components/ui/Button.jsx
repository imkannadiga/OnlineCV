import React from 'react'

const variants = {
  solid: 'bg-text text-bg hover:bg-accent hover:text-accent-ink border border-text hover:border-accent',
  outline: 'bg-transparent text-text border border-border hover:border-text',
  ghost: 'text-text-muted hover:text-text',
}

/**
 * Bold, squared-off button matching the spec-sheet aesthetic.
 */
export function Button({
  children,
  variant = 'solid',
  className = '',
  as: Component = 'button',
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center gap-2 font-mono text-sm font-medium uppercase tracking-wide px-5 py-3 transition-colors duration-200 focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  )
}
