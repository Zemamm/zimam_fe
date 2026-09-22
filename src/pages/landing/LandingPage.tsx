import Box from '@mui/material/Box'
import { ContactSection } from './sections/ContactSection'
import { HeroSection } from './sections/HeroSection'
import { OfferingsSection } from './sections/OfferingsSection'
import { SiteFooter } from './sections/SiteFooter'
import { landingPageStyles } from './LandingPage.styles'

export function LandingPage() {
  return (
    <Box component="main" sx={landingPageStyles.main}>
      <HeroSection />
      <OfferingsSection />
      <ContactSection />
      <SiteFooter />
    </Box>
  )
}
