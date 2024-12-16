import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// import { dependencies } from "./package.json";
// function renderChunks(deps: Record<string, string>) {
//   const chunks: Record<string, string[]> = {};
//   Object.keys(deps).forEach((key) => {
//     if (["react"].includes(key)) return;
//     chunks[key] = [key];
//   });
//   return chunks;
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   sourcemap: false,
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         vendor: ["react"],
  //         ...renderChunks(dependencies),
  //       },
  //     },
  //   },
  // },
});
