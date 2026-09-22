import Container from '@mui/material/Container'
import type { ContainerProps } from '@mui/material/Container'
import type { ReactNode } from 'react'
import { layout } from '@/design-system/tokens'

export type UiContainerProps = ContainerProps & {
  children: ReactNode
  narrow?: boolean
}

export function UiContainer({
  children,
  narrow = false,
  sx,
  ...props
}: UiContainerProps) {
  return (
    <Container
      maxWidth={false}
      sx={[
        {
          maxWidth: narrow ? layout.maxWidth.narrow : layout.maxWidth.content,
          px: { xs: 2, md: 3 },
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
      {...props}
    >
      {children}
    </Container>
  )
}
