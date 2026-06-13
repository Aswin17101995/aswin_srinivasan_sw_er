import { motion } from "framer-motion";
import { Palette, Layers, Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    icon: Palette,
    title: "UI Development",
    rate: "$15",
    unit: "/ hour",
    description:
      "Pixel-perfect frontend implementation with React, Next.js, and modern design systems. Figma-to-code, component libraries, and responsive layouts.",
    features: [
      "Responsive & accessible UI",
      "React / Next.js / TypeScript",
      "Design system integration",
      "Performance optimization",
      "Code review & handoff",
    ],
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    rate: "$20",
    unit: "/ hour",
    description:
      "End-to-end product engineering — from database schema to polished interface. APIs, auth, integrations, and deployment included.",
    features: [
      "Everything in UI Development",
      "Node.js / Java / Spring Boot APIs",
      "Database design (PostgreSQL, MongoDB)",
      "Auth, queues & integrations",
      "CI/CD & cloud deployment",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block glass rounded-full px-3 py-1 text-xs font-medium text-primary mb-4"
          >
            Transparent Rates
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight"
          >
            <span className="text-gradient">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground max-w-lg mx-auto"
          >
            Simple, hourly pricing with no hidden fees. Choose the engagement that fits your project scope.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-strong rounded-3xl p-8 sm:p-10 flex flex-col hover:-translate-y-1 transition-all"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-white"
                style={{ background: "var(--gradient-primary)" }}
              >
                <tier.icon className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-semibold mb-2">{tier.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {tier.description}
              </p>

              <div className="mb-8">
                <span className="text-4xl sm:text-5xl font-bold text-gradient">{tier.rate}</span>
                <span className="text-muted-foreground font-medium ml-1">{tier.unit}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full font-medium text-primary-foreground shadow-glow hover:opacity-90 transition-opacity"
                style={{ background: "var(--gradient-primary)" }}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
