import type { SxProps, Theme } from '@mui/material/styles'
import { colors } from '@/design-system/tokens'

export const whyZimamSectionStyles = {
  root: {
    position: 'relative',
    backgroundColor: 'transparent',
    color: colors.common.white,
    overflow: 'hidden',
  },
  intro: {
    maxWidth: 640,
    mb: 4,
  },
  title: {
    color: colors.common.white,
  },
  support: {
    color: colors.ink[300],
  },
  grid: {
    display: 'grid',
    gap: { xs: 3, md: 4 },
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, minmax(0, 1fr))',
    },
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 1.25,
    pt: 2.5,
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  index: {
    color: colors.lime[400],
    fontFamily: '"Outfit", "Avenir Next", sans-serif',
    fontWeight: 700,
    fontSize: '0.875rem',
    letterSpacing: '0.08em',
  },
  itemTitle: {
    color: colors.common.white,
    fontWeight: 600,
    fontSize: { xs: '1.05rem', md: '1.15rem' },
  },
  itemDescription: {
    color: colors.ink[300],
    maxWidth: 420,
  },
} as const satisfies Record<string, SxProps<Theme>>
