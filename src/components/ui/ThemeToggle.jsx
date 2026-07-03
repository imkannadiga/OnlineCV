import React from 'react'

/**
 * Text-label theme toggle ("DARK" / "LIGHT") matching the spec-sheet nav.
 */
export function ThemeToggle({ theme, onToggle, className = '' }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className={`font-mono text-xs font-medium uppercase tracking-widest border border-border px-3 py-2 text-text hover:border-text transition-colors duration-200 ${className}`.trim()}
    >
      {isDark ? 'Light' : 'Dark'}
    </button>
  )
}
