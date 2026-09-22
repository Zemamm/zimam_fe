export const colors = {
  ink: {
    950: '#0B1220',
    900: '#121A2B',
    800: '#1C2740',
    700: '#2A3757',
    600: '#3D4F73',
    500: '#5B6B8C',
    400: '#8490A8',
    300: '#ADB6C7',
    200: '#D5DAE4',
    100: '#EBEEF3',
    50: '#F6F7FA',
  },
  teal: {
    900: '#0B3D3A',
    800: '#0F524E',
    700: '#146B65',
    600: '#1A857D',
    500: '#209E94',
    400: '#3DB8AE',
    300: '#6DCEC6',
    200: '#A5E2DC',
    100: '#D2F0ED',
    50: '#EAF8F6',
  },
  semantic: {
    success: '#1B7F5A',
    warning: '#B7791F',
    error: '#B42318',
    info: '#175CD3',
  },
  common: {
    white: '#FFFFFF',
    black: '#000000',
  },
} as const

export type ColorTokens = typeof colors
