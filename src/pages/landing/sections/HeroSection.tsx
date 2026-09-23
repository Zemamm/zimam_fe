import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { UiContainer, UiHeading, UiText } from "@/design-system";
import { FloatingDecor } from "../components/FloatingDecor";
import { landingContent } from "../data/content";
import { heroSectionStyles } from "./HeroSection.styles";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 0.75],
    reduceMotion ? [1, 1, 1] : [1, 0.55, 0],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.75],
    reduceMotion ? [0, 0] : [0, -80],
  );
  const contentScale = useTransform(
    scrollYProgress,
    [0, 0.75],
    reduceMotion ? [1, 1] : [1, 0.94],
  );
  const floatingY = useTransform(
    scrollYProgress,
    [0, 0.75],
    reduceMotion ? [0, 0] : [0, -110],
  );
  const floatingOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 0.7],
    reduceMotion ? [1, 1, 1] : [1, 0.5, 0],
  );

  return (
    <Box
      ref={sectionRef}
      id="top"
      component="section"
      sx={heroSectionStyles.root}
    >
      <Box
        component={motion.div}
        style={{
          opacity: floatingOpacity,
          y: floatingY,
        }}
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <FloatingDecor />
      </Box>

      <UiContainer>
        <Box
          component={motion.div}
          sx={heroSectionStyles.content}
          style={{
            opacity: contentOpacity,
            y: contentY,
            scale: contentScale,
          }}
        >
          <Stack spacing={0} sx={{ alignItems: "center" }}>
            <Box
              component={motion.div}
              sx={heroSectionStyles.eyebrow}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Box sx={heroSectionStyles.eyebrowDot} />
              {landingContent.eyebrow}
            </Box>

            <Box
              component={motion.div}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.25,
                    delayChildren: 0.15,
                  },
                },
              }}
              initial={reduceMotion ? "visible" : "hidden"}
              animate="visible"
            >
              <UiHeading
                variant="h1"
                component="h1"
                sx={heroSectionStyles.brandGlow}
              >
                {landingContent.headlineLine1.split(' ').map((word, i, arr) => (
                  <Box
                    key={`l1-${i}`}
                    component="span"
                    sx={{ display: 'inline-block', whiteSpace: 'pre' }}
                  >
                    <Box
                      component={motion.span}
                      variants={{
                        hidden: { opacity: 0, y: 30, filter: 'blur(12px)', scale: 0.95 },
                        visible: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 },
                      }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      sx={{ display: 'inline-block' }}
                    >
                      {word}
                    </Box>
                    {i < arr.length - 1 ? ' ' : ''}
                  </Box>
                ))}
                <Box component="br" />
                {landingContent.headlineLine2.split(' ').map((word, i, arr) => (
                  <Box
                    key={`l2-${i}`}
                    component="span"
                    sx={{ display: 'inline-block', whiteSpace: 'pre' }}
                  >
                    <Box
                      component={motion.span}
                      variants={{
                        hidden: { opacity: 0, y: 30, filter: 'blur(12px)', scale: 0.95 },
                        visible: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 },
                      }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      sx={{ display: 'inline-block' }}
                    >
                      {word}
                    </Box>
                    {i < arr.length - 1 ? ' ' : ''}
                  </Box>
                ))}
              </UiHeading>
            </Box>

            <Box
              component={motion.div}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <UiText sx={heroSectionStyles.support}>
                {landingContent.support}
              </UiText>
            </Box>

            <Box
              component={motion.div}
              sx={heroSectionStyles.features}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {landingContent.heroFeatures.map((feature) => (
                <Box key={feature} sx={heroSectionStyles.feature}>
                  <Box sx={heroSectionStyles.featureIcon} />
                  {feature}
                </Box>
              ))}
            </Box>

            <Box
              component={motion.div}
              sx={heroSectionStyles.ctas}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Box
                component="a"
                href="#contact"
                sx={heroSectionStyles.primaryCta}
              >
                {landingContent.primaryCta}
                <Box
                  component="span"
                  sx={heroSectionStyles.primaryCtaIcon}
                  aria-hidden
                >
                  →
                </Box>
              </Box>
              <Box
                component="a"
                href="#offerings"
                sx={heroSectionStyles.secondaryCta}
              >
                {landingContent.secondaryCta}
              </Box>
            </Box>
          </Stack>
        </Box>
      </UiContainer>

      <Box
        component={motion.div}
        sx={heroSectionStyles.footerRow}
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{ opacity: contentOpacity }}
      >
        <Box
          component={motion.a}
          href="#offerings"
          sx={heroSectionStyles.scrollHint}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, 6, 0],
                }
          }
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          {landingContent.scrollHint}
          <Box component="span" aria-hidden>
            ↓
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
