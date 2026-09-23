export type Locale = 'en' | 'ar'

export type LocaleDirection = 'ltr' | 'rtl'

export const LOCALES: readonly Locale[] = ['en', 'ar'] as const

export const localeMeta: Record<
  Locale,
  { label: string; shortLabel: string; direction: LocaleDirection; htmlLang: string }
> = {
  en: {
    label: 'English',
    shortLabel: 'EN',
    direction: 'ltr',
    htmlLang: 'en',
  },
  ar: {
    label: 'العربية',
    shortLabel: 'ع',
    direction: 'rtl',
    htmlLang: 'ar',
  },
}

export const LOCALE_STORAGE_KEY = 'zimam-locale'
