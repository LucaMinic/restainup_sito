import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

/** Sposta verticalmente il contenuto durante lo scroll, per un effetto di profondità leggero. */
export function Parallax({
  children,
  className,
  offset = 28,
}: {
  children: ReactNode;
  className?: string;
  /** Ampiezza dello spostamento in px (da -offset a +offset lungo lo scroll della sezione). */
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
