import React from 'react'
import { Container } from '../ui'

/**
 * Always-dark footer/contact block regardless of the active theme,
 * as a fixed brand bookend.
 */
export function ContactFooter({ profile }) {
  const { email, phone, location, linkedin, github } = profile

  return (
    <footer id="contact" className="bg-[#0d0d10] text-[#f2f1ec] py-20 sm:py-28">
      <Container size="lg">
        <p className="font-mono text-xs uppercase tracking-widest text-[#8ea2ff] mb-4">§ 06 Contact</p>
        <p className="text-[#92929c] max-w-md mb-8">
          Open to Software Engineering and AI/ML roles — reach out directly or via the channels below.
        </p>
        <h2 className="font-display font-bold tracking-tight text-4xl sm:text-6xl leading-[0.95] mb-14">
          Let&apos;s build
          <br />
          something real.
        </h2>

        <div className="grid sm:grid-cols-3 gap-8 border-t border-white/15 pt-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#8ea2ff] mb-2">Email</p>
            <a href={`mailto:${email}`} className="hover:text-[#8ea2ff] transition-colors break-all">{email}</a>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#8ea2ff] mb-2">Phone</p>
            <a href={`tel:${phone?.replace(/\D/g, '')}`} className="hover:text-[#8ea2ff] transition-colors">{phone}</a>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#8ea2ff] mb-2">Location</p>
            <span>{location}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 font-mono text-xs uppercase tracking-widest">
          {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-[#92929c] hover:text-[#f2f1ec] transition-colors">LinkedIn ↗</a>}
          {github && <a href={github} target="_blank" rel="noopener noreferrer" className="text-[#92929c] hover:text-[#f2f1ec] transition-colors">GitHub ↗</a>}
        </div>

        <p className="mt-16 font-mono text-xs text-[#5a5a63]">Built end-to-end · React + Tailwind</p>
      </Container>
    </footer>
  )
}
