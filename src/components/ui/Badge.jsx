import React from 'react'

/**
 * Small label/badge for skills, tags, or status.
 */
export function Badge({ children, variant = 'default', className = '', ...props }) {
  const variantClasses = {
    default: 'bg-primary/10 text-primary border border-primary/25',
    accent: 'bg-accent/10 text-accent border border-accent/25',
    muted: 'bg-overlay text-text-muted border border-border',
    success: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25',
  }
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-transform duration-200 hover:scale-105 ${variantClasses[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  )
}
