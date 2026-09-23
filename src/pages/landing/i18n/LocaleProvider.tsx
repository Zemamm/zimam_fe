import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { getLandingCopy } from './index'
import type { LandingCopy } from './copyTypes'
import {
  LOCALE_STORAGE_KEY,
  localeMeta,
  type Locale,
  type LocaleDirection,
} from './types'

type LocaleContextValue = {
  locale: Locale
  direction: LocaleDirection
  copy: LandingCopy
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function readStoredLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    if (stored === 'en' || stored === 'ar') {
      return stored
    }
  } catch {
    // Ignore storage access errors.
  }

  return 'en'
}

type LocaleProviderProps = {
  children: ReactNode
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(() =>
    typeof window === 'undefined' ? 'en' : readStoredLocale(),
  )

  const direction = localeMeta[locale].direction
  const copy = useMemo(() => getLandingCopy(locale), [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next)
    } catch {
      // Ignore storage access errors.
    }
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'en' ? 'ar' : 'en')
  }, [locale, setLocale])

  useEffect(() => {
    document.documentElement.lang = localeMeta[locale].htmlLang
    document.documentElement.dir = direction
  }, [direction, locale])

  const value = useMemo(
    () => ({
      locale,
      direction,
      copy,
      setLocale,
      toggleLocale,
    }),
    [copy, direction, locale, setLocale, toggleLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return context
}

export function useLandingCopy() {
  return useLocale().copy
}
