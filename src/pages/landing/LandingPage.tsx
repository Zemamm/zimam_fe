import Box from '@mui/material/Box'
import { Navbar } from './components/Navbar'
import { ContactSection } from './sections/ContactSection'
import { FaqSection } from './sections/FaqSection'
import { HeroSection } from './sections/HeroSection'
import { OfferingsSection } from './sections/OfferingsSection'
import { SiteFooter } from './sections/SiteFooter'
import { landingPageStyles } from './LandingPage.styles'

export function LandingPage() {
  return (
    <Box component="main" sx={landingPageStyles.main}>
      <Navbar />
      <HeroSection />
      <OfferingsSection />
      <Box sx={landingPageStyles.tailBand}>
        <FaqSection />
        <ContactSection />
        <SiteFooter />
      </Box>
    </Box>
  )
}
