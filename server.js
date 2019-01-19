const express = require("express");
const nuxt_1 = require("nuxt");
const path = require('path');
const app = express();

const port = 8080;

const config = {
  dev: false,
  debug: true,
  buildDir: '.nuxt',
}

const nuxt = new nuxt_1.Nuxt(config);

function handleRequest(req, res) {
  // res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  return new Promise((resolve, reject) => {
    console.log('in handleRequest');
    resolve(nuxt.render(req, res));
  });
}

const resolve = file => path.resolve(__dirname, file);
const serve = (filePath) => express.static(resolve(filePath));

// nuxt.config.jsでpulicPathを設定しているため
app.use('/assets', serve('./.nuxt/dist/client'));

app.use(handleRequest);

app.listen(port, () => {
  console.log(`server started at localhost:${port} 😎`);
  console.log("");
  console.log("");
  console.log(`http://localhost:${port}`);
  console.log("");
  console.log("");
});
