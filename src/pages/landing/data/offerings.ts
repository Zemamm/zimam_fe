export type OfferingKind = 'saas' | 'desktop' | 'mobile' | 'website'

export type Offering = {
  id: string
  kind: OfferingKind
  title: string
  summary: string
  highlights: readonly string[]
}

export const offeringKindLabels: Record<OfferingKind, string> = {
  saas: 'SaaS',
  desktop: 'Desktop',
  mobile: 'Mobile',
  website: 'Website',
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
  {
    id: 'mobile',
    kind: 'mobile',
    title: 'Mobile Applications',
    summary:
      'We build mobile apps that feel fast, clear, and ready for App Store and Google Play.',
    highlights: [
      'iOS and Android delivery',
      'Smooth, intuitive interfaces',
      'Secure APIs and push-ready foundations',
    ],
  },
  {
    id: 'website',
    kind: 'website',
    title: 'Website Enhancement',
    summary:
      'We improve existing customer websites — performance, UX, and new features that drive results.',
    highlights: [
      'Feature additions and redesigns',
      'Performance and conversion upgrades',
      'Integrations with your tools and workflows',
    ],
  },
]
