import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "user-profile",
      filename: "remoteEntry.js",
      remotes: {
        "shared-ui": "http://localhost:5004/assets/remoteEntry.js",
      },
      exposes: {
        "./App": "./src/App.jsx",
        "./UserProfileCard": "./src/components/user-profile-card/UserProfileCard.jsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  server: {
    port: 5003, // 👈 custom port for user-profile-mfe-app
    cors: true, // Important for development!
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
