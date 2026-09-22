import Stack from '@mui/material/Stack'
import {
  UiButton,
  UiContainer,
  UiHeading,
  UiSection,
  UiText,
} from '@/design-system'
import { landingContent } from '../data/content'
import { heroSectionStyles } from './HeroSection.styles'

export function HeroSection() {
  return (
    <UiSection sx={heroSectionStyles.root}>
      <UiContainer>
        <Stack spacing={3} sx={heroSectionStyles.content}>
          <UiHeading variant="h1" component="h1" sx={heroSectionStyles.brand}>
            {landingContent.brand}
          </UiHeading>
          <UiHeading variant="h3" component="p" sx={heroSectionStyles.headline}>
            {landingContent.headline}
          </UiHeading>
          <UiText sx={heroSectionStyles.support}>{landingContent.support}</UiText>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
            <UiButton size="large" href="#offerings">
              Explore offerings
            </UiButton>
            <UiButton size="large" variant="outlined" color="secondary" href="#contact">
              Start a project
            </UiButton>
          </Stack>
        </Stack>
      </UiContainer>
    </UiSection>
  )
}
