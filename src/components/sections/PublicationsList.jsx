import React from 'react'
import { Container } from '../ui'
import { SectionHeading } from './SectionHeading'

export function PublicationsList({ publications }) {
  if (!publications?.length) return null
  return (
    <section id="publications" className="py-16 sm:py-24">
      <Container size="lg">
        <SectionHeading index={5} title="Publications" />

        <ul className="flex flex-col gap-4" role="list">
          {publications.map((citation, i) => (
            <li key={i} className="border border-border p-6 flex gap-4">
              <span className="font-mono text-xs text-accent shrink-0">{`PUB-0${i + 1}`}</span>
              <p className="text-text-muted leading-relaxed italic">{citation}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
