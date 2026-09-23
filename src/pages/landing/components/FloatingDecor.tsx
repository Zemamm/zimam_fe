import type { SvgIconComponent } from '@mui/icons-material'
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined'
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined'
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined'
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined'
import Box from '@mui/material/Box'
import { motion, useReducedMotion } from 'framer-motion'
import { colors } from '@/design-system/tokens'
import { floatingDecorStyles } from './FloatingDecor.styles'

type DecorCube = {
  Icon: SvgIconComponent
  label: string
  top: string
  left: string
  delay: number
  duration: number
  rotateX: number
  rotateY: number
  rotateZ: number
}

type DecorChip = {
  Icon: SvgIconComponent
  label?: string
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
    Icon: CloudOutlinedIcon,
    label: 'SaaS',
    top: '64%',
    left: '14%',
    delay: 0.2,
    duration: 2.2,
    rotateX: 22,
    rotateY: -24,
    rotateZ: 8,
  },
  {
    Icon: PhoneIphoneOutlinedIcon,
    label: 'App',
    top: '20%',
    left: '82%',
    delay: 0.4,
    duration: 2.4,
    rotateX: -18,
    rotateY: 26,
    rotateZ: -10,
  },
]

const CHIPS: readonly DecorChip[] = [
  // Left — SaaS & desktop
  {
    Icon: CloudOutlinedIcon,
    label: 'SaaS',
    top: '16%',
    left: '10%',
    delay: 0.1,
    duration: 2.0,
    driftX: 6,
    minOpacity: 0.35,
    maxOpacity: 0.7,
    isAccent: true,
  },
  {
    Icon: ComputerOutlinedIcon,
    label: 'Desktop',
    top: '44%',
    left: '7%',
    delay: 0.3,
    duration: 1.9,
    driftX: -5,
    minOpacity: 0.3,
    maxOpacity: 0.65,
  },
  {
    Icon: ApiOutlinedIcon,
    label: 'API',
    top: '56%',
    left: '5%',
    delay: 0.5,
    duration: 1.8,
    driftX: 4,
    minOpacity: 0.25,
    maxOpacity: 0.55,
  },
  {
    Icon: ComputerOutlinedIcon,
    top: '28%',
    left: '20%',
    delay: 0.15,
    duration: 2.3,
    driftX: -4,
    minOpacity: 0.2,
    maxOpacity: 0.5,
  },
  {
    Icon: WebAssetOutlinedIcon,
    label: 'Win / Mac',
    top: '78%',
    left: '18%',
    delay: 0.45,
    duration: 2.1,
    driftX: 6,
    minOpacity: 0.35,
    maxOpacity: 0.75,
    isAccent: true,
  },

  // Right — mobile & websites
  {
    Icon: PhoneIphoneOutlinedIcon,
    label: 'Mobile',
    top: '14%',
    left: '70%',
    delay: 0.2,
    duration: 2.1,
    driftX: -6,
    minOpacity: 0.3,
    maxOpacity: 0.65,
    isAccent: true,
  },
  {
    Icon: PhoneIphoneOutlinedIcon,
    label: 'iOS · Android',
    top: '38%',
    left: '74%',
    delay: 0.35,
    duration: 2.2,
    driftX: 7,
    minOpacity: 0.35,
    maxOpacity: 0.75,
  },
  {
    Icon: LanguageOutlinedIcon,
    label: 'Website',
    top: '52%',
    left: '70%',
    delay: 0.55,
    duration: 1.9,
    driftX: -5,
    minOpacity: 0.25,
    maxOpacity: 0.6,
    isAccent: true,
  },
  {
    Icon: ExtensionOutlinedIcon,
    label: 'UX+',
    top: '66%',
    left: '84%',
    delay: 0.25,
    duration: 2.0,
    driftX: 6,
    minOpacity: 0.35,
    maxOpacity: 0.7,
  },
  {
    Icon: CodeOutlinedIcon,
    top: '78%',
    left: '78%',
    delay: 0.4,
    duration: 2.3,
    driftX: -4,
    minOpacity: 0.25,
    maxOpacity: 0.55,
  },
  {
    Icon: ExtensionOutlinedIcon,
    label: 'Features',
    top: '28%',
    left: '64%',
    delay: 0.6,
    duration: 2.2,
    driftX: 5,
    minOpacity: 0.2,
    maxOpacity: 0.5,
  },

  // Mid accents
  {
    Icon: RocketLaunchOutlinedIcon,
    label: 'Ship',
    top: '12%',
    left: '42%',
    delay: 0.3,
    duration: 2.4,
    driftX: 4,
    minOpacity: 0.35,
    maxOpacity: 0.75,
    isAccent: true,
  },
  {
    Icon: TrendingUpOutlinedIcon,
    label: 'Scale',
    top: '84%',
    left: '58%',
    delay: 0.5,
    duration: 2.0,
    driftX: -6,
    minOpacity: 0.3,
    maxOpacity: 0.7,
    isAccent: true,
  },
]

export function FloatingDecor() {
  const reduceMotion = useReducedMotion()

  return (
    <Box aria-hidden sx={floatingDecorStyles.root}>
      <Box
        component={motion.div}
        sx={floatingDecorStyles.glow}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <Box
        component={motion.div}
        sx={floatingDecorStyles.cornerGlow}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      />
      <Box
        component={motion.div}
        sx={floatingDecorStyles.secondaryGlow}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      />
      <Box
        component={motion.div}
        sx={floatingDecorStyles.rightGlow}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      />

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
            <cube.Icon sx={floatingDecorStyles.cubeIcon} />
            <Box component="span" sx={floatingDecorStyles.cubeLabel}>
              {cube.label}
            </Box>
          </Box>
        </Box>
      ))}

      {CHIPS.map((item) => {
        const Icon = item.Icon

        return (
          <Box
            key={`chip-${item.label ?? 'icon'}-${item.left}-${item.top}`}
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
              <Icon sx={floatingDecorStyles.itemIcon} />
              {item.label ? (
                <Box component="span" sx={floatingDecorStyles.itemLabel}>
                  {item.label}
                </Box>
              ) : null}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}
