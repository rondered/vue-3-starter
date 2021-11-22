import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import WindiCSS from "vite-plugin-windicss";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    vue(),
    WindiCSS(),
    Pages({
      pagesDir: "src/pages",
    }),
    Layouts({
      layoutsDir: "src/layouts",
      defaultLayout: "main",
    }),
  ],
});
