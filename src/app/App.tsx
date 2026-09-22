import { ThemeProvider } from '@/design-system'
import { LandingPage } from '@/pages/landing'

export function App() {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  )
}
