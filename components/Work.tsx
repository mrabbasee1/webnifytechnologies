"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./motion-primitives";

const projects = [
  {
    name: "Onoure",
    category: "Skincare E-commerce",
    year: "2025",
    blurb: "A skin-microbiome brand storefront with scroll-driven product animation and a custom Shopify theme.",
    gradient: "linear-gradient(135deg,#1b2a4a 0%,#0e1320 60%)",
    accent: "#5b8cff",
    big: true,
  },
  {
    name: "Life Force MD",
    category: "Telehealth Platform",
    year: "2025",
    blurb: "A GLP-1 telehealth homepage and intake flow on a custom WordPress build.",
    gradient: "linear-gradient(135deg,#13324a 0%,#0e1320 60%)",
    accent: "#4bd6c8",
  },
  {
    name: "Emiko",
    category: "Beauty Storefront",
    year: "2024",
    blurb: "Before/after sliders, a ritual builder, and a loyalty program — all custom Liquid.",
    gradient: "linear-gradient(135deg,#2a1e44 0%,#0e1320 60%)",
    accent: "#a98bff",
  },
  {
    name: "Collectorcon",
    category: "Marketplace",
    year: "2024",
    blurb: "A dark, premium TCG marketplace with structured collections and graded listings.",
    gradient: "linear-gradient(135deg,#3a2418 0%,#0e1320 60%)",
    accent: "#ffb86b",
    big: true,
  },
];

export default function Work() {
  return (
    <section id="work" className="relative border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">// selected work</p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.04] tracking-tight">
            Work we&apos;re proud to put our name on.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.08} className={p.big ? "md:col-span-1" : ""}>
              <a
                href="#contact"
                className="group relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl border border-line p-7 transition-all duration-500 hover:border-line2"
                style={{ background: p.gradient }}
              >
                <div className="pointer-events-none absolute inset-0 dot-bg opacity-[0.06]" />
                <div
                  className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: p.accent }}
                />

                <div className="relative flex items-start justify-between">
                  <span className="rounded-full border border-line2 bg-bg/40 px-3 py-1 font-mono text-[11px] text-ink/80 backdrop-blur">
                    {p.category}
                  </span>
                  <span className="grid size-10 place-items-center rounded-full border border-line2 bg-bg/40 text-ink backdrop-blur transition-all duration-300 group-hover:bg-ink group-hover:text-bg">
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

                <div className="relative">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-3xl font-semibold tracking-tight">{p.name}</h3>
                    <span className="font-mono text-[12px] text-mute">{p.year}</span>
                  </div>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/70">{p.blurb}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
