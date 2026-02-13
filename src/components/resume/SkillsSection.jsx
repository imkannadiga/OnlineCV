import React from 'react'
import { Section, Badge } from '../ui'

/**
 * Renders skills grouped by category with badges.
 */
export function SkillsSection({ skills, sectionTitle = 'Skills' }) {
  return (
    <Section id="skills" title={sectionTitle}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category} className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <Badge key={skill} variant={group.category === 'Frontend' ? 'accent' : 'default'}>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
