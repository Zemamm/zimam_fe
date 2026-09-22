import type { SxProps, Theme } from '@mui/material/styles'
import { colors } from '@/design-system/tokens'

export const siteFooterStyles = {
  root: {
    py: 3,
    borderTop: `1px solid ${colors.ink[200]}`,
    backgroundColor: colors.ink[50],
  },
  copy: {
    color: colors.ink[400],
  },
} as const satisfies Record<string, SxProps<Theme>>
