import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'
import type { ReactNode } from 'react'

export type UiButtonProps = ButtonProps & {
  children: ReactNode
}

export function UiButton({ children, variant = 'contained', ...props }: UiButtonProps) {
  return (
    <Button variant={variant} {...props}>
      {children}
    </Button>
  )
}
