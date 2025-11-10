import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { getCloudflareBindingsProxy, cf } from "@getmocha/vite-plugins"
import { getFiles } from "@cloudflare/vite-plugin"
import { resolve } from "path"

export default defineConfig({
  base: "/shomron-medical-center/",
  plugins: [
    react(),
    cf({
      entry: [resolve(__dirname, "src/worker/index.ts")],
      script: {
        id: "019a29a3-2f05-72fd-a4d3-fea788052ed4",
      },
      dev: {
        proxy: getCloudflareBindingsProxy({
          kvNamespaces: [],
          d1Databases: [],
          r2Buckets: [],
          durableObjects: {},
          vars: {},
        }),
      },
    }),
  ],
})
