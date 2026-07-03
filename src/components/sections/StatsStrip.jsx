import React from 'react'
import { Container } from '../ui'

export function StatsStrip({ stats }) {
  if (!stats?.length) return null
  return (
    <div className="rule-dotted border-t">
      <Container size="lg">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-border border-b border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 sm:px-8 py-8">
              <p className="font-display text-3xl sm:text-4xl font-bold text-accent">{stat.value}</p>
              <p className="text-sm text-text-muted mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
