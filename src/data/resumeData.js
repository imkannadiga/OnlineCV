/**
 * Sample resume data. Replace with your own or load from API/JSON.
 */
export const resumeData = {
  profile: {
    name: 'Alex Rivera',
    title: 'Senior Frontend Engineer',
    tagline: 'Building fast, accessible, and delightful web experiences',
    email: 'alex.rivera@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    website: 'https://alexrivera.dev',
    linkedin: 'https://linkedin.com/in/alexrivera',
    github: 'https://github.com/alexrivera',
    avatar: null, // optional: URL or path to image
  },
  summary: `Frontend expert with 8+ years building React applications and design systems. Passionate about performance, accessibility, and clean architecture. Previously at tech startups and product companies.`,

  experience: [
    {
      id: '1',
      role: 'Senior Frontend Engineer',
      company: 'TechFlow Inc.',
      location: 'Remote',
      startDate: '2021',
      endDate: 'Present',
      highlights: [
        'Led migration to React 18 and Vite; reduced build time by 60%.',
        'Designed and implemented a reusable component library used across 5 products.',
        'Improved Core Web Vitals (LCP, FID) and accessibility (WCAG 2.1 AA).',
      ],
    },
    {
      id: '2',
      role: 'Frontend Developer',
      company: 'StartupLab',
      location: 'San Francisco, CA',
      startDate: '2018',
      endDate: '2021',
      highlights: [
        'Built customer dashboard and real-time analytics views in React.',
        'Collaborated with design on a design system and token-based theming.',
      ],
    },
    {
      id: '3',
      role: 'Web Developer',
      company: 'Digital Agency Co.',
      location: 'New York, NY',
      startDate: '2016',
      endDate: '2018',
      highlights: [
        'Delivered responsive sites and small SPAs for enterprise clients.',
        'Mentored junior developers and established code review practices.',
      ],
    },
  ],

  education: [
    {
      id: '1',
      degree: 'B.S. Computer Science',
      school: 'State University',
      location: 'Boston, MA',
      year: '2016',
    },
  ],

  skills: [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS', 'CSS-in-JS'] },
    { category: 'Tools', items: ['Git', 'Figma', 'Jest', 'Cypress', 'Vercel'] },
    { category: 'Other', items: ['REST APIs', 'GraphQL', 'Accessibility (a11y)', 'Performance'] },
  ],
}
