import React from 'react'

/**
 * Layout container with max-width and horizontal padding.
 * Reusable for consistent page/section width.
 */
export function Container({ children, className = '', as: Component = 'div', size = 'default', ...props }) {
  const sizeClasses = {
    sm: 'max-w-2xl',
    default: 'max-w-4xl',
    lg: 'max-w-5xl',
    full: 'max-w-full',
  }
  return (
    <Component
      className={`container mx-auto px-4 sm:px-6 ${sizeClasses[size]} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  )
}
