// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
// If using TypeScript:
// import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ["node_modules/**", "dist/**", "build/**"],
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Your custom rules here
      "no-unused-vars": "warn",
      eqeqeq: "error",
    },
  },
  // If using TypeScript, add:
  // ...tseslint.configs.recommended,
];
