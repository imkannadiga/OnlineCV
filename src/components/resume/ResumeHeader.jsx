import React from 'react'
import { Heading, Text } from '../ui'

/**
 * Resume header: name, title, tagline, and contact bar.
 */
export function ResumeHeader({ profile }) {
  const { name, title, tagline, email, phone, location, website, linkedin, github } = profile

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
      <Heading level={1} gradient className="text-4xl sm:text-5xl mb-2">
        {name}
      </Heading>
      <Text as="p" className="text-xl text-indigo-300 font-medium mb-1">
        {title}
      </Text>
      {tagline && (
        <Text muted className="text-base max-w-2xl mx-auto mb-6">
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
              className="text-slate-400 hover:text-pink-400 transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span key={item.label} className="text-slate-500">
              {item.label}
            </span>
          )
        )}
      </nav>
    </header>
  )
}
