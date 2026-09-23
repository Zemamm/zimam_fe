export const colors = {
  ink: {
    950: '#0A0A0A',
    900: '#0D0D0D',
    800: '#141414',
    700: '#1A1A1A',
    600: '#252525',
    500: '#3D3D3D',
    400: '#666666',
    300: '#9CA3AF',
    200: '#D1D5DB',
    100: '#E5E7EB',
    50: '#F3F4F6',
  },
  lime: {
    900: '#1A3D0A',
    800: '#2F6B12',
    700: '#4AA81F',
    600: '#6FD82E',
    500: '#94F044',
    400: '#AFFC41',
    300: '#C8FF7A',
    200: '#DEFFB0',
    100: '#EEFFD6',
    50: '#F7FFEB',
  },
  surface: {
    page: '#F8F9FA',
    card: '#FFFFFF',
    muted: '#F3F4F6',
    dark: '#0D0D0D',
    darkElevated: '#1A1A1A',
  },
  semantic: {
    success: '#22C55E',
    warning: '#EAB308',
    error: '#EF4444',
    info: '#3B82F6',
  },
  common: {
    white: '#FFFFFF',
    black: '#000000',
  },
} as const

export type ColorTokens = typeof colors
