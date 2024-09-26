'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6e871a0b8426ca781835c3f2f8fa41fd",
".git/config": "875378b6509080ae86d08d6877888e7e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0a7614ca13533372e545865b9e74761a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "15694985eaa0be3f44e599ab33ae5bdb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d92a32ced33638117d307bc915e873b8",
".git/logs/refs/heads/main": "425f000bf3f9e61e580a18683242fdbe",
".git/logs/refs/heads/master": "69c5eb5d6e0471525c9ec943d80670bf",
".git/logs/refs/remotes/origin/main": "a67f322a61ab8747ed4a8c4f21e598ea",
".git/objects/02/8c630d641011d3510691dea4793aa425e3c033": "9cc6800e9a3a8b871a97ce7c48097610",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/146b53617234eef441c76432fde391f68b6209": "61791b27eb9b05b7563a09d3a7264c5e",
".git/objects/0d/caaea3ec2256171a966f3c009c26591e609980": "6ef3197e717f0045df89e82ce940ee11",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/14/3558b537c7d7dbfcc3b0432e29dd66a58e92b9": "2ff3376b492a7774eea6d46b7b9b9647",
".git/objects/14/bb42445cd7f0aab0a71408e2b836ee2b083007": "fe91791f6b2c08cb8242b788d76160e7",
".git/objects/18/b2312d41db5b8570d65ee2ca244441fa862b85": "0a4c7573c31f1af5e15fba65e3da5151",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/1e2a6150e0aa605cda10db1f58267d10056e96": "f5be1c980d5c9d7a2e553c709ee06f12",
".git/objects/21/e15aca402a4030b85e4211c39d825c6c224924": "7322f9020e7feffd3629793c6e59c7fc",
".git/objects/22/f3597156042ae583010263e1b95e4f266da017": "0e450a3bd98d6303ee3975c13ca2f9da",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/0d4b01145c6bf20aa80a4fb0749ae5bd76902f": "7e5c5cd37ee995c960e388ba55761b99",
".git/objects/28/966830cf0d2fccc30b5ca1a9ad04c26cca7264": "a0ac646e96f53cd220ded4ebcfeffad3",
".git/objects/2a/49367788246c4f1b7a62a491581f3e418375f4": "fe2111274cfbb35e4cf7940c9b030c8c",
".git/objects/2e/90b4feddf9fa5e4800f5ee952e76b92ac71e99": "172bebaf81cf04ffb13498a9b1fe8f20",
".git/objects/34/86712dcdbfe5cdf1ba1561fea6eaeefe4022be": "b6168025c717b415a9d37b3abe485f7c",
".git/objects/35/d9ad5d684d163b5796166a5a090f89acf68035": "893bab86d64881cd574f7c8acd87d5eb",
".git/objects/40/de317ae2c754793da821cbf3d29df7cc1705dc": "e5c019dd7e82d0f279ff9a905f5ce198",
".git/objects/43/2767264195d3a947a1c0fd4097944c15b3a3de": "e6b5153ee8cdfda7b297e3fbdcf23c31",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/598250a8728aeab6ab87b23e1caedb9821e89c": "e81c919282125a43a7160f243747aa7a",
".git/objects/5a/78a20b63e6c8501073b07eedc855a3ada29844": "0f8a4a8adceb813405373931630ec21c",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/66/376e117188fca9773a68c77c67a4897fc37951": "20c5cec9492ff3e67b7320e541a06d2d",
".git/objects/67/13ff9a0403144df9cb4373ca38d6b4d5bdedf4": "8ecd04547697f21f97bf954e0d89cbfd",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6f/6ff4975cf3b756381858f0187fa5fc2dc812da": "6897d2d1d408613cceab0d9b9c1803e3",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/75/377e040c7689d8c090056f896ebe78a72e6add": "663c59672b40bc151c106050bb987543",
".git/objects/77/e504a49493d16f2ef505ce26b6d9c8f2ef0bff": "fcdeb24196e50ce5e322d213eb1c8a7e",
".git/objects/78/a753345dbd87e5658b3128481af4cbb06d84bc": "8344753af628a83a44e57603bb9e6e31",
".git/objects/79/038beba98d89c4b3e58f00815c5ff4408dcb68": "deee748dc50c42995f3c579377cb81dc",
".git/objects/79/88a4718c3d5a8e601e2de93bb4b2aad3553d80": "6a6e5d6c0cb855312971d0d4bedf9ad0",
".git/objects/7a/3810a0f1b32b77c162bfae6c90fcb6ac9eba90": "74cf221bc97d0f2d68eab83e1101157e",
".git/objects/7c/b41a773d4c1215292d1362bdeaa09d18715943": "383a83cd4c02fd244ca59db5ebb75893",
".git/objects/81/c1ca459c53952f0ac33662e50a0141f4a0b75f": "c7e880dc01245cdb73f158a3696cff42",
".git/objects/81/ee8b87d04f07cb9f08ec32cd78f6d5a2f618e9": "b1c693a180393daf5d47ed4dd7d115ea",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/91dd48d83dc6a1aaa92f793ae8b405084043f5": "2abe70c21df695526034618ec22446d6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/cce1ff1722adc8f49ffc6fcf0a9ed832333f7b": "75e902b696b3c62577c0e241cc276764",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/92/86e5411cb163e15cf84da0d9e7806f559bfadb": "dcfe16a00a8d96f5da61481ddea97682",
".git/objects/93/2a1e56bb7913c9c8115bed14bbda024fb413ff": "34f763e98194d05e9acbd3f8300719cc",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/14b8f2a2279ec3d6c1be02f7d3880ff1a8398d": "ee158ddbefbef110b26978ae89aa449e",
".git/objects/99/37f44f0a3f647df3419f79ac1b4cfb18a05927": "b39c6963ec254a1c7e5333cec4af345f",
".git/objects/9c/2b2546cd46b449783b6b9a1766301bbea4598f": "45d9f33dd21837f65c773fa2d23e9e14",
".git/objects/9c/c7530086807dea594c94614f156c6be1be29e9": "4966b1983435d3822b3a1d0d8764d0f4",
".git/objects/9d/7ba890f28af358942cfed7d6a86a438db576ca": "10e89108c3cc289ee781cb0dfaba664c",
".git/objects/a9/f76f0e2c997a40d36d4963603e27441bcc99e6": "eb782bd1d0fe61c4c43f6af94f2f44a9",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/f932b62cfa4278d64ef5bfb11d6cdf0b6b2297": "d3ff8645c7bf747f3bbb5ad69c9b4e82",
".git/objects/c2/9e52fee7696730ab124ebb4ba2cbbf2c0d1fc9": "5d438dac198ff24bfd16c3d28cdbd4a0",
".git/objects/c4/ed8d4edf420c9bcf1a606dd786c30a3cbde0a6": "32c146d688e5b3939a792eb07eb78ef5",
".git/objects/c8/d3fec35d833a094cbb6b77c868e55e8e42f1ce": "39ad8dc14fd5934eb566680d8579cf8e",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/c1fb7b25c5141188072dffbdcc86360b7862f1": "fe4965011daf694ab38ab593599e68ee",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/02058d2be1db3f97c34e607b9414a2f46f3075": "4e87440bcac208ae7015009863ac34fe",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/ad22e971817db0d2d43ff36c26c76a5bfd4a26": "945c9e10ff325ff70386e4d971f3775d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/aa2fb93e5a6832a77bcf843a27f9ba02d9341f": "8e6e3de94f441bd2ff7fa850b43e1505",
".git/objects/db/3c4a708c8a65fa24d22339ec463675318858a9": "2bba1ecc3a75d147ba77f16ae5ea8fa2",
".git/objects/db/55a90c870a7a845f24bc6921121851d5d16019": "fc8dd93ab4e815712a225052b1aaba11",
".git/objects/e0/39483d878d286ce4cfbf3d3b3a3af1c12d1dff": "a3a433043b598d60f8caa285ce5dfd23",
".git/objects/e8/d98df10b04f0db9fa324f0ad1d0a88ce251d69": "69a72c190259964ade8fb71770eda2e0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b94119852fa46d278bdc48032e0257334bd3c0": "19e10cfb15113820110d3b9bfd876e4b",
".git/objects/f0/c93d6473fd6ce4fcc24e7ca6c5656b6a3ec898": "f7cfcd96057ebeb4e69c48752ea8f96f",
".git/objects/f1/24fe9bb490cdde8cbd914cb2db619ac9fd7979": "1f1f59eabeddb5c4e61b77fc8629bdd4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/df9647cf4c1d2056456c41b39271f0f2cbc8e2": "24a7ca91e2c34b99b5fb8d6955faf368",
".git/ORIG_HEAD": "0c3fa11b64bfc3f01ec59cf4f5ac2e04",
".git/refs/heads/main": "0c3fa11b64bfc3f01ec59cf4f5ac2e04",
".git/refs/heads/master": "6bb53205628f6a6350cfa2d3e3edd134",
".git/refs/remotes/origin/main": "0c3fa11b64bfc3f01ec59cf4f5ac2e04",
"assets/AssetManifest.bin": "3f2eb49b00a3033440cefd739089ffa2",
"assets/AssetManifest.bin.json": "66d6279239802a6c03ddfadd79eec8e5",
"assets/AssetManifest.json": "dadd461af83c4c74f52123fedca08b8d",
"assets/assets/images/09_08_2024.png": "3156bfb287ed13b1ac32760aac543abb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ff0aec6332afa03d4cb06079f448bd64",
"assets/NOTICES": "d08377e397d50a2d5b8c46a985275821",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "37aea709137ac3fd41bfd0bf07c94a46",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "97d5bbaec62ec2d8154b5a77c47defa8",
"/": "97d5bbaec62ec2d8154b5a77c47defa8",
"main.dart.js": "ea190010303a88b0973ee1fc353b1ed7",
"manifest.json": "a78722171dd010687364cfb1b6ab2110",
"version.json": "8437ebd6a500b4aca8abed1d1b2b90e1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
