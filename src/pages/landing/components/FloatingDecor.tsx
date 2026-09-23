import Box from '@mui/material/Box'
import { motion, useReducedMotion } from 'framer-motion'
import { colors } from '@/design-system/tokens'
import { floatingDecorStyles } from './FloatingDecor.styles'

interface DecorCube {
  label: string
  top: string
  left: string
  delay: number
  duration: number
  rotateX: number
  rotateY: number
  rotateZ: number
}

interface DecorFormula {
  label: string
  top: string
  left: string
  delay: number
  duration: number
  driftX: number
  minOpacity: number
  maxOpacity: number
  isAccent?: boolean
}

const CUBES: readonly DecorCube[] = [
  {
    label: '24',
    top: '64%',
    left: '14%',
    delay: 0.2,
    duration: 2.2,
    rotateX: 22,
    rotateY: -24,
    rotateZ: 8,
  },
  {
    label: '12',
    top: '20%',
    left: '82%',
    delay: 0.4,
    duration: 2.4,
    rotateX: -18,
    rotateY: 26,
    rotateZ: -10,
  },
]

const FORMULAS: readonly DecorFormula[] = [
  // Left quadrant (inspired by Pinterest.mp4)
  { label: '(12+12)', top: '16%', left: '10%', delay: 0.1, duration: 2.0, driftX: 6, minOpacity: 0.35, maxOpacity: 0.7 },
  { label: '-15+6', top: '44%', left: '8%', delay: 0.3, duration: 1.9, driftX: -5, minOpacity: 0.3, maxOpacity: 0.65 },
  { label: '3y', top: '56%', left: '6%', delay: 0.5, duration: 1.8, driftX: 4, minOpacity: 0.25, maxOpacity: 0.55 },
  { label: '{ }', top: '28%', left: '22%', delay: 0.15, duration: 2.3, driftX: -4, minOpacity: 0.2, maxOpacity: 0.5 },
  { label: '01', top: '78%', left: '22%', delay: 0.45, duration: 2.1, driftX: 6, minOpacity: 0.35, maxOpacity: 0.75, isAccent: true },

  // Right quadrant (inspired by Pinterest.mp4)
  { label: '18', top: '14%', left: '72%', delay: 0.2, duration: 2.1, driftX: -6, minOpacity: 0.3, maxOpacity: 0.65 },
  { label: '17+6-4', top: '38%', left: '78%', delay: 0.35, duration: 2.2, driftX: 7, minOpacity: 0.35, maxOpacity: 0.75 },
  { label: '-8', top: '52%', left: '72%', delay: 0.55, duration: 1.9, driftX: -5, minOpacity: 0.25, maxOpacity: 0.6 },
  { label: '5x9', top: '66%', left: '86%', delay: 0.25, duration: 2.0, driftX: 6, minOpacity: 0.35, maxOpacity: 0.7 },
  { label: '8', top: '78%', left: '80%', delay: 0.4, duration: 2.3, driftX: -4, minOpacity: 0.25, maxOpacity: 0.55 },
  { label: '</>', top: '28%', left: '66%', delay: 0.6, duration: 2.2, driftX: 5, minOpacity: 0.2, maxOpacity: 0.5 },

  // Upper / lower mid accents
  { label: '+3.4%', top: '12%', left: '38%', delay: 0.3, duration: 2.4, driftX: 4, minOpacity: 0.35, maxOpacity: 0.75, isAccent: true },
  { label: '99', top: '84%', left: '60%', delay: 0.5, duration: 2.0, driftX: -6, minOpacity: 0.3, maxOpacity: 0.7, isAccent: true },
]

export function FloatingDecor() {
  const reduceMotion = useReducedMotion()

  return (
    <Box aria-hidden sx={floatingDecorStyles.root}>
      {/* Ambient Volumetric Glows */}
      <Box
        component={motion.div}
        sx={floatingDecorStyles.glow}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <Box
        component={motion.div}
        sx={floatingDecorStyles.secondaryGlow}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* 3D Isometric Wireframe Number Cubes */}
      {CUBES.map((cube) => (
        <Box
          key={`cube-${cube.label}-${cube.left}`}
          component={motion.div}
          sx={{
            ...floatingDecorStyles.cubeWrapper,
            top: cube.top,
            left: cube.left,
          }}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.65, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: cube.delay, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box
            component={motion.div}
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -18, 0],
                    rotateX: [cube.rotateX, cube.rotateX + 6, cube.rotateX],
                    rotateY: [cube.rotateY, cube.rotateY + 7, cube.rotateY],
                    rotateZ: [cube.rotateZ, cube.rotateZ - 4, cube.rotateZ],
                  }
            }
            transition={{
              duration: cube.duration,
              delay: cube.delay * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            sx={floatingDecorStyles.cube}
          >
            {cube.label}
          </Box>
        </Box>
      ))}

      {/* Floating Math Formulas and Numbers */}
      {FORMULAS.map((item) => (
        <Box
          key={`formula-${item.label}-${item.left}`}
          component={motion.div}
          sx={{
            position: 'absolute',
            top: item.top,
            left: item.left,
          }}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.88, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box
            component={motion.div}
            sx={{
              ...floatingDecorStyles.item,
              position: 'relative',
              borderColor: item.isAccent
                ? `${colors.lime[400]}55`
                : 'rgba(255,255,255,0.14)',
              color: item.isAccent
                ? colors.lime[300]
                : 'rgba(255,255,255,0.6)',
            }}
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [item.minOpacity, item.maxOpacity, item.minOpacity],
                    y: [0, -16, 0],
                    x: [0, item.driftX, 0],
                  }
            }
            transition={{
              duration: item.duration,
              delay: item.delay * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {item.label}
          </Box>
        </Box>
      ))}
    </Box>
  )
}
