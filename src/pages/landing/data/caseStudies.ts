export type CaseStudy = {
  id: string
  category: string
  title: string
  summary: string
  outcome: string
}

export const caseStudies: readonly CaseStudy[] = [
  {
    id: 'saas-ops',
    category: 'SaaS',
    title: 'Operations platform for growing teams',
    summary:
      'Designed and shipped a multi-tenant SaaS product with role-based access, billing-ready foundations, and a clear admin experience.',
    outcome: 'MVP to production in one release cycle',
  },
  {
    id: 'desktop-tools',
    category: 'Desktop',
    title: 'Cross-platform desktop workflow tool',
    summary:
      'Built a desktop application focused on speed and offline reliability for daily operational workflows.',
    outcome: 'Faster day-to-day task completion',
  },
  {
    id: 'mobile-commerce',
    category: 'Mobile',
    title: 'Customer mobile app with live updates',
    summary:
      'Delivered an iOS and Android app with polished UX, secure APIs, and push-ready product foundations.',
    outcome: 'Higher engagement after launch',
  },
  {
    id: 'website-upgrade',
    category: 'Website',
    title: 'Website modernization and feature upgrades',
    summary:
      'Enhanced an existing customer website with performance work, UX improvements, and new conversion-focused features.',
    outcome: 'Stronger conversion and page speed',
  },
]
