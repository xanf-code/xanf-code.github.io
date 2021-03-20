'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5bf37f3937e872d7b2b6aa693d095bc2",
".git/config": "eab2f72c42bcbc9dfeb2cc3cfb7531b0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "08464b09fdfd09f6100c2aaac5881a98",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "23e205bb442ccaf5e124f6f7eada3f0f",
".git/logs/refs/heads/master": "23e205bb442ccaf5e124f6f7eada3f0f",
".git/logs/refs/remotes/origin/master": "3db18f278cec79d9c17f62dd38113428",
".git/objects/04/c2da12ee0199437d613d1be76aefc07c13bb28": "d3d531daefec8e92c79163ac838dffdd",
".git/objects/16/3980a0ede7bd599ad2f14b8f7dda1d27f268a7": "74d0eae6f29c031bd4362a7457d13bea",
".git/objects/16/95d32ba3b4b42738b89e2908246c60c05fe480": "fb6e2fdbbcfb111731ffb12a3c4e7e12",
".git/objects/17/293b73b7a1c05d286154a011335f2bc3a7194d": "aeebc9efafaa2bf49711d2bf8fb7471a",
".git/objects/19/96fb02b29a3fd7cd09121305813ebcf4e70afe": "fb767a19245f90304c614b5969beb770",
".git/objects/1b/633356852ce025726a34a03a7a5393bc1e6cdc": "0f11d89feeaecc7752108950bd2d0f51",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/objects/22/47011bcf5574916a85f2c69a14ec4c70642059": "1a465a550061042a5ba551f63bb2b315",
".git/objects/23/fe8ba783d2f5fd3a2b4b2b98c98e293de4f05f": "d6d19f8c2c703d9d96dbeb47d049cf12",
".git/objects/24/33b91b83cbf4f14efa744905afa71fe8a1cf8f": "da4fddeddcd009e1fe2e44ba17a9e9ba",
".git/objects/26/5a23819ee748289971b473d159da314d6e617f": "bf22b65e49a6b4175545fb95b120fcd6",
".git/objects/26/f7303fe4c0977c1e6528d7505172d111d465ae": "1f7afebea970f628a5f87c913ef7c5a6",
".git/objects/2c/3b409cd0e6c51dba22c4b2b3ca0dc7d3d7e9e3": "105b79b056985bc97c21790a19471e47",
".git/objects/2e/7b1cdfb855dabde65fe25e601ed789c9db7159": "9ea954691cf4d9f624ad0fae2f0fc23c",
".git/objects/33/f079364aa149543ab62aa06095b52d79843e67": "d9546a6d6cfe26366d93a99d6e9abdfe",
".git/objects/34/29681049b005108941ba7791011b3c73251ef7": "2c4a0c86b06a9607b4d9e7fafc120adb",
".git/objects/39/8f9cc61638b471943c186e805876803a7a2b5a": "49c9bdc78e8dedf8ce6edd21ae7e2880",
".git/objects/3e/5a26520d0453ddb9ea9f7461aa42e916d6b017": "c6e88b86880dc1e1f7935e7487e95814",
".git/objects/3f/a500241c08c62e6add7577c1e44a760698f00d": "0d9829d1940fce17830192779e898b1d",
".git/objects/43/1cb6c0007f9b28879e7d3513b101a61c813c38": "a5aa95f226dbcca106d7c1cb2537c89d",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/43/5a9db28cf59683a37de2a58924f284b9d39d79": "550c6487eb3b1aaaaac767146f5ccbb5",
".git/objects/45/0d646bb9f86e2908e68f54249649c377b19959": "fec6ddaf228c0d3382d973779826be9f",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/49/6871f4776bf3bf45288942f5094e8d583bd55e": "4b18fd1e638db069054698091a47e5b4",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/4c/e5e48a105d1d69df1fadc3e86ee49de6aa8f9e": "0cfe18b16c2cdb7ab7dcecd4ebd7fb84",
".git/objects/4d/0a8b9681bdf34bdb92add83dcd5483b1d3f54a": "55db91ea86399090a7ecf251b8d9717b",
".git/objects/51/e54c6218ffc036a98b97ab804f13afd58a81bd": "0cbdbc6123c86d48ead482a478ed635d",
".git/objects/54/04d6a2f3eec3e32dae937c27a23c39a586d950": "81f76c1a6c652d8c095d9c3d2c79fcec",
".git/objects/5a/338746122eedb1c38dc9880e5bb25a289b5aa7": "06a9006a35b306f2b84f9c8fc0acc993",
".git/objects/5c/fdcc3cb4307fb8caf7905cc175e404a61b3a2a": "4e331e3c8d8c2a34a250ee5cab47068c",
".git/objects/61/33d87e2f700addddabd6234d1d09bd6a0668b0": "f206b8c75d9c26def5fcb87e5e6d3a73",
".git/objects/63/9f9e5b5787fe7c8fb3348fcac55f5d5fd43091": "03cae3100287add24f2240fc9eeebf8a",
".git/objects/65/b52019890fef4fef369e28350ab9c189cbf42b": "3df87c6b9fe63290de293a1794b02113",
".git/objects/6a/d1f0d472c0b1596886e55cec9dfcd5c8cede2a": "65ba431cbaa4d986f4f26285fdaa31ad",
".git/objects/6b/aa54927748914e387c9bab553d80a205ed28e3": "47d6ee698317e92fde99f484578ff95c",
".git/objects/6c/b5487b7e788cd75c1400447f9ba791885b0a8b": "f58d3588bad35e15b399b63ee240b449",
".git/objects/6d/76da8065b64de7e03bcd479201b9cb1d86681c": "f75b806ddff50d47f97208e849304ee9",
".git/objects/6d/f4d689fb40c76cb01286cc1b2f7e83ab5d8f6e": "65bf0955957cd1cc0b56cc92d9aeeb6e",
".git/objects/6f/b89e677ffe488dc5296d4e896b2336441e2266": "93584fe3227de990dcef51adb8511e21",
".git/objects/71/a34cb3b90eb0b89cf440fa1bcf043feef365a4": "419a8c14556a15722ec210107784bdad",
".git/objects/73/d7e2168845bb5858e81749edf4d48107d29764": "82b00e581a4875fc7243f55b0c33b0a7",
".git/objects/77/486e0e6802bdea2a29681a36aa55c508d91cf5": "1ad0fa11b6bda01a6cfdafa9872c2e06",
".git/objects/79/a1edc48c2ef67049d02ecf94836332050294cf": "2aa13a008f96cf32acd1f6688bfa7aed",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/2a865d9909f97ccba6d534a81a602d1841abfa": "b81db6129fe4c1f2405179f6b8fd4e18",
".git/objects/7f/0eea52d1cad0def0286b624c0e09eee363a36e": "f733b56fb8d4ac5ba1627dfcdb7a8b7b",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/85/17b016d1b680790cc821e2f36be9a8e7550852": "38362cc3c56767abc777eb55785c636e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/9e4d88ef071748e2e32474d6fe11669f22db3a": "a5df9683efe53c59ba4822db365930f3",
".git/objects/90/b415518e4cc668e103f89c672e87869758cab6": "a866ebb2c4596b6fcf88ea35955b7623",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/98/5b65c724a7915cb0dbff879438d8f3cc1feadb": "8ccc3f8399e8dc9ceb2c713cea5ecee5",
".git/objects/9f/e58599dff10430a0b8e58857b158b4b073eb52": "c63afa55b9106bdeab211cd0f8660563",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/66a00479cce5dccff5280b80ad38b53a455dc7": "67106eafb8594440f7c30fee74ec4c86",
".git/objects/ac/64f07b081acf5d7a17b2645c08564d8ed0aa31": "b2cb99ca765303a32b665c3dacd85e4c",
".git/objects/ad/2a61e480b6cddbe081025c8f8b4590176c3618": "5c09986439864740da059f85c5b5fa23",
".git/objects/af/23c8123465c415133a0e89d15bd43e6b3fc066": "dcbdcf071d427ee1ed9346a4099295f8",
".git/objects/b1/4057dc82180b0bad27c1281239fa549034de1d": "c0ca7d8421e0f39c253067871b535ee7",
".git/objects/b3/649e3b5f7b39ac0728244da9a5f1990ff68c7d": "003fc896e4a104435ea69c5853edcb57",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c79f58b5528f851927ebae3835dbc033f526f2": "000a6c5e6da538834dd351fbf9528b3c",
".git/objects/b8/947705d98766bfeaaa420312b9ac0752deeace": "269e809bcb8bdef7d8d27ca495815956",
".git/objects/b9/bb6a0ae62266888fa66f6518440f14064cf339": "3402099d644d2e1e8f97ca830a06f21b",
".git/objects/bb/41c0ec395ec028cd6ce5bef2442134317c6b27": "59dcdf1a2c54043e315cacd59d6bae76",
".git/objects/bd/6e161edf501a6e9fc092252b5b66f80803370b": "af81c767458a1827b6eb7ff6dfcbf550",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/c4/c49095e4bce96697d646ca2664d1600c7aba26": "76ad2c6f93a46ced1bf277f2d95acf64",
".git/objects/cb/8e2e7fa3403e5720e5f2c7326497c8e7b1a59b": "89c335c32adf1f6e4873c7ad4e94419c",
".git/objects/cd/ad176e4359857ae3d6caf49e7f8f5c9c9a43ab": "411818be2312358cef7d4d9db43f914d",
".git/objects/d1/5d9e597360a6bdce006be9769c619d37f12dea": "76a04d3f33e78be29bfe403e4bc3bb4e",
".git/objects/d1/ce529a5dda8f120b0cec789e71f3d3cded5147": "eb16951d77a093131a7ce29f569899d3",
".git/objects/d2/17ad9471798a7e5d8ab4472aa86a559200d841": "357f4cd147e2e6d67691f3c531cbfb6b",
".git/objects/d5/012e55f1e98671c75cd933e2bcb2dc8521e076": "08a43d9ac775e68f7473ef35df1f4213",
".git/objects/dc/0c09f41e0e470b61f4a892075ed56319ebe9b1": "50e9892df6217045b503d1278cac08a8",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/efcd6935a245bd131e406106e384ba24a7167a": "fc6dcc2fad112ec9709a95f7e2024fc8",
".git/objects/f0/a5fb1839e84002edaba30997b389ff13cade7d": "83c1ec03d3068a2a7a972c2ced956cf5",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f7/c520b9c1bd1b021bba96464e2106a78b7a00f7": "b5ed36450cf1bbcdbdc325bdae87cede",
".git/objects/f7/dbfb1be04617f5a588881f98c68cb759d63940": "10c9ad5bd82549a3197bec4a4a0be4e8",
".git/objects/fb/7af40f1a16c17fa65df1022b34302a3e99bde6": "2bf1532d31e87e21c80edf994d2b9302",
".git/objects/fb/8ac63797a4e142a1f52cc2f71dd12df5e498d4": "b117eb0c9e2c1a5755d4a37e2c46a10d",
".git/objects/ff/0e020424dd2d606d893b1113473178c55b5d17": "85ef50a7be5c1c6fef2e3925bad45c3d",
".git/objects/ff/cbcfadd382bde60e5a807d4892cef332698de6": "75486b0492f7f1ad4c789ded7ebf2654",
".git/refs/heads/master": "6fcc43ef1136291f42c6e9fceb1b8aef",
".git/refs/remotes/origin/master": "6fcc43ef1136291f42c6e9fceb1b8aef",
"assets/AssetManifest.json": "d7612f7396c0d01167f98add9395fdc9",
"assets/FontManifest.json": "ad1a2b33dc8645a9ec31ed1b1f6b573a",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "4fadc1bc805449a71b5d91f0a81aa502",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"favicon.png": "a303442da945a9760a7d557b0c7cfd17",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "14fb10e247c04b9a520ff8167cfd6327",
"/": "14fb10e247c04b9a520ff8167cfd6327",
"main.dart.js": "f695918d15ca716f864c37dd76ebacdd",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "bf690f9923e5e9bd1959bb6d246520f7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
