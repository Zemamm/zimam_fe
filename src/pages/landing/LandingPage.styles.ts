import type { SxProps, Theme } from '@mui/material/styles'

export const landingPageStyles = {
  main: {
    minHeight: '100vh',
  },
} as const satisfies Record<string, SxProps<Theme>>
