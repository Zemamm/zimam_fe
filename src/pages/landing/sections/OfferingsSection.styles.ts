import type { SxProps, Theme } from '@mui/material/styles'
import { colors } from '@/design-system/tokens'

export const offeringsSectionStyles = {
  root: {
    backgroundColor: colors.ink[50],
  },
  intro: {
    maxWidth: 560,
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
