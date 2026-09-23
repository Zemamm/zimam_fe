import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { motion, useReducedMotion } from 'framer-motion'
import { UiContainer, UiHeading, UiText } from '@/design-system'
import { OfferingCard } from '../components/OfferingCard'
import { landingContent } from '../data/content'
import { offerings } from '../data/offerings'
import { offeringsSectionStyles } from './OfferingsSection.styles'

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
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
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

          <Box sx={offeringsSectionStyles.grid}>
            {offerings.map((offering, index) => (
              <Box
                key={offering.id}
                component={motion.div}
                initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: 0.15 + index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <OfferingCard offering={offering} />
              </Box>
            ))}
          </Box>
        </Box>
      </UiContainer>
    </Box>
  )
}
