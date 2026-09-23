import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon'
import type { ReactElement } from 'react'
import { UiContainer, UiText } from '@/design-system'
import { landingContent } from '../data/content'
import { siteFooterStyles } from './SiteFooter.styles'

function TikTokIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M16.6 5.82A4.23 4.23 0 0 1 15.36 3h-3.28v12.4a2.57 2.57 0 1 1-2.57-2.57c.2 0 .4.02.59.07V9.56a5.9 5.9 0 0 0-.59-.03 5.85 5.85 0 1 0 5.85 5.85V9.76a7.5 7.5 0 0 0 4.38 1.4V7.88a4.24 4.24 0 0 1-2.14-2.06Z" />
    </SvgIcon>
  )
}

const socialIcons: Record<(typeof landingContent.footerSocial)[number]['id'], ReactElement> = {
  linkedin: <LinkedInIcon sx={siteFooterStyles.socialIcon} />,
  instagram: <InstagramIcon sx={siteFooterStyles.socialIcon} />,
  tiktok: <TikTokIcon sx={siteFooterStyles.socialIcon} />,
  facebook: <FacebookIcon sx={siteFooterStyles.socialIcon} />,
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <Box component="footer" sx={siteFooterStyles.root}>
      <Box sx={siteFooterStyles.main}>
        <Box component="span" aria-hidden sx={siteFooterStyles.watermark}>
          {landingContent.footerWatermark}
        </Box>

        <UiContainer sx={siteFooterStyles.content}>
          <Stack sx={siteFooterStyles.layout}>
            <Stack sx={siteFooterStyles.brandRow}>
              <Box component="a" href="#top" sx={siteFooterStyles.brand}>
                <Box sx={siteFooterStyles.brandMark}>{landingContent.brandMark}</Box>
                <Box component="span" sx={siteFooterStyles.brandName}>
                  {landingContent.brandSuffix}
                </Box>
              </Box>

              <Stack sx={siteFooterStyles.socialBlock}>
                <UiText sx={siteFooterStyles.followLabel}>
                  {landingContent.footerFollowLabel}
                </UiText>
                <Box sx={siteFooterStyles.social} aria-label="Social media">
                  {landingContent.footerSocial.map((item) => (
                    <Box
                      key={item.id}
                      component="a"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      sx={siteFooterStyles.socialLink}
                    >
                      {socialIcons[item.id]}
                    </Box>
                  ))}
                </Box>
              </Stack>
            </Stack>

            <UiText sx={siteFooterStyles.description}>{landingContent.footerDescription}</UiText>
          </Stack>
        </UiContainer>
      </Box>

      <Stack sx={siteFooterStyles.bottom}>
        <UiText variant="body2" sx={siteFooterStyles.copy}>
          © {year} {landingContent.brand}. {landingContent.footerCopyright}
        </UiText>
      </Stack>
    </Box>
  )
}
