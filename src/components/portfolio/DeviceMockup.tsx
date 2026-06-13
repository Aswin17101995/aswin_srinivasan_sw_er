import { motion } from "framer-motion";

/**
 * Apple-style device mockup composition: laptop in back, tablet front-right,
 * phone front-left. Pure CSS/SVG with framer-motion staggered entrance.
 */

const screen = (
  <div className="absolute inset-0 overflow-hidden bg-white">
    {/* gradient wash */}
    <div
      className="absolute inset-0"
      style={{ background: "var(--gradient-primary)", opacity: 0.85 }}
    />
    {/* subtle mesh */}
    <div className="absolute inset-0 bg-mesh opacity-60" />
    {/* mock UI */}
    <div className="relative h-full w-full p-3 flex flex-col gap-2">
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
        <div className="ml-auto h-1 w-12 rounded-full bg-white/40" />
      </div>
      <div className="grid grid-cols-3 gap-2 flex-1">
        <div className="rounded-lg bg-white/30 backdrop-blur-sm" />
        <div className="rounded-lg bg-white/40 backdrop-blur-sm" />
        <div className="rounded-lg bg-white/30 backdrop-blur-sm" />
        <div className="col-span-2 rounded-lg bg-white/40 backdrop-blur-sm" />
        <div className="rounded-lg bg-white/30 backdrop-blur-sm" />
      </div>
      <div className="h-1.5 w-1/2 rounded-full bg-white/50" />
    </div>
  </div>
);

export default function DeviceMockup() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* glow blob */}
      <div className="absolute inset-0 bg-hero-glow opacity-70 blur-3xl pointer-events-none" />

      {/* Laptop — back */}
      <motion.div
        initial={{ x: 600, opacity: 0, scale: 0.9 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="relative">
          {/* lid */}
          <div className="relative w-[460px] h-[290px] rounded-[18px] p-2.5 shadow-elegant"
            style={{
              background: "linear-gradient(180deg, #d4d4d8, #a1a1aa)",
            }}
          >
            <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-zinc-900">
              {screen}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-zinc-800/60" />
            </div>
          </div>
          {/* base */}
          <div
            className="mx-auto w-[520px] h-2.5 -mt-px rounded-b-xl"
            style={{ background: "linear-gradient(180deg, #a1a1aa, #71717a)" }}
          />
          <div className="mx-auto w-[120px] h-1.5 rounded-b-md bg-zinc-400/70" />
        </div>
      </motion.div>

      {/* Tablet — front-right */}
      <motion.div
        initial={{ x: 700, opacity: 0, scale: 0.85 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        className="absolute top-1/2 right-2 -translate-y-[35%] z-20"
      >
        <div
          className="w-[170px] h-[230px] rounded-[22px] p-1.5 shadow-elegant rotate-[8deg]"
          style={{ background: "linear-gradient(180deg, #e4e4e7, #a1a1aa)" }}
        >
          <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-zinc-900">
            {screen}
          </div>
        </div>
      </motion.div>

      {/* Phone — front-left */}
      <motion.div
        initial={{ x: 800, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
        className="absolute top-1/2 left-2 -translate-y-[35%] z-20"
      >
        <div
          className="w-[110px] h-[220px] rounded-[28px] p-1.5 shadow-elegant -rotate-[10deg]"
          style={{ background: "linear-gradient(180deg, #27272a, #09090b)" }}
        >
          <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-zinc-900">
            {screen}
            {/* dynamic island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full bg-black" />
          </div>
        </div>
      </motion.div>

      {/* floating chip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 glass-strong rounded-full px-4 py-1.5 text-xs font-medium"
      >
        Optimized for all devices
      </motion.div>
    </div>
  );
}