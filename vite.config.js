import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Crowd-Funding/',
  plugins: [react()],
  define: {
    global: "globalThis",
    "process.env": {},
  },
});