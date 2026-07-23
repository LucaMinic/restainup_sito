import { motion, useReducedMotion } from 'motion/react';
import { getHomeContent } from '../../data/home';
import { useLanguage } from '../../i18n/LanguageContext';
import { SectionEyebrow } from '../shared/SectionEyebrow';
import { TransformShape } from '../shared/TransformShape';
import { Parallax } from '../shared/Parallax';
import logo from '../../../assets/restainup-logo.png';

const EASE = [0.22, 1, 0.36, 1] as const;

export function ValueProposition() {
  const prefersReducedMotion = useReducedMotion();
  const { language } = useLanguage();
  const homeContent = getHomeContent(language);

  return (
    <section className="bg-secondary/30 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: -16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12 flex justify-center md:mb-16"
        >
          <img src={logo} alt="Restainup" className="h-14 w-auto md:h-20 lg:h-24" />
        </motion.div>

        <Parallax className="mx-auto w-full max-w-4xl" offset={24}>
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 1.04 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="overflow-hidden rounded-[2rem] shadow-xl"
          >
            <TransformShape className="aspect-video w-full" />
          </motion.div>
        </Parallax>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="relative z-10 mx-auto -mt-12 max-w-2xl rounded-2xl bg-white p-8 text-center shadow-xl md:p-10"
        >
          <SectionEyebrow className="justify-center">{homeContent.valueProp.eyebrow}</SectionEyebrow>
          <h2 className="mt-4">{homeContent.valueProp.title}</h2>
          <p className="mt-5 text-lg text-muted-foreground">{homeContent.valueProp.text}</p>
        </motion.div>
      </div>
    </section>
  );
}
