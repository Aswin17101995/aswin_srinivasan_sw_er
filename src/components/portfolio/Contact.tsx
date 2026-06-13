import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const email = "aswinsrini1@gmail.com";
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-80 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto text-center">
        <span className="inline-block glass rounded-full px-3 py-1 text-xs font-medium text-primary mb-4">
          Contact
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight"
        >
          Let's build <span className="text-gradient">something great.</span>
        </motion.h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto text-lg">
          Have a product idea, a CRM to modernize, or an internal tool that needs love?
          I'd love to hear about it.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={`mailto:${email}`}
            className="px-8 py-4 rounded-full font-medium text-white shadow-glow hover-scale"
            style={{ background: "var(--gradient-primary)" }}
          >
            {email}
          </a>
          <button
            onClick={copy}
            className="px-6 py-4 rounded-full glass hover:text-primary transition-colors text-sm font-medium"
          >
            {copied ? "Copied!" : "Copy email"}
          </button>
        </div>
      </div>
    </section>
  );
}