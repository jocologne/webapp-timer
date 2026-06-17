const CACHE_NAME = "timer-v1";

const FILES_TO_CACHE = [
	"./",
	"./index.html",
	"./manifest.json",
	"./css/style.css",
	"./js/script.js",
	"./source/icon-192.png"
];

// Instala o Service Worker e salva os arquivos
self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(cache => cache.addAll(FILES_TO_CACHE))
	);

	self.skipWaiting();
});

// Ativa o Service Worker
self.addEventListener("activate", event => {
	event.waitUntil(
		caches.keys()
			.then(keys => {
				return Promise.all(
					keys.map(key => {
						if (key !== CACHE_NAME) {
							return caches.delete(key);
						}
					})
				);
			})
	);

	self.clients.claim();
});

// Intercepta requisições
self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
			.then(response => {
				if (response) {
					return response;
				}

				return fetch(event.request);
			})
	);
});