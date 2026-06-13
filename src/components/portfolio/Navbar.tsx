import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 inset-x-0 z-50 px-4"
    >
      <div className="max-w-5xl mx-auto glass-strong rounded-full px-5 h-14 flex items-center justify-between">
        <a href="#home" className="text-sm font-semibold tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "var(--gradient-primary)" }}>AS</span>
          <span className="hidden sm:inline">Aswin Srinivasan</span>
        </a>
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors story-link"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:aswinsrini1@gmail.com"
          className="text-xs md:text-sm px-4 py-2 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
          style={{ background: "var(--gradient-primary)" }}
        >
          Let's talk
        </a>
      </div>
    </motion.nav>
  );
}