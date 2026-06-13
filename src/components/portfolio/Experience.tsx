import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const items = [
  {
    company: "EPAM Systems",
    role: "Software Engineer",
    period: "Jul 2025 — Present",
    focus: "Enterprise platforms, internal tools, distributed systems",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    company: "LTM",
    role: "Software Engineer",
    period: "Jan 4, 2025 — May 2025",
    focus: "CRM modules, internal workflow tooling",
    accent: "from-fuchsia-400 to-purple-500",
  },
  {
    company: "Whizlabs Software",
    role: "Software Engineer",
    period: "Dec 27, 2021 — Dec 27, 2024",
    focus: "E-commerce platform, learning systems, real-time features (WebRTC, Socket.IO)",
    accent: "from-amber-400 to-pink-500",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".exp-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      gsap.fromTo(
        ".exp-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 70%",
            scrub: true,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="relative max-w-5xl mx-auto">
        <div className="mb-20 text-center">
          <span className="inline-block glass rounded-full px-3 py-1 text-xs font-medium text-primary mb-4">
            Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          <div
            className="exp-line absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 origin-top"
            style={{ background: "var(--gradient-primary)" }}
          />

          <div className="space-y-16">
            {items.map((item, idx) => (
              <div
                key={item.company}
                className={`exp-card relative md:grid md:grid-cols-2 md:gap-12 items-center ${
                  idx % 2 === 0 ? "" : "md:[direction:rtl]"
                }`}
              >
                {/* dot */}
                <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full -translate-x-1/2 shadow-glow ring-4 ring-white/70"
                  style={{ background: "var(--gradient-primary)" }}
                />
                <div className={`pl-12 md:pl-0 md:[direction:ltr] ${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                  <div className="glass rounded-3xl p-7 hover-scale transition-all">
                    <p className="text-xs font-medium text-primary mb-2 tracking-wide">{item.period}</p>
                    <h3 className="text-2xl font-bold mb-1 tracking-tight">{item.company}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.role}</p>
                    <p className="text-sm leading-relaxed text-foreground/80">{item.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}