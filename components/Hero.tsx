"use client";

import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const line1 = ["We", "build", "digital"];
const line2 = ["products", "that"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      {/* blueprint grid + glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(79,124,255,0.22), transparent 70%)" }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* status chip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-bg2/60 px-3.5 py-1.5"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-[12px] tracking-wide text-mute">
            Available for new projects — 2026
          </span>
        </motion.div>

        {/* kinetic headline */}
        <h1 className="max-w-4xl font-display text-[clamp(2.6rem,8vw,5.75rem)] font-semibold leading-[0.98] tracking-tight">
          <Words words={line1} />
          <br />
          <span className="ink-gradient">
            <Words words={line2} baseDelay={line1.length} />
          </span>{" "}
          <span className="relative inline-block">
            <Words words={["perform."]} baseDelay={line1.length + line2.length} accent />
          </span>
        </h1>

        {/* subhead */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.7 }}
          className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-mute"
        >
          Webnify Technologies is a web &amp; software studio. We turn ambitious
          ideas into fast, scalable websites, stores, and custom applications.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-all hover:shadow-[0_0_0_1px_rgba(79,124,255,0.4),0_18px_50px_-15px_rgba(79,124,255,0.7)]"
          >
            Start a project
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-line2 px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-surface"
          >
            See our work
          </a>
        </motion.div>

        {/* corner annotation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-20 flex items-center gap-3 font-mono text-[12px] text-faint"
        >
          <ArrowDown className="size-4 animate-bounce text-accent" />
          <span>// scroll to explore — Lahore · Worldwide</span>
        </motion.div>
      </div>
    </section>
  );
}

function Words({
  words,
  baseDelay = 0,
  accent = false,
}: {
  words: string[];
  baseDelay?: number;
  accent?: boolean;
}) {
  return (
    <>
      {words.map((w, i) => (
        <span key={w + i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${accent ? "text-accent" : ""}`}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.12 * (baseDelay + i) + 0.15 }}
          >
            {w}
            {i < words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </>
  );
}
