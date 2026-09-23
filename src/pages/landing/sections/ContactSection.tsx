import Stack from '@mui/material/Stack'
import {
  UiButton,
  UiContainer,
  UiHeading,
  UiSection,
  UiText,
} from '@/design-system'
import { landingContent } from '../data/content'
import { contactSectionStyles } from './ContactSection.styles'

export function ContactSection() {
  return (
    <UiSection id="contact" sx={contactSectionStyles.root}>
      <UiContainer narrow>
        <Stack spacing={2} sx={contactSectionStyles.content}>
          <UiHeading variant="h2" component="h2" sx={contactSectionStyles.title}>
            {landingContent.contactTitle}
          </UiHeading>
          <UiText sx={contactSectionStyles.support}>
            {landingContent.contactSupport}
          </UiText>
          <UiButton size="large" href={landingContent.contactEmail}>
            Contact Zimam
          </UiButton>
        </Stack>
      </UiContainer>
    </UiSection>
  )
}
