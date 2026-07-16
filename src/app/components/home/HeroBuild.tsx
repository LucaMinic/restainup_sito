import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router';
import { motion, useReducedMotion } from 'motion/react';
import { homeContent } from '../../data/home';
import { Button } from '../ui/button';
import { BrowserFrame } from '../portfolio/BrowserFrame';
import { SectionEyebrow } from '../shared/SectionEyebrow';
import digitalTransformationVideo from '../../../assets/Digital-transformation-3-comp.mp4';

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroBuild() {
  const prefersReducedMotion = useReducedMotion();
  const [built, setBuilt] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      setBuilt(true);
      return;
    }
    const timeout = setTimeout(() => setBuilt(true), 650);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      videoRef.current?.pause();
    }
  }, [prefersReducedMotion]);

  return (
    <section className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
      <div className="relative">
        <motion.div
          initial={false}
          animate={{ opacity: built ? 1 : 0, y: built ? 0 : 10 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <SectionEyebrow>{homeContent.hero.eyebrow}</SectionEyebrow>
          <h1 className="mt-5">{homeContent.hero.title}</h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">{homeContent.hero.subtitle}</p>
          <div className="mt-9">
            <Button asChild size="lg">
              <NavLink to={homeContent.hero.ctaPath}>{homeContent.hero.ctaLabel}</NavLink>
            </Button>
          </div>
        </motion.div>

        {!prefersReducedMotion && (
          <motion.div
            className="pointer-events-none absolute inset-0 flex flex-col gap-4"
            aria-hidden="true"
            initial={{ opacity: 1 }}
            animate={{ opacity: built ? 0 : 1 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="h-3 w-28 rounded-full bg-ink/10" />
            <div className="mt-4 h-10 w-4/5 rounded-lg bg-ink/10" />
            <div className="h-10 w-3/5 rounded-lg bg-ink/10" />
            <div className="mt-3 h-4 w-full max-w-sm rounded bg-ink/10" />
            <div className="h-4 w-2/3 max-w-sm rounded bg-ink/10" />
            <div className="mt-6 h-11 w-40 rounded-md bg-ink/10" />
          </motion.div>
        )}
      </div>

      <BrowserFrame url="restainup.it">
        <div className="relative aspect-[4/3]">
          {!prefersReducedMotion && (
            <motion.div
              className="pointer-events-none absolute inset-6 flex flex-col gap-3"
              aria-hidden="true"
              initial={{ opacity: 1 }}
              animate={{ opacity: built ? 0 : 1 }}
              transition={{ duration: 0.4, ease: EASE, delay: 0.1 }}
            >
              <div className="h-3 w-20 rounded-full bg-ink/10" />
              <div className="h-24 w-full rounded-lg bg-ink/10" />
              <div className="flex gap-3">
                <div className="h-14 flex-1 rounded-md bg-ink/10" />
                <div className="h-14 flex-1 rounded-md bg-ink/10" />
              </div>
              <div className="h-8 w-24 rounded-md bg-ink/10" />
            </motion.div>
          )}

          <motion.video
            ref={videoRef}
            src={digitalTransformationVideo}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay={!prefersReducedMotion}
            loop
            muted
            playsInline
            initial={false}
            animate={{ opacity: built ? 1 : 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: prefersReducedMotion ? 0 : 0.15 }}
          />
        </div>
      </BrowserFrame>
    </section>
  );
}
