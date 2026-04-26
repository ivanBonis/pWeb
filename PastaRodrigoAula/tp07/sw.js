const CACHE_NAME = "my-app-cache-v1";
const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/script.js"
];

// Ocorre na instalação: Guarda os ficheiros na cache
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(FILES_TO_CACHE))
    );
});

// Ocorre quando o browser pede um ficheiro (ex: atualizas a página ou estás offline)
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            // Devolve o ficheiro em cache, senão tenta ir buscar à rede
            return response || fetch(event.request);
        })
    );
});

// Limpa caches antigas se atualizares a versão
self.addEventListener("activate", event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});