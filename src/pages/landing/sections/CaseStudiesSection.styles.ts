import type { SxProps, Theme } from '@mui/material/styles'
import { colors } from '@/design-system/tokens'

export const caseStudiesSectionStyles = {
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
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
  item: {
    display: 'grid',
    gap: { xs: 1.5, md: 3 },
    gridTemplateColumns: {
      xs: '1fr',
      md: '140px minmax(0, 1fr) minmax(0, 0.7fr)',
    },
    alignItems: { xs: 'flex-start', md: 'center' },
    py: { xs: 2.5, md: 3 },
    borderTop: '1px solid rgba(255,255,255,0.1)',
    '&:last-of-type': {
      borderBottom: '1px solid rgba(255,255,255,0.1)',
    },
  },
  category: {
    color: colors.lime[400],
    fontWeight: 600,
    fontSize: '0.875rem',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0.75,
    minWidth: 0,
  },
  itemTitle: {
    color: colors.common.white,
    fontWeight: 600,
    fontSize: { xs: '1.05rem', md: '1.2rem' },
  },
  itemSummary: {
    color: colors.ink[300],
  },
  outcome: {
    color: colors.ink[200],
    fontWeight: 500,
    fontSize: '0.95rem',
    maxWidth: 260,
  },
} as const satisfies Record<string, SxProps<Theme>>
