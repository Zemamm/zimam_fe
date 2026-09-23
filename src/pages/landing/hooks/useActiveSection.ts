import { useEffect, useState } from 'react'

const NAV_OFFSET_PX = 120
const BOTTOM_THRESHOLD_PX = 96

/**
 * Tracks which page section is in view for navbar active state.
 * `hrefs` should be hash links like `#offerings` matching element ids.
 */
export function useActiveSection(hrefs: readonly string[]) {
  const [activeHref, setActiveHref] = useState(hrefs[0] ?? '#top')

  useEffect(() => {
    if (hrefs.length === 0) {
      return
    }

    const ids = hrefs.map((href) => href.replace(/^#/, ''))

    const updateActiveSection = () => {
      const marker = window.scrollY + NAV_OFFSET_PX
      let currentId = ids[0]

      for (const id of ids) {
        const element = document.getElementById(id)
        if (!element) {
          continue
        }

        const top = element.getBoundingClientRect().top + window.scrollY
        if (top <= marker) {
          currentId = id
        }
      }

      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - BOTTOM_THRESHOLD_PX

      if (scrolledToBottom) {
        currentId = ids[ids.length - 1]
      }

      setActiveHref(`#${currentId}`)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [hrefs])

  return activeHref
}
