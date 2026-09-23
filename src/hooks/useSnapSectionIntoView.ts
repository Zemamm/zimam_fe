import { useEffect } from 'react'

const ENTER_RATIO = 0.1
const SETTLED_RATIO = 0.78
const SNAP_LOCK_MS = 900
const SCROLL_EPSILON_PX = 2

type SettledSection = 'hero' | 'offerings' | 'other'

/**
 * Snaps Offerings into view whenever the user scrolls down into it from Hero,
 * and snaps Hero into view whenever the user scrolls back up into it.
 */
export function useSnapSectionIntoView(
  heroId = 'top',
  offeringsId = 'offerings',
) {
  useEffect(() => {
    const hero = document.getElementById(heroId)
    const offerings = document.getElementById(offeringsId)

    if (!hero || !offerings) {
      return
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let previousScrollY = window.scrollY
    let isScrollingDown = false
    let isSnapping = false
    let settledSection: SettledSection = 'hero'

    const onScroll = () => {
      const currentScrollY = window.scrollY
      isScrollingDown = currentScrollY > previousScrollY + SCROLL_EPSILON_PX
      const isScrollingUp = currentScrollY < previousScrollY - SCROLL_EPSILON_PX
      previousScrollY = currentScrollY

      if (isSnapping) {
        return
      }

      // Track when the user has freely moved past offerings into the page tail.
      const offeringsRect = offerings.getBoundingClientRect()
      if (offeringsRect.bottom < window.innerHeight * 0.15 && isScrollingDown) {
        settledSection = 'other'
      }

      void isScrollingUp
    }

    const snapTo = (section: HTMLElement, nextSettled: SettledSection) => {
      if (isSnapping) {
        return
      }

      isSnapping = true
      settledSection = nextSettled

      section.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      })

      window.setTimeout(() => {
        isSnapping = false
      }, reduceMotion ? 0 : SNAP_LOCK_MS)
    }

    const offeringsObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry || isSnapping) {
          return
        }

        const { intersectionRatio, isIntersecting } = entry

        if (isIntersecting && intersectionRatio >= SETTLED_RATIO) {
          settledSection = 'offerings'
          return
        }

        if (
          isScrollingDown &&
          settledSection === 'hero' &&
          isIntersecting &&
          intersectionRatio >= ENTER_RATIO &&
          intersectionRatio < SETTLED_RATIO
        ) {
          snapTo(offerings, 'offerings')
        }
      },
      {
        threshold: [0, ENTER_RATIO, 0.25, 0.5, SETTLED_RATIO, 1],
      },
    )

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry || isSnapping) {
          return
        }

        const { intersectionRatio, isIntersecting } = entry

        if (isIntersecting && intersectionRatio >= SETTLED_RATIO) {
          settledSection = 'hero'
          return
        }

        if (
          !isScrollingDown &&
          (settledSection === 'offerings' || settledSection === 'other') &&
          isIntersecting &&
          intersectionRatio >= ENTER_RATIO &&
          intersectionRatio < SETTLED_RATIO
        ) {
          snapTo(hero, 'hero')
        }
      },
      {
        threshold: [0, ENTER_RATIO, 0.25, 0.5, SETTLED_RATIO, 1],
      },
    )

    offeringsObserver.observe(offerings)
    heroObserver.observe(hero)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      offeringsObserver.disconnect()
      heroObserver.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [heroId, offeringsId])
}
