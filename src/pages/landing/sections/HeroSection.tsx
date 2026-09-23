import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { UiContainer, UiText } from "@/design-system";
import { FloatingDecor } from "../components/FloatingDecor";
import { HeroTitle } from "../components/HeroTitle";
import { useLandingCopy } from "../i18n/LocaleProvider";
import { heroSectionStyles } from "./HeroSection.styles";

const heroViewport = { once: false, amount: 0.35 } as const;

export function HeroSection() {
  const { content } = useLandingCopy();
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.9],
    reduceMotion ? [1, 1, 1] : [1, 0.72, 0.2],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.9],
    reduceMotion ? [0, 0] : [0, -48],
  );
  const contentScale = useTransform(
    scrollYProgress,
    [0, 0.9],
    reduceMotion ? [1, 1] : [1, 0.97],
  );
  const floatingY = useTransform(
    scrollYProgress,
    [0, 0.9],
    reduceMotion ? [0, 0] : [0, -72],
  );
  const floatingOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.9],
    reduceMotion ? [1, 1, 1] : [1, 0.65, 0.15],
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={heroViewport}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Box sx={heroSectionStyles.eyebrowDot} />
              {content.eyebrow}
            </Box>

            <HeroTitle />

            <Box
              component={motion.div}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={heroViewport}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <UiText sx={heroSectionStyles.support}>
                {content.support}
              </UiText>
            </Box>

            <Box
              component={motion.div}
              sx={heroSectionStyles.features}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={heroViewport}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {content.heroFeatures.map((feature) => (
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={heroViewport}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Box
                component="a"
                href="#contact"
                sx={heroSectionStyles.primaryCta}
              >
                {content.primaryCta}
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
                {content.secondaryCta}
              </Box>
            </Box>
          </Stack>
        </Box>
      </UiContainer>

      <Box
        component={motion.div}
        sx={heroSectionStyles.footerRow}
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={heroViewport}
        transition={{ delay: 0.55, duration: 0.6 }}
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
          {content.scrollHint}
          <Box component="span" aria-hidden>
            ↓
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
