import { ArrowUpRight } from "lucide-react";

const cols = [
  {
    title: "Services",
    links: ["Web Development", "E-commerce", "UI/UX Design", "Custom Apps"],
  },
  {
    title: "Company",
    links: ["Work", "Process", "About", "Contact"],
  },
  {
    title: "Social",
    links: ["LinkedIn", "GitHub", "Instagram", "Dribbble"],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      {/* oversized wordmark */}
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8">
        <div className="grid gap-12 pb-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-md bg-accent/15 ring-1 ring-accent/30">
                <span className="size-2.5 rounded-[3px] bg-accent" />
              </span>
              <span className="font-display text-[17px] font-semibold tracking-tight">
                Webnify<span className="text-accent">.</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mute">
              A web &amp; software studio building fast, scalable digital
              products for ambitious teams.
            </p>
            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              Start a project
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="font-mono text-[12px] uppercase tracking-wide text-faint">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-mute transition-colors hover:text-ink">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* giant brand line */}
        <div className="select-none border-t border-line py-8 text-center">
          <span className="font-display text-[clamp(2.5rem,13vw,10rem)] font-semibold leading-none tracking-tighter text-surface">
            WEBNIFY
          </span>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-6 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[12px] text-faint">
            © {new Date().getFullYear()} Webnify Technologies. All rights reserved.
          </p>
          <p className="font-mono text-[12px] text-faint">
            Engineered in motion — Lahore · Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
