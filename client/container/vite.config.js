import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        header: "http://localhost:5001/assets/remoteEntry.js",
        auth: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom", "react-toastify"],
    }),
  ],
  server: {
    port: 5000, // 👈 custom port for job portal container app
    cors: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
