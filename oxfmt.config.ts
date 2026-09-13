import { defineConfig } from "oxfmt";

export default defineConfig({
  bracketSpacing: true,
  ignorePatterns: ["**.gen.ts"],
  jsdoc: {
    bracketSpacing: true,
  },
});
