"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Reveal } from "./motion-primitives";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project enquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:hello@webnifytechnologies.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle,rgba(79,124,255,0.16),transparent 70%)" }}
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: pitch */}
          <Reveal>
            <p className="eyebrow">// let&apos;s talk</p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,4rem)] font-semibold leading-[1.0] tracking-tight">
              Have a project in mind?
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-mute">
              Tell us what you&apos;re building. We&apos;ll get back within one
              business day with next steps — no obligation.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:hello@webnifytechnologies.com"
                className="group flex items-center gap-3 text-ink"
              >
                <span className="grid size-10 place-items-center rounded-full border border-line2 text-accent">
                  <Mail className="size-4" />
                </span>
                <span className="transition-colors group-hover:text-accent">
                  hello@webnifytechnologies.com
                </span>
              </a>
              <div className="flex items-center gap-3 text-mute">
                <span className="grid size-10 place-items-center rounded-full border border-line2 text-accent">
                  <MapPin className="size-4" />
                </span>
                <span>Lahore, Pakistan — working worldwide</span>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-line bg-bg2/50 p-6 backdrop-blur sm:p-8"
            >
              <div className="space-y-5">
                <Field
                  label="Your name"
                  id="name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="Jane Doe"
                />
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  placeholder="jane@company.com"
                />
                <div>
                  <label htmlFor="message" className="mb-2 block font-mono text-[12px] uppercase tracking-wide text-faint">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What would you like to build?"
                    className="w-full resize-none rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-faint focus:border-accent/50 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-all hover:shadow-[0_0_0_1px_rgba(79,124,255,0.4),0_18px_50px_-15px_rgba(79,124,255,0.7)]"
                >
                  Send enquiry
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, id, value, onChange, placeholder, type = "text",
}: {
  label: string; id: string; value: string;
  onChange: (v: string) => void; placeholder: string; type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-mono text-[12px] uppercase tracking-wide text-faint">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-faint focus:border-accent/50 focus:outline-none"
      />
    </div>
  );
}
