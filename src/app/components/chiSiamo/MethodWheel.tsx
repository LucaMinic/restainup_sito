import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Compass, Ear, LifeBuoy, Terminal } from 'lucide-react';
import { getChiSiamoContent } from '../../data/chiSiamo';
import { useLanguage } from '../../i18n/LanguageContext';
import { SectionEyebrow } from '../shared/SectionEyebrow';
import { RevealOnScroll } from '../shared/RevealOnScroll';
import { cn } from '../ui/utils';

const EASE = [0.22, 1, 0.36, 1] as const;
const stepIcons = [Ear, Compass, Terminal, LifeBuoy];
const ORBIT_DURATION_MS = 14000;

// Il metodo è un ciclo che si ripete a ogni progetto (non una filiera lineare
// come i passaggi del team), quindi la ruota rende meglio dello stepper.
export function MethodWheel() {
  const { language } = useLanguage();
  const { method } = getChiSiamoContent(language);
  const [active, setActive] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const activeStep = method.steps[active];

  // La sezione attiva segue la pallina verde in rotazione, non più il mouse:
  // ogni quarto di giro (durata orbita / n. step) illumina lo step successivo.
  useEffect(() => {
    if (prefersReducedMotion) return;
    const stepDuration = ORBIT_DURATION_MS / method.steps.length;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % method.steps.length);
    }, stepDuration);
    return () => clearInterval(interval);
  }, [prefersReducedMotion, method.steps.length]);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <RevealOnScroll>
        <SectionEyebrow>{method.eyebrow}</SectionEyebrow>
        <h2 className="mt-4 max-w-lg">{method.title}</h2>
      </RevealOnScroll>

      <div className="mt-14 grid items-center gap-16 lg:grid-cols-[380px_1fr]">
        <RevealOnScroll
          delay={0.1}
          className="relative mx-auto aspect-square w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[380px]"
        >
          <div
            className="absolute inset-0 rounded-full"
            aria-hidden="true"
            style={{
              backgroundImage: 'radial-gradient(rgba(29,31,28,0.08) 1px, transparent 1px)',
              backgroundSize: '14px 14px',
            }}
          />

          <motion.div
            className="absolute inset-[9%] rounded-full border-2 border-dashed border-ink/15"
            aria-hidden="true"
            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          />

          {!prefersReducedMotion && (
            <motion.div
              className="absolute inset-[9%]"
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: ORBIT_DURATION_MS / 1000, repeat: Infinity, ease: 'linear' }}
            >
              <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-md" />
            </motion.div>
          )}

          {method.steps.map((step, index) => {
            const angle = -90 + index * 90;
            const rad = (angle * Math.PI) / 180;
            const left = 50 + Math.cos(rad) * 42;
            const top = 50 + Math.sin(rad) * 42;
            const Icon = stepIcons[index] ?? stepIcons[0];
            const isActive = active === index;

            return (
              <div
                key={step.title}
                aria-label={step.title}
                aria-current={isActive}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-full"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                <span
                  className={cn(
                    'flex size-12 items-center justify-center rounded-full border bg-white shadow-sm transition-all duration-300 sm:size-14',
                    isActive ? 'scale-110 border-primary bg-primary' : 'border-border',
                  )}
                >
                  <Icon
                    className={cn(
                      'size-5 transition-colors duration-300 sm:size-6',
                      isActive ? 'text-primary-foreground' : 'text-ink/70',
                    )}
                    strokeWidth={1.75}
                  />
                </span>
                <span
                  className={cn(
                    'font-mono text-[11px] transition-colors duration-300',
                    isActive ? 'text-primary' : 'text-muted-foreground',
                  )}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            );
          })}

          <span className="absolute left-1/2 top-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-ink px-2 text-center shadow-lg sm:size-28">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeStep.title}
                className="font-display text-sm font-semibold text-background"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                {activeStep.title}
              </motion.span>
            </AnimatePresence>
          </span>
        </RevealOnScroll>

        <div className="grid gap-8 sm:grid-cols-2">
          {method.steps.map((step, index) => (
            <RevealOnScroll key={step.title} delay={index * 0.06}>
              <div className="w-full rounded-lg text-left">
                <span
                  className={cn(
                    'font-mono text-sm transition-colors duration-300',
                    active === index ? 'text-primary' : 'text-muted-foreground',
                  )}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.text}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
