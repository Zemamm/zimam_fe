import Box from '@mui/material/Box'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { landingContent } from '../data/content'
import { heroTitleStyles } from './HeroTitle.styles'

const titleViewport = { once: false, amount: 0.55 } as const

const lineVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

const wordMaskVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

const wordVariants: Variants = {
  hidden: {
    y: '115%',
    opacity: 0,
    rotateX: 18,
  },
  visible: {
    y: '0%',
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const underlineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      delay: 0.75,
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const glowVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.45,
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

type TitleLineProps = {
  text: string
  accentLastWord?: boolean
}

function TitleLine({ text, accentLastWord = false }: TitleLineProps) {
  const words = text.split(' ')

  return (
    <Box
      component={motion.span}
      variants={wordMaskVariants}
      sx={heroTitleStyles.line}
    >
      {words.map((word, index) => {
        const isAccent = accentLastWord && index === words.length - 1

        return (
          <Box
            key={`${word}-${index}`}
            component="span"
            sx={heroTitleStyles.wordMask}
          >
            <Box
              component={motion.span}
              variants={wordVariants}
              sx={[
                heroTitleStyles.word,
                isAccent ? heroTitleStyles.accentWord : null,
              ]}
            >
              {word}
              {isAccent ? <Box component="span" sx={heroTitleStyles.shimmer} /> : null}
            </Box>
            {index < words.length - 1 ? '\u00A0' : ''}
          </Box>
        )
      })}
    </Box>
  )
}

export function HeroTitle() {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return (
      <Box component="h1" sx={heroTitleStyles.root}>
        <Box component="span" sx={heroTitleStyles.line}>
          {landingContent.headlineLine1}
        </Box>
        <Box component="span" sx={heroTitleStyles.line}>
          {landingContent.headlineLine2}
        </Box>
      </Box>
    )
  }

  return (
    <Box
      component={motion.h1}
      sx={heroTitleStyles.root}
      variants={lineVariants}
      initial="hidden"
      whileInView="visible"
      viewport={titleViewport}
    >
      <Box component={motion.span} variants={glowVariants} sx={heroTitleStyles.glowBloom} />

      <TitleLine text={landingContent.headlineLine1} />
      <TitleLine text={landingContent.headlineLine2} accentLastWord />

      <Box
        component={motion.span}
        variants={underlineVariants}
        sx={heroTitleStyles.underline}
      />
    </Box>
  )
}
