import { createTheme, type Direction } from '@mui/material/styles'
import { colors, layout, typography } from '@/design-system/tokens'

const arabicFontStack =
  '"IBM Plex Sans Arabic", "Noto Sans Arabic", "Segoe UI", Tahoma, sans-serif'

export function createZimamTheme(direction: Direction = 'ltr') {
  const isRtl = direction === 'rtl'
  const bodyFont = isRtl
    ? `${arabicFontStack}, ${typography.fontFamily.body}`
    : typography.fontFamily.body
  const displayFont = isRtl
    ? `${arabicFontStack}, ${typography.fontFamily.display}`
    : typography.fontFamily.display

  return createTheme({
    cssVariables: true,
    direction,
    palette: {
      mode: 'light',
      primary: {
        main: colors.lime[400],
        light: colors.lime[300],
        dark: colors.lime[600],
        contrastText: colors.ink[900],
      },
      secondary: {
        main: colors.ink[600],
        light: colors.ink[500],
        dark: colors.ink[800],
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
        default: colors.surface.dark,
        paper: colors.surface.darkElevated,
      },
      text: {
        primary: colors.common.white,
        secondary: colors.ink[300],
        disabled: colors.ink[500],
      },
      divider: colors.ink[100],
    },
    typography: {
      fontFamily: bodyFont,
      h1: {
        fontFamily: displayFont,
        fontWeight: typography.fontWeight.bold,
        fontSize: typography.fontSize['5xl'],
        lineHeight: typography.lineHeight.tight,
        letterSpacing: isRtl ? '0' : typography.letterSpacing.tight,
      },
      h2: {
        fontFamily: displayFont,
        fontWeight: typography.fontWeight.bold,
        fontSize: typography.fontSize['4xl'],
        lineHeight: typography.lineHeight.tight,
        letterSpacing: isRtl ? '0' : typography.letterSpacing.tight,
      },
      h3: {
        fontFamily: displayFont,
        fontWeight: typography.fontWeight.semibold,
        fontSize: typography.fontSize['3xl'],
        lineHeight: typography.lineHeight.snug,
      },
      h4: {
        fontFamily: bodyFont,
        fontWeight: typography.fontWeight.semibold,
        fontSize: typography.fontSize['2xl'],
        lineHeight: typography.lineHeight.snug,
      },
      h5: {
        fontFamily: bodyFont,
        fontWeight: typography.fontWeight.semibold,
        fontSize: typography.fontSize.xl,
      },
      h6: {
        fontFamily: bodyFont,
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
      borderRadius: layout.radius.lg,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            margin: 0,
            minHeight: '100vh',
            backgroundColor: colors.surface.dark,
            color: colors.common.white,
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
            borderRadius: layout.radius.pill,
            paddingInline: 24,
            paddingBlock: 12,
            variants: [
              {
                props: { variant: 'contained', color: 'primary' },
                style: {
                  backgroundColor: colors.lime[400],
                  color: colors.ink[900],
                  '&:hover': {
                    backgroundColor: colors.lime[500],
                  },
                },
              },
              {
                props: { variant: 'outlined', color: 'secondary' },
                style: {
                  borderColor: colors.ink[500],
                  color: colors.common.white,
                  backgroundColor: colors.surface.darkElevated,
                  '&:hover': {
                    borderColor: colors.ink[300],
                    backgroundColor: colors.ink[600],
                  },
                },
              },
            ],
          },
          sizeLarge: {
            paddingInline: 32,
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
}

export const zimamTheme = createZimamTheme('ltr')

export type ZimamTheme = ReturnType<typeof createZimamTheme>
