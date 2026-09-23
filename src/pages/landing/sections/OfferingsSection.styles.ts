import type { SxProps, Theme } from '@mui/material/styles'
import { colors, layout } from '@/design-system/tokens'

export const offeringsSectionStyles = {
  root: {
    position: 'relative',
    backgroundColor: colors.surface.dark,
    color: colors.common.white,
    pt: { xs: 2, md: 4 },
    pb: {
      xs: `${layout.sectionPaddingY.mobile}px`,
      md: `${layout.sectionPaddingY.desktop}px`,
    },
    overflow: 'hidden',
  },
  topGlow: {
    position: 'absolute',
    top: 0,
    left: '50%',
    width: { xs: 320, md: 640 },
    height: 320,
    transform: 'translate(-50%, -40%)',
    borderRadius: '50%',
    background: `radial-gradient(circle, ${colors.lime[400]}24 0%, ${colors.lime[500]}08 45%, transparent 70%)`,
    filter: 'blur(55px)',
    pointerEvents: 'none',
  },
  outlineTitle: {
    textAlign: 'center',
    fontSize: { xs: '3rem', sm: '4.5rem', md: '6.5rem' },
    fontWeight: 800,
    letterSpacing: '-0.04em',
    lineHeight: 0.95,
    color: 'transparent',
    WebkitTextStroke: `1.5px ${colors.lime[400]}`,
    textShadow: `0 0 60px ${colors.lime[400]}33`,
    mb: { xs: 4, md: 8 },
    userSelect: 'none',
  },
  intro: {
    maxWidth: 560,
    mx: 'auto',
    textAlign: 'center',
    mb: 4,
  },
  introTitle: {
    color: colors.common.white,
  },
  introSupport: {
    color: colors.ink[300],
  },
  grid: {
    display: 'grid',
    gap: 3,
    gridTemplateColumns: {
      xs: '1fr',
      md: 'repeat(2, minmax(0, 1fr))',
    },
  },
} as const satisfies Record<string, SxProps<Theme>>
