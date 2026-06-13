import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import DeviceMockup from "./DeviceMockup";

const words = ["Design", "Build", "Ship", "Engaging Customers"];

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    if (nameRef.current) {
      const letters = nameRef.current.querySelectorAll("[data-letter]");
      gsap.fromTo(
        letters,
        { y: 80, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.04,
        },
      );
    }
    const id = setInterval(() => setActiveWord((w) => (w + 1) % words.length), 1800);
    return () => clearInterval(id);
  }, []);

  const name = "Aswin Srinivasan";

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 overflow-hidden bg-hero-glow"
    >
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs font-medium text-primary mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Software Engineer · Available for work
          </motion.p>
          <h1
            ref={nameRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] [perspective:800px] text-foreground"
          >
            {name.split(" ").map((word, wi) => (
              <span key={wi} className="whitespace-nowrap inline-block">
                {word.split("").map((c, ci) => (
                  <span key={ci} data-letter className="inline-block">
                    {c}
                  </span>
                ))}
              </span>
            )).reduce((acc: React.ReactNode[], el, i) => {
              if (i > 0) {
                acc.push(<span key={`sp-${i}`} className="inline-block" style={{ whiteSpace: "pre" }}> </span>);
              }
              acc.push(el);
              return acc;
            }, [])}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-2xl sm:text-3xl font-semibold">
            {words.map((w, i) => (
              <motion.span
                key={w}
                animate={{
                  opacity: activeWord === i ? 1 : 0.3,
                  scale: activeWord === i ? 1.05 : 1,
                }}
                transition={{ duration: 0.4 }}
                className={activeWord === i ? "text-gradient" : "text-muted-foreground"}
              >
                {w}
                {i < words.length - 1 && (
                  <span className="text-muted-foreground/40 ml-3">·</span>
                )}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-muted-foreground max-w-lg leading-relaxed text-lg"
          >
            I craft e-commerce platforms, CRMs, and internal tools that scale — blending
            polished UX with reliable backend systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#experience"
              className="px-7 py-3.5 rounded-full font-medium text-primary-foreground shadow-glow hover-scale"
              style={{ background: "var(--gradient-primary)" }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full font-medium glass hover:text-primary transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Right: device mockup */}
        <div className="relative h-[440px] lg:h-[560px]">
          <DeviceMockup />
        </div>
      </div>
    </section>
  );
}