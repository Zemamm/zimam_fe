import type { SxProps, Theme } from '@mui/material/styles'
import { colors } from '@/design-system/tokens'

export const contactSectionStyles = {
  root: {
    backgroundColor: 'transparent',
  },
  content: {
    alignItems: 'flex-start',
  },
  title: {
    color: colors.common.white,
  },
  support: {
    color: colors.ink[300],
  },
} as const satisfies Record<string, SxProps<Theme>>
