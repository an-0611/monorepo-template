// vite.config.ts
import { defineConfig } from "vite";

// 如果你使用了 Vitest 進行測試
export default defineConfig({
  test: {
    globals: true, // 讓你使用全域測試函數，如 describe, it, expect
    include: ["**/*.test.ts"], // 設置要執行的測試文件範圍
    environment: "jsdom", // 設置測試環境
    coverage: {
      provider: "c8", // 使用 c8 作為覆蓋工具
      reporter: ["text", "json"],
    },
  },
});
