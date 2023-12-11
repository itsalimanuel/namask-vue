import { defineConfig, Plugin } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

const injectCssPlugin: Plugin = {
  name: 'inject-css',
  transformIndexHtml(html) {
    return html.replace(
      '</head>',
      '<link rel="stylesheet" href="namask-vue/dist/style.css"></head>'
    );
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/package/index.ts"),
      name: "namask-vue",
      fileName: (format) => `namask-chat.${format}.ts`,
    },
    rollupOptions: {
      external: ["vue", /^namask-vue/],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },

  plugins: [vue(), injectCssPlugin],
});
