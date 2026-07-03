import React from 'react'
import { Section, Card, Heading, Text } from '../ui'

/**
 * Renders education entries from resume data.
 */
export function EducationSection({ education, sectionTitle = 'Education' }) {
  return (
    <Section id="education" title={sectionTitle}>
      <ul className="space-y-4" role="list">
        {education.map((item) => (
          <li key={item.id}>
            <Card>
              <Heading level={3} className="text-lg text-text mb-1">
                {item.degree}
              </Heading>
              <p className="text-primary font-medium text-sm">
                {item.school}
                {item.location && ` · ${item.location}`}
              </p>
              {item.year && (
                <Text muted className="text-xs mt-1 font-mono">
                  {item.year}
                </Text>
              )}
              {item.highlights && item.highlights.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-text text-sm mt-2">
                  {item.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
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
