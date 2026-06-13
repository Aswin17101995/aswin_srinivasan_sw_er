import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(async ({ command }) => {
  const isVercelBuild = process.env.VERCEL === "1" || !!process.env.VERCEL;
  
  const plugins = [
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      server: { entry: "src/server.ts" },
    }),
    viteReact(),
  ];

  if (isVercelBuild && command === "build") {
    const { nitro } = await import("nitro/vite");
    plugins.push(
      nitro({
        preset: "vercel",
      })
    );
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(process.cwd(), "./src"),
      },
    },
  };
});
