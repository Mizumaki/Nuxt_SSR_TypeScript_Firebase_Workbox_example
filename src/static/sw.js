importScripts('/assets/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/assets/1118e434600125a5fde3.css",
    "revision": "b0a7037cf15a80d153d3121f334895d4"
  },
  {
    "url": "/assets/155026812a360ed8ad2b.js",
    "revision": "02183aba7778809f295d42d7ae699f5c"
  },
  {
    "url": "/assets/17d7caeba92dae9ec3d6.js",
    "revision": "8e75411076848bc6dd025c9bdffbb480"
  },
  {
    "url": "/assets/189fb4f2f282c876cd24.js",
    "revision": "1b2f880c8e9dc9a57b1d8ef47f8dfa59"
  },
  {
    "url": "/assets/2a81570a931364f63dc5.js",
    "revision": "73d1c1296968eb96b7833e85a3aeb071"
  },
  {
    "url": "/assets/3917b6f6990dc6db8728.js",
    "revision": "bd4e5463dc3692122848c46dbce7da91"
  },
  {
    "url": "/assets/6a54692944df56f39537.js",
    "revision": "2b5e60776c841947c55ad07d176fd107"
  },
  {
    "url": "/assets/a7a171f12e59062d2e53.css",
    "revision": "2ec9e71f8c21b1992125b04c9250094f"
  },
  {
    "url": "/assets/db8a6affe58fbd0fb9f4.js",
    "revision": "add46ef5943b38a34fe58fa37bca1efc"
  }
], {
  "cacheId": "nuxt-community-typescript",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/assets/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
