"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

interface ProjectData {
  tag: string;
  description: string;
  metrics: readonly string[];
  tech: readonly string[];
  status: string;
}

const PROJECTS = {
  ECODIA: {
    tag: "Founder / Engineer",
    description:
      "A reward ecosystem that makes real-world action measurable, tradable, and worth doing.",
    metrics: ["Token & voucher ledger", "Impact attribution", "Real-time reward logic"],
    tech: ["React Native", "FastAPI", "Neo4j", "Postgres"],
    status: "Active",
  },
 // LENDY: {
   // tag: "Architecture & Lead Dev",
    //description: "Community lending + bartering with a trust layer that doesn’t feel like a bank.",
    //metrics: ["Identity & trust signals", "Escrow-like holds", "Marketplace + messaging"],
    //tech: ["Next.js", "Supabase", "Stripe Connect"],
    //status: "In Development",
  //},
  //ENDLESS_SUMMER: {
   // tag: "Full-Stack Engineer",
   // description: "Modern rebuild of a high-revenue platform: faster, cleaner, and built to convert.",
   // metrics: ["Core Web Vitals uplift", "SEO foundations", "CMS + content pipeline"],
   // tech: ["TypeScript", "Tailwind", "Payload CMS"],
   // status: "Q1 Launch",
  //},
} as const;

type ProjectKey = keyof typeof PROJECTS;

/**
 * NOTE:
 * You have Next.js "typed routes" enabled.
 * Your generated Link types currently ONLY know about:
 *   "/i-worked-on-this/rebuild"
 * (that’s why it’s insisting RouteImpl<"/i-worked-on-this/rebuild">).
 *
 * Fix WITHOUT fighting types: use the UrlObject form (pathname string),
 * which satisfies href: UrlObject.
 */
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY || 0));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return y;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = React.useRef<T | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect(); // reveal once
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

