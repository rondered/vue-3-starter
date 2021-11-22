import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
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
