
module.exports = {
  // srcDir を指定することでサーバーを切り出すことが可能に
  // https://ja.nuxtjs.org/api/configuration-srcdir
  srcDir: 'src',
  // https://ja.nuxtjs.org/api/configuration-builddir
  // buildDir: './functions/dist/nuxt',
  build: {
    publicPath: '/assets/',
    extractCSS: true,
  },
  head: {
    title: "stathaming",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        'http-equiv': "X-UA-Compatible",
        content: "IE=edge"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "favicon.ico?v=3" // https://github.com/nuxt/nuxt.js/issues/1204#h5o-16
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  css: ["~/assets/css/main.css"],
  modules: [
    "~/modules/typescript.js",
    '@nuxtjs/pwa'
  ],
  // 特に設定しなくても、自動でよしなにキャッシュしてくれる
  // https://pwa.nuxtjs.org/modules/workbox#adding-custom-runtimecaching-items-for-cdn
  workbox: {}
}
