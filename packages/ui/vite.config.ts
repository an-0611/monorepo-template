// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import dts from "vite-plugin-dts";

// export default defineConfig({
//   plugins: [react(), dts()],
//   build: {
//     lib: {
//       entry: "index.ts",
//       name: "UI",
//       formats: ["es", "cjs"]
//     },
//     rollupOptions: { external: ["react", "react-dom"] }
//   }
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "index.ts",
      name: "@my/ui",
      fileName: (format) => `index.${format}.js`,
    },
  },
});
