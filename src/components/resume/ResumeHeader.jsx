import React from 'react'
import { Heading, Text } from '../ui'

/**
 * Resume header: photo, name, title, tagline, and contact bar.
 */
export function ResumeHeader({ profile }) {
  const { name, title, tagline, email, phone, location, website, linkedin, github, avatar } = profile

  const links = [
    { href: `mailto:${email}`, label: email },
    { href: `tel:${phone?.replace(/\D/g, '')}`, label: phone },
    location && { href: null, label: location },
    website && { href: website, label: 'Website' },
    linkedin && { href: linkedin, label: 'LinkedIn' },
    github && { href: github, label: 'GitHub' },
  ].filter(Boolean)

  return (
    <header className="resume-header text-center pb-8 sm:pb-10">
      {avatar && (
        <div className="mx-auto mb-6 h-28 w-28 sm:h-32 sm:w-32 rounded-full p-[3px] bg-gradient-to-br from-primary to-accent shadow-glow transition-transform duration-300 hover:scale-105">
          <img
            src={avatar}
            alt={name}
            className="h-full w-full rounded-full object-cover border-2 border-bg-card"
            loading="eager"
          />
        </div>
      )}
      <Heading level={1} gradient className="text-4xl sm:text-5xl mb-2">
        {name}
      </Heading>
      <Text as="p" className="text-xl text-primary font-medium mb-1">
        {title}
      </Text>
      {tagline && (
        <Text muted className="text-base max-w-2xl mx-auto mb-6 font-mono">
          {tagline}
        </Text>
      )}
      <nav
        className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm"
        aria-label="Contact and links"
      >
        {links.map((item) =>
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="relative text-text-muted hover:text-accent transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ) : (
            <span key={item.label} className="text-text-muted">
              {item.label}
            </span>
          )
        )}
      </nav>
    </header>
  )
}
