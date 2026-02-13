import React from 'react'

/**
 * Small label/badge for skills, tags, or status.
 */
export function Badge({ children, variant = 'default', className = '', ...props }) {
  const variantClasses = {
    default: 'bg-indigo-500/20 text-indigo-300 border border-indigo-400/30',
    accent: 'bg-pink-500/20 text-pink-300 border border-pink-400/30',
    muted: 'bg-white/10 text-slate-400 border border-white/10',
    success: 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30',
  }
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantClasses[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  )
}
