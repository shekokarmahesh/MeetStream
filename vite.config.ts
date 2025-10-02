import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api/mcp': {
        target: 'https://apollo.composio.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/mcp/, '/v3/mcp/f61fe1ab-bd1b-4562-8f12-d9449d4febce/mcp'),
        secure: false,
        ws: true, // Enable WebSocket proxying
      }
    }
  }
})