function Reveal({
  children,
  className = "",
  delayMs = 0,
  y = 14,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  y?: number;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.12,
    rootMargin: "0px 0px -10% 0px",
  });

  const show = reducedMotion ? true : inView;

  return (
    <div
      ref={ref}
      className={[
        "will-change-transform will-change-opacity",
        "transition-[transform,opacity] duration-700 ease-out",
        show ? "opacity-100" : "opacity-0",
        className,
      ].join(" ")}
      style={{
        transform: show ? "translate3d(0,0,0)" : `translate3d(0,${y}px,0)`,
        transitionDelay: reducedMotion ? "0ms" : `${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Curvy({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`font-serif italic font-light lowercase tracking-normal text-zinc-500 ${className}`}
      style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 1" }}
    >
      {children}
    </span>
  );
}

function StrongWord({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={[
        "font-serif inline-block italic font-light lowercase tracking-tight transition-all duration-700",
        "-rotate-[1.2deg] skew-x-[-1deg]",
        className,
      ].join(" ")}
      style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 1" }}
    >
      {children}
    </span>
  );
}

function InspectorCard({
  activeProject,
  current,
}: {
  activeProject: ProjectKey;
  current: ProjectData;
}) {
  // Use UrlObject form to satisfy Link's typed href (avoids RouteImpl narrowing bugs)
  const href = { pathname: `/i-worked-on-this/${activeProject.toLowerCase()}` };

  return (
    <div className="w-full bg-white border border-black/10 shadow-[20px_20px_0px_rgba(0,0,0,0.02)] p-6 sm:p-10 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#396041]50 -mr-12 -mt-12 rounded-full blur-2xl transition-colors" />

      <div className="flex justify-between items-start mb-10 border-b border-black/10 pb-5 relative z-10">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black">
            {activeProject} // SPEC_2026
          </span>
          <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
            Engineering Report
          </span>
        </div>
        <div className="h-2 w-2 rounded-full bg-[#396041] animate-pulse" />
      </div>

      <div className="space-y-8 relative z-10">
        <div>
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2 block font-bold">
            01_Role
          </span>
          <p className="text-sm font-black uppercase tracking-tight text-black">{current.tag}</p>
        </div>

        <div>
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2 block font-bold">
            02_Intent
          </span>
          <p className="text-base sm:text-lg leading-tight font-medium tracking-tight text-zinc-800">
            {current.description}
          </p>
        </div>

        <div>
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2 block font-bold">
            03_Systems_Built
          </span>
          <ul className="space-y-2">
            {current.metrics.map((m) => (
              <li
                key={m}
                className="text-[11px] font-bold uppercase tracking-tight flex items-center gap-3 text-black"
              >
                <span className="text-[#396041]">0x</span>
                <span className="text-[#7fd079]">{m}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            {current.tech.map((t) => (
              <span
                key={t}
                className="text-[9px] font-mono bg-zinc-50 px-2 py-1 uppercase text-zinc-500 border border-black/5"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center border-t border-black/10 pt-5">
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-zinc-400 uppercase">Status</span>
              <span className="text-[10px] font-black text-[#c29c15] uppercase tracking-widest">
                ● {current.status}
              </span>
            </div>

            <Link
              href={href}
              className="text-[10px] font-black uppercase underline! underline-offset-8 hover:text-[#396041] transition-colors"
            >
              More on this
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaperArchitect() {
  const [activeProject, setActiveProject] = useState<ProjectKey>("ECODIA");
  const [mobileInspectorOpen, setMobileInspectorOpen] = useState(false);

  const reducedMotion = usePrefersReducedMotion();
  const scrollY = useScrollY();

  const current = useMemo(() => PROJECTS[activeProject], [activeProject]);

  function selectProject(key: ProjectKey) {
    setActiveProject(key);
    setMobileInspectorOpen(true);
  }

  const noiseOffset = reducedMotion ? 0 : Math.min(40, scrollY * 0.03); // 0..40px
  const blobA = reducedMotion ? 0 : Math.min(120, scrollY * 0.12);
  const blobB = reducedMotion ? 0 : Math.min(160, scrollY * 0.08);
  const blobC = reducedMotion ? 0 : Math.min(200, scrollY * 0.05);

  const heroShiftA = reducedMotion ? 0 : Math.sin(scrollY * 0.004) * 6; // px
  const heroShiftB = reducedMotion ? 0 : Math.sin(scrollY * 0.004 + 1.2) * 10;
  const heroShiftC = reducedMotion ? 0 : Math.sin(scrollY * 0.004 + 2.4) * 7;

  return (
    <main className="min-h-screen bg-[#FDFCFB] text-[#141414] font-sans selection:bg-black selection:text-white relative">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.05] z-50 contrast-125 will-change-transform"
        style={{
          transform: `translate3d(${noiseOffset * -0.6}px, ${noiseOffset}px, 0)`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute -left-24 top-24 h-80 w-80 rounded-full blur-3xl opacity-[0.20] bg-[#396041]"
          style={{ transform: `translate3d(0, ${blobA}px, 0)` }}
        />
        <div
          className="absolute right-[-140px] top-[20vh] h-[420px] w-[420px] rounded-full blur-3xl opacity-[0.14] bg-[#c29c15]"
          style={{ transform: `translate3d(0, ${blobB}px, 0)` }}
        />
        <div
          className="absolute left-[25%] bottom-[-220px] h-[520px] w-[520px] rounded-full blur-3xl opacity-[0.10] bg-[#7fd079]"
          style={{ transform: `translate3d(0, ${-blobC}px, 0)` }}
        />
      </div>

      <div className="flex flex-col md:flex-row min-h-screen relative z-10">
        <section className="w-full md:w-3/5 px-6 sm:px-8 md:px-20 pt-12 md:pt-24 pb-40">
          <Reveal y={10}>
            <header className="mb-20 md:mb-32 flex flex-col gap-1 text-black">
              <h2 className="text-sm font-black tracking-tight uppercase">Tate Donohoe</h2>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em] font-bold">
                Product Engineer / AU
              </p>
            </header>
          </Reveal>

          <Reveal delayMs={80} y={16}>
            <div className="max-w-xl mb-24 md:mb-48">
              <h1 className="leading-[0.85] font-black tracking-[-0.05em] uppercase mb-10">
                <span
                  className="block text-[14vw] sm:text-[12vw] md:text-[6.5vw] text-black will-change-transform"
                  style={{
                    transform: reducedMotion
                      ? "none"
                      : `translate3d(${heroShiftA * 0.35}px, ${heroShiftA}px, 0)`,
                  }}
                >
                  Building
                </span>

                <span
                  className="block text-[14vw] sm:text-[12vw] md:text-[6.5vw] text-black will-change-transform"
                  style={{
                    transform: reducedMotion
                      ? "none"
                      : `translate3d(${heroShiftB * 0.25}px, ${heroShiftB}px, 0)`,
                  }}
                >
                  <Curvy className="text-zinc-400 normal-case tracking-tighter">the world</Curvy>
                </span>

                <span
                  className="block text-[14vw] sm:text-[12vw] md:text-[6.5vw] text-black will-change-transform"
                  style={{
                    transform: reducedMotion
                      ? "none"
                      : `translate3d(${heroShiftC * 0.2}px, ${heroShiftC}px, 0)`,
                  }}
                >
                  that comes next.
                </span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-[1.25] tracking-tight text-zinc-800">
  I didn't learn to code to get a job. I learned to code so I could build <StrongWord className="text-[#396041]">Ecodia</StrongWord>. 
  Now I engineer for others who care about the <StrongWord className="text-[#c29c15]">world.</StrongWord>
</p>

              <p className="mt-10 text-sm sm:text-base text-zinc-500 leading-relaxed max-w-[50ch] font-medium italic">
                "Building digital infrastructure for the conscious economy."
              </p>
            </div>
          </Reveal>

          <div className="space-y-12 md:space-y-32">
            {(Object.keys(PROJECTS) as ProjectKey[]).map((key, idx) => {
              const isActive = activeProject === key;

              return (
                <Reveal key={key} delayMs={idx * 60} y={18}>
                  <div
                    onMouseEnter={() => setActiveProject(key)}
                    onClick={() => selectProject(key)}
                    role="button"
                    tabIndex={0}
                    className="group cursor-pointer py-10 border-t border-black/10 outline-none block"
                  >
                    <div className="flex justify-between items-baseline gap-4">
                      <h3
                        className={[
                          "font-black tracking-tighter uppercase transition-all duration-700",
                          "text-[5vw] sm:text-[8vw] md:text-6xl leading-none",
                          isActive ? "text-black translate-x-4" : "outline-text",
                        ].join(" ")}
                      >
                        {key}
                      </h3>

                      <div
                        className={`flex flex-col items-end transition-all duration-500 ${
                          isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                      >
                        <span className="text-2xl text-black">→</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal y={14}>
            <footer className="mt-32 md:mt-64 pt-16 md:pt-24 border-t-2 border-black">
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] font-bold mb-4">
                Get in Touch
              </p>
              <a
                href="mailto:tate@ecodia.au"
                className="block text-2xl sm:text-2xl md:text-3xl font-black tracking-tighter uppercase hover:text-[#396041] transition-all text-black break-all"
              >
                tate@ecodia.au
              </a>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                <div className="text-xs text-zinc-500 max-w-[40ch] leading-relaxed font-medium uppercase tracking-tighter">
                  Available for full-stack builds, architectural consulting, and platform rescues.
                  Based in QLD, Australia. Working Globally.
                </div>
                <div className="md:text-right">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest tracking-[0.4em]">
                    ©2026 // CORAZON
                  </span>
                </div>
              </div>
            </footer>
          </Reveal>
        </section>

        <section className="hidden md:flex md:w-2/5 relative border-l border-black/5 bg-[#F9F7F5]/50 backdrop-blur-[2px]">
          <div className="w-full px-12">
            <div className="sticky top-1/2 -translate-y-1/2 w-full flex justify-center">
              <div className="w-full max-w-sm max-h-[calc(100vh-6rem)] overflow-auto inspector-scroll">
                <InspectorCard activeProject={activeProject} current={current} />
              </div>
            </div>
          </div>
        </section>

        <div className="md:hidden">
          <div
            onClick={() => setMobileInspectorOpen(false)}
            className={[
              "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
              mobileInspectorOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none",
            ].join(" ")}
          />

          <div
            className={[
              "fixed left-0 right-0 bottom-0 z-50 bg-[#FDFCFB] border-t-2 border-black",
              "transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1)",
              mobileInspectorOpen ? "translate-y-0" : "translate-y-full",
            ].join(" ")}
          >
            <Reveal y={10}>
              <div className="px-6 py-8 pb-[calc(env(safe-area-inset-bottom)+24px)]">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xs font-black uppercase tracking-widest">
                    Project Specifications
                  </span>
                  <button
                    onClick={() => setMobileInspectorOpen(false)}
                    className="text-[10px] font-mono uppercase bg-black text-white px-3 py-1"
                  >
                    Close
                  </button>
                </div>
                <InspectorCard activeProject={activeProject} current={current} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
