import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "warn",
  },
  env: {
    builtin: true,
  },
  jsPlugins: [String(perfectionist.meta?.name)],
  plugins: ["typescript", "unicorn", "react", "oxc", "jsx-a11y"],
  rules: {
    "arrow-body-style": "error",
    ...perfectionist.configs["recommended-natural"].rules,
  },
});
