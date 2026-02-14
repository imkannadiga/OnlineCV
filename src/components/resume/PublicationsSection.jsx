import React from 'react'
import { Section, Card, Text } from '../ui'

/**
 * Renders publications/citations from resume data.
 */
export function PublicationsSection({ publications, sectionTitle = 'Publications' }) {
  if (!publications?.length) return null
  return (
    <Section id="publications" title={sectionTitle}>
      <ul className="space-y-4" role="list">
        {publications.map((citation, i) => (
          <li key={i}>
            <Card>
              <Text className="text-slate-300 text-sm leading-relaxed italic">
                {citation}
              </Text>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  )
}
