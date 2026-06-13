import { motion } from "framer-motion";

const achievements = [
  { label: "GATE CSE Qualified", value: "3 times" },
  { label: "B.Tech CGPA", value: "7.08 / 10" },
  { label: "12th Grade", value: "90.5%" },
  { label: "10th Grade", value: "89.20%" },
];

export default function Education() {
  return (
    <section id="education" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="relative max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block glass rounded-full px-3 py-1 text-xs font-medium text-primary mb-4">
            Foundations
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="text-gradient">Education</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 sm:p-10 mb-10"
        >
          <p className="text-xs font-semibold text-primary mb-2 tracking-wide">2013 — 2017</p>
          <h3 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight">
            B.Tech, Electronics & Communication Engineering
          </h3>
          <p className="text-muted-foreground">Amrita School of Engineering</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-5 text-center hover-scale transition-all"
            >
              <p className="text-2xl font-bold text-gradient mb-1 tracking-tight">{a.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{a.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}