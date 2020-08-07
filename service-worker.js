/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "056752ba1e9d38b02645fab884474924"
  },
  {
    "url": "about.html",
    "revision": "e82a808d7e64308c520d6e2ce9dd3e9a"
  },
  {
    "url": "assets/css/0.styles.03d54a3d.css",
    "revision": "48f63bc9999b07e7c8ddd1a527cd263f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e01e715b.js",
    "revision": "8d3bd5018c2df6dc4208e8ffcfe7c0c2"
  },
  {
    "url": "assets/js/11.b5a1c8ae.js",
    "revision": "07db2f1177aef2fed1a5c511e70adfb5"
  },
  {
    "url": "assets/js/12.e143a2a8.js",
    "revision": "bb57067cdfdb151bf29302b1576ff985"
  },
  {
    "url": "assets/js/13.46d1ee80.js",
    "revision": "8f06cd2e56cba9445873e1005ab45013"
  },
  {
    "url": "assets/js/14.a1d6d8b5.js",
    "revision": "bc457c1e2c535a1619900aa235531da1"
  },
  {
    "url": "assets/js/15.8b5ce9d6.js",
    "revision": "979df655f35062b7b7e4a4730563147f"
  },
  {
    "url": "assets/js/16.b9a13676.js",
    "revision": "aaa87b501913cf3c85d91add352c25a2"
  },
  {
    "url": "assets/js/17.a34929ea.js",
    "revision": "271c1bf4db03274f85479f089e6d5737"
  },
  {
    "url": "assets/js/18.c09bab57.js",
    "revision": "cba400f0e979fc5817e30b1c5c34764a"
  },
  {
    "url": "assets/js/19.05661162.js",
    "revision": "e8b92a889e1d190b332384476de7f58f"
  },
  {
    "url": "assets/js/2.f54036ce.js",
    "revision": "5faefb317fd5aed55559281934d48b8f"
  },
  {
    "url": "assets/js/20.92ad27bc.js",
    "revision": "0a6664afcec81aa45d5e74b459bbc73c"
  },
  {
    "url": "assets/js/21.da9d1920.js",
    "revision": "0fe8989100b21bd120c7046410ec9c10"
  },
  {
    "url": "assets/js/22.f965f926.js",
    "revision": "91dbfb5db90eddbf6bfc7c7c548b049e"
  },
  {
    "url": "assets/js/23.74cbd8e6.js",
    "revision": "00c38376d9c112d482f5017208c510c4"
  },
  {
    "url": "assets/js/24.233ab05c.js",
    "revision": "c8467897aceccc49d7355dcdc1a76b86"
  },
  {
    "url": "assets/js/25.1d5e01d7.js",
    "revision": "b0e3a6f56ec0e1b33d5fbbc0b0e8f9fe"
  },
  {
    "url": "assets/js/26.f3c7d084.js",
    "revision": "fc8af0fb43268ce9063dea9c405db9aa"
  },
  {
    "url": "assets/js/27.b083e58b.js",
    "revision": "fe1a1eaf2e5f5ba562b3be4afe8a3534"
  },
  {
    "url": "assets/js/3.bb121728.js",
    "revision": "1ba76477d44bf9c2cc160d8840f2506f"
  },
  {
    "url": "assets/js/4.ead37252.js",
    "revision": "b8c9e78403bf0c6be59a1d7e58043579"
  },
  {
    "url": "assets/js/5.cd069c5e.js",
    "revision": "0ba187f2ee57db2931fc864b5958665f"
  },
  {
    "url": "assets/js/6.ff832bdb.js",
    "revision": "2a6a1b7a4ede9558423a8a608b62ba3e"
  },
  {
    "url": "assets/js/7.7e31cc32.js",
    "revision": "9191d0227b6c7c55a50296c1df51c492"
  },
  {
    "url": "assets/js/8.55938e81.js",
    "revision": "4417099c1a4238e8600d2463bb824e3b"
  },
  {
    "url": "assets/js/9.d8180423.js",
    "revision": "24700ad8b668545992064f5762bcec0b"
  },
  {
    "url": "assets/js/app.35a41d67.js",
    "revision": "8f09d799e954ef0ab82998ca25f95999"
  },
  {
    "url": "demo.html",
    "revision": "cddba62a46b4eecabeef85e5ad464255"
  },
  {
    "url": "en/about.html",
    "revision": "0836a604cd819ccca311821c7bb517ef"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "b2e86445874a0f618a9b6eb7185b87c9"
  },
  {
    "url": "en/guide/config.html",
    "revision": "8a8c9977038c2cce0b2f7f6b639125b7"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "570879b8fac42a770fd9747afac3d96a"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "cdfaa1f2b5994873864a0cea4ace9399"
  },
  {
    "url": "en/guide/index.html",
    "revision": "5cdf20b4e3f04a1ace387b7170d3b82f"
  },
  {
    "url": "en/guide/page.html",
    "revision": "f165d32d296721660a50eaf13dc84384"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "b76cb9031a8a5f8e1b8162cb6bcaa02e"
  },
  {
    "url": "en/index.html",
    "revision": "c83ef79c67764e700619366095e999c2"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "2c17641fc90109cd666534fb6a03e5c7"
  },
  {
    "url": "guide/config.html",
    "revision": "56e7d7a192742c8e2829b70c0e8a8a84"
  },
  {
    "url": "guide/faq.html",
    "revision": "8d6d3b35d8025de9d7d8e54f48ced690"
  },
  {
    "url": "guide/icon.html",
    "revision": "e4e1d2808ba4a8cc370a02cccef4464f"
  },
  {
    "url": "guide/index.html",
    "revision": "6a4fd0605fba4ce1a0742179f4b8034b"
  },
  {
    "url": "guide/migrate.html",
    "revision": "f0d6aa70a601f0c489bde85e01d2f0eb"
  },
  {
    "url": "guide/page.html",
    "revision": "4af9a1a2d64b8b31e75fd4917f63e10c"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "273717caacb168b2b9d80439db8b44c0"
  },
  {
    "url": "index.html",
    "revision": "e674a5439cbf318ddab0e95884e6bdb3"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
