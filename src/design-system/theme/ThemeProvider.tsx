import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider, type Direction } from '@mui/material/styles'
import { useMemo, type ReactNode } from 'react'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'
import { createZimamTheme } from './zimamTheme'

type ThemeProviderProps = {
  children: ReactNode
  direction?: Direction
}

export function ThemeProvider({ children, direction = 'ltr' }: ThemeProviderProps) {
  const theme = useMemo(() => createZimamTheme(direction), [direction])

  const cache = useMemo(
    () =>
      createCache({
        key: direction === 'rtl' ? 'muirtl' : 'mui',
        stylisPlugins: direction === 'rtl' ? [prefixer, rtlPlugin] : [prefixer],
      }),
    [direction],
  )

  return (
    <CacheProvider value={cache}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  )
}
