self.addEventListener('install', event => {
    console.log('Service worker install event!');
    event.waitUntil(
        caches.open('cache-v1')
        .then(cache => {
            return cache.addAll([
                '/app/index.html',
                '/app/bundle.js',
                '/app/main.css',
                'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
            ]);
        }))
});

self.addEventListener('active', event => {});


self.addEventListener('fetch', event => {
    console.log('Service worker fetch event!');
    event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        }))
});