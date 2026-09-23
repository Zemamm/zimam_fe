import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { motion, useReducedMotion } from 'framer-motion'
import { UiContainer, UiHeading, UiSection, UiText } from '@/design-system'
import { landingContent } from '../data/content'
import { whyZimamReasons } from '../data/whyZimam'
import { whyZimamSectionStyles } from './WhyZimamSection.styles'

export function WhyZimamSection() {
  const reduceMotion = useReducedMotion()

  return (
    <UiSection id="why-zimam" sx={whyZimamSectionStyles.root}>
      <UiContainer>
        <Stack
          component={motion.div}
          spacing={1.5}
          sx={whyZimamSectionStyles.intro}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <UiHeading variant="h2" component="h2" sx={whyZimamSectionStyles.title}>
            {landingContent.whyZimamTitle}
          </UiHeading>
          <UiText sx={whyZimamSectionStyles.support}>{landingContent.whyZimamSupport}</UiText>
        </Stack>

        <Box sx={whyZimamSectionStyles.grid}>
          {whyZimamReasons.map((reason, index) => (
            <Stack
              key={reason.id}
              component={motion.div}
              sx={whyZimamSectionStyles.item}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: 0.06 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <UiText sx={whyZimamSectionStyles.index}>
                {String(index + 1).padStart(2, '0')}
              </UiText>
              <UiText sx={whyZimamSectionStyles.itemTitle}>{reason.title}</UiText>
              <UiText sx={whyZimamSectionStyles.itemDescription}>{reason.description}</UiText>
            </Stack>
          ))}
        </Box>
      </UiContainer>
    </UiSection>
  )
}
