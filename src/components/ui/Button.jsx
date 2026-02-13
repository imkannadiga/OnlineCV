import React from 'react'

const variants = {
  primary: 'bg-indigo-500 text-white hover:bg-indigo-400 active:bg-indigo-600',
  secondary: 'bg-white/10 text-slate-200 hover:bg-white/15 border border-white/20',
  accent: 'bg-pink-500 text-white hover:bg-pink-400 active:bg-pink-600',
  ghost: 'text-slate-300 hover:bg-white/5',
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
      className={`inline-flex items-center justify-center font-medium transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  )
}
