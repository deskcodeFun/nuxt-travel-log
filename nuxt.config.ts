// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

import "./server/utils/env";

export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/icon/module", "@nuxtjs/color-mode"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  eslint: {
    config: {
      standalone: false, // prevent conflict with @antfu/eslint-config
    },
  },
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
