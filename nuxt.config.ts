// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint"],
  eslint: {
    config: {
      standalone: false, // prevents conflict with @antfu/eslint-config
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});
