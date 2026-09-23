import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { UiContainer, UiHeading, UiSection, UiText } from '@/design-system'
import { landingContent } from '../data/content'
import { faqItems } from '../data/faq'
import { faqSectionStyles } from './FaqSection.styles'

export function FaqSection() {
  const reduceMotion = useReducedMotion()
  const [expandedId, setExpandedId] = useState<string | false>(faqItems[0]?.id ?? false)

  return (
    <UiSection id="faq" sx={faqSectionStyles.root}>
      <UiContainer>
        <Stack
          component={motion.div}
          spacing={1.5}
          sx={faqSectionStyles.intro}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <UiHeading variant="h2" component="h2" sx={faqSectionStyles.title}>
            {landingContent.faqTitle}
          </UiHeading>
          <UiText sx={faqSectionStyles.support}>{landingContent.faqSupport}</UiText>
        </Stack>

        <Box sx={faqSectionStyles.list}>
          {faqItems.map((item, index) => (
            <Box
              key={item.id}
              component={motion.div}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: 0.06 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Accordion
                disableGutters
                expanded={expandedId === item.id}
                onChange={(_, isExpanded) => {
                  setExpandedId(isExpanded ? item.id : false)
                }}
                sx={faqSectionStyles.item}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreRoundedIcon />}
                  sx={faqSectionStyles.summary}
                  aria-controls={`${item.id}-content`}
                  id={`${item.id}-header`}
                >
                  <UiText sx={faqSectionStyles.question}>{item.question}</UiText>
                </AccordionSummary>
                <AccordionDetails sx={faqSectionStyles.details}>
                  <UiText sx={faqSectionStyles.answer}>{item.answer}</UiText>
                </AccordionDetails>
              </Accordion>
            </Box>
          ))}
        </Box>
      </UiContainer>
    </UiSection>
  )
}
