export type OfferingKind = 'saas' | 'desktop' | 'mobile' | 'website'

export type Offering = {
  id: string
  kind: OfferingKind
  title: string
  summary: string
  highlights: readonly string[]
}
