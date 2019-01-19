"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const functions = require("firebase-functions");
const express = require("express");
const nuxt_1 = require("nuxt");
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

app.use(handleRequest);

app.listen(port, () => {
  console.log(`server started at localhost:${port} 😎`);
  console.log("");
  console.log("");
  console.log(`http://localhost:${port}`);
  console.log("");
  console.log("");
});

/*
const ssr = functions.https.onRequest(app);
exports.ssr = ssr;
//# sourceMappingURL=index.js.map

*/