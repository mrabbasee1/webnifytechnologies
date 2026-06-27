"use client";

import { motion } from "motion/react";

const stack = [
  "Next.js", "React", "TypeScript", "Node.js", "Shopify", "WordPress",
  "Tailwind CSS", "Framer Motion", "PostgreSQL", "Figma", "Vercel", "Liquid",
];

export default function Marquee() {
  const row = [...stack, ...stack];
  return (
    <section className="border-y border-line bg-bg2/40 py-7">
      <div className="mx-auto mb-5 max-w-7xl px-5 sm:px-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-faint">
          // tools we ship with
        </p>
      </div>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <motion.div
          className="flex shrink-0 items-center gap-10 pr-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {row.map((t, i) => (
            <span
              key={t + i}
              className="whitespace-nowrap font-display text-xl font-medium text-mute/70 transition-colors hover:text-ink sm:text-2xl"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
