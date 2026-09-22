import { createTheme } from '@mui/material/styles'
import { colors, layout, typography } from '@/design-system/tokens'

export const zimamTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: colors.teal[600],
      light: colors.teal[400],
      dark: colors.teal[800],
      contrastText: colors.common.white,
    },
    secondary: {
      main: colors.ink[800],
      light: colors.ink[600],
      dark: colors.ink[950],
      contrastText: colors.common.white,
    },
    error: {
      main: colors.semantic.error,
    },
    warning: {
      main: colors.semantic.warning,
    },
    info: {
      main: colors.semantic.info,
    },
    success: {
      main: colors.semantic.success,
    },
    background: {
      default: colors.ink[50],
      paper: colors.common.white,
    },
    text: {
      primary: colors.ink[900],
      secondary: colors.ink[500],
      disabled: colors.ink[300],
    },
    divider: colors.ink[200],
  },
  typography: {
    fontFamily: typography.fontFamily.body,
    h1: {
      fontFamily: typography.fontFamily.display,
      fontWeight: typography.fontWeight.bold,
      fontSize: typography.fontSize['5xl'],
      lineHeight: typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.tight,
    },
    h2: {
      fontFamily: typography.fontFamily.display,
      fontWeight: typography.fontWeight.bold,
      fontSize: typography.fontSize['4xl'],
      lineHeight: typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.tight,
    },
    h3: {
      fontFamily: typography.fontFamily.display,
      fontWeight: typography.fontWeight.semibold,
      fontSize: typography.fontSize['3xl'],
      lineHeight: typography.lineHeight.snug,
    },
    h4: {
      fontFamily: typography.fontFamily.body,
      fontWeight: typography.fontWeight.semibold,
      fontSize: typography.fontSize['2xl'],
      lineHeight: typography.lineHeight.snug,
    },
    h5: {
      fontFamily: typography.fontFamily.body,
      fontWeight: typography.fontWeight.semibold,
      fontSize: typography.fontSize.xl,
    },
    h6: {
      fontFamily: typography.fontFamily.body,
      fontWeight: typography.fontWeight.semibold,
      fontSize: typography.fontSize.lg,
    },
    body1: {
      fontSize: typography.fontSize.md,
      lineHeight: typography.lineHeight.relaxed,
    },
    body2: {
      fontSize: typography.fontSize.sm,
      lineHeight: typography.lineHeight.normal,
    },
    button: {
      fontWeight: typography.fontWeight.semibold,
      textTransform: 'none',
      letterSpacing: typography.letterSpacing.normal,
    },
  },
  shape: {
    borderRadius: layout.radius.md,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          minHeight: '100vh',
          backgroundColor: colors.ink[50],
          color: colors.ink[900],
        },
        '#root': {
          minHeight: '100vh',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: layout.radius.md,
          paddingInline: 20,
          paddingBlock: 10,
        },
        sizeLarge: {
          paddingInline: 28,
          paddingBlock: 14,
          fontSize: typography.fontSize.md,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
})

export type ZimamTheme = typeof zimamTheme
