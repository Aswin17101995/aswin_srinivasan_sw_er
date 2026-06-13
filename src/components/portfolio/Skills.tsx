import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Radio,
  Wrench,
  Cloud,
} from "lucide-react";

type Skill = { name: string; level: number };

const groups: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  blurb: string;
  skills: Skill[];
}[] = [
  {
    title: "Frontend",
    icon: Layout,
    blurb: "Interfaces with motion, polish & accessibility.",
    skills: [
      { name: "Next.js", level: 92 },
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 94 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    blurb: "Reliable APIs, clean architecture, scale.",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Java", level: 82 },
      { name: "Spring Boot", level: 80 },
      { name: "Python", level: 75 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    blurb: "Modeling, indexing & performance tuning.",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 84 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    title: "Realtime",
    icon: Radio,
    blurb: "Live experiences — chat, calls, dashboards.",
    skills: [
      { name: "Socket.IO", level: 88 },
      { name: "WebRTC", level: 78 },
    ],
  },
];

const tools = [
  "Git", "Docker", "AWS", "Vercel", "Firebase", "Stripe",
  "Prisma", "GraphQL", "REST", "Jest", "Figma", "Linux",
];

const expertise = ["E-commerce Platforms", "CRM Systems", "Internal Tools", "Realtime Apps"];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-40 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block glass rounded-full px-3 py-1 text-xs font-medium text-primary mb-4">
            Toolkit
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            <span className="text-gradient">Skills & Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A living toolkit refined across 4+ years of shipping products end‑to‑end.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="glass-strong rounded-3xl p-7 hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <g.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg leading-tight">{g.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{g.blurb}</p>
                </div>
              </div>

              <ul className="space-y-3.5">
                {g.skills.map((s, si) => (
                  <li key={s.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-foreground/90">{s.name}</span>
                      <span className="text-[11px] tabular-nums text-muted-foreground">
                        {s.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2 + si * 0.08, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-primary)" }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-7 mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold">Tools & Platforms</h3>
              <p className="text-xs text-muted-foreground">Day‑to‑day workflow</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {tools.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="px-3.5 py-1.5 rounded-full bg-muted/60 border border-border/60 text-xs font-medium text-foreground/80 hover:text-foreground hover:border-primary/40 transition-colors"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="text-center">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-5 font-medium flex items-center justify-center gap-2">
            <Cloud className="w-3.5 h-3.5" /> I build
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {expertise.map((e, i) => (
              <motion.span
                key={e}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-5 py-2 rounded-full glass-strong text-sm text-foreground font-medium"
              >
                {e}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}