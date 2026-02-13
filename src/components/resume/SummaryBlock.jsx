import React from 'react'
import { Section, Text } from '../ui'

/**
 * Short summary / about paragraph.
 */
export function SummaryBlock({ summary, sectionTitle = 'About' }) {
  if (!summary?.trim()) return null
  return (
    <Section id="summary" title={sectionTitle}>
      <Text className="text-slate-300 leading-relaxed max-w-3xl">
        {summary}
      </Text>
    </Section>
  )
}
