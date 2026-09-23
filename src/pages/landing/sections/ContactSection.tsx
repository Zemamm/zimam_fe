import Stack from '@mui/material/Stack'
import { UiContainer, UiHeading, UiSection, UiText } from '@/design-system'
import { ContactForm } from '../components/ContactForm'
import { useLandingCopy } from '../i18n/LocaleProvider'
import { contactSectionStyles } from './ContactSection.styles'
import { motion, useReducedMotion } from 'framer-motion'

export function ContactSection() {
  const reduceMotion = useReducedMotion()
  const { content } = useLandingCopy()

  return (
    <UiSection id="contact" sx={contactSectionStyles.root}>
      <UiContainer>
        <Stack sx={contactSectionStyles.layout}>
          <Stack
            component={motion.div}
            spacing={2}
            sx={contactSectionStyles.intro}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <UiHeading variant="h2" component="h2" sx={contactSectionStyles.title}>
              {content.contactTitle}
            </UiHeading>
            <UiText sx={contactSectionStyles.support}>{content.contactSupport}</UiText>
          </Stack>

          <Stack
            component={motion.div}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <ContactForm />
          </Stack>
        </Stack>
      </UiContainer>
    </UiSection>
  )
}
