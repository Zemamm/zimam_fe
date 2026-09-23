import type { CaseStudy } from '../data/caseStudies'
import type { ContactFormValues } from '../data/contactForm'
import type { FaqItem } from '../data/faq'
import type { Offering, OfferingKind } from '../data/offerings'
import type { WhyZimamReason } from '../data/whyZimam'

export type LandingContent = {
  brand: string
  brandMark: string
  brandSuffix: string
  eyebrow: string
  headlineLine1: string
  headlineLine2: string
  support: string
  primaryCta: string
  secondaryCta: string
  languageLabel: string
  scrollHint: string
  navLinks: readonly { label: string; href: string }[]
  navOutlineLink: { label: string; href: string }
  heroFeatures: readonly string[]
  offeringsTitle: string
  offeringsOutlineTitle: string
  offeringsSupport: string
  whyZimamTitle: string
  whyZimamSupport: string
  caseStudiesTitle: string
  caseStudiesSupport: string
  faqTitle: string
  faqSupport: string
  contactTitle: string
  contactSupport: string
  contactEmail: string
  contactFormTitle: string
  contactFormSubmit: string
  contactFormSending: string
  contactFormSuccess: string
  contactFormError: string
  contactFieldName: string
  contactFieldEmail: string
  contactFieldPhone: string
  contactFieldService: string
  contactFieldMessage: string
  footerDescription: string
  footerFollowLabel: string
  footerWatermark: string
  footerSocial: readonly { id: 'linkedin' | 'instagram' | 'tiktok' | 'facebook'; label: string; href: string }[]
  footerCopyright: string
}

export type ContactFormMessages = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export type LandingCopy = {
  content: LandingContent
  faqItems: readonly FaqItem[]
  offerings: readonly Offering[]
  offeringKindLabels: Record<OfferingKind, string>
  whyZimamReasons: readonly WhyZimamReason[]
  caseStudies: readonly CaseStudy[]
  contactServiceOptions: readonly { value: ContactFormValues['service']; label: string }[]
  contactFormMessages: ContactFormMessages
}
