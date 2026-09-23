import type { SxProps, Theme } from '@mui/material/styles'
import { colors, layout } from '@/design-system/tokens'

export const faqSectionStyles = {
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
    gap: 1.5,
  },
  item: {
    borderRadius: `${layout.radius.lg}px`,
    border: '1px solid rgba(255,255,255,0.08)',
    backgroundColor: 'rgba(255,255,255,0.03)',
    backdropFilter: 'blur(8px)',
    boxShadow: 'none',
    overflow: 'hidden',
    '&:before': {
      display: 'none',
    },
    '&.Mui-expanded': {
      margin: 0,
      borderColor: `${colors.lime[400]}44`,
      backgroundColor: 'rgba(255,255,255,0.045)',
    },
  },
  summary: {
    px: { xs: 2, md: 2.5 },
    py: 0.5,
    minHeight: 64,
    '& .MuiAccordionSummary-content': {
      my: 1.5,
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
      color: colors.lime[400],
    },
  },
  question: {
    color: colors.common.white,
    fontWeight: 600,
    fontSize: { xs: '0.95rem', md: '1.05rem' },
    pr: 2,
  },
  details: {
    px: { xs: 2, md: 2.5 },
    pb: 2.5,
    pt: 0,
  },
  answer: {
    color: colors.ink[300],
    maxWidth: 720,
  },
} as const satisfies Record<string, SxProps<Theme>>
