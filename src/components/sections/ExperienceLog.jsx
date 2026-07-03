import React from 'react'
import { Container } from '../ui'
import { SectionHeading } from './SectionHeading'

function splitHighlight(text) {
  const idx = text.indexOf(':')
  if (idx === -1) return { label: null, rest: text }
  return { label: text.slice(0, idx), rest: text.slice(idx + 1).trim() }
}

export function ExperienceLog({ experiences }) {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <Container size="lg">
        <SectionHeading index={2} title="Experience" subtitle="Most recent first. Every run logged." />

        <ul className="flex flex-col" role="list">
          {experiences.map((job, i) => {
            const isCurrent = job.endDate === 'Present'
            return (
              <li key={job.id} className="border-b border-border py-10 first:pt-0 last:border-0">
                <div className="grid sm:grid-cols-[140px_1fr] gap-4 sm:gap-8">
                  <div>
                    <p className="font-mono text-xs text-text-muted mb-3">{`RUN-0${i + 1}`}</p>
                    <span
                      className={`inline-flex items-center gap-1.5 border font-mono text-xs px-2.5 py-1 ${
                        isCurrent ? 'border-ok/40 text-ok' : 'border-border text-text-muted'
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${isCurrent ? 'bg-ok' : 'bg-text-muted'}`} aria-hidden="true" />
                      {isCurrent ? 'Running' : 'Complete'}
                    </span>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-display text-2xl font-bold text-text">{job.role}</h3>
                      <span className="font-mono text-xs text-text-muted">
                        {job.startDate} — {job.endDate} · {job.location}
                      </span>
                    </div>
                    <p className="text-accent font-medium mb-4">{job.company}</p>
                    <ul className="flex flex-col gap-2" role="list">
                      {job.highlights.map((h, hi) => {
                        const { label, rest } = splitHighlight(h)
                        return (
                          <li key={hi} className="flex gap-3 text-text-muted leading-relaxed">
                            <span className="text-accent shrink-0" aria-hidden="true">→</span>
                            <span>
                              {label && <span className="text-text font-medium">{label}: </span>}
                              {rest}
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
