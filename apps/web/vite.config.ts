import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite 的基本配置
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true },
  // resolve: {
  //   alias: {
  //     "@my/ui": "../packages/ui/src", // 這裡指向 ui 的源目錄
  //   },
  // },
});
