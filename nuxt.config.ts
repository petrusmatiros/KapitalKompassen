// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  css: [
    "@/assets/css/style.css",
  ],
  app: {
    keepalive: true,
  },
  watch: ["~/server/**/*"],
  ssr: false,
  devtools: { enabled: false },
  modules: [
    '@nuxt/image',
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
          Manrope: [200, 300, 400, 500, 600, 700, 800],
          Outfit: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
      },
    ],
  ],
});
