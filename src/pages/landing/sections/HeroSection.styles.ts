import type { SxProps, Theme } from '@mui/material/styles'
import { colors, layout } from '@/design-system/tokens'

export const heroSectionStyles = {
  root: {
    position: 'relative',
    overflow: 'hidden',
    background: `linear-gradient(160deg, ${colors.ink[950]} 0%, ${colors.ink[800]} 48%, ${colors.teal[800]} 100%)`,
    color: colors.common.white,
    py: {
      xs: `${layout.sectionPaddingY.mobile}px`,
      md: `${layout.sectionPaddingY.desktop}px`,
    },
  },
  content: {
    maxWidth: 720,
  },
  brand: {
    color: colors.common.white,
    fontSize: { xs: '2.75rem', md: '3.75rem' },
  },
  headline: {
    color: colors.ink[100],
    fontFamily: '"DM Sans", "Helvetica Neue", sans-serif',
    fontWeight: 500,
    maxWidth: 640,
  },
  support: {
    color: colors.ink[200],
    maxWidth: 560,
  },
} as const satisfies Record<string, SxProps<Theme>>
