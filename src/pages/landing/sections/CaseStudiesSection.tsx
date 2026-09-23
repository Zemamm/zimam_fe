import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { motion, useReducedMotion } from 'framer-motion'
import { UiContainer, UiHeading, UiSection, UiText } from '@/design-system'
import { useLandingCopy } from '../i18n/LocaleProvider'
import { caseStudiesSectionStyles } from './CaseStudiesSection.styles'

export function CaseStudiesSection() {
  const reduceMotion = useReducedMotion()
  const { content, caseStudies } = useLandingCopy()

  return (
    <UiSection id="projects" sx={caseStudiesSectionStyles.root}>
      <UiContainer>
        <Stack
          component={motion.div}
          spacing={1.5}
          sx={caseStudiesSectionStyles.intro}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <UiHeading variant="h2" component="h2" sx={caseStudiesSectionStyles.title}>
            {content.caseStudiesTitle}
          </UiHeading>
          <UiText sx={caseStudiesSectionStyles.support}>{content.caseStudiesSupport}</UiText>
        </Stack>

        <Box sx={caseStudiesSectionStyles.list}>
          {caseStudies.map((project, index) => (
            <Box
              key={project.id}
              component={motion.div}
              sx={caseStudiesSectionStyles.item}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: 0.06 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <UiText sx={caseStudiesSectionStyles.category}>{project.category}</UiText>
              <Stack sx={caseStudiesSectionStyles.body}>
                <UiText sx={caseStudiesSectionStyles.itemTitle}>{project.title}</UiText>
                <UiText sx={caseStudiesSectionStyles.itemSummary}>{project.summary}</UiText>
              </Stack>
              <UiText sx={caseStudiesSectionStyles.outcome}>{project.outcome}</UiText>
            </Box>
          ))}
        </Box>
      </UiContainer>
    </UiSection>
  )
}
