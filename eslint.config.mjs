// @ts-check
import antfu from "@antfu/eslint-config";
import eslintPluginTailwindcss from "eslint-plugin-tailwindcss";

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu({
    type: "app",
    vue: true,
    // typescript: true,
    typescript: { tsconfigPath: "tsconfig.json" },
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
      "node/no-process-env": ["error"],
      "perfectionist/sort-imports": ["error", {
      // tsconfigRootDir: '.',
        type: "alphabetical",
        order: "asc",
      }],
      "unicorn/filename-case": ["error", {
        case: "kebabCase",
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
    ],
  },
  // eslint tailwindcss
  eslintPluginTailwindcss.configs["flat/recommended"],
  {
    plugins: {
      tailwindcss: eslintPluginTailwindcss,
    },
    settings: {
      tailwindcss: {
        // 2. Point this to your main CSS file that imports Tailwind (Required for v4)
        cssConfigPath: "./app/assets/css/main.css",
        callees: ["cn", "cva", "clsx"],
        whitelist: ["btn", "btn\\-.*"],
      },
    },
    rules: {
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-contradicting-classname": "error",
    },
  },
);
