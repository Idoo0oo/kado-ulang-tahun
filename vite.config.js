import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    host: true,
    port: 5173,
    hmr: {
      host: "18f131e41f03.ngrok-free.app",
      protocol: "https",
    },
  },
});
