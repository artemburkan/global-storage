import path from "path"
import { generateScopedName } from "./config-utils/generateScopedName"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import postcssNesting from "postcss-nesting"

export default defineConfig({
  base: "/global-storage/",
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src/"),
    },
  },

  css: {
    modules: {
      generateScopedName,
    },
    postcss: {
      plugins: [postcssNesting],
    },
  },
  plugins: [react()],
})
