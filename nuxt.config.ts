// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  css: ["@/assets/css/style.css"],
  app: {
    keepalive: true,
    head: {
      title: "KapitalKompassen",
      htmlAttrs: {
        lang: "sv",
      },
      link: [
        {
          rel: "icon",
          type: "image/svg",
          sizes: "32x32",
          href: "/favicon.svg",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "My Nuxt.js Application",
        },
        { name: "og:title", content: "KapitalKompassen" },
        {
          name: "og:description",
          content:
            "Simplify your investment planning and calculate your investments goals with ease. KapitalKompassen is a personal finance tool, tailored for people with ISK saving accounts in Sweden",
        },
        { name: "og:image", content: "/kapitalkompassen.png" },
      ],
    },
  },
  watch: ["~/server/**/*"],
  ssr: false,
  routeRules: {
    "/_nuxt/**": { headers: { "cache-control": "s-maxage=86400" } },
  },
  webpack: {
    extractCSS: true,
    optimizeCSS: true,
  },
  devtools: { enabled: false },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Manrope: [300, 400, 500, 600, 700],
        },
      },
    ],
  ],
});
