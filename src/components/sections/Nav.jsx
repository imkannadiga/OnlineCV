import React, { useState } from 'react'
import { Container, ThemeToggle } from '../ui'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const LINKS = [
  { id: 'overview', num: '01', label: 'Overview' },
  { id: 'experience', num: '02', label: 'Experience' },
  { id: 'projects', num: '03', label: 'Projects' },
  { id: 'skills', num: '04', label: 'Skills' },
  { id: 'publications', num: '05', label: 'Publications' },
  { id: 'contact', num: '06', label: 'Contact' },
]

export function Nav({ initials, name, theme, onToggleTheme }) {
  const activeId = useScrollSpy(LINKS.map((l) => l.id))
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <Container size="lg">
        <div className="flex items-center justify-between h-16">
          <a href="#overview" className="flex items-center gap-2 font-mono font-semibold text-sm tracking-widest text-text">
            <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-text text-bg text-xs">{initials}</span>
            {name}
          </a>

          <nav className="hidden lg:flex items-center gap-6" aria-label="Section navigation">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`font-mono text-xs uppercase tracking-widest transition-colors duration-200 ${
                  activeId === link.id ? 'text-accent' : 'text-text-muted hover:text-text'
                }`}
              >
                {link.num} {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} className="hidden sm:inline-flex" />
            <button
              type="button"
              className="lg:hidden font-mono text-xs uppercase tracking-widest border border-border px-3 py-2 text-text"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle navigation menu"
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden pb-4 flex flex-col gap-1" aria-label="Section navigation (mobile)">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`font-mono text-xs uppercase tracking-widest py-2 border-b border-border last:border-0 ${
                  activeId === link.id ? 'text-accent' : 'text-text-muted'
                }`}
              >
                {link.num} {link.label}
              </a>
            ))}
            <ThemeToggle theme={theme} onToggle={onToggleTheme} className="sm:hidden mt-3 self-start" />
          </nav>
        )}
      </Container>
    </header>
  )
}
