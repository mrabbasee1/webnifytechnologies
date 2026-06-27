"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { DrawRule } from "./motion-primitives";

const stats = [
  { value: 120, suffix: "+", label: "Projects shipped" },
  { value: 4, suffix: " yrs", label: "Building for the web" },
  { value: 30, suffix: "+", label: "Happy clients worldwide" },
  { value: 98, suffix: "%", label: "Avg. performance score" },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-t border-line py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-2">
              <div className="font-display text-[clamp(2.4rem,6vw,3.75rem)] font-semibold tracking-tight">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <DrawRule className="my-4 max-w-[120px]" />
              <p className="text-sm text-mute">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
