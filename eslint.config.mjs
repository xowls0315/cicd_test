import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.node, ...globals.browser } },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
      eqeqeq: "warn",
      "no-var": "warn",
      camelcase: "warn",
    },
  },
  {
    files: ["**/*.spec.js", "**/*.test.js"],
    languageOptions: { globals: { ...globals.node, ...globals.jest } },
  },
]);
