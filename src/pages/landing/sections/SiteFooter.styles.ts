import type { SxProps, Theme } from '@mui/material/styles'
import { colors } from '@/design-system/tokens'

export const siteFooterStyles = {
  root: {
    py: 3,
    backgroundColor: 'transparent',
  },
  copy: {
    color: colors.ink[400],
  },
} as const satisfies Record<string, SxProps<Theme>>
