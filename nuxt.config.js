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
        { rel: 'icon', type: 'image/svg+xml', href: './public/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'},
        { href: 'https://fonts.googleapis.com/css2?family=Limelight&display=swap', rel: 'stylesheet' }
      ],
      title: 'Oriyuta39 - Portfolio',
    },
  },
})
