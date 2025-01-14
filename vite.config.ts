import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    entries: ["src/main.tsx"],
  },
  plugins: [
    reactRouter(),
    tsconfigPaths({
      root: ".",
    }),
  ],
});
