import Typography from '@mui/material/Typography'
import type { TypographyProps } from '@mui/material/Typography'
import type { ReactNode } from 'react'

export type UiHeadingProps = TypographyProps & {
  children: ReactNode
}

export function UiHeading({
  children,
  variant = 'h2',
  component = 'h2',
  ...props
}: UiHeadingProps) {
  return (
    <Typography variant={variant} component={component} {...props}>
      {children}
    </Typography>
  )
}
