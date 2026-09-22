import Box from '@mui/material/Box'
import type { BoxProps } from '@mui/material/Box'
import type { ReactNode } from 'react'
import { layout } from '@/design-system/tokens'

export type UiSectionProps = BoxProps & {
  children: ReactNode
}

export function UiSection({ children, sx, component = 'section', ...props }: UiSectionProps) {
  return (
    <Box
      component={component}
      sx={[
        {
          py: {
            xs: `${layout.sectionPaddingY.mobile}px`,
            md: `${layout.sectionPaddingY.desktop}px`,
          },
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
      {...props}
    >
      {children}
    </Box>
  )
}
