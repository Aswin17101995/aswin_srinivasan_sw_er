import { motion } from "framer-motion";
import { Code2, Server, Database, Sparkles } from "lucide-react";

const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "2021", label: "Career started" },
  { value: "20+", label: "Projects delivered" },
  { value: "99%", label: "Client satisfaction" },
];

const pillars = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    body: "Architecting scalable interfaces with Next.js, React, and TypeScript. Deep focus on performance, accessibility, and design systems that scale.",
  },
  {
    icon: Server,
    title: "Backend Architecture",
    body: "Building production-grade APIs and microservices with Node.js, Java, and Spring Boot. Emphasis on clean architecture, security, and maintainability.",
  },
  {
    icon: Database,
    title: "Data & Infrastructure",
    body: "Designing robust data layers with PostgreSQL and MongoDB. Real-time systems, event-driven architectures, and cloud-native deployments.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-medium text-primary mb-5">
              <Sparkles className="w-3.5 h-3.5" /> About me
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Full‑stack Engineer</span>
              <br />
              with 4+ years of impact.
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-foreground font-medium">Aswin Srinivasan</span> — a results‑driven
                full‑stack engineer with <span className="text-foreground font-medium">4+ years</span> of
                professional experience building and scaling digital products. Since {" "}
                <span className="text-foreground font-medium">2021</span>, I've led the development of
                mission‑critical applications across e‑commerce, CRM, and real‑time collaboration domains.
              </p>
              <p>
                I specialize in end‑to‑end product ownership — from system design and database architecture
                to polished, high‑performance user interfaces. My approach combines technical excellence with
                a strong product mindset, ensuring every solution is scalable, maintainable, and aligned
                with business objectives.
              </p>
              <p>
                My core stack spans <span className="text-foreground font-medium">Next.js</span> and{" "}
                <span className="text-foreground font-medium">React</span> on the frontend,{" "}
                <span className="text-foreground font-medium">Node.js, Java &amp; Spring Boot</span>{" "}
                on the backend, backed by <span className="text-foreground font-medium">PostgreSQL</span>{" "}
                and <span className="text-foreground font-medium">MongoDB</span> — enabling me to deliver
                cohesive, production‑ready systems from the ground up.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-2xl p-4 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="glass-strong rounded-3xl p-6 hover:-translate-y-1 transition-all"
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 text-white"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg mb-1.5">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}