"use client";

import { motion } from "motion/react";
import { Reveal } from "./motion-primitives";

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "We dig into your goals, audience, and competitors — then map the fastest route to real results.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Wireframes to high-fidelity UI. You approve every screen before a single line of code is written.",
  },
  {
    n: "03",
    title: "Build",
    desc: "Clean, tested, production-ready code — built section by section with you in the loop throughout.",
  },
  {
    n: "04",
    title: "Launch & grow",
    desc: "We ship, measure, and refine. Performance, SEO, and ongoing support keep momentum after go-live.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-[0.04]" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">// how we work</p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.04] tracking-tight">
            A process built on clarity, not surprises.
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {/* animated progress line */}
          <motion.div
            className="absolute left-0 top-0 z-10 hidden h-[2px] bg-accent md:block"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="h-full bg-bg p-7">
                <span className="font-display text-5xl font-semibold text-surface [-webkit-text-stroke:1px_var(--color-line2)]">
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mute">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
