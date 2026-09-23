import { ThemeProvider } from '@/design-system'
import { LandingPage } from '@/pages/landing'
import { LocaleProvider, useLocale } from '@/pages/landing/i18n/LocaleProvider'

function AppShell() {
  const { direction } = useLocale()

  return (
    <ThemeProvider direction={direction}>
      <LandingPage />
    </ThemeProvider>
  )
}

export function App() {
  return (
    <LocaleProvider>
      <AppShell />
    </LocaleProvider>
  )
}
