export const typography = {
  fontFamily: {
    display: '"Outfit", "Avenir Next", sans-serif',
    body: '"DM Sans", "Helvetica Neue", sans-serif',
    mono: '"IBM Plex Mono", "Consolas", monospace',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.75rem',
    '5xl': '3.5rem',
  },
  lineHeight: {
    tight: 1.15,
    snug: 1.3,
    normal: 1.5,
    relaxed: 1.7,
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.04em',
  },
} as const

export type TypographyTokens = typeof typography
