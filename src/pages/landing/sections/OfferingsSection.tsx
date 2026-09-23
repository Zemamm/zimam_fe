import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { motion, useReducedMotion } from 'framer-motion'
import { UiContainer, UiHeading, UiText } from '@/design-system'
import { OfferingCard } from '../components/OfferingCard'
import { landingContent } from '../data/content'
import { offerings } from '../data/offerings'
import { offeringsSectionStyles } from './OfferingsSection.styles'

const CARD_CORNER_OFFSETS = [
  { x: -96, y: -96 }, // top-left
  { x: 96, y: -96 }, // top-right
  { x: -96, y: 96 }, // bottom-left
  { x: 96, y: 96 }, // bottom-right
] as const

function getCornerOffset(index: number) {
  return CARD_CORNER_OFFSETS[index % CARD_CORNER_OFFSETS.length]
}

export function OfferingsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <Box id="offerings" component="section" sx={offeringsSectionStyles.root}>
      <Box sx={offeringsSectionStyles.topGlow} />

      <UiContainer>
        <Box
          component={motion.p}
          sx={offeringsSectionStyles.outlineTitle}
          initial={reduceMotion ? false : { opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          {landingContent.offeringsOutlineTitle}
        </Box>

        <Box
          component={motion.div}
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <Stack spacing={1.5} sx={offeringsSectionStyles.intro}>
            <UiHeading
              variant="h2"
              component="h2"
              sx={offeringsSectionStyles.introTitle}
            >
              {landingContent.offeringsTitle}
            </UiHeading>
            <UiText sx={offeringsSectionStyles.introSupport}>
              {landingContent.offeringsSupport}
            </UiText>
          </Stack>
        </Box>

        <Box sx={offeringsSectionStyles.grid}>
          {offerings.map((offering, index) => {
            const corner = getCornerOffset(index)

            return (
              <Box
                key={offering.id}
                component={motion.div}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, x: corner.x, y: corner.y, scale: 0.92 }
                }
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 1.35,
                  delay: 0.2 + index * 0.22,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <OfferingCard offering={offering} />
              </Box>
            )
          })}
        </Box>
      </UiContainer>
    </Box>
  )
}
