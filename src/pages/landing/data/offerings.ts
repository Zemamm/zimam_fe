export type OfferingKind = 'saas' | 'desktop'

export type Offering = {
  id: string
  kind: OfferingKind
  title: string
  summary: string
  highlights: readonly string[]
}

export const offerings: readonly Offering[] = [
  {
    id: 'saas',
    kind: 'saas',
    title: 'SaaS Products',
    summary:
      'We design and build scalable software-as-a-service platforms from idea to production.',
    highlights: [
      'Multi-tenant architecture',
      'Subscription-ready product foundations',
      'Secure, cloud-native delivery',
    ],
  },
  {
    id: 'desktop',
    kind: 'desktop',
    title: 'Desktop Applications',
    summary:
      'We craft reliable desktop applications with polished UX for Windows, macOS, and cross-platform needs.',
    highlights: [
      'Native-feel experiences',
      'Offline-capable workflows',
      'Performance-focused engineering',
    ],
  },
]
