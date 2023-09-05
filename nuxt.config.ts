// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    server: {
      hmr: {
        port: 3008,
      },
    },
  },
  typescript: {
    strict: true,
  },
  ssr: false,
  devtools: { enabled: true },
  modules: [
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
