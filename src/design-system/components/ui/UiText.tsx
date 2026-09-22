import Typography from '@mui/material/Typography'
import type { TypographyProps } from '@mui/material/Typography'
import type { ReactNode } from 'react'

export type UiTextProps = TypographyProps & {
  children: ReactNode
}

export function UiText({ children, variant = 'body1', color = 'text.secondary', ...props }: UiTextProps) {
  return (
    <Typography variant={variant} color={color} {...props}>
      {children}
    </Typography>
  )
}
