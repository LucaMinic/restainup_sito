import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react';
import { Code2, Cpu, Database, Monitor, Smartphone, Tablet } from 'lucide-react';
import { cn } from '../ui/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

const DEVICE_IDS = ['phone', 'desktop', 'tablet'] as const;
type DeviceId = (typeof DEVICE_IDS)[number];

const DEVICE_ICONS: Record<DeviceId, typeof Smartphone> = {
  phone: Smartphone,
  desktop: Monitor,
  tablet: Tablet,
};

const ORBITS = [
  { icon: Cpu, inset: '4%', duration: 26, dir: 1, delay: 0 },
  { icon: Database, inset: '12%', duration: 20, dir: -1, delay: 0.6 },
  { icon: Code2, inset: '20%', duration: 16, dir: 1, delay: 1.2 },
] as const;

const TONES = ['bg-lime', 'bg-ink/80', 'bg-lime/60', 'bg-ink/55'];
const SHAPES = ['rounded-full', 'rounded-lg', 'rounded-full'];
const SIZES = ['size-3', 'size-3.5', 'size-4'];

const RINGS = [
  { count: 6, radius: 7, size: 0 },
  { count: 9, radius: 13.5, size: 1 },
];

const FRAGMENTS = RINGS.flatMap(({ count, radius }, ringIndex) =>
  Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 + (ringIndex * Math.PI) / count;
    const globalIndex = ringIndex * 100 + i;
    const scatter = 26 + (ringIndex === 0 ? 0 : 10);
    return {
      left: `${50 + Math.cos(angle) * radius}%`,
      top: `${50 + Math.sin(angle) * radius}%`,
      dx: Math.cos(angle) * scatter,
      dy: Math.sin(angle) * scatter,
      spin: i % 2 === 0 ? 30 : -30,
      delay: (globalIndex % 12) * 0.1,
      tone: TONES[globalIndex % TONES.length],
      shape: SHAPES[globalIndex % SHAPES.length],
      size: SIZES[ringIndex],
      pointerFactor: 0.5 + ((globalIndex % 5) * 0.18),
    };
  }),
);

const POINTER_SPRING = { stiffness: 130, damping: 14, mass: 0.6 };

function Shard({
  left,
  top,
  dx,
  dy,
  spin,
  delay,
  tone,
  shape,
  size,
  pointerFactor,
  pointerX,
  pointerY,
  prefersReducedMotion,
}: {
  left: string;
  top: string;
  dx: number;
  dy: number;
  spin: number;
  delay: number;
  tone: string;
  shape: string;
  size: string;
  pointerFactor: number;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  prefersReducedMotion: boolean | null;
}) {
  const followX = useSpring(useTransform(pointerX, (v) => v * 34 * pointerFactor), POINTER_SPRING);
  const followY = useSpring(useTransform(pointerY, (v) => v * 34 * pointerFactor), POINTER_SPRING);

  return (
    <motion.div
      className="absolute"
      style={{ left, top, x: prefersReducedMotion ? 0 : followX, y: prefersReducedMotion ? 0 : followY }}
    >
      <motion.div
        className={cn('absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 shadow-md', size, tone, shape)}
        initial={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, dx, 0], y: [0, dy, 0], rotate: [0, spin, 0], scale: [1, 0.8, 1], opacity: [1, 0.65, 1] }
        }
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay }}
      />
    </motion.div>
  );
}

export function TransformShape({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<DeviceId>('phone');
  const stageRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((current) => DEVICE_IDS[(DEVICE_IDS.indexOf(current) + 1) % DEVICE_IDS.length]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const ActiveIcon = DEVICE_ICONS[activeId];

  return (
    <div
      className={cn('relative flex items-center justify-center overflow-hidden bg-accent', className)}
      style={{
        backgroundImage: 'radial-gradient(rgba(29,31,28,0.09) 1px, transparent 1px)',
        backgroundSize: '16px 16px',
      }}
    >
      <div
        ref={stageRef}
        className="relative aspect-square w-[78%]"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        {/* orbiting network nodes */}
        {ORBITS.map(({ icon: Icon, inset, duration, dir, delay }, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ inset }}
            initial={{ rotate: 0 }}
            animate={prefersReducedMotion ? undefined : { rotate: dir * 360 }}
            transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
          >
            <div className="absolute left-1/2 top-1/2 h-px w-1/2 origin-left bg-ink/15" />
            <motion.div
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ left: '50%', opacity: 0 }}
              animate={
                prefersReducedMotion ? undefined : { left: ['50%', '0%'], opacity: [0, 1, 0] }
              }
              transition={{ duration: duration / 8, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.4 }}
            >
              <span className="block size-1.5 rounded-full bg-lime" />
            </motion.div>
            <motion.div
              className="absolute left-0 top-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-white shadow-md"
              animate={prefersReducedMotion ? undefined : { rotate: -dir * 360, scale: [1, 1.08, 1] }}
              transition={{
                rotate: { duration, repeat: Infinity, ease: 'linear', delay },
                scale: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay },
              }}
            >
              <Icon className="size-4 text-ink/70" strokeWidth={1.75} />
            </motion.div>
          </motion.div>
        ))}

        {/* rotating dashed ring */}
        <motion.div
          className="absolute inset-[22%] rounded-full border-2 border-dashed border-ink/25"
          animate={prefersReducedMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />

        {/* ambient glow anchoring the core */}
        <motion.div
          className="absolute inset-[28%] rounded-full bg-lime/30 blur-xl"
          animate={prefersReducedMotion ? undefined : { opacity: [0.5, 0.9, 0.5], scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* core shape: colored shards that continuously decompose and recompose, and chase the pointer on hover */}
        {FRAGMENTS.map((fragment, i) => (
          <Shard
            key={i}
            {...fragment}
            pointerX={pointerX}
            pointerY={pointerY}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}

        {/* device badge cycling in sequence */}
        <span className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-white/90 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeId}
              className="flex items-center justify-center"
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.6, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.6, rotate: 20 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <ActiveIcon className="size-6 text-ink" strokeWidth={1.5} />
            </motion.span>
          </AnimatePresence>
        </span>
      </div>
    </div>
  );
}
