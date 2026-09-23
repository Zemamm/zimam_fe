import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined'
import Box from '@mui/material/Box'
import { motion, useReducedMotion } from 'framer-motion'
import { landingContent } from '../data/content'
import { navbarStyles } from './Navbar.styles'

type NavbarProps = {
  activeHref?: string
}

export function Navbar({ activeHref = '#top' }: NavbarProps) {
  const reduceMotion = useReducedMotion()
  const outlineLink = landingContent.navOutlineLink
  const textLinks = landingContent.navLinks.filter((link) => link.href !== outlineLink.href)

  return (
    <Box
      component={motion.header}
      sx={navbarStyles.root}
      initial={reduceMotion ? false : { y: -36, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Box sx={navbarStyles.bar}>
        <Box component="a" href="#top" sx={navbarStyles.brand}>
          <Box sx={navbarStyles.brandMark}>{landingContent.brandMark}</Box>
          <Box component="span" sx={navbarStyles.brandName}>
            {landingContent.brandSuffix}
          </Box>
        </Box>

        <Box component="nav" sx={navbarStyles.links} aria-label="Primary">
          {textLinks.map((link) => {
            const isActive = activeHref === link.href

            return (
              <Box
                key={link.href}
                component="a"
                href={link.href}
                sx={[navbarStyles.link, isActive ? navbarStyles.linkActive : null]}
              >
                {isActive ? <Box sx={navbarStyles.linkActiveDot} aria-hidden /> : null}
                {link.label}
              </Box>
            )
          })}

          <Box component="a" href={outlineLink.href} sx={navbarStyles.navOutline}>
            {outlineLink.label}
          </Box>
        </Box>

        <Box sx={navbarStyles.actions}>
          <Box sx={navbarStyles.language} aria-label="Language">
            <PublicOutlinedIcon sx={navbarStyles.languageIcon} />
            {landingContent.languageLabel}
            <ExpandMoreRoundedIcon sx={navbarStyles.languageChevron} />
          </Box>

          <Box component="a" href="#contact" sx={navbarStyles.primaryCta}>
            {landingContent.primaryCta}
            <Box component="span" sx={navbarStyles.primaryCtaIcon} aria-hidden>
              <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
            </Box>
          </Box>

          <Box component="a" href="#offerings" sx={navbarStyles.secondaryCta}>
            {landingContent.secondaryCta}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
