export default defineNuxtConfig({
  compatibilityDate: '2025-05-06',
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: './oriyuta39_favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { href: 'https://fonts.googleapis.com/css2?family=Kosugi+Maru&family=Limelight&family=Tangerine:wght@700&display=swap', rel: 'stylesheet' },
      ],
      title: 'oriyuta39 - Portfolio',
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
  ],
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  vite: {
    define: {
      'process.env.DEBUG': false, // JS対応
    },
  },
})
