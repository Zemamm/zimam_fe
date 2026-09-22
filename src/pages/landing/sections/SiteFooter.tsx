import Box from '@mui/material/Box'
import { UiContainer, UiText } from '@/design-system'
import { siteFooterStyles } from './SiteFooter.styles'

export function SiteFooter() {
  return (
    <Box component="footer" sx={siteFooterStyles.root}>
      <UiContainer>
        <UiText variant="body2" sx={siteFooterStyles.copy}>
          © {new Date().getFullYear()} Zimam. All rights reserved.
        </UiText>
      </UiContainer>
    </Box>
  )
}
