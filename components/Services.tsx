"use client";

import { Code2, ShoppingBag, PenTool, AppWindow, Gauge, Wrench } from "lucide-react";
import { Reveal, DrawRule } from "./motion-primitives";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Custom, lightning-fast websites built on Next.js and modern stacks — accessible, SEO-ready, and effortless to scale.",
    tags: ["Next.js", "React", "Headless"],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Conversion-focused stores on Shopify and WooCommerce, with custom sections, checkout flows, and integrations.",
    tags: ["Shopify", "Liquid", "WooCommerce"],
  },
  {
    icon: PenTool,
    title: "UI / UX Design",
    desc: "Interfaces people love to use. We design systems, prototypes, and pixel-perfect screens that ship.",
    tags: ["Figma", "Design systems", "Prototypes"],
  },
  {
    icon: AppWindow,
    title: "Custom Applications",
    desc: "Dashboards, portals, and web apps with robust APIs and clean architecture — built to grow with you.",
    tags: ["APIs", "Dashboards", "SaaS"],
  },
  {
    icon: Gauge,
    title: "SEO & Performance",
    desc: "Technical SEO and Core Web Vitals tuning so you rank higher and load faster on every device.",
    tags: ["Core Web Vitals", "Technical SEO"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Care",
    desc: "Ongoing updates, monitoring, and support that keep your product secure, fast, and bug-free.",
    tags: ["Support", "Monitoring", "Updates"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">// services — what we do</p>
          <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-2xl font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.04] tracking-tight">
              Everything your product needs, under one roof.
            </h2>
            <p className="max-w-sm text-mute">
              From the first wireframe to launch day and beyond — one team,
              accountable for the whole build.
            </p>
          </div>
        </Reveal>

        <DrawRule className="my-12" />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06}>
              <article className="group relative h-full bg-bg p-7 transition-colors duration-300 hover:bg-bg2">
                <span className="font-mono text-[12px] text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-5 grid size-11 place-items-center rounded-xl border border-line2 bg-surface text-accent transition-colors group-hover:border-accent/40">
                  <s.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mute">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line bg-bg2 px-2.5 py-1 font-mono text-[11px] text-faint"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
