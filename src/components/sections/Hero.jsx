import React from 'react'
import { Container, Button } from '../ui'

/**
 * Hero / spec-sheet header: big name, meta table, photo, CTAs.
 */
export function Hero({ profile }) {
  const { name, title, email, phone, location, linkedin, github, avatar, status, focus, deployedAt, stack } = profile

  const [role] = title.split('|')

  const rows = [
    { label: 'Class', value: role.trim() },
    { label: 'Focus', value: focus },
    { label: 'Stack', value: stack?.join(' · ') },
    { label: 'Deployed at', value: deployedAt?.join(' · ') },
    { label: 'Location', value: location },
    {
      label: 'Status',
      value: (
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />
          {status}
        </span>
      ),
    },
  ]

  return (
    <section id="overview-hero" className="pt-14 sm:pt-20 pb-10">
      <Container size="lg">
        <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-6">
          Technical specification · Human, generally reliable
        </p>

        <h1 className="font-display font-bold tracking-tight text-text text-5xl sm:text-7xl leading-[0.95] mb-8">
          {name.split(' ')[0]}
          <br />
          {name.split(' ').slice(1).join(' ')}
        </h1>

        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start">
          <dl className="border-t border-border">
            {rows.map((row) => (
              <div key={row.label} className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-4 py-4 border-b border-border">
                <dt className="font-mono text-xs uppercase tracking-widest text-text-muted pt-1">{row.label}</dt>
                <dd className="text-text text-base sm:text-lg">{row.value}</dd>
              </div>
            ))}
          </dl>

          {avatar && (
            <img
              src={`${import.meta.env.BASE_URL}${avatar}`}
              alt={name}
              className="w-full sm:w-64 lg:w-72 aspect-[4/5] object-cover border border-border grayscale-[15%]"
              loading="eager"
            />
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-10">
          <Button as="a" href="#projects" variant="solid">
            View Projects
          </Button>
          <Button as="a" href="#contact" variant="outline">
            Contact Me
          </Button>
          <div className="flex-1" />
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-widest">
            <a href={`mailto:${email}`} className="text-text-muted hover:text-text transition-colors">Email</a>
            <a href={`tel:${phone?.replace(/\D/g, '')}`} className="text-text-muted hover:text-text transition-colors">Phone</a>
            {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text transition-colors">LinkedIn ↗</a>}
            {github && <a href={github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text transition-colors">GitHub ↗</a>}
          </div>
        </div>
      </Container>
    </section>
  )
}
