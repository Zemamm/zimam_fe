export const spacing = {
  0: 0,
  0.5: 4,
  1: 8,
  1.5: 12,
  2: 16,
  2.5: 20,
  3: 24,
  4: 32,
  5: 40,
  6: 48,
  8: 64,
  10: 80,
  12: 96,
  16: 128,
} as const

export const layout = {
  maxWidth: {
    content: 1120,
    narrow: 720,
    wide: 1280,
  },
  sectionPaddingY: {
    mobile: 64,
    desktop: 112,
  },
  radius: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    pill: 999,
  },
} as const

export type SpacingTokens = typeof spacing
export type LayoutTokens = typeof layout
