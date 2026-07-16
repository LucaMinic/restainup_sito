import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { homeContent } from '../../data/home';
import { SectionEyebrow } from '../shared/SectionEyebrow';
import { PlaceholderMedia } from '../shared/PlaceholderMedia';

const EASE = [0.22, 1, 0.36, 1] as const;

export function ValueProposition() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-36, 36]);

  return (
    <section ref={sectionRef} className="bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="md:grid md:grid-cols-12 md:gap-6">
          <div className="md:col-span-7 md:col-start-6">
            <motion.div
              initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 1.06 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: EASE }}
              style={prefersReducedMotion ? undefined : { y: imageY }}
              className="overflow-hidden rounded-[2rem]"
            >
              <PlaceholderMedia label="{{FOTO_TEAM_O_UFFICIO}}" photoId={0} className="aspect-[16/11] w-full" />
            </motion.div>
          </div>

          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="relative z-10 -mt-12 rounded-2xl bg-white p-8 shadow-xl md:col-span-6 md:col-start-1 md:-mr-12 md:mt-0 md:self-center md:p-10"
          >
            <SectionEyebrow>{homeContent.valueProp.eyebrow}</SectionEyebrow>
            <h2 className="mt-4">{homeContent.valueProp.title}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{homeContent.valueProp.text}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
