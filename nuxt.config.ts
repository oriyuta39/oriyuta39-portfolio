export default {
  compatibilityDate: '2025-05-12',
  mode: 'universal',
  ssr: true,
  target: 'static',
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
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' },
        { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css', rel: 'stylesheet' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { href: 'https://fonts.googleapis.com/css2?family=Kosugi+Maru&family=Limelight&family=Markazi+Text:wght@500&family=Mochiy+Pop+One&family=Tangerine:wght@700', rel: 'stylesheet' },
      ],
      title: 'oriyuta39 - Portfolio',
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
  ],
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
}
