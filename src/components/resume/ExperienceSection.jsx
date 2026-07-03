import React from 'react'
import { Section, Card, Heading, Text } from '../ui'

/**
 * Renders the experience list from resume data.
 */
export function ExperienceSection({ experiences, sectionTitle = 'Experience' }) {
  return (
    <Section id="experience" title={sectionTitle}>
      <ul className="space-y-6" role="list">
        {experiences.map((job) => (
          <li key={job.id}>
            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <Heading level={3} className="text-lg text-text">
                  {job.role}
                </Heading>
                <span className="text-sm text-text-muted font-mono">
                  {job.startDate}
                  {job.endDate && job.endDate !== job.startDate ? ` — ${job.endDate}` : ''}
                </span>
              </div>
              {(job.company || job.location) && (
                <p className="text-primary font-medium text-sm mb-3">
                  {job.company}
                  {job.company && job.location && ` · `}
                  {job.location}
                </p>
              )}
              {job.highlights && job.highlights.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-text text-sm">
                  {job.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  )
}
