import * as functions from 'firebase-functions';
import * as express from 'express';
import { Nuxt } from 'nuxt';

const app = express();

const config = {
  dev: false,
  debug: true,
  buildDir: 'dist/.nuxt',
  build: {
    // ビルドの結果の静的ファイルをあらかじめ載せておくことでパフォーマンスの最大化を図る。
    // https://ja.nuxtjs.org/api/configuration-build/#publicpath
    publicPath: '/assets/'
  }
  /*
  */
}

const nuxt = new Nuxt(config);

function handleRequest (req, res) {
  // res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  return new Promise((resolve, reject) => {
    console.log('in handleRequest');
    resolve(nuxt.render(req, res));
  });
}

app.use(handleRequest);

const ssr = functions.https.onRequest(app);

export { ssr };