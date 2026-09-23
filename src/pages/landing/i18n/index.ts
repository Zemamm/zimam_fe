import { arCopy } from './ar'
import type { LandingCopy } from './copyTypes'
import { enCopy } from './en'
import type { Locale } from './types'

export const landingCopyByLocale: Record<Locale, LandingCopy> = {
  en: enCopy,
  ar: arCopy,
}

export function getLandingCopy(locale: Locale): LandingCopy {
  return landingCopyByLocale[locale]
}
