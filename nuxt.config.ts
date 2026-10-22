// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

import "./shared/utils/env";

export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxtjs/color-mode"],
  eslint: {
    config: {
      standalone: false, // prevents conflict with @antfu/eslint-config
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  colorMode: {
    dataValue: "theme",
  },
});
