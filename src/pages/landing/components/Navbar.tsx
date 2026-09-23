import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined'
import Box from '@mui/material/Box'
import { useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useMotionValueEvent } from 'framer-motion'
import { landingContent } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import { navbarStyles } from './Navbar.styles'

const sectionHrefs = landingContent.navLinks.map((link) => link.href)

const HIDE_AFTER_PX = 64
const SCROLL_DELTA_PX = 10

const barTransition = {
  type: 'spring',
  stiffness: 260,
  damping: 34,
  mass: 0.9,
} as const

export function Navbar() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)
  const activeHref = useActiveSection(sectionHrefs)

  const outlineLink = landingContent.navOutlineLink
  const textLinks = landingContent.navLinks.filter((link) => link.href !== outlineLink.href)
  const isOutlineActive = activeHref === outlineLink.href

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (reduceMotion) {
      setHidden(false)
      lastScrollY.current = latest
      return
    }

    const delta = latest - lastScrollY.current

    if (latest <= HIDE_AFTER_PX) {
      setHidden(false)
    } else if (delta > SCROLL_DELTA_PX) {
      setHidden(true)
    } else if (delta < -SCROLL_DELTA_PX) {
      setHidden(false)
    }

    lastScrollY.current = latest
  })

  return (
    <Box
      component="header"
      sx={[navbarStyles.root, hidden ? { pointerEvents: 'none' } : null]}
    >
      <Box
        component={motion.div}
        sx={navbarStyles.bar}
        initial={reduceMotion ? false : { y: -88 }}
        animate={{ y: hidden ? -88 : 0 }}
        transition={reduceMotion ? { duration: 0 } : barTransition}
      >
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
                aria-current={isActive ? 'true' : undefined}
                sx={[navbarStyles.link, isActive ? navbarStyles.linkActive : null]}
              >
                {isActive ? <Box sx={navbarStyles.linkActiveDot} aria-hidden /> : null}
                {link.label}
              </Box>
            )
          })}

          <Box
            component="a"
            href={outlineLink.href}
            aria-current={isOutlineActive ? 'true' : undefined}
            sx={[navbarStyles.navOutline, isOutlineActive ? navbarStyles.navOutlineActive : null]}
          >
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
