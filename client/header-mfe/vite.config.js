import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "header",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
        "./Header": "./src/components/header/Header.jsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  server: {
    port: 5001, // 👈 custom port for header-mfe-app
    cors: true, // Important for development!
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
