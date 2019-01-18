const forFirebase = process.env.FIREBASE ? true : false;

const baseUrl = forFirebase ? 'https://test-e4fed.firebaseapp.com' : 'http://localhost:8080';

module.exports = {
  // srcDir を指定することでサーバーを切り出すことが可能に
  // https://ja.nuxtjs.org/api/configuration-srcdir
  srcDir: 'src',
  // https://ja.nuxtjs.org/api/configuration-builddir
  // buildDir: './functions/dist/nuxt',
  /*
  build: {
    publicPath: '/assets/',
    // extractCSS: true,
  },
  modulesDir: ['./node_modules'],
  */
  head: {
    title: "tt1",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js project"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
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
    "@nuxtjs/axios",
    "~/modules/typescript.js"
  ],
  axios: {
    baseURL: baseUrl
  }
}
