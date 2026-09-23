import type { SxProps, Theme } from '@mui/material/styles'
import { colors } from '@/design-system/tokens'

export const landingPageStyles = {
  main: {
    minHeight: '100vh',
    position: 'relative',
    backgroundColor: colors.surface.dark,
  },
  /** Keeps contact + footer on the continuous dark canvas after offerings */
  tailBand: {
    position: 'relative',
    backgroundColor: colors.surface.dark,
    backgroundImage: `linear-gradient(180deg, ${colors.surface.dark} 0%, ${colors.ink[800]} 100%)`,
  },
} as const satisfies Record<string, SxProps<Theme>>
