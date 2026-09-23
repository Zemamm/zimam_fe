import Stack from '@mui/material/Stack'
import { UiHeading, UiText } from '@/design-system'
import type { Offering } from '../data/offerings'
import { offeringCardStyles } from './OfferingCard.styles'

type OfferingCardProps = {
  offering: Offering
}

export function OfferingCard({ offering }: OfferingCardProps) {
  return (
    <Stack component="article" spacing={1.5} sx={offeringCardStyles.root}>
      <UiText variant="overline" sx={offeringCardStyles.kind}>
        {offering.kind === 'saas' ? 'SaaS' : 'Desktop'}
      </UiText>
      <UiHeading variant="h4" component="h3" sx={offeringCardStyles.title}>
        {offering.title}
      </UiHeading>
      <UiText sx={offeringCardStyles.summary}>{offering.summary}</UiText>
      <Stack component="ul" spacing={0.75} sx={offeringCardStyles.list}>
        {offering.highlights.map((highlight) => (
          <UiText key={highlight} component="li" variant="body2" sx={offeringCardStyles.summary}>
            {highlight}
          </UiText>
        ))}
      </Stack>
    </Stack>
  )
}
