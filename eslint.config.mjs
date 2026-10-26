// @ts-check
import antfu from "@antfu/eslint-config";

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu({
    type: "app",
    vue: true,
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
  }, {
    rules: {
      "ts/no-redeclare": "off",
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["warn"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      // "node/no-process-env": ["error"],
      "perfectionist/sort-imports": ["error", {
      // tsconfigRootDir: '.',
        type: "alphabetical",
        order: "asc",
      }],
      "unicorn/filename-case": ["error", {
        cases: {
          pascalCase: true,
          snakeCase: true,
          kebabCase: true,
        },
        ignore: ["README.md"],
      }],
    },
  }),
  // Your custom configs here
  // Global ignores must be in a standalone object at the end of the array
  {
    ignores: [
      ".nuxt/**",
      "dist/**",
      "node_modules/**",
      "drizzle.config.ts",
      ".pnpm-store/**",
      "**/migrations/*",
    ],
  },
  // eslint tailwindcss

);
