import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { UiContainer, UiHeading, UiSection, UiText } from '@/design-system'
import { OfferingCard } from '../components/OfferingCard'
import { landingContent } from '../data/content'
import { offerings } from '../data/offerings'
import { offeringsSectionStyles } from './OfferingsSection.styles'

export function OfferingsSection() {
  return (
    <UiSection id="offerings" sx={offeringsSectionStyles.root}>
      <UiContainer>
        <Stack spacing={4}>
          <Stack spacing={1.5} sx={offeringsSectionStyles.intro}>
            <UiHeading variant="h2" component="h2">
              {landingContent.offeringsTitle}
            </UiHeading>
            <UiText>{landingContent.offeringsSupport}</UiText>
          </Stack>

          <Box sx={offeringsSectionStyles.grid}>
            {offerings.map((offering) => (
              <OfferingCard key={offering.id} offering={offering} />
            ))}
          </Box>
        </Stack>
      </UiContainer>
    </UiSection>
  )
}
