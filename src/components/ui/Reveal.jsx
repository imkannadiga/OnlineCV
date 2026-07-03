import React from 'react'
import { useReveal } from '../../hooks/useReveal'

/**
 * Wraps children in a scroll-triggered fade/slide-up reveal.
 */
export function Reveal({ children, as: Component = 'div', className = '', delay = 0, ...props }) {
  const ref = useReveal()
  return (
    <Component
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Component>
  )
}
