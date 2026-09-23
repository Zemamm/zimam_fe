import type { SxProps, Theme } from '@mui/material/styles'
import { colors, layout } from '@/design-system/tokens'

export const contactSectionStyles = {
  root: {
    backgroundColor: 'transparent',
  },
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: { xs: 3, md: 4 },
    width: '100%',
  },
  intro: {
    alignItems: 'flex-start',
    textAlign: 'left',
    maxWidth: 640,
  },
  title: {
    color: colors.common.white,
  },
  support: {
    color: colors.ink[300],
  },
  formCard: {
    width: '100%',
    p: { xs: 2.5, md: 3 },
    borderRadius: `${layout.radius.xl}px`,
    border: '1px solid rgba(255,255,255,0.08)',
    backgroundColor: 'rgba(255,255,255,0.03)',
    backdropFilter: 'blur(8px)',
  },
  formTitle: {
    color: colors.common.white,
    fontWeight: 600,
    mb: 0.5,
  },
  fieldRow: {
    display: 'grid',
    gap: 2.5,
    gridTemplateColumns: {
      xs: '1fr',
      sm: '1fr 1fr',
    },
  },
  field: {
    '& .MuiInputLabel-root': {
      color: colors.ink[300],
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: colors.lime[400],
    },
    '& .MuiOutlinedInput-root': {
      color: colors.common.white,
      borderRadius: `${layout.radius.md}px`,
      backgroundColor: 'rgba(255,255,255,0.03)',
      '& fieldset': {
        borderColor: 'rgba(255,255,255,0.12)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255,255,255,0.24)',
      },
      '&.Mui-focused fieldset': {
        borderColor: colors.lime[400],
      },
    },
    '& .MuiFormHelperText-root': {
      color: colors.semantic.error,
    },
    '& .MuiSelect-icon': {
      color: colors.ink[300],
    },
  },
  actions: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    gap: 1.5,
    alignItems: { xs: 'stretch', sm: 'center' },
    justifyContent: 'center',
    mt: 1,
  },
  statusSuccess: {
    color: colors.lime[300],
  },
  statusError: {
    color: colors.semantic.error,
  },
  menuPaper: {
    backgroundColor: colors.surface.darkElevated,
    color: colors.common.white,
    border: '1px solid rgba(255,255,255,0.08)',
  },
} as const satisfies Record<string, SxProps<Theme>>
