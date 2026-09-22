import type { SxProps, Theme } from '@mui/material/styles'
import { colors } from '@/design-system/tokens'

export const contactSectionStyles = {
  root: {
    backgroundColor: colors.common.white,
    borderTop: `1px solid ${colors.ink[200]}`,
  },
  content: {
    alignItems: 'flex-start',
  },
} as const satisfies Record<string, SxProps<Theme>>
