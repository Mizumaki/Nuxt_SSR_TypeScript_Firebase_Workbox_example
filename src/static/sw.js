importScripts('/assets/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/assets/1118e434600125a5fde3.css",
    "revision": "b0a7037cf15a80d153d3121f334895d4"
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
    "url": "/assets/8ed76c8f738964e8afda.js",
    "revision": "2b5e60776c841947c55ad07d176fd107"
  },
  {
    "url": "/assets/a7a171f12e59062d2e53.css",
    "revision": "2ec9e71f8c21b1992125b04c9250094f"
  },
  {
    "url": "/assets/c05a51fb148198ffbb42.js",
    "revision": "a7cdfebb12240126677bf5732c220bdd"
  },
  {
    "url": "/assets/cb81b8d2ab52c55e2167.js",
    "revision": "b064fa5d7d570833509f1d94bfd41515"
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
