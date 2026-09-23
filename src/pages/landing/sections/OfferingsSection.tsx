import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { UiContainer, UiHeading, UiText } from '@/design-system'
import { OfferingCard } from '../components/OfferingCard'
import { useLandingCopy } from '../i18n/LocaleProvider'
import { offeringsSectionStyles } from './OfferingsSection.styles'

const CARD_CORNER_OFFSETS = [
  { x: -96, y: -96 },
  { x: 96, y: -96 },
  { x: -96, y: 96 },
  { x: 96, y: 96 },
] as const

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.28,
    },
  },
}

const cardVariants: Variants = {
  hidden: (index: number) => {
    const corner = CARD_CORNER_OFFSETS[index % CARD_CORNER_OFFSETS.length]

    return {
      opacity: 0,
      x: corner.x,
      y: corner.y,
      scale: 0.92,
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const outlineTitleVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.05,
    },
  },
}

const outlineLetterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export function OfferingsSection() {
  const reduceMotion = useReducedMotion()
  const { content, offerings } = useLandingCopy()
  const outlineLetters = Array.from(content.offeringsOutlineTitle)

  return (
    <Box id="offerings" component="section" sx={offeringsSectionStyles.root}>
      <Box sx={offeringsSectionStyles.topGlow} />

      <UiContainer>
        <Box
          component={motion.p}
          sx={offeringsSectionStyles.outlineTitle}
          variants={reduceMotion ? undefined : outlineTitleVariants}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: false, amount: 0.45 }}
          aria-label={content.offeringsOutlineTitle}
        >
          {reduceMotion
            ? content.offeringsOutlineTitle
            : outlineLetters.map((letter, index) =>
                letter === ' ' ? (
                  <Box
                    key={`space-${index}`}
                    component="span"
                    sx={offeringsSectionStyles.outlineSpace}
                    aria-hidden
                  />
                ) : (
                  <Box
                    key={`${letter}-${index}`}
                    component={motion.span}
                    variants={outlineLetterVariants}
                    sx={offeringsSectionStyles.outlineLetter}
                    aria-hidden
                  >
                    {letter}
                  </Box>
                ),
              )}
        </Box>

        <Box
          component={motion.div}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <Stack spacing={1.5} sx={offeringsSectionStyles.intro}>
            <UiHeading variant="h2" component="h2" sx={offeringsSectionStyles.introTitle}>
              {content.offeringsTitle}
            </UiHeading>
            <UiText sx={offeringsSectionStyles.introSupport}>{content.offeringsSupport}</UiText>
          </Stack>
        </Box>

        <Box
          component={motion.div}
          sx={offeringsSectionStyles.grid}
          variants={reduceMotion ? undefined : gridVariants}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: false, amount: 0.25 }}
        >
          {offerings.map((offering, index) => (
            <Box
              key={offering.id}
              component={motion.div}
              custom={index}
              variants={reduceMotion ? undefined : cardVariants}
              sx={offeringsSectionStyles.cardMotion}
            >
              <OfferingCard offering={offering} />
            </Box>
          ))}
        </Box>
      </UiContainer>
    </Box>
  )
}
