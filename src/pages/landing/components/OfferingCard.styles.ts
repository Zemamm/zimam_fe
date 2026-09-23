import type { SxProps, Theme } from '@mui/material/styles'
import { colors, layout } from '@/design-system/tokens'

export const offeringCardStyles = {
  root: {
    height: '100%',
    p: 3,
    borderRadius: `${layout.radius.xl}px`,
    border: '1px solid rgba(255,255,255,0.08)',
    backgroundColor: 'rgba(14, 18, 15, 0.6)',
    backdropFilter: 'blur(14px)',
    color: colors.common.white,
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.35)',
    transition: 'transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      borderColor: `${colors.lime[400]}55`,
      boxShadow: `0 12px 36px rgba(0, 0, 0, 0.5), 0 0 24px ${colors.lime[400]}18`,
    },
  },
  kind: {
    letterSpacing: '0.08em',
    fontWeight: 600,
    color: colors.lime[400],
  },
  title: {
    color: colors.common.white,
  },
  summary: {
    color: colors.ink[300],
  },
  list: {
    m: 0,
    pl: 2.5,
    listStyle: 'disc',
    color: colors.ink[300],
  },
} as const satisfies Record<string, SxProps<Theme>>
