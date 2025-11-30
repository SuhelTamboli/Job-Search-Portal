import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shared-ui",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
        "./Button": "./src/components/buttons/Button.jsx",
        "./NavLinkButton": "./src/components/buttons/NavLinkButton.jsx"
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  server: {
    port: 5004, // 👈 custom port for shared-ui-mfe-app
    cors: true, // Important for development!
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
