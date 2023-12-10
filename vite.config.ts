import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/package/index.ts"),
      name: "namask-chat",
      fileName: (format) => `${format}.ts`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: "Vue",
        }
      }
    }
  },

  plugins: [vue()],
});
