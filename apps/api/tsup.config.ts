import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/main.ts"],

  outDir: "dist",

  format: ["esm"],

  target: "node20",

  sourcemap: true,

  clean: true,

  splitting: false,

  dts: false,

  treeshake: true,
});
