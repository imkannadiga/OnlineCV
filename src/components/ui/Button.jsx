import React from 'react'

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-light active:bg-primary-dark',
  secondary: 'bg-overlay text-text hover:bg-overlay-strong border border-border',
  accent: 'bg-accent text-white hover:bg-accent-light active:bg-accent-dark',
  ghost: 'text-text-muted hover:bg-overlay',
}

const sizes = {
  sm: 'text-sm px-3 py-1.5 rounded-md',
  md: 'text-base px-4 py-2 rounded-lg',
  lg: 'text-lg px-6 py-3 rounded-xl',
}

/**
 * Reusable button with variants and sizes.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Component = 'button',
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center font-medium transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  )
}
