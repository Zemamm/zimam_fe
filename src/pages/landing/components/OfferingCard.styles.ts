import type { SxProps, Theme } from '@mui/material/styles'
import { colors, layout } from '@/design-system/tokens'

export const offeringCardStyles = {
  root: {
    height: '100%',
    p: 3,
    borderRadius: `${layout.radius.lg}px`,
    border: `1px solid ${colors.ink[200]}`,
    backgroundColor: colors.common.white,
  },
  kind: {
    letterSpacing: '0.08em',
    fontWeight: 600,
  },
  list: {
    m: 0,
    pl: 2.5,
    listStyle: 'disc',
  },
} as const satisfies Record<string, SxProps<Theme>>
