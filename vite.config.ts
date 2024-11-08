import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { checker } from "vite-plugin-checker"
import svgr from "vite-plugin-svgr"
import path from "path"
import mkcert from "vite-plugin-mkcert"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'dev.mymeo.ai',
    port: 3001,
    open: true,
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
  plugins: [
    react(),
    mkcert(),
    svgr(),
    checker({
      overlay: false,
      typescript: true,
      eslint: {
        useFlatConfig: true,
        lintCommand: "eslint ./src/**/*.{ts,tsx}",
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer],
    },
  }
});
