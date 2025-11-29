import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
        "./Login": "./src/components/Login/Login.jsx",
        "./Register": "./src/components/Register/Register.jsx",
      },
      shared: ["react", "react-dom", "react-router-dom", "react-toastify"],
    }),
  ],
  server: {
    port: 5002, // 👈 custom port for auth-mfe-app
    cors: true, // Important for development!
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
