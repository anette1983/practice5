import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "practice5",
  plugins: [react()],
  server: {
    open: "/index.html",
    port: 8000,
  },
});